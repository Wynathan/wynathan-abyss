class Renderer
{
	static TargetTableId = "table-root"
	static TableRowClassName = "table-result-row";

	static HiddenClassName = "hidden";
	static DisplayHiddenClassName = "display-hidden";
	
	static NameEmblemClassName = "name";

	static EmblemClassName = "emblem";
	static EmblemTextClassName = "emblem-text";
	static EmblemIconClassName = "emblem-icon";
	static EmblemCanvasClassName = "emblem-canvas";
	static EmblemsContainerClassName = "emblems-container";

	static TraitClassName = "trait";
	static SummonSkillClassName = "summon-skill";
	static SummonSkillContainerClassName = "summon-skill-container";
	static SummonSkillBuffsContainerClassName = "summon-skill-buffs-container";
	static SummonSkillBuffClassName = "summon-skill-buff";
	// static SummonActivationConditionClassName = "summon-activation-conditions";
	static SummonTacticNameClassName = "summon-tactic-name";
	static SummonTacticDescriptionClassName = "summon-tactic-description";
	static SummonTacticActivationConditionsClassName = "summon-tactic-activation-conditions";

	static CursorPointerClassName = "cursor-pointer";
	static CenterContentClassName = "center-content";
	static NoWrapClassName = "no-wrap";
	static ShowCounterClassName = "show-counter";

	static EmblemNameDataKey = "emblemname";
	static IsPlayerDataKey = "isplayer";
	static IsAllSummonsDataKey = "isallsummons";
	static IsHeroDataKey = "ishero";
	static HeroNameDataKey = "heroname";
	static IsSummonSkillDataKey = "issummonskill";
	static SummonSkillBuffDataKey = "skillbuff";
	static SummonSkillBuffValueDataKey = "skillbuffvalue";

	static MapRegexPatternToSpanClassName_EmbeddedEmblem = "MapRegexPatternToSpanClassName_EmbeddedEmblem";

	/** @type {Object.<RegExp, string>} */
	static MapRegexPatternToSpanClassName = 
	{
		["\\[((\\w|ü|')+(\\s+(\\w|ü|')+)*)\\]"]: Renderer.MapRegexPatternToSpanClassName_EmbeddedEmblem,

		["appear more"]: "highlight-text-red",
		["Status Ailment(s)?"]: "highlight-text-red",
		["reduces(?= Defence)"]: "highlight-text-red",

		["(?<!\\<div\\>)Speed(?!\\</div\\>)"]: "highlight-text-blue-bright",
		["Normal Attacks"]: "highlight-text-blue-bright",
		["Charge Attacks"]: "highlight-text-blue-bright",
		["Musou Attack(s?)"]: "highlight-text-blue-bright",
		["(a|A)ttribute Attack"]: "highlight-text-blue-bright",
		["Attack Speed"]: "highlight-text-blue-bright",
		["(?<!\\>)Attack(?!(\\<|s))"]: "highlight-text-blue-bright",
		["Defen(c|s)e"]: "highlight-text-blue-bright",
		["Attack Speed"]: "highlight-text-blue-bright",
		["Health is above \\d+%"]: "highlight-text-blue-bright",
		["Health is below \\d+%"]: "highlight-text-blue-bright",
		["(?<!\\>)(maximum )?Health(( restored)|( recovery rate))?(?!(\\<|s))"]: "highlight-text-blue-bright",
		["(r|R)eplenishes"]: "highlight-text-blue-bright",
		["(r|R)evive(s|d)"]: "highlight-text-blue-bright",
		["Musou Gauge"]: "highlight-text-blue-bright",
		["Assemble( Gauge)?"]: "highlight-text-blue-bright",
		["(all )?attribute(s)?"]: "highlight-text-blue-bright",
		["Status Infliction"]: "highlight-text-blue-bright",
		["any status ailment"]: "highlight-text-blue-bright",
		["Burn"]: "highlight-text-blue-bright",
		["Freeze"]: "highlight-text-blue-bright",
		["Disorient"]: "highlight-text-blue-bright",
		["Shock"]: "highlight-text-blue-bright",
		["Wound"]: "highlight-text-blue-bright",
		["burned"]: "highlight-text-blue-bright",
		["continuous damage from flames"]: "highlight-text-blue-bright",
		["frozen"]: "highlight-text-blue-bright",
		["immobility"]: "highlight-text-blue-bright",
		["Formation(s)?( slot bonus)?"]: "highlight-text-blue-bright",
		["Summoning Skill"]: "highlight-text-blue-bright",
		["summoning cooldown"]: "highlight-text-blue-bright",
		["summon heroes"]: "highlight-text-blue-bright",
		["(s|S)ummons this hero"]: "highlight-text-blue-bright",
		["(s|S)ummons other heroes"]: "highlight-text-blue-bright",
		["this hero is summoned"]: "highlight-text-blue-bright",
		["have been summoned"]: "highlight-text-blue-bright",
		["(the )?player hero('s)?"]: "highlight-text-blue-bright",
		["all heroes"]: "highlight-text-blue-bright",
		["allied hero(es)?"]: "highlight-text-blue-bright",
		["summoned heroes"]: "highlight-text-blue-bright",
		["\\d+ consecutive hits"]: "highlight-text-blue-bright",
		["\\d+ enemies defeated"]: "highlight-text-blue-bright",
		["(without being )?hit by an enemy( attack)?"]: "highlight-text-blue-bright",
		["without taking damage"]: "highlight-text-blue-bright",
		["take hits from enemies"]: "highlight-text-blue-bright",
		["invulnerability"]: "highlight-text-blue-bright",
		["after evading"]: "highlight-text-blue-bright",
		["knocked into the air"]: "highlight-text-blue-bright",
		["telegraphed attack"]: "highlight-text-blue-bright",
		["barrier(s)?"]: "highlight-text-blue-bright",
		["explode"]: "highlight-text-blue-bright",
		["explosion( that damages nearby enemies)?"]: "highlight-text-blue-bright",
		["extra (?=\\<div\\>)"]: "highlight-text-blue-bright",
		["(?<=\\</div\\>) damage"]: "highlight-text-blue-bright",
		["one\\-hit kill(ing)?"]: "highlight-text-blue-bright",
		["destroy enemy projectiles"]: "highlight-text-blue-bright",
		["more likely"]: "highlight-text-blue-bright",
		["hero rerolls"]: "highlight-text-blue-bright",
		["Crystal Saplings"]: "highlight-text-blue-bright",
		["Crystal Bead(s)?"]: "highlight-text-blue-bright",
		["Karma Embers"]: "highlight-text-blue-bright",
		["(\\d+ )?Tears of Blood( you possess)?"]: "highlight-text-blue-bright",
		["Danger Zones"]: "highlight-text-blue-bright",
		["Memories of the Dead"]: "highlight-text-blue-bright",
		["EXP"]: "highlight-text-blue-bright",
		["level up"]: "highlight-text-blue-bright",
		["(every )?\\d+ level(s?)"]: "highlight-text-blue-bright",
		["random Emblem"]: "highlight-text-blue-bright",
		["Peach((es)|( Trees))?"]: "highlight-text-blue-bright",
		["(\\d+ )?Sin Spewer enem((y)|(ies))"]: "highlight-text-blue-bright",
		["Archer enemies"]: "highlight-text-blue-bright",
		["Level Boss enemies"]: "highlight-text-blue-bright",
		["start of (battle in )?each phase"]: "highlight-text-blue-bright",
		["move( on)? to the next phase"]: "highlight-text-blue-bright",
		["clear a phase"]: "highlight-text-blue-bright",
		["portals"]: "highlight-text-blue-bright",

		["Treasure(s)?"]: "highlight-text-blue-bright",
		["\"Four\\-Wheeled Chariot\""]: "highlight-text-blue-bright",
		["\"Red Hare\""]: "highlight-text-blue-bright",
		["\"Matsukaze\""]: "highlight-text-blue-bright",
		["\"Cherry Blossom Armour\""]: "highlight-text-blue-bright",

		// ["Flame( |\\-)attribute"]: "highlight-text-blue-bright",
		// ["Ice( |\\-)attribute"]: "highlight-text-blue-bright",
		// ["Wind( |\\-)attribute"]: "highlight-text-blue-bright",
		// ["Bolt( |\\-)attribute"]: "highlight-text-blue-bright",
		// ["Slay( |\\-)attribute"]: "highlight-text-blue-bright",

		["(?<=\\D)(?<!(\\>)|(is above )|((is below )))(((by)|(max)) )?\\d+%?( time(s)?)?(?!(\\<)|( ((second(s)?)|(level(s)?))))"]: "highlight-text-blue-dark",
		["\\d+ second(s)?"]: "highlight-text-blue-dark",
		["Negates"]: "highlight-text-blue-dark",
		["Doubles"]: "highlight-text-blue-dark",
		["Triples"]: "highlight-text-blue-dark",
		["available for use"]: "highlight-text-blue-dark",
		["(g|G)uarantees"]: "highlight-text-blue-dark",
		["more frequently"]: "highlight-text-blue-dark",
		["(((s|S)lightly )|((m|M)oderately ))?(c|C)harges"]: "highlight-text-blue-dark",
	}

	static showAll()
	{
		const tbody = Renderer.getTableBody();
		const rows = tbody.querySelectorAll(Renderer.TableRowClassName);

		for (let i = 0; i < rows.length; i++)
		{
			const row = rows[i];
			row.classList.remove(Renderer.HiddenClassName);
		}
	}

	// #region Filter
	/**
	 * 
	 * @param {Object.<string, Hero>} heroes 
	 */
	static hideHeroesExcept(heroes)
	{
		if (!heroes)
			return;

		const tbody = Renderer.getTableBody();
		const rows = tbody.querySelectorAll("tr." + Renderer.TableRowClassName);

		for (let i = 0; i < rows.length; i++)
		{
			const row = rows[i];
			const heroName = row.dataset[Renderer.HeroNameDataKey];

			if (heroes[heroName])
				row.classList.remove(Renderer.HiddenClassName);
			else
				row.classList.add(Renderer.HiddenClassName);
		}
	}

	// #endregion Filter

	// #region Options

	/**
	 * 
	 * @param {boolean} visible 
	 */
	static toggleHeroInGameOrder(useInGameOrder)
	{
		const table = Renderer.getTableBody();
		const rows = table.querySelectorAll("tr");
		/** @type {Object.<string, HTMLTableRowElement>} */
		const mapHeroNameToRow = { };

		for (let i = 0; i < rows.length; i++)
		{
			const row = rows[i];
			const heroName = row.dataset[Renderer.HeroNameDataKey];
			
			mapHeroNameToRow[heroName] = row;
		}

		if (useInGameOrder)
		{
			for (let i = 0; i < Data.HeroesInGameOrder.length; i++)
			{
				const heroName = Data.HeroesInGameOrder[i];
				const row = mapHeroNameToRow[heroName];
				table.appendChild(row);
			}
		}
		else
		{
			for (let heroName in Data.Heroes)
			{
				const row = mapHeroNameToRow[heroName];
				table.appendChild(row);
			}
		}
	}

	/**
	 * 
	 * @param {boolean} visible 
	 */
	static toggleHeroInGameNames(visible)
	{
		const table = Renderer.getTableBody();
		const heroEmblems = table.querySelectorAll("div[data-" + Renderer.IsHeroDataKey + "='true']");

		for (let i = 0; i < heroEmblems.length; i++)
		{
			const emblem = heroEmblems[i];
			const heroName = Renderer.getEmblemName(emblem);
			const hero = Data.Heroes[heroName];

			if (hero.nameInGame)
			{
				if (visible)
					emblem.innerText = hero.nameInGame;
				else
					emblem.innerText = hero.name;
			}
		}
	}

	/**
	 * 
	 * @param {boolean} visible 
	 */
	static toggleRowNumbers(visible)
	{
		const table = Renderer.getTableBody();
		const rows = table.querySelectorAll("tr");

		for (let i = 0; i < rows.length; i++)
		{
			const row = rows[i];

			if (visible)
				row.classList.add(Renderer.ShowCounterClassName);
			else
				row.classList.remove(Renderer.ShowCounterClassName);
		}
	}

	/**
	 * 
	 * @param {number} index 
	 * @param {boolean} visible 
	 */
	static toggleColumnDisplay(index, visible)
	{
		const table = window.document.getElementById(Renderer.TargetTableId);
		const rows = table.querySelectorAll("tr");

		for (let i = 0; i < rows.length; i++)
		{
			const row = rows[i];
			const children = row.children;

			for (let j = 0; j < children.length; j++)
			{
				if (j !== index)
					continue;

				const child = children.item(j);
				
				if (visible)
					child.classList.remove(Renderer.DisplayHiddenClassName);
				else
					child.classList.add(Renderer.DisplayHiddenClassName);
			}
		}
	}

	// #endregion Options

	// #region Data Attributes
	/**
	 * 
	 * @param {string | boolean} value 
	 * @returns {boolean?}
	 */
	static stringToBool(value)
	{
		if (value === true || value === "true")
			return true;

		if (value === false || value === "false")
			return false;

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @returns {string}
	 */
	static getEmblemName(element)
	{
		const data = element.dataset[Renderer.EmblemNameDataKey];
		return data;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @returns {boolean}
	 */
	static getIsHero(element)
	{
		const data = element.dataset[Renderer.IsHeroDataKey];
		return Renderer.stringToBool(data);
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @returns {boolean}
	 */
	static getIsSummonSkill(element)
	{
		const data = element.dataset[Renderer.IsSummonSkillDataKey];
		return Renderer.stringToBool(data);
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @returns {boolean}
	 */
	static getIsSummonSkillBuff(element)
	{
		const data = element.dataset[Renderer.SummonSkillBuffDataKey];
		
		if (data === SummonSkill.BuffAmount)
			return true;
		
		if (data === SummonSkill.BuffRange)
			return true;
		
		if (data === SummonSkill.BuffDuration)
			return true;

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @returns {boolean}
	 */
	static getIsPlayer(element)
	{
		const data = element.dataset[Renderer.IsPlayerDataKey];
		return Renderer.stringToBool(data);
	}
	// #endregion Data Attributes

	// #region Fetch/Manipulate DOM
	/** @returns {HTMLTableSectionElement} */
	static getTableBody()
	{
		const table = window.document.getElementById(Renderer.TargetTableId);
		const tbody = table.querySelector("tbody");

		if (!tbody)
		{
			const newBody = window.document.createElement("tbody");
			table.appendChild(newBody);
			return newBody;
		}

		return tbody;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @param {HTMLElement[]} children 
	 */
	static #appendChildren(element, children)
	{
		for (let i = 0; i < children.length; i++)
			element.appendChild(children[i]);
	}
	// #endregion Fetch/Manipulate DOM

	// #region Render
	static render()
	{
		const tbody = Renderer.getTableBody();

		for (let heroName in Data.Heroes)
		{
			const hero = Data.Heroes[heroName];
			const row = Renderer.#generateRow(hero);
			tbody.appendChild(row);
		}

		const emblems = tbody.querySelectorAll("." + Renderer.EmblemClassName);
		for (let i = 0; i < emblems.length; i++)
		{
			const emblem = emblems[i];
			emblem.classList.add(Prompt.PromptTargetClassName);
			emblem.addEventListener("click", Events.emblemOnClick);
		}

		const skillBuffs = tbody.querySelectorAll("." + Renderer.SummonSkillBuffClassName);
		for (let i = 0; i < skillBuffs.length; i++)
		{
			const buff = skillBuffs[i];
			buff.classList.add(Prompt.PromptTargetClassName);
			buff.addEventListener("click", Events.skillBuffOnClick);
		}

		Transcendence.toggleDisplay();
	}

	/**
	 * 
	 * @param {Hero} hero 
	 * @returns HTMLTableRowElement 
	 */
	static #generateRow(hero)
	{
		const row = window.document.createElement("tr");
		row.classList.add(Renderer.TableRowClassName);
		row.dataset[Renderer.HeroNameDataKey] = hero.name;

		Renderer.#addNameColumn(row, hero);
		Renderer.#addEmblemsColumns(row, hero);
		Renderer.#addTraitsColumns(row, hero);
		Renderer.#addSummonSkillColumns(row, hero);
		Renderer.#addTacticColumns(row, hero);

		return row;
	}

	/**
	 * 
	 * @param {HTMLTableRowElement} row 
	 * @param {Hero} hero 
	 */
	static #addEmblemsColumns(row, hero)
	{
		const statsColumn = Renderer.#generaleEmblemsColumn(hero, true, false);
		row.appendChild(statsColumn);

		const emblemsColumn = Renderer.#generaleEmblemsColumn(hero, false, true);
		row.appendChild(emblemsColumn);
	}

	/**
	 * 
	 * @param {HTMLTableRowElement} row 
	 * @param {Hero} hero 
	 */
	static #addNameColumn(row, hero)
	{
		const nameColumn = window.document.createElement("td");
		nameColumn.classList.add(Renderer.CenterContentClassName);

		const nameContainer = window.document.createElement("div");
		nameContainer.classList.add(Renderer.EmblemsContainerClassName);

		const nameEmblem = Renderer.createEmblemElement(hero.name);
		nameEmblem.classList.add(Renderer.NameEmblemClassName);

		nameContainer.appendChild(nameEmblem);
		nameColumn.appendChild(nameContainer);

		row.appendChild(nameColumn);
	}

	/**
	 * 
	 * @param {HTMLTableRowElement} row 
	 * @param {Hero} hero 
	 */
	static #addTraitsColumns(row, hero)
	{
		const t1 = hero.trait1;
		const t1T12 = hero.trait1Transcended;
		const t1ShouldSeparate = hero.doesT12ChangeTrait1();
		const trait1Column = Renderer.#generateTraitsColumn(t1, t1T12, t1ShouldSeparate);
		row.appendChild(trait1Column);
		
		const t2 = hero.trait2;
		const t2T12 = hero.trait2Transcended;
		const t2ShouldSeparate = hero.doesT12ChangeTrait2();
		const trait2Column = Renderer.#generateTraitsColumn(t2, t2T12, t2ShouldSeparate);
		row.appendChild(trait2Column);
	}

	/**
	 * 
	 * @param {HTMLTableRowElement} row 
	 * @param {Hero} hero 
	 */
	static #addSummonSkillColumns(row, hero)
	{
		const skill = hero.summonSkill;
		const skillT12 = hero.summonSkillTranscended;
		const shouldSeparate = !skill.equals(skillT12);

		const skillColumn = Renderer.#generateSkillColumn(skill, skillT12, shouldSeparate);
		row.appendChild(skillColumn);
		
		const elementColumn = Renderer.#generateSkillElementColumn(skill, skillT12, shouldSeparate);
		row.appendChild(elementColumn);
	}

	/**
	 * 
	 * @param {HTMLTableRowElement} row 
	 * @param {Hero} hero 
	 */
	static #addTacticColumns(row, hero)
	{
		const tactic = hero.tactic;
		const tacticT12 = hero.tacticTranscended;
		const shouldSeparateTactics = !tactic.equals(tacticT12, true);
		const shouldSeparateTargets = !tactic.targetsEqual(tacticT12);

		const tacticColumn = Renderer.#generateTacticColumn(tactic, tacticT12, shouldSeparateTactics);
		row.appendChild(tacticColumn);

		const targetsColumn = Renderer.#generateTacticTargetsColumn(tactic, tacticT12, shouldSeparateTargets);
		row.appendChild(targetsColumn);
	}
	// #endregion Render

	// #region Render Text, Icons, Emblems
	/**
	 * 
	 * @param {string} emblemName 
	 * @param {number=} scale 
	 * @returns HTMLDivElement
	 */
	static createEmblemElement(emblemName, scale)
	{
		const div = window.document.createElement("div");
		div.classList.add(Renderer.CursorPointerClassName);
		div.classList.add(Renderer.EmblemClassName);
		div.dataset[Renderer.EmblemNameDataKey] = emblemName;

		if (Icons.MapEmblemToFilePath[emblemName])
		{
			div.classList.add(Renderer.EmblemIconClassName);

			scale = scale ?? Icons.EmblemIconScale;
			
			const iconPath = Icons.MapEmblemToFilePath[emblemName];
			const canvas = Renderer.#createCanvasWithIcon(iconPath, scale);
			canvas.classList.add(Renderer.EmblemCanvasClassName);
			
			div.appendChild(canvas);
		}
		else
		{
			div.classList.add(Renderer.EmblemTextClassName);
			div.classList.add(Renderer.CenterContentClassName);

			let displayName = emblemName;

			if (emblemName === TacticTarget.Player)
			{
				div.dataset[Renderer.IsPlayerDataKey] = true;
			}
			if (emblemName === TacticTarget.AllSummons)
			{
				div.dataset[Renderer.IsAllSummonsDataKey] = true;
			}
			else if (Data.SummonSkills[emblemName])
			{
				div.classList.add(Renderer.SummonSkillClassName);
				div.dataset[Renderer.IsSummonSkillDataKey] = true;
			}
			else if (Data.Heroes[emblemName])
			{
				div.dataset[Renderer.IsHeroDataKey] = true;

				const hero = Data.Heroes[emblemName];
				if (Form.isUseInGameNamesSelected() && hero.nameInGame)
					displayName = hero.nameInGame;
			}

			div.innerText = displayName;
		}

		return div;
	}

	/**
	 * 
	 * @param {string} text 
	 * @returns {HTMLElement[]}
	 */
	static #renderTextAsElementArray(text)
	{
		if (!text)
			return "";

		if (text.length === 0)
			return "";

		class Item 
		{
			/** @type {number} */
			startIndex;
			/** @type {number} */
			endIndex;
			/** @type {string} */
			group0;
			/** @type {string} */
			group1;

			/**
			 * 
			 * @param {number} startIndex 
			 * @param {number} endIndex 
			 * @param {string} group0 
			 * @param {string=} group1 
			 */
			constructor(startIndex, endIndex, group0, group1)
			{
				this.startIndex = startIndex;
				this.endIndex = endIndex;
				this.group0 = group0;

				if (group1)
					this.group1 = group1;
				else
					this.group1 = null;
			}
		}

		const embeddedEmblem = Renderer.MapRegexPatternToSpanClassName_EmbeddedEmblem;

		let result = text;

		for (let pattern in Renderer.MapRegexPatternToSpanClassName)
		{
			try
			{
				const className = Renderer.MapRegexPatternToSpanClassName[pattern];
				const tagOpen = "<span class='" + className + "'>";
				const tagClose = "</span>";

				const regex = new RegExp(pattern, "gm");

				/** @type {Item[]} */
				const items = [];

				let matches = regex.exec(result);
				do
				{
					if (matches === null)
						break;

					const group0 = matches[0];
					let group1 = null;

					if (className === embeddedEmblem && matches[1])
						group1 = matches[1];

					const startIndex = regex.lastIndex - 1 - group0.length;
					const endIndex = regex.lastIndex;

					const index = new Item(startIndex, endIndex, group0, group1);
					items.push(index);

					matches = regex.exec(result);
				} while (matches !== null);

				for (let i = items.length - 1; i >= 0; i--)
				{
					const item = items[i];

					const prefix = result.substring(0, item.startIndex + 1);
					const suffix = result.substring(item.endIndex, result.length);

					result = prefix;

					if (className === embeddedEmblem)
					{
						const emblemName = item.group1 ? item.group1 : item.group0;
						result += "<div>" + emblemName + "</div>";
					}
					else
					{
						result += tagOpen + item.group0 + tagClose;
					}

					result += suffix;
				}
			}
			catch (ex)
			{
				console.error("Failed to parse pattern '" + pattern + "' into a RegExp. Error: " + ex);
			}
		}

		const tempElement = window.document.createElement("div");
		tempElement.innerHTML = result;
		
		const resultArray = [];

		for (let i = 0; i < tempElement.childNodes.length; i++)
		{
			const node = tempElement.childNodes.item(i);
			if (node.nodeName === "#text")
			{
				const span = window.document.createElement("span");
				span.innerText = node.textContent;
				resultArray.push(span);
			}
			else if (node.nodeName === "DIV")
			{
				const emblem = Renderer.createEmblemElement(node.textContent);
				resultArray.push(emblem);
			}
			else
			{
				resultArray.push(node);
			}
		}

		return resultArray;
	}

	/**
	 * 
	 * @param {string} iconPath 
	 * @param {number} scale 
	 * @param {number=} widthOverrie 
	 * @param {number=} heightOverride 
	 * @returns {HTMLCanvasElement}
	 */
	static #createCanvasWithIcon(iconPath, scale, widthOverrie, heightOverride)
	{
		const canvas = window.document.createElement("canvas");
		
		const width = widthOverrie ?? Icons.EmblemIconWidth;
		const height = heightOverride ?? Icons.EmblemIconHeight;

		canvas.width = width * scale;
		canvas.height = height * scale;

		const context = canvas.getContext("2d");

		Loader.show();

		var image = new Image();
		image.src = iconPath;
		image.onload = function()
		{ 
			context.drawImage(
				image,
				0,
				0,
				width,
				height,
				0, 
				0, 
				width * scale,
				height * scale
			);

			Loader.hide();
		};

		return canvas;
	}

	/**
	 * 
	 * @param {boolean} isT12 
	 * @param {number=} scale 
	 * @returns {HTMLDivElement}
	 */
	static createT12IconContainer(isT12, scale)
	{
		return Renderer.#createT12IconDiv(true, isT12, scale);
	}

	/**
	 * 
	 * @param {boolean} shouldSeparate 
	 * @param {boolean=} isT12 
	 * @param {number=} scale 
	 * @returns {HTMLDivElement}
	 */
	static #createT12IconDiv(shouldSeparate, isT12, scale)
	{
		const iconsWrapper = window.document.createElement("div");
		iconsWrapper.classList.add(Transcendence.IconClassName);

		scale = scale ?? Icons.T12IconScale;

		const createIcon = function(value)
		{
			const iconPath = Icons.MapT12ValueToFilePath[value];
			const icon = Renderer.#createCanvasWithIcon(iconPath, scale);
			Transcendence.setTranscendenceData(icon, value);
			iconsWrapper.appendChild(icon);
		}

		if (!shouldSeparate || !isT12)
			createIcon(false);

		if (!shouldSeparate || isT12)
			createIcon(true);

		return iconsWrapper;
	}

	/**
	 * 
	 * @param {string} buff 
	 * @param {string | boolean} value 
	 * @param {number=} scale 
	 * @returns {HTMLDivElement}
	 */
	static createSummonSkillBuffIconContainer(buff, value, scale)
	{
		const boolValue = Renderer.stringToBool(value);
		return Renderer.#createSummonSkillBuffIconDiv(buff, boolValue, scale);
	}

	/**
	 * 
	 * @param {string} buff 
	 * @param {true} value 
	 * @param {number=} scale 
	 * @returns {HTMLDivElement}
	 */
	static #createSummonSkillBuffIconDiv(buff, value, scale)
	{
		const wrapper = window.document.createElement("div");
		wrapper.classList.add(Renderer.SummonSkillBuffClassName);
		wrapper.classList.add(Renderer.CursorPointerClassName);
		wrapper.dataset[Renderer.SummonSkillBuffDataKey] = buff;
		wrapper.dataset[Renderer.SummonSkillBuffValueDataKey] = value;

		scale = scale ?? Icons.SummonSkillIconScale;

		const width = Icons.SummonSkillBuffWidth;
		const height = Icons.SummonSkillBuffHeight;
		const iconPath = Icons.MapSummonSkillBuffValueToFilePath[buff][value];
		const icon = Renderer.#createCanvasWithIcon(iconPath, scale, width, height);

		wrapper.appendChild(icon);
		return wrapper;
	}
	// #endregion Render Text, Icons, Emblems

	// #region Generate Columns

	/**
	 * 
	 * @param {Hero} hero 
	 * @param {boolean} generateStats 
	 * @param {boolean} generatePersonal 
	 * @returns {HTMLTableCellElement}
	 */
	static #generaleEmblemsColumn(hero, generateStats, generatePersonal)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Renderer.CenterContentClassName);
		container.classList.add(Transcendence.ContainerClassName);

		const shouldSeparateStats = generateStats && hero.doesT12ChangeStats();
		const shouldSeparatePersonal = generatePersonal && hero.doesT12ChangePersonal();
		const shouldSeparate = shouldSeparateStats || shouldSeparatePersonal;

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {Object.<string, Emblem>} emblems 
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(emblems, isT12)
		{
			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			const emblemsContainer = window.document.createElement("div");
			emblemsContainer.classList.add(Renderer.EmblemsContainerClassName);

			for (let emblemName in emblems)
			{
				const emblem = emblems[emblemName];

				const shouldGenerateStat = generateStats && emblem.isStatOrElement();
				const shouldGeneratePersonal = generatePersonal && emblem.isPersonal();

				if (shouldGenerateStat || shouldGeneratePersonal)
				{
					for (let i = 0; i < emblem.amount; i++)
					{
						const emblemElement = Renderer.createEmblemElement(emblem.name);
						emblemsContainer.appendChild(emblemElement);
					}
				}
			}

			wrapper.appendChild(emblemsContainer);
			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(hero.emblems, false);
			createContainer(hero.emblemsTranscended, true);
		}
		else
		{
			createContainer(hero.emblems);
		}

		column.appendChild(container);

		return column;
	}

	/**
	 * 
	 * @param {string[]} traits 
	 * @param {string[]} traitsT12 
	 * @param {boolean} shouldSeparate 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateTraitsColumn(traits, traitsT12, shouldSeparate)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Transcendence.ContainerClassName);

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {string[]} currentTraits 
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(currentTraits, isT12)
		{
			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			for (let i = 0; i < currentTraits.length; i++)
			{
				const trait = currentTraits[i];
				if (!trait)
					continue;

				const traitContainer = window.document.createElement("div");
				traitContainer.classList.add(Renderer.TraitClassName);

				const iterSpan = window.document.createElement("span");
				iterSpan.innerHTML = (i + 1) + ".&nbsp;";
				traitContainer.appendChild(iterSpan);

				const children = Renderer.#renderTextAsElementArray(trait);
				Renderer.#appendChildren(traitContainer, children);

				wrapper.appendChild(traitContainer);
			}

			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(traits, false);
			createContainer(traitsT12, true);
		}
		else
		{
			createContainer(traits);
		}

		column.appendChild(container);

		return column;
	}

	/**
	 * 
	 * @param {SummonSkill} skill 
	 * @param {SummonSkill} skillT12 
	 * @param {boolean} shouldSeparate 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateSkillColumn(skill, skillT12, shouldSeparate)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Renderer.CenterContentClassName);
		container.classList.add(Transcendence.ContainerClassName);

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {SummonSkill} currentSkill 
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(currentSkill, isT12)
		{
			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			const emblemContainer = window.document.createElement("div");
			emblemContainer.classList.add(Renderer.EmblemsContainerClassName);
			emblemContainer.classList.add(Renderer.SummonSkillContainerClassName);

			const emblem = Renderer.createEmblemElement(currentSkill.name);
			emblemContainer.appendChild(emblem);
			wrapper.appendChild(emblemContainer);

			const buffsContainer = window.document.createElement("div");
			buffsContainer.classList.add(Renderer.SummonSkillBuffsContainerClassName);

			const amount = Renderer.#createSummonSkillBuffIconDiv(SummonSkill.BuffAmount, currentSkill.isBuffedByAmount);
			const range = Renderer.#createSummonSkillBuffIconDiv(SummonSkill.BuffRange, currentSkill.isBuffedByRange);
			const duration = Renderer.#createSummonSkillBuffIconDiv(SummonSkill.BuffDuration, currentSkill.isBuffedByDuration);

			buffsContainer.appendChild(amount);
			buffsContainer.appendChild(range);
			buffsContainer.appendChild(duration);

			wrapper.appendChild(buffsContainer);

			const conditions = Renderer.#generateActivationConditionsDiv(currentSkill.upgradeConditions);
			wrapper.appendChild(conditions);

			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(skill, false);
			createContainer(skillT12, true);
		}
		else
		{
			createContainer(skill);
		}

		column.appendChild(container);

		return column;
	}

	/**
	 * 
	 * @param {SummonSkill} skill 
	 * @param {SummonSkill} skillT12 
	 * @param {boolean} shouldSeparate 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateSkillElementColumn(skill, skillT12, shouldSeparate)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Renderer.CenterContentClassName);
		container.classList.add(Transcendence.ContainerClassName);

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {SummonSkill} currentSkill 
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(currentSkill, isT12)
		{
			if (!currentSkill.hasAnyElements())
				return;

			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			const emblemsContainer = window.document.createElement("div");
			emblemsContainer.classList.add(Renderer.EmblemsContainerClassName);
			
			for (let i = 0; i < currentSkill.elements.length; i++)
			{
				const elementEmblem = currentSkill.elements[i];
				const elementEmblemElement = Renderer.createEmblemElement(elementEmblem.name);
				emblemsContainer.appendChild(elementEmblemElement);
			}

			wrapper.appendChild(emblemsContainer);
			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(skill, false);
			createContainer(skillT12, true);
		}
		else
		{
			createContainer(skill);
		}

		column.appendChild(container);

		return column;
	}

	/**
	 * 
	 * @param {SummonActivationCondition[]} activationConditions 
	 * @returns {HTMLDivElement}
	 */
	static #generateActivationConditionsDiv(activationConditions)
	{
		const container = window.document.createElement("div");
		container.classList.add(Renderer.EmblemsContainerClassName);
		
		const addSpan = function(target, text)
		{
			const span = window.document.createElement("span");
			span.innerHTML = text;
			target.appendChild(span);
			target.classList.add(Renderer.NoWrapClassName);
		}

		for (let i = 0; i < activationConditions.length; i++)
		{
			const div = window.document.createElement("div");
			div.classList.add(Renderer.EmblemClassName);

			const condition = activationConditions[i];
			const emblem = Renderer.createEmblemElement(condition.name);
			
			div.appendChild(emblem);
			
			if (!condition.isHero())
				addSpan(div, "x" + condition.amount);

			if (i + 1 < activationConditions.length)
				addSpan(div, ",&nbsp;");

			container.appendChild(div);
		}

		return container;
	}

	/**
	 * 
	 * @param {Tactic} tactic 
	 * @param {Tactic} tacticT12 
	 * @param {boolean} shouldSeparate 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateTacticColumn(tactic, tacticT12, shouldSeparate)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Transcendence.ContainerClassName);

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {Tactic} currentTactic
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(currentTactic, isT12)
		{
			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			const name = window.document.createElement("div");
			name.classList.add(Renderer.SummonTacticNameClassName);
			name.innerText = currentTactic.name;
			wrapper.appendChild(name);

			const description = window.document.createElement("div");
			description.classList.add(Renderer.SummonTacticDescriptionClassName);

			const descriptionElements = Renderer.#renderTextAsElementArray(currentTactic.description);
			Renderer.#appendChildren(description, descriptionElements);
			
			wrapper.appendChild(description);

			const conditions = Renderer.#generateActivationConditionsDiv(currentTactic.activationConditions);
			conditions.classList.add(Renderer.SummonTacticActivationConditionsClassName);
			wrapper.appendChild(conditions);

			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(tactic, false);
			createContainer(tacticT12, true);
		}
		else
		{
			createContainer(tactic);
		}

		column.appendChild(container);

		return column;
	}

	/**
	 * 
	 * @param {Tactic} tactic 
	 * @param {Tactic} tacticT12 
	 * @param {boolean} shouldSeparate 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateTacticTargetsColumn(tactic, tacticT12, shouldSeparate)
	{
		const column = window.document.createElement("td");

		const container = window.document.createElement("div");
		container.classList.add(Renderer.CenterContentClassName);
		container.classList.add(Transcendence.ContainerClassName);

		if (shouldSeparate)
			container.classList.add(Transcendence.ShareClassName);

		/**
		 * 
		 * @param {Tactic} currentTactic 
		 * @param {boolean=} isT12 
		 */
		const createContainer = function(currentTactic, isT12)
		{
			if (currentTactic.targets.length === 0)
				return;

			const wrapper = window.document.createElement("div");
			wrapper.classList.add(Transcendence.WrapperClassName);

			if (shouldSeparate)
				Transcendence.setTranscendenceData(wrapper, isT12);

			const iconsWrapper = Renderer.#createT12IconDiv(shouldSeparate, isT12);
			wrapper.appendChild(iconsWrapper);

			const createEmblemsContainer = function()
			{
				const emblemsContainer = window.document.createElement("div");
				emblemsContainer.classList.add(Renderer.EmblemsContainerClassName);
				return emblemsContainer;
			}

			let statEmblemsContainer = null;
			let personalEmblemsContainer = null;
			let otherEmblemsContainer = null;

			for (let i = 0; i < currentTactic.targets.length; i++)
			{
				const target = currentTactic.targets[i];
				const emblemElement = Renderer.createEmblemElement(target.name);

				if (target.isStatOrElement())
				{
					if (statEmblemsContainer === null)
						statEmblemsContainer = createEmblemsContainer();

					statEmblemsContainer.appendChild(emblemElement);
				}
				else if (target.isPersonalEmblem())
				{
					if (personalEmblemsContainer === null)
						personalEmblemsContainer = createEmblemsContainer();

					personalEmblemsContainer.appendChild(emblemElement);
				}
				else
				{
					if (otherEmblemsContainer === null)
						otherEmblemsContainer = createEmblemsContainer();

					otherEmblemsContainer.appendChild(emblemElement);
				}
			}

			if (statEmblemsContainer)
				wrapper.appendChild(statEmblemsContainer);

			if (personalEmblemsContainer)
				wrapper.appendChild(personalEmblemsContainer);

			if (otherEmblemsContainer)
				wrapper.appendChild(otherEmblemsContainer);

			container.appendChild(wrapper);
		}

		if (shouldSeparate)
		{
			createContainer(tactic, false);
			createContainer(tacticT12, true);
		}
		else
		{
			createContainer(tactic);
		}

		column.appendChild(container);

		return column;
	}
	// #endregion Columns
}
