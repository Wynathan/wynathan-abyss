class Events
{
	static #lastResetTimeoutId = -1;

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @param {string} id 
	 * @returns {HTMLElement | null}
	 */
	static getParentById(element, id)
	{
		let parent = element;
		while (parent)
		{
			if (parent.id === id)
				return parent;

			parent = parent.parentElement;
		}

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 * @param {string} className 
	 * @returns {HTMLElement | null}
	 */
	static getParentByClass(element, className)
	{
		let parent = element;
		while (parent)
		{
			if (parent.classList.contains(className))
				return parent;

			parent = parent.parentElement;
		}

		return null;
	}

	/**
	 * 
	 * @param {HTMLElement} target 
	 * @param {boolean=} forceValue
	 * @returns {boolean}
	 */
	static #toggleSelected(target, forceValue)
	{
		const selectedClassName = Form.SelectedClassName;
		let isSelected = false;

		if (typeof forceValue === "boolean")
		{
			if (forceValue)
			{
				isSelected = true;
				target.classList.add(selectedClassName);
			}
			else
			{
				isSelected = false;
				target.classList.remove(selectedClassName);
			}
		}
		else
		{
			if (target.classList.contains(selectedClassName))
			{
				isSelected = false;
				target.classList.remove(selectedClassName);
			}
			else
			{
				isSelected = true;
				target.classList.add(selectedClassName);
			}
		}

		return isSelected;
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static searchBoxOnInput(e)
	{
		/** @type HTMLInputElement */
		const target = e.target;

		if (Prompt.isPrompt(target))
			return;

		Form.filter();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static optionsOnClick(e)
	{
		/** @type HTMLElement */
		const target = Events.getParentByClass(e.target, Form.OptionsItemClassName);

		if (target.id === Form.ResetFiltersId)
		{
			Events.#toggleSelected(target, true)
			Form.resetFilters();
			Form.filter();

			window.clearTimeout(Events.#lastResetTimeoutId);
			Events.#lastResetTimeoutId = window.setTimeout(Events.#toggleSelected, 300, target, false);
			return;
		}
		
		const isSelected = Events.#toggleSelected(target);
		
		if (target.id === Form.UseInGameOrderId)
		{
			Renderer.toggleHeroInGameOrder(isSelected);
		}
		else if (target.id === Form.DisplayInGameNamesId)
		{
			Renderer.toggleHeroInGameNames(isSelected);
		}
		else if (target.id === Form.DisplayRowNumbersId)
		{
			Renderer.toggleRowNumbers(isSelected);
		}
		else
		{
			const transcendenceOptionsElements = Transcendence.getOptions();
			let isAnySelected = false;

			for (let i = 0; i < transcendenceOptionsElements.length; i++) 
			{
				const element = transcendenceOptionsElements[i];
				isAnySelected = isAnySelected || element.classList.contains(Form.SelectedClassName);
			}

			if (!isAnySelected)
			{
				// Take value as is and compare it as is.
				const lookup = target.dataset[Transcendence.DataKey];
				for (let i = 0; i < transcendenceOptionsElements.length; i++) 
				{
					const element = transcendenceOptionsElements[i];
					if (element.dataset[Transcendence.DataKey] !== lookup)
					{
						Events.#toggleSelected(element);
						break;
					}
				}
			}

			Transcendence.toggleDisplay();
		}
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static displayOptionsOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (Prompt.isPrompt(target))
			return;

		const isSelected = Events.#toggleSelected(target);

		const isTranscendent = Transcendence.getIsTranscendent(target);
		let className = null;

		for (let i = 0; i < target.classList.length; i++)
		{
			const currentClassName = target.classList.item(i);
			if (currentClassName.indexOf("header-") === 0)
			{
				className = currentClassName;
				break;
			}
		}

		const table = window.document.getElementById(Renderer.TargetTableId);
		const headers = table.querySelectorAll("th." + Transcendence.TargetClassName);
		
		let index = -1;
		for (let i = 0; i < headers.length; i++)
		{
			const header = headers[i];
			if (header.classList.contains(className))
			{
				const headerTr = Transcendence.getIsTranscendent(header);
				if (headerTr === isTranscendent)
				{
					index = i;
					break;
				}
			}
		}

		Renderer.toggleColumnDisplay(index + 1, isSelected);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static filterOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (Prompt.isPrompt(target))
			return;

		if (target.nodeName === "CANVAS")
			target = target.parentElement;

		Events.#toggleSelected(target);

		Form.filter();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static emblemOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (Prompt.isPrompt(target))
			return;

		Prompt.show(e);
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static #getClosestPromptEmblem(element)
	{
		const button = Events.getParentByClass(element, Prompt.ButtonClassName);
		const emblemContainer = button.querySelector("." + Prompt.EmblemContainerClassName);
		const emblemElement = emblemContainer.querySelector("." + Renderer.EmblemClassName);
		return emblemElement;
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoIsHeroOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const heroName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.setSearchBoxValueSilent(heroName);
		Form.filterByHeroName(heroName);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoBuffsHeroOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const heroName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.filterByTargetHero(heroName);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoIsSummonSkillOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const summonSkillName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.filterBySummonSkill(summonSkillName);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoBuffsPlayerOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		Form.resetFilters();
		Form.filterByTargetPlayer();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoIsEmblemOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();

		if (emblemName === TacticTarget.AllSummons)
			Form.filter();
		else
			Form.toggleFilterByKey(emblemName);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoBuffsEmblemOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);
		
		Form.resetFilters();
		Form.filterByTargetEmblem(emblemName);
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoseSkillIsElementOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);
		
		Form.resetFilters();
		Form.filterBySummonSkillElement(emblemName);
	}
}
