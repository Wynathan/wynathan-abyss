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
	 * @param {HTMLElement} element 
	 */
	static #getIndexAmongstSiblings(element)
	{
		const parent = element.parentElement;
		for (let i = 0; i < parent.children.length; i++)
		{
			if (element === parent.children[i])
				return i;
		}

		return -1;
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
		Loader.show();

		const target = Events.getParentByClass(e.target, Form.OptionsItemClassName);

		if (target.id === Form.ResetFiltersId)
		{
			Events.#toggleSelected(target, true)
			Form.resetFilters();
			Form.filter();

			window.clearTimeout(Events.#lastResetTimeoutId);
			Events.#lastResetTimeoutId = window.setTimeout(Events.#toggleSelected, 300, target, false);
		}
		else
		{
			const isSelected = Events.#toggleSelected(target);

			const index = Events.#getIndexAmongstSiblings(target);
			Config.setDefaultOptionAt(index, isSelected);
			
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

		Loader.hide();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static displayOptionsOnClick(e)
	{
		Loader.show();

		/** @type HTMLElement */
		const target = e.target;

		const isSelected = Events.#toggleSelected(target);

		const index = Events.#getIndexAmongstSiblings(target);
		Config.setDefaultDisplayOptionAt(index, isSelected);
		
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
		else if (target.id === Form.DisplayCenterId)
		{
			const body = window.document.getElementsByTagName("body")[0];
			if (isSelected)
				body.classList.add(Renderer.CenterContentClassName);
			else
				body.classList.remove(Renderer.CenterContentClassName);
		}

		Loader.hide();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static displayColumnsOnClick(e)
	{
		Loader.show();

		/** @type HTMLElement */
		const target = e.target;

		const isSelected = Events.#toggleSelected(target);

		const index = Events.#getIndexAmongstSiblings(target);
		Config.setDefaultDisplayColumnAt(index, isSelected);

		Renderer.toggleColumnDisplay(index + 1, isSelected);

		Loader.hide();
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

		Loader.show();

		if (target.nodeName === "CANVAS")
			target = target.parentElement;

		Events.#toggleSelected(target);

		Form.filter();

		Loader.hide();
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
	 * @param {MouseEvent} e 
	 */
	static skillBuffOnClick(e)
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
	static #getClosestPromptEmblemContainer(element)
	{
		const button = Events.getParentByClass(element, Prompt.ButtonClassName);
		const emblemContainer = button.querySelector("." + Prompt.EmblemContainerClassName);
		return emblemContainer;
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static #getClosestPromptEmblem(element)
	{
		const emblemContainer = Events.#getClosestPromptEmblemContainer(element);
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

		Loader.show();
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const heroName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.setSearchBoxValueSilent(heroName);
		Form.filterByHeroName(heroName);

		Loader.hide();
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

		Loader.show();
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const heroName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.filterByTargetHero(heroName);

		Loader.hide();
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

		Loader.show();
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const summonSkillName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();
		Form.filterBySummonSkill(summonSkillName);

		Loader.hide();
	}

	/**
	 * 
	 * @param {MouseEvent} e 
	 */
	static whoIsSkillBuffOnClick(e)
	{
		/** @type HTMLElement */
		let target = e.target;

		if (!Prompt.isPrompt(target))
			return;

		Loader.show();

		const container = Events.#getClosestPromptEmblemContainer(target);
		/** @type {HTMLDivElement} */
		const skillBuff = container.querySelector("div." + Renderer.SummonSkillBuffClassName);
		const buff = skillBuff.dataset[Renderer.SummonSkillBuffDataKey];
		const valueString = skillBuff.dataset[Renderer.SummonSkillBuffValueDataKey];
		const value = Renderer.stringToBool(valueString);

		Form.resetFilters();
		Form.filterBySummonSkillBuff(buff, value);

		Loader.hide();
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

		Loader.show();
		
		Form.resetFilters();
		Form.filterByTargetPlayer();

		Loader.hide();
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

		Loader.show();
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);

		Form.resetFilters();

		if (emblemName === TacticTarget.AllSummons)
			Form.filter();
		else
			Form.toggleFilterByKey(emblemName);

		Loader.hide();
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

		Loader.show();

		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);
		
		Form.resetFilters();
		Form.filterByTargetEmblem(emblemName);

		Loader.hide();
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

		Loader.show();
		
		const emblemElement = Events.#getClosestPromptEmblem(target);
		const emblemName = Renderer.getEmblemName(emblemElement);
		
		Form.resetFilters();
		Form.filterBySummonSkillElement(emblemName);

		Loader.hide();
	}
}
