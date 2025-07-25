class Form 
{
	static FilterFormId = "filter-form";
	static SearchId = "search";
	static FilterOptionsContainerId = "filter-options";
	static DisplayOptionsContainerId = "options-display";
	static DisplayColumnsContainerId = "options-columns";

	static EmblemsContainerClassName = "filter-emblems";
	static EmblemDataKey = "emblem";
	static FilterItemClassName = "filter-item";
	static OptionsItemClassName = "options-item";
	static SelectedClassName = "selected";
	static ResetFiltersId = "reset-filters";
	static DisplayInGameNamesId = "display-in-game-names";
	static UseInGameOrderId = "use-in-game-order";
	static DisplayRowNumbersId = "display-row-numbers";
	static DisplayCenterId = "display-center";

	static HasStatsDataKey = "hasstats";
	static StatsDataKey = "stats";
	static StatsT12DataKey = "statst12";

	static getFilterFormContainer()
	{
		const formContainer = window.document.getElementById(Form.FilterFormId);
		return formContainer;
	}

	/**
	 * 
	 * @returns {HTMLInputElement}
	 */
	static #getSearchBox()
	{
		const formContainer = Form.getFilterFormContainer();
		const searchBox = formContainer.querySelector("input#" + Form.SearchId);
		return searchBox;
	}

	static setSearchBoxValueSilent(value)
	{
		const searchBox = Form.#getSearchBox();
		searchBox.value = value;
	}

	/**
	 * 
	 * @param {string} searchToken 
	 * @returns {Object.<string, Hero>}
	 */
	static #getDataFilteredByHeroName(searchToken)
	{
		const data = Data.copy();
		
		if (searchToken && searchToken.length > 0)
		{
			const lookup = searchToken.toLocaleLowerCase();

			const lookupTokens = lookup.split(" ");

			for (let heroKey in data)
			{
				const hero = data[heroKey];

				let nameFits = false;

				for (let i = 0; i < hero.searchTokens.length; i++)
				{
					const heroNameLc = hero.searchTokens[i].toLocaleLowerCase();

					if (heroNameLc === lookup || heroNameLc.indexOf(lookup) >= 0)
					{
						nameFits = true;
						break;
					}

					const heroNameParts = heroNameLc.split(" ");
					/** @type {Object.<number, boolean>} */
					const foundHeroParts = { };

					nameFits = true;

					for (let i = 0; i < lookupTokens.length; i++)
					{
						const part = lookupTokens[i];
						let hasPart = false;

						for (let j = 0; j < heroNameParts.length; j++)
						{
							if (foundHeroParts[j])
								continue;

							const heroNamePart = heroNameParts[j];

							if (heroNamePart === part || heroNamePart.indexOf(part) >= 0)
							{
								foundHeroParts[j] = true;
								hasPart = true;
								break;
							}
						}

						if (!hasPart)
						{
							nameFits = false;
							break;
						}
					}
				}

				if (!nameFits)
					delete data[heroKey];
			}
		}

		return data;
	}

	/**
	 * 
	 * @returns {Object.<string, Hero>}
	 */
	static #getDataWithFormFilters()
	{
		const formContainer = Form.getFilterFormContainer();

		const containerClassName = Form.EmblemsContainerClassName;

		const statsContainer = formContainer.querySelector("div#filter-stats div." + containerClassName);
		const elementsContainer = formContainer.querySelector("div#filter-elements div." + containerClassName);
		const factionsContainer = formContainer.querySelector("div#filter-factions div." + containerClassName);
		const personalContainer = formContainer.querySelector("div#filter-personal div." + containerClassName);
		const searchBox = Form.#getSearchBox();
		const searchBoxValue = searchBox.value ? searchBox.value.trim() : "";

		const data = Form.#getDataFilteredByHeroName(searchBoxValue);

		const selectedClassName = Form.SelectedClassName;

		const selectedStats = statsContainer.querySelectorAll("." + selectedClassName);
		const selectedElements = elementsContainer.querySelectorAll("." + selectedClassName);
		const selectedFactions = factionsContainer.querySelectorAll("." + selectedClassName);
		const selectedPersonal = personalContainer.querySelectorAll("." + selectedClassName);

		const filterStats = [];
		const filterElements = [];
		const filterFactions = [];
		const filterPersonal = [];

		const emblemDataKey = Form.EmblemDataKey;

		selectedStats.forEach(x => filterStats.push(x.dataset[emblemDataKey]));
		selectedElements.forEach(x => filterElements.push(x.dataset[emblemDataKey]));
		selectedFactions.forEach(x => filterFactions.push(x.dataset[emblemDataKey]));
		selectedPersonal.forEach(x => filterPersonal.push(x.dataset[emblemDataKey]));

		const transcendenceOptions = Transcendence.getSelectionValues();
		const checkTr = transcendenceOptions.checkTr;
		const checkNonTr = transcendenceOptions.checkNonTr;

		const filterByEmblems = function(emblems)
		{
			if (!emblems)
				return;

			for (let i = 0; i < emblems.length; i++)
			{
				const emblem = emblems[i];
				for (let heroKey in data)
				{
					const hero = data[heroKey];
					let hasEmblem = false;

					if (checkNonTr && hero.emblems[emblem])
						hasEmblem = true;

					if (checkTr && hero.emblemsTranscended[emblem])
						hasEmblem = true;

					if (!hasEmblem)
						delete data[heroKey];
				}
			}
		}

		filterByEmblems(filterStats);
		filterByEmblems(filterElements);
		filterByEmblems(filterFactions);
		filterByEmblems(filterPersonal);

		return data;
	}

	static isUseInGameNamesSelected()
	{
		const container = Form.getFilterFormContainer();
		const option = container.querySelector("#" + Form.DisplayInGameNamesId);
		return option.classList.contains(Form.SelectedClassName);
	}

	static isDisplayRowNumbersSelected()
	{
		const container = Form.getFilterFormContainer();
		const option = container.querySelector("#" + Form.DisplayRowNumbersId);
		return option.classList.contains(Form.SelectedClassName);
	}

	static filter()
	{
		const data = Form.#getDataWithFormFilters();
		Renderer.hideHeroesExcept(data);
	}

	/**
	 * 
	 * @param {string} heroName 
	 */
	static filterByHeroName(heroName)
	{
		const data = Form.#getDataFilteredByHeroName(heroName);
		Renderer.hideHeroesExcept(data);
	}

	/**
	 * 
	 * @param {string} heroName 
	 */
	static filterByTargetHero(heroName)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };

		const transcendenceOptions = Transcendence.getSelectionValues();
		const checkTr = transcendenceOptions.checkTr;
		const checkNonTr = transcendenceOptions.checkNonTr;
		
		if (heroName && heroName.length > 0 && Data.Heroes[heroName])
		{
			const targetHero = Data.Heroes[heroName];

			/**
			 * 
			 * @param {TacticTarget[]} targets 
			 */
			const checkTargets = function(targets)
			{
				for (let i = 0; i < targets.length; i++)
				{
					const target = targets[i];

					if (target.isAllSummons())
						return true;

					if (target.isHero() && target.name === targetHero.name)
						return true;

					if (target.isSummonSkill())
					{
						if (checkTr && targetHero.summonSkillTranscended.name === target.name)
							return true;

						if (checkNonTr && targetHero.summonSkill.name === target.name)
							return true;
					}

					if (target.isEmblem())
					{
						if (target.emblem.isElement())
						{
							const emblemName = target.emblem.name;
							if (checkTr && targetHero.summonSkillTranscended.hasElement(emblemName))
								return true;

							if (checkNonTr && targetHero.summonSkill.hasElement(emblemName))
								return true;
						}
						else
						{
							if (checkTr && targetHero.emblemsTranscended[target.emblem.name])
								return true;
							
							if (checkNonTr && targetHero.emblems[target.emblem.name])
								return true;
						}
					}
				}

				return false;
			}

			for (let currentHeroName in data)
			{
				const hero = data[currentHeroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && checkTargets(hero.tacticTranscended.targets))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && checkTargets(hero.tactic.targets))
					hasAsTarget = true;

				if (hasAsTarget)
					result[hero.name] = hero;
			}
		}

		Renderer.hideHeroesExcept(result);
	}

	static filterByTargetPlayer()
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };

		const transcendenceOptions = Transcendence.getSelectionValues();
		const checkTr = transcendenceOptions.checkTr;
		const checkNonTr = transcendenceOptions.checkNonTr;

		/**
		 * 
		 * @param {TacticTarget[]} targets 
		 */
		const checkTargets = function(targets)
		{
			for (let i = 0; i < targets.length; i++)
			{
				const target = targets[i];

				if (target.isPlayer())
					return true;
			}

			return false;
		}

		for (let heroName in data)
		{
			const hero = data[heroName];

			let hasAsTarget = false;

			if (!hasAsTarget && checkTr && checkTargets(hero.tacticTranscended.targets))
				hasAsTarget = true;

			if (!hasAsTarget && checkNonTr && checkTargets(hero.tactic.targets))
				hasAsTarget = true;

			if (hasAsTarget)
				result[hero.name] = hero;
		}

		Renderer.hideHeroesExcept(result);
	}

	/**
	 * 
	 * @param {string} summonSkillName 
	 */
	static filterBySummonSkill(summonSkillName)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };
		
		if (summonSkillName && summonSkillName.length > 0)
		{
			const transcendenceOptions = Transcendence.getSelectionValues();
			const checkTr = transcendenceOptions.checkTr;
			const checkNonTr = transcendenceOptions.checkNonTr;

			for (let heroName in data)
			{
				const hero = data[heroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && hero.summonSkillTranscended.name === summonSkillName)
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && hero.summonSkill.name === summonSkillName)
					hasAsTarget = true;

				if (hasAsTarget)
					result[hero.name] = hero;
			}
		}

		Renderer.hideHeroesExcept(result);
	}

	/**
	 * 
	 * @param {string} buff 
	 * @param {boolean} value 
	 */
	static filterBySummonSkillBuff(buff, value)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };
		
		if (buff && buff.length > 0)
		{
			const transcendenceOptions = Transcendence.getSelectionValues();
			const checkTr = transcendenceOptions.checkTr;
			const checkNonTr = transcendenceOptions.checkNonTr;

			for (let heroName in data)
			{
				const hero = data[heroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && hero.summonSkillTranscended.hasBuffValue(buff, value))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && hero.summonSkill.hasBuffValue(buff, value))
					hasAsTarget = true;

				if (hasAsTarget)
					result[hero.name] = hero;
			}
		}

		Renderer.hideHeroesExcept(result);
	}

	/**
	 * 
	 * @param {string} emblemName 
	 */
	static filterByTargetEmblem(emblemName)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };

		if (emblemName && emblemName.length > 0)
		{
			const transcendenceOptions = Transcendence.getSelectionValues();
			const checkTr = transcendenceOptions.checkTr;
			const checkNonTr = transcendenceOptions.checkNonTr;

			/**
			 * 
			 * @param {TacticTarget[]} targets 
			 */
			const checkTargets = function(targets)
			{
				for (let i = 0; i < targets.length; i++)
				{
					const target = targets[i];

					if (target.isAllSummons())
						return true;

					if (target.isEmblem() && target.emblem.name === emblemName)
						return true;
				}

				return false;
			}

			for (let heroName in data)
			{
				const hero = data[heroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && checkTargets(hero.tacticTranscended.targets))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && checkTargets(hero.tactic.targets))
					hasAsTarget = true;

				if (hasAsTarget)
					result[hero.name] = hero;
			}
		}

		Renderer.hideHeroesExcept(result);
	}

	/**
	 * 
	 * @param {string} emblemName 
	 */
	static filterBySummonSkillElement(emblemName)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };
		
		if (emblemName && emblemName.length > 0)
		{
			const transcendenceOptions = Transcendence.getSelectionValues();
			const checkTr = transcendenceOptions.checkTr;
			const checkNonTr = transcendenceOptions.checkNonTr;

			for (let heroName in data)
			{
				const hero = data[heroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && hero.summonSkillTranscended.hasElement(emblemName))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && hero.summonSkill.hasElement(emblemName))
					hasAsTarget = true;

				if (hasAsTarget)
					result[hero.name] = hero;
			}
		}

		Renderer.hideHeroesExcept(result);
	}

	static resetOptions()
	{
		const containerClassName = Form.EmblemsContainerClassName;
		
		const formContainer = Form.getFilterFormContainer();

		const optionsRoot = formContainer.querySelector("div#" + Form.FilterOptionsContainerId);
		const optionsContainer = optionsRoot.querySelector("div." + containerClassName);
		const options = optionsContainer.querySelectorAll("div." + Renderer.EmblemTextClassName);

		const displayOptionsRoot = formContainer.querySelector("div#" + Form.DisplayOptionsContainerId);
		const displayOptionsContainer = displayOptionsRoot.querySelector("div." + containerClassName);
		const displayOptions = displayOptionsContainer.querySelectorAll("div." + Renderer.EmblemTextClassName);

		const displayColumnsRoot = formContainer.querySelector("div#" + Form.DisplayColumnsContainerId);
		const displayColumnsContainer = displayColumnsRoot.querySelector("div." + containerClassName);
		const displayColumns = displayColumnsContainer.querySelectorAll("div." + Renderer.EmblemTextClassName);

		const defaultOptions = Config.getDefaultOptions(options.length);
		const defaultDisplayOptions = Config.getDefaultDisplayOptions(displayOptions.length);
		const defaultColumnsOptions = Config.getDefaultDisplayColumns(displayColumns.length);

		/**
		 * 
		 * @param {NodeListOf<Element>} elements 
		 * @param {boolean[]} defaults 
		 * @param {number} length 
		 */
		const setDefaultSelection = function(elements, defaults)
		{
			for (let i = 0; i < elements.length; i++)
			{
				const element = elements[i];
				const value = defaults[i];
				const isSelected = element.classList.contains(Form.SelectedClassName);
				if (value !== isSelected)
					element.click();
			}

			return defaults.slice(0, elements.length);
		}

		const overrideOptions = setDefaultSelection(options, defaultOptions);
		const overrideDisplayOptions = setDefaultSelection(displayOptions, defaultDisplayOptions);
		const overrideDisplayColumns = setDefaultSelection(displayColumns, defaultColumnsOptions);

		Config.setDefaultOptions(overrideOptions);
		Config.setDefaultDisplayOptions(overrideDisplayOptions);
		Config.setDefaultDisplayColumns(overrideDisplayColumns);

		//Transcendence.toggleDisplay();
	}

	static resetFilters()
	{
		const searchBox = Form.#getSearchBox();
		searchBox.value = "";

		const formContainer = Form.getFilterFormContainer();

		const containerClassName = Form.EmblemsContainerClassName;

		const statsContainer = formContainer.querySelector("div#filter-stats div." + containerClassName);
		const elementsContainer = formContainer.querySelector("div#filter-elements div." + containerClassName);
		const factionsContainer = formContainer.querySelector("div#filter-factions div." + containerClassName);
		const personalContainer = formContainer.querySelector("div#filter-personal div." + containerClassName);

		/**
		 * 
		 * @param {Element} container 
		 */
		const resetContainer = function(container)
		{
			const divs = container.querySelectorAll("div");
			for (let i = 0; i < divs.length; i++)
			{
				const div = divs[i];
				if (div.classList.contains(Transcendence.TargetClassName))
				{
					const isTranscendent = Transcendence.getIsTranscendent(div);
					if (!isTranscendent)
						div.classList.remove(Form.SelectedClassName);
				}
				else
				{
					div.classList.remove(Form.SelectedClassName);
				}
			}
		}

		resetContainer(statsContainer);
		resetContainer(elementsContainer);
		resetContainer(factionsContainer);
		resetContainer(personalContainer);
	}

	/**
	 * 
	 * @param {string} filterKey 
	 */
	static toggleFilterByKey(filterKey)
	{
		const formContainer = Form.getFilterFormContainer();
		
		const className = Renderer.EmblemClassName;
		const dataKey = Renderer.EmblemNameDataKey;
		const query = "." + className + "[data-" + dataKey + "='"+ filterKey +"']";

		const emblemFilterElement = formContainer.querySelector(query);
		emblemFilterElement.click();
	}

	/**
	 * 
	 * @param {boolean} isTranscendent 
	 */
	static toggleEmblemStatsDisplay(isTranscendent)
	{
		const form = Form.getFilterFormContainer();
		const query = "div." + Renderer.EmblemClassName + "." + Renderer.EmblemTextClassName;
		const statEmblems = form.querySelectorAll(query + "[data-" + Form.HasStatsDataKey + "='true']");

		const regex = / x\d+$/g;
		for (let i = 0; i < statEmblems.length; i++)
		{
			/** @type {HTMLDivElement} */
			const emblem = statEmblems[i];
			let text = emblem.innerText;
			if (regex.test(text))
				text = text.replace(regex, "");

			let value = "";
			if (isTranscendent)
				value = emblem.dataset[Form.StatsT12DataKey];
			else
				value = emblem.dataset[Form.StatsDataKey];

			emblem.innerText = text + " x" + value;
		}
	}
	
	static render()
	{
		const searchBox = Form.#getSearchBox();
		searchBox.addEventListener("input", Events.searchBoxOnInput);

		const formContainer = Form.getFilterFormContainer();
		
		/** @type {Object.<number, string>} */
		const stats = { };
		/** @type {Object.<number, string>} */
		const elements = { };
		/** @type {Object.<number, string>} */
		const factions = { };
		/** @type {Object.<number, string>} */
		const personal = { };
		/** @type {Object.<string, number>} */
		const summonSkills = { };

		/**
		 * 
		 * @param {Emblem} emblem 
		 * @param {number=} sortOrderIncrement
		 */
		const groupEmblem = function(emblem, sortOrderIncrement)
		{
			if (emblem.isStat())
			{
				stats[emblem.sortOrder] = emblem.name;
			}
			else if (emblem.isElement())
			{
				elements[emblem.sortOrder] = emblem.name;
			}
			else if (emblem.isFaction())
			{
				factions[emblem.sortOrder] = emblem.name;
			}
			else if (sortOrderIncrement)
			{
				const existing = personal[sortOrderIncrement];
				if (existing && existing !== emblem.name)
					groupEmblem(emblem, sortOrderIncrement + 1);
				else
					personal[sortOrderIncrement] = emblem.name;
			}
			else
			{
				const existing = personal[emblem.sortOrder];
				if (existing && existing !== emblem.name)
					groupEmblem(emblem, emblem.sortOrder + 1);
				else
					personal[emblem.sortOrder] = emblem.name;
			}
		};

		/**
		 * 
		 * @param {SummonSkill} summonSkill 
		 * @param {SummonSkill} summonSkillTranscended 
		 */
		const groupSummonSkill = function(summonSkill, summonSkillTranscended)
		{
			if (!summonSkills[summonSkill.name])
				summonSkills[summonSkill.name] = 1;
			else
				summonSkills[summonSkill.name] += 1;

			if (summonSkill.name !== summonSkillTranscended.name)
			{
				if (!summonSkills[summonSkillTranscended.name])
					summonSkills[summonSkillTranscended.name] = 1;
				else
					summonSkills[summonSkillTranscended.name] += 1;
			}
		}

		/** @type {Object.<string, Emblem>} */
		const emblemStats = { };
		/** @type {Object.<string, Emblem>} */
		const emblemT12Stats = { };

		/**
		 * 
		 * @param {Object.<string, Emblem>} map 
		 * @param {Emblem} emblem 
		 */
		const trackEmblem = function(map, emblem)
		{
			if (!map[emblem.name])
				map[emblem.name] = new Emblem(emblem.name, emblem.type);
			else
				map[emblem.name].amount += emblem.amount;
		};

		for (let heroName in Data.Heroes)
		{
			const hero = Data.Heroes[heroName];

			for (let emblemName in hero.emblems)
			{
				const emblem = hero.emblems[emblemName];
				groupEmblem(emblem);
				trackEmblem(emblemStats, emblem);
			}

			for (let emblemName in hero.emblemsTranscended)
			{
				const emblem = hero.emblemsTranscended[emblemName];
				groupEmblem(emblem);
				trackEmblem(emblemT12Stats, emblem);
			}

			groupSummonSkill(hero.summonSkill, hero.summonSkillTranscended);
		}

		const containerClassName = Form.EmblemsContainerClassName;
		const statsContainer = formContainer.querySelector("div#filter-stats div." + containerClassName);
		const elementsContainer = formContainer.querySelector("div#filter-elements div." + containerClassName);
		const factionsContainer = formContainer.querySelector("div#filter-factions div." + containerClassName);
		const personalContainer = formContainer.querySelector("div#filter-personal div." + containerClassName);
		
		/**
		 * 
		 * @param {Element} parent 
		 * @param {string} emblemName 
		 * @param {number=} scale 
		 */
		const addEmblem = function(parent, emblemName, scale)
		{
			const emblem = Renderer.createEmblemElement(emblemName, scale);
			emblem.dataset[Form.EmblemDataKey] = emblemName;
			emblem.classList.add(Form.FilterItemClassName);

			let hasStats = false;
			if (emblemStats[emblemName])
			{
				const stats = emblemStats[emblemName];
				emblem.dataset[Form.StatsDataKey] = stats.amount;
				hasStats = true;
			}

			if (emblemT12Stats[emblemName])
			{
				const stats = emblemT12Stats[emblemName];
				emblem.dataset[Form.StatsT12DataKey] = stats.amount;
				hasStats = true;
			}

			if (hasStats)
				emblem.dataset[Form.HasStatsDataKey] = true;

			emblem.addEventListener("click", Events.filterOnClick);
			parent.appendChild(emblem);
		};

		for (let sortOrder in stats)
		{
			const item = stats[sortOrder];
			addEmblem(statsContainer, item, 0.7);
		}

		for (let sortOrder in elements)
		{
			const item = elements[sortOrder];
			addEmblem(elementsContainer, item, 0.7);
		}

		for (let sortOrder in factions)
		{
			const item = factions[sortOrder];
			addEmblem(factionsContainer, item);
		}

		for (let sortOrder in personal)
		{
			const item = personal[sortOrder];
			addEmblem(personalContainer, item);
		}

		// #region Options
		const optionsRoot = formContainer.querySelector("div#" + Form.FilterOptionsContainerId);
		const optionsContainer = optionsRoot.querySelector("div." + containerClassName);

		const t12Prefix = Transcendence.OptionEmblemPrefix;
		for (let option in Transcendence.Options)
		{
			const value = Transcendence.Options[option];
			
			const emblem = Renderer.createEmblemElement("");
			emblem.classList.add(Form.OptionsItemClassName);
			emblem.classList.add(Transcendence.TargetClassName);

			const prefix = window.document.createElement("span");
			prefix.innerText = t12Prefix + " ";
			
			const icon = Renderer.createT12IconContainer(value);

			const suffix = window.document.createElement("span");
			suffix.innerText = " " + option;

			emblem.appendChild(prefix);
			emblem.appendChild(icon);
			emblem.appendChild(suffix);

			emblem.addEventListener("click", Events.optionsOnClick);
			emblem.dataset[Transcendence.DataKey] = value;
			optionsContainer.appendChild(emblem);
		}

		const clear = Renderer.createEmblemElement("Reset Filters");
		clear.id = Form.ResetFiltersId;
		clear.classList.add(Form.OptionsItemClassName);
		clear.addEventListener("click", Events.optionsOnClick);
		optionsContainer.appendChild(clear);
		// #endregion Options

		// #region Display Options
		const displayOptionsRoot = formContainer.querySelector("div#" + Form.DisplayOptionsContainerId);
		const displayOptionsContainer = displayOptionsRoot.querySelector("div." + containerClassName);

		const useInGameOrder = Renderer.createEmblemElement("Use In-Game Order");
		useInGameOrder.id = Form.UseInGameOrderId;
		useInGameOrder.addEventListener("click", Events.displayOptionsOnClick);
		displayOptionsContainer.appendChild(useInGameOrder);

		const displayInGameNames = Renderer.createEmblemElement("Display In-Game Names");
		displayInGameNames.id = Form.DisplayInGameNamesId;
		displayInGameNames.addEventListener("click", Events.displayOptionsOnClick);
		displayOptionsContainer.appendChild(displayInGameNames);

		const displayRowNumber = Renderer.createEmblemElement("Display Row Numbers");
		displayRowNumber.id = Form.DisplayRowNumbersId;
		displayRowNumber.addEventListener("click", Events.displayOptionsOnClick);
		displayOptionsContainer.appendChild(displayRowNumber);

		const displayCenter = Renderer.createEmblemElement("Center Content");
		displayCenter.id = Form.DisplayCenterId;
		displayCenter.addEventListener("click", Events.displayOptionsOnClick);
		displayOptionsContainer.appendChild(displayCenter);
		// #endregion Display Options

		// #region Display Columns
		const displayColumnsContainerRoot = formContainer.querySelector("div#" + Form.DisplayColumnsContainerId);
		const displayColumnsContainer = displayColumnsContainerRoot.querySelector("div." + containerClassName);

		const table = window.document.getElementById(Renderer.TargetTableId);
		const headers = table.querySelectorAll("th." + Transcendence.TargetClassName);

		for (let i = 0; i < headers.length; i++)
		{
			const header = headers[i];
			const emblem = Renderer.createEmblemElement(header.innerText);
			// Render them as selected at first, let the reset logic handle the defaults.
			emblem.classList.add(Form.SelectedClassName);
			emblem.addEventListener("click", Events.displayColumnsOnClick);

			displayColumnsContainer.appendChild(emblem);
		}
		// #endregion Display Columns
	}
}
