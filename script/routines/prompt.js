class Prompt
{
	static Id = "prompt";

	static ButtonClassName = "prompt-button";
	static EmblemContainerClassName = "prompt-emblem";

	static WhoIsId = "prompt-who-is";
	static WhoIsEmblemId = "prompt-who-is-emblem";
	static WhoBuffsId = "prompt-who-buffs";
	static WhoBuffsEmblemId = "prompt-who-buffs-emblem";

	static WhoseSkillIsElementId = "prompt-whose-skill-is-element";
	static WhoseSkillIsElementEmblemId = "prompt-whose-skill-is-element-emblem";

	static #getPrompt()
	{
		return window.document.getElementById(Prompt.Id);
	}

	static initialise()
	{
		Prompt.hide();

		/**
		 * 
		 * @param {MouseEvent} e 
		 */
		const dismissCallback = function(e)
		{
			/** @type {Element} */
			let target = e.target;

			if (target.nodeName === "CANVAS")
				target = target.parentElement;

			if (target.classList.contains(Renderer.EmblemClassName))
			{
				if (Events.getParentById(target, Renderer.TargetTableId))
					return;
			}

			Prompt.hide();
		};

		window.document.addEventListener("click", dismissCallback);
	}

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static isPrompt(element)
	{
		if (!element)
			return false;

		const parent = Events.getParentById(element, Prompt.Id);
		return Boolean(parent);
	}

	static hide()
	{
		const prompt = Prompt.#getPrompt();
		prompt.classList.add(Renderer.HiddenClassName);
	}

	/**
	 * 
	 * @param {MouseEvent} e
	 */
	static show(e)
	{
		/** @type {Element} */
		const target = e.target.nodeName === "CANVAS" ? e.target.parentElement : e.target;

		const prompt = Prompt.#getPrompt();
		const hiddenClassName = Renderer.HiddenClassName;
		
		const whoIs = prompt.querySelector("#" + Prompt.WhoIsId);
		const whoBuffs = prompt.querySelector("#" + Prompt.WhoBuffsId);
		const whoIsElement = prompt.querySelector("#" + Prompt.WhoseSkillIsElementId);

		whoIs.classList.remove(hiddenClassName);
		whoBuffs.classList.remove(hiddenClassName);

		whoIsElement.classList.add(hiddenClassName);

		whoIs.removeEventListener("click", Events.whoIsHeroOnClick);
		whoIs.removeEventListener("click", Events.whoIsSummonSkillOnClick);
		whoIs.removeEventListener("click", Events.whoIsEmblemOnClick);

		whoBuffs.removeEventListener("click", Events.whoBuffsHeroOnClick);
		whoBuffs.removeEventListener("click", Events.whoBuffsPlayerOnClick);
		whoBuffs.removeEventListener("click", Events.whoBuffsEmblemOnClick);

		whoIsElement.removeEventListener("click", Events.whoseSkillIsElementOnClick);

		const whoIsEmblem = whoIs.querySelector("#" + Prompt.WhoIsEmblemId);
		const whoBuffsEmblem = whoBuffs.querySelector("#" + Prompt.WhoBuffsEmblemId);

		if (Renderer.getIsHero(target))
		{
			const heroName = Renderer.getEmblemName(target);
			
			const emblem1 = Renderer.createEmblemElement(heroName);
			const emblem2 = Renderer.createEmblemElement(heroName);

			whoIsEmblem.replaceChildren(emblem1);
			whoBuffsEmblem.replaceChildren(emblem2);

			whoIs.addEventListener("click", Events.whoIsHeroOnClick);
			whoBuffs.addEventListener("click", Events.whoBuffsHeroOnClick);
		}
		else if (Renderer.getIsSummonSkill(target))
		{
			const summonSkillName = Renderer.getEmblemName(target);

			const emblem = Renderer.createEmblemElement(summonSkillName);

			whoIsEmblem.replaceChildren(emblem);
			whoBuffsEmblem.replaceChildren();

			whoBuffs.classList.add(hiddenClassName);

			whoIs.addEventListener("click", Events.whoIsSummonSkillOnClick);
		}
		else if (Renderer.getIsPlayer(target))
		{
			const emblemName = Renderer.getEmblemName(target);

			const emblem = Renderer.createEmblemElement(emblemName);

			whoIsEmblem.replaceChildren();
			whoBuffsEmblem.replaceChildren(emblem);

			whoIs.classList.add(hiddenClassName);

			whoBuffs.addEventListener("click", Events.whoBuffsPlayerOnClick);
		}
		else
		{
			const emblemName = Renderer.getEmblemName(target);
			const emblemType = Emblem.getType(emblemName);

			const emblem1 = Renderer.createEmblemElement(emblemName);
			const emblem2 = Renderer.createEmblemElement(emblemName);

			whoIsEmblem.replaceChildren(emblem1);
			whoBuffsEmblem.replaceChildren(emblem2);

			whoIs.addEventListener("click", Events.whoIsEmblemOnClick);
			whoBuffs.addEventListener("click", Events.whoBuffsEmblemOnClick);

			if (emblemType === Emblem.TypeElement)
			{
				const elementEmblem = whoIsElement.querySelector("#" + Prompt.WhoseSkillIsElementEmblemId);

				const emblem3 = Renderer.createEmblemElement(emblemName);

				elementEmblem.replaceChildren(emblem3);

				whoIsElement.classList.remove(hiddenClassName);

				whoIsElement.addEventListener("click", Events.whoseSkillIsElementOnClick);
			}
		}

		// Move Prompt to the target
		prompt.classList.remove(hiddenClassName);

		const boundaryWidth = window.innerWidth;
		const boundaryHeight = window.document.querySelector("body").clientHeight;

		const promptWidth = prompt.offsetWidth;
		const promptHeight = prompt.offsetHeight;

		const marginX = 20;
		const marginY = 20;

		let x = e.pageX;
		let y = e.pageY;

		if (x + promptWidth > boundaryWidth - marginX)
			x = x - promptWidth;

		if (y + promptHeight > boundaryHeight - marginY)
			y = y - promptHeight;

		prompt.style.left = x + "px";
		prompt.style.top = y + "px";
	}
}
