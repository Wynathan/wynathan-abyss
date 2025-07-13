class Transcendence
{
	static TargetClassName = "t12-target"
	static HiddenClassName = "t12-hidden";
	static DataKey = "t12";
	static Options =
	{
		["Use Transcended"]: true,
		["Use Non-Transcended"]: false,
	};

	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	static getIsTranscendent(element)
	{
		const data = element.dataset[Transcendence.DataKey];
		
		if (data === true || data === "true")
			return true;

		if (data === false || data === "false")
			return false;

		return null;
	}

	/**
	 * 
	 * @param {HTMLTableCellElement} element 
	 * @param {boolean} isTranscendent 
	 */
	static setTranscendenceData(element, isTranscendent)
	{
		element.classList.add(Transcendence.TargetClassName);
		element.dataset[Transcendence.DataKey] = Boolean(isTranscendent);
	}

	static getOptions()
	{
		const formContainer = Form.getFilterFormContainer();
		const optionsContainer = formContainer.querySelector("div#options");
		const elements = optionsContainer.querySelectorAll("div." + Transcendence.TargetClassName);
		return elements;
	}

	static toggleDisplay()
	{
		const transcendenceOptionsElements = Transcendence.getOptions();
		const options = { };
		for (let i = 0; i < transcendenceOptionsElements.length; i++) {
			const element = transcendenceOptionsElements[i];
			/** @type {string} */
			const key = element.dataset[Transcendence.DataKey];
			const isSelected = element.classList.contains(Form.SelectedClassName);
			options[key] = isSelected;
		}

		const table = window.document.getElementById(Renderer.TargetTableId);
		const targets = table.querySelectorAll("." + Transcendence.TargetClassName);

		for (let i = 0; i < targets.length; i++)
		{
			const target = targets[i];
			/** @type {string} */
			const isTranscendent = target.dataset[Transcendence.DataKey];
			if (options[isTranscendent])
				target.classList.remove(Transcendence.HiddenClassName);
			else
				target.classList.add(Transcendence.HiddenClassName);
		}

		Form.toggleEmblemStatsDisplay(options["true"]);
	}
}
