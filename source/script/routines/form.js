class Form 
{
	static FilterFormId = "filter-form";
	static SearchId = "search";
	static OptionsContainerId = "options";
	static DisplayOptionsContainerId = "options-display";

	static EmblemsContainerClassName = "filter-emblems";
	static EmblemDataKey = "emblem";
	static FilterItemClassName = "filter-item";
	static OptionsItemClassName = "options-item";
	static SelectedClassName = "selected";
	static DisplayInGameNamesId = "display-in-game-names";
	static DisplayRowNumbersId = "display-row-numbers";
	static ResetFiltersId = "reset-filters";

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
	 * @returns {{ checkTr: boolean, checkNonTr: boolean }}
	 */
	static #getCheckTranscendenceOptions()
	{
		const formContainer = Form.getFilterFormContainer();
		const optionsContainer = formContainer.querySelector("div#options div." + Form.EmblemsContainerClassName);

		const optionTr = optionsContainer.querySelector("div[data-" + Transcendence.DataKey + "='true']");
		const optionNonTr = optionsContainer.querySelector("div[data-" + Transcendence.DataKey + "='false']");
		
		const checkTr = optionTr.classList.contains(Form.SelectedClassName);
		const checkNonTr = optionNonTr.classList.contains(Form.SelectedClassName);

		return { checkTr: checkTr, checkNonTr: checkNonTr };
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

		const transcendenceOptions = Form.#getCheckTranscendenceOptions();
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

		const transcendenceOptions = Form.#getCheckTranscendenceOptions();
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
							if (checkTr && targetHero.summonSkill.element)
							{
								const summonSkill = targetHero.summonSkill;
								if (target.emblem.name === summonSkill.element.name)
									return true;
							}

							if (checkNonTr && targetHero.summonSkillTranscended.element)
							{
								const summonSkill = targetHero.summonSkillTranscended;
								if (target.emblem.name === summonSkill.element.name)
									return true;
							}
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
				// if (heroName === currentHeroName)
				// 	continue;

				const hero = data[currentHeroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && checkTargets(hero.tactic.targets))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && checkTargets(hero.tacticTranscended.targets))
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

		const transcendenceOptions = Form.#getCheckTranscendenceOptions();
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
			const transcendenceOptions = Form.#getCheckTranscendenceOptions();
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
	 * @param {string} emblemName 
	 */
	static filterByTargetEmblem(emblemName)
	{
		const data = Data.copy();
		/** @type {Object.<string, Hero>} */
		const result = { };

		if (emblemName && emblemName.length > 0)
		{
			const transcendenceOptions = Form.#getCheckTranscendenceOptions();
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
			const transcendenceOptions = Form.#getCheckTranscendenceOptions();
			const checkTr = transcendenceOptions.checkTr;
			const checkNonTr = transcendenceOptions.checkNonTr;

			/**
			 * 
			 * @param {SummonSkill} summonSkill 
			 */
			const checkSummonSkill = function(summonSkill)
			{
				const emblem = summonSkill.element;
				return emblem && emblem.isElement() && emblem.name === emblemName;
			}

			for (let heroName in data)
			{
				const hero = data[heroName];

				let hasAsTarget = false;

				if (!hasAsTarget && checkTr && checkSummonSkill(hero.summonSkillTranscended))
					hasAsTarget = true;

				if (!hasAsTarget && checkNonTr && checkSummonSkill(hero.summonSkill))
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

		const optionsRoot = formContainer.querySelector("div#" + Form.OptionsContainerId);
		const optionsContainer = optionsRoot.querySelector("div." + containerClassName);
		const options = optionsContainer.querySelectorAll("div." + Renderer.EmblemTextClassName);

		const displayOptionsRoot = formContainer.querySelector("div#" + Form.DisplayOptionsContainerId);
		const displayOptionsContainer = displayOptionsRoot.querySelector("div." + containerClassName);
		const displayOptions = displayOptionsContainer.querySelectorAll("div." + Renderer.EmblemTextClassName);

		let defaults = [];
		if (UserConfig && UserConfig.Defaults && UserConfig.Defaults.constructor === Array)
			defaults = UserConfig.Defaults;
		else
			console.warn("UserConfig.Defaults is not defined or invalid. Make sure it is an Array of boolean.");

		let enableTr = true;
		let enableNonTr = false;

		if (defaults.length >= 1)
			enableTr = defaults[0];
		if (defaults.length >= 2)
			enableNonTr = defaults[1];
		
		if (!enableTr && !enableNonTr)
			enableNonTr = true;

		defaults[0] = enableTr;
		defaults[1] = enableNonTr;

		const targetDefaultOptionsLength = options.length - 1;
		const targetDefaultsLength = targetDefaultOptionsLength + displayOptions.length;

		for (let i = defaults.length; i < targetDefaultOptionsLength; i++)
			defaults[i] = false;

		for (let i = defaults.length; i < targetDefaultsLength; i++)
			defaults[i] = true;

		let defaultsIndex = 0;

		/**
		 * 
		 * @param {HTMLElement} element 
		 */
		const setDefaultSelection = function(element)
		{
			const value = defaults.length > defaultsIndex && defaults[defaultsIndex];
			const isSelected = element.classList.contains(Form.SelectedClassName);
			if (value !== isSelected)
				element.click();

			defaultsIndex++;
		}

		for (let i = 0; i < options.length - 1; i++)
			setDefaultSelection(options[i])

		for (let i = 0; i < displayOptions.length; i++)
			setDefaultSelection(displayOptions[i]);

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

		const optionsRoot = formContainer.querySelector("div#" + Form.OptionsContainerId);
		const optionsContainer = optionsRoot.querySelector("div." + containerClassName);
		
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
		for (let option in Transcendence.Options)
		{
			const emblem = Renderer.createEmblemElement(option);
			emblem.classList.add(Form.OptionsItemClassName);
			emblem.classList.add(Transcendence.TargetClassName);

			emblem.addEventListener("click", Events.optionsOnClick);
			emblem.dataset[Transcendence.DataKey] = Transcendence.Options[option];
			optionsContainer.appendChild(emblem);
		}

		const displayInGameNames = Renderer.createEmblemElement("Display In-Game Names");
		displayInGameNames.id = Form.DisplayInGameNamesId;
		displayInGameNames.classList.add(Form.OptionsItemClassName);
		displayInGameNames.addEventListener("click", Events.optionsOnClick);
		optionsContainer.appendChild(displayInGameNames);

		const displayRowNumber = Renderer.createEmblemElement("Display Row Numbers");
		displayRowNumber.id = Form.DisplayRowNumbersId;
		displayRowNumber.classList.add(Form.OptionsItemClassName);
		displayRowNumber.addEventListener("click", Events.optionsOnClick);
		optionsContainer.appendChild(displayRowNumber);

		const clear = Renderer.createEmblemElement("Reset Filters");
		clear.id = Form.ResetFiltersId;
		clear.classList.add(Form.OptionsItemClassName);
		clear.addEventListener("click", Events.optionsOnClick);
		optionsContainer.appendChild(clear);
		// #endregion Options

		// #region Display Options
		const displayOptionsContainerRoot = formContainer.querySelector("div#" + Form.DisplayOptionsContainerId);
		const displayOptionsContainer = displayOptionsContainerRoot.querySelector("div." + containerClassName);

		const table = window.document.getElementById(Renderer.TargetTableId);
		const headers = table.querySelectorAll("th." + Transcendence.TargetClassName);

		for (let i = 0; i < headers.length; i++)
		{
			const header = headers[i];
			const headerText = header.innerText;
			const transcendenceData = Transcendence.getIsTranscendent(header);

			const emblem = Renderer.createEmblemElement(headerText);
			emblem.classList.add(Form.SelectedClassName);

			Transcendence.setTranscendenceData(emblem, transcendenceData);

			for (let j = 0; j < header.classList.length; j++)
			{
				const className = header.classList.item(j);
				if (className.indexOf("header-") === 0)
					emblem.classList.add(className);
			}

			emblem.addEventListener("click", Events.displayOptionsOnClick);

			displayOptionsContainer.appendChild(emblem);
		}
		// #endregion Display Options
	}
}
