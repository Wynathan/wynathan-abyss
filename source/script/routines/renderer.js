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
	// static SummonActivationConditionClassName = "summon-activation-conditions";
	static SummonTacticNameClassName = "summon-tactic-name";
	static SummonTacticDescriptionClassName = "summon-tactic-description";

	static CursorPointerClassName = "cursor-pointer";
	static CenterContentClassName = "center-content";
	static NoWrapClassName = "no-wrap";
	static ShowCounterClassName = "show-counter";

	static EmblemIconWidth = 57;
	static EmblemIconHeight = 57;
	static EmblemIconScale = 0.5;

	static EmblemNameDataKey = "emblemname";
	static IsPlayerDataKey = "isplayer";
	static IsAllSummonsDataKey = "isallsummons";
	static IsHeroDataKey = "ishero";
	static HeroNameDataKey = "heroname";
	static IsSummonSkillDataKey = "issummonskill";

	static MapRegexPatternToSpanClassName_EmbeddedEmblem = "MapRegexPatternToSpanClassName_EmbeddedEmblem";

	/** @type {Object.<RegExp, string>} */
	static MapRegexPatternToSpanClassName = 
	{
		["\\[((\\w|ü)+(\\s+(\\w|ü)+)*)\\]"]: Renderer.MapRegexPatternToSpanClassName_EmbeddedEmblem,

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
		["Formation slot bonus"]: "highlight-text-blue-bright",
		["Summoning Skill"]: "highlight-text-blue-bright",
		["summoning cooldown"]: "highlight-text-blue-bright",
		["(s|S)ummons this hero"]: "highlight-text-blue-bright",
		["(s|S)ummons other heroes"]: "highlight-text-blue-bright",
		["this hero is summoned"]: "highlight-text-blue-bright",
		["have been summoned"]: "highlight-text-blue-bright",
		["the player hero"]: "highlight-text-blue-bright",
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
		["more frequently"]: "highlight-text-blue-dark",
		["(((s|S)lightly )|((m|M)oderately ))?(c|C)harges"]: "highlight-text-blue-dark",
	}

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
	static appendChildren(element, children)
	{
		for (let i = 0; i < children.length; i++)
			element.appendChild(children[i]);
	}

	/**
	 * 
	 * @param {string} text 
	 * @returns {HTMLElement[]}
	 */
	static renderTextAsElementArray(text)
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
			emblem.addEventListener("click", Events.emblemOnClick);
		}

		Transcendence.toggleDisplay();
	}

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

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static getEmblemName(element)
	{
		const data = element.dataset[Renderer.EmblemNameDataKey];
		return data;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static getIsHero(element)
	{
		const data = element.dataset[Renderer.IsHeroDataKey];
		
		if (data === true || data === "true")
			return true;

		if (data === false || data === "false")
			return false;

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static getIsSummonSkill(element)
	{
		const data = element.dataset[Renderer.IsSummonSkillDataKey];
		
		if (data === true || data === "true")
			return true;

		if (data === false || data === "false")
			return false;

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static getIsPlayer(element)
	{
		const data = element.dataset[Renderer.IsPlayerDataKey];
		
		if (data === true || data === "true")
			return true;

		if (data === false || data === "false")
			return false;

		return null;
	}

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

		if (Icons.MapEmblemToBase64[emblemName])
		{
			div.classList.add(Renderer.EmblemIconClassName);

			const canvas = window.document.createElement("canvas");
			canvas.classList.add(Renderer.EmblemCanvasClassName);
			
			const width = Renderer.EmblemIconWidth;
			const height = Renderer.EmblemIconHeight;
			if (!scale)
				scale = Renderer.EmblemIconScale;

			canvas.width = width * scale;
			canvas.height = height * scale;

			const context = canvas.getContext("2d");

			var image = new Image();
			image.src = "data:image/png;base64," + Icons.MapEmblemToBase64[emblemName];
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
			}
			
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
	 * @param {Object.<string, Emblem>} emblems 
	 * @param {boolean=} isTranscendent 
	 * @returns {{ stats: HTMLTableCellElement, emblems: HTMLTableCellElement }}
	 */
	static #generateEmblemColumns(emblems, isTranscendent)
	{
		const statsColumn = window.document.createElement("td");
		statsColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(statsColumn, isTranscendent);

		const statsContainer = window.document.createElement("div");
		statsContainer.classList.add(Renderer.EmblemsContainerClassName);

		const emblemsColumn = window.document.createElement("td");
		emblemsColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(emblemsColumn, isTranscendent);

		const emblemsContainer = window.document.createElement("div");
		emblemsContainer.classList.add(Renderer.EmblemsContainerClassName);

		for (let emblemName in emblems)
		{
			const emblem = emblems[emblemName];

			for (let i = 0; i < emblem.amount; i++)
			{
				const emblemElement = Renderer.createEmblemElement(emblem.name);

				if (emblem.isStatOrElement())
					statsContainer.appendChild(emblemElement);
				else
					emblemsContainer.appendChild(emblemElement);
			}
		}

		statsColumn.appendChild(statsContainer);
		emblemsColumn.appendChild(emblemsContainer);

		return { stats: statsColumn, emblems: emblemsColumn };
	}

	/**
	 * 
	 * @param {string[]} traits 
	 * @param {boolean=} isTranscendent 
	 * @returns {HTMLTableCellElement}
	 */
	static #generateTraitColumn(traits, isTranscendent)
	{
		const traitColumn = window.document.createElement("td");
		//traitColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(traitColumn, isTranscendent);
		
		const div = window.document.createElement("div");
		//div.classList.add(Renderer.TraitClassName);

		for (let i = 0; i < traits.length; i++)
		{
			const trait = traits[i];
			if (!trait)
				continue;

			const container = window.document.createElement("div");
			container.classList.add(Renderer.TraitClassName);

			const iterSpan = window.document.createElement("span");
			iterSpan.innerHTML = (i + 1) + ".&nbsp;";
			container.appendChild(iterSpan);

			const children = Renderer.renderTextAsElementArray(trait);
			Renderer.appendChildren(container, children);

			div.appendChild(container);
		}

		traitColumn.appendChild(div);
		return traitColumn;
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
	 * @param {SummonSkill} summonSkill 
	 * @param {boolean=} isTranscendent 
	 * @returns { summonSkill: HTMLTableCellElement, element: HTMLTableCellElement }
	 */
	static #generateSkillColumns(summonSkill, isTranscendent)
	{
		const summonSkillColumn = window.document.createElement("td");
		summonSkillColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(summonSkillColumn, isTranscendent);
		
		const summonSkilEmblemContainer = window.document.createElement("div");
		summonSkilEmblemContainer.classList.add(Renderer.EmblemsContainerClassName);
		summonSkilEmblemContainer.classList.add(Renderer.SummonSkillContainerClassName);

		const summonSkilEmblem = Renderer.createEmblemElement(summonSkill.name);
		summonSkilEmblemContainer.appendChild(summonSkilEmblem);
		summonSkillColumn.appendChild(summonSkilEmblemContainer);

		const acDiv = Renderer.#generateActivationConditionsDiv(summonSkill.upgradeConditions);
		summonSkillColumn.appendChild(acDiv);

		const summonSkillElementColumn = window.document.createElement("td");
		summonSkillElementColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(summonSkillElementColumn, isTranscendent);

		const summonSkillElementContainer = window.document.createElement("div");
		summonSkillElementContainer.classList.add(Renderer.EmblemsContainerClassName);

		if (summonSkill.element)
			summonSkillElementContainer.appendChild(Renderer.createEmblemElement(summonSkill.element.name));

		summonSkillElementColumn.appendChild(summonSkillElementContainer);

		return { summonSkill: summonSkillColumn, element: summonSkillElementColumn };
	}

	/**
	 * 
	 * @param {Tactic} tactic 
	 * @param {boolean=} isTranscendent 
	 * @returns { tactic: HTMLTableCellElement, targets: HTMLTableCellElement }
	 */
	static #generateTacticColumns(tactic, isTranscendent)
	{
		const tacticColumn = window.document.createElement("td");
		Transcendence.setTranscendenceData(tacticColumn, isTranscendent);

		const nameDiv = window.document.createElement("div");
		nameDiv.classList.add(Renderer.SummonTacticNameClassName);
		nameDiv.innerText = tactic.name;

		const descriptionDiv = window.document.createElement("div");
		descriptionDiv.classList.add(Renderer.SummonTacticDescriptionClassName);
		const descriptionElements = Renderer.renderTextAsElementArray(tactic.description);
		Renderer.appendChildren(descriptionDiv, descriptionElements);

		tacticColumn.appendChild(nameDiv);
		tacticColumn.appendChild(descriptionDiv);

		const acDiv = Renderer.#generateActivationConditionsDiv(tactic.activationConditions);
		tacticColumn.appendChild(acDiv);

		const tacticTargetColumn = window.document.createElement("td");
		tacticTargetColumn.classList.add(Renderer.CenterContentClassName);
		Transcendence.setTranscendenceData(tacticTargetColumn, isTranscendent);

		const tacticTargetContainer = window.document.createElement("div");
		tacticTargetContainer.classList.add(Renderer.EmblemsContainerClassName);

		if (tactic.targets)
		{
			for (let i = 0; i < tactic.targets.length; i++)
			{
				const target = tactic.targets[i];
				const emblemElement = Renderer.createEmblemElement(target.name);
				tacticTargetContainer.appendChild(emblemElement);
			}
		}

		tacticTargetColumn.appendChild(tacticTargetContainer);

		return { tactic: tacticColumn, targets: tacticTargetColumn };
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

		const nameColumn = window.document.createElement("td");
		nameColumn.classList.add(Renderer.CenterContentClassName);

		const nameContainer = window.document.createElement("div");
		nameContainer.classList.add(Renderer.EmblemsContainerClassName);

		const nameEmblem = Renderer.createEmblemElement(hero.name);
		nameEmblem.classList.add(Renderer.NameEmblemClassName);

		nameContainer.appendChild(nameEmblem);
		nameColumn.appendChild(nameContainer);

		row.appendChild(nameColumn);

		const emblems = Renderer.#generateEmblemColumns(hero.emblems, false);
		const emblemsTr = Renderer.#generateEmblemColumns(hero.emblemsTranscended, true);

		row.appendChild(emblems.stats);
		row.appendChild(emblemsTr.stats);

		row.appendChild(emblems.emblems);
		row.appendChild(emblemsTr.emblems);

		const trait1 = Renderer.#generateTraitColumn(hero.trait1, false);
		const trait1Tr = Renderer.#generateTraitColumn(hero.trait1Transcended, true);
		row.appendChild(trait1);
		row.appendChild(trait1Tr);

		const trait2 = Renderer.#generateTraitColumn(hero.trait2, false);
		const trait2Tr = Renderer.#generateTraitColumn(hero.trait2Transcended, true);
		row.appendChild(trait2);
		row.appendChild(trait2Tr);

		const skill = Renderer.#generateSkillColumns(hero.summonSkill, false);
		row.appendChild(skill.summonSkill);
		row.appendChild(skill.element);

		const skillTr = Renderer.#generateSkillColumns(hero.summonSkillTranscended, true);
		row.appendChild(skillTr.summonSkill);
		row.appendChild(skillTr.element);

		const tactic = Renderer.#generateTacticColumns(hero.tactic, false);
		row.appendChild(tactic.tactic);
		row.appendChild(tactic.targets);

		const tacticTr = Renderer.#generateTacticColumns(hero.tacticTranscended, true);
		row.appendChild(tacticTr.tactic);
		row.appendChild(tacticTr.targets);

		return row;
	}
}
