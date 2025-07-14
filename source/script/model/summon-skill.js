class SummonSkill 
{
	/** @type {string} */
	name;
	/** @type {Emblem[]=} */
	elements;
	/** @type {SummonActivationCondition[]} */
	upgradeConditions = [];
	/** @type {boolean} */
	isImprovedByAmount;
	/** @type {boolean} */
	isImprovedByRange;
	/** @type {boolean} */
	isImprovedByDuration;

	/**
	 * 
	 * @param {string} name 
	 * @param {(string|string[]|null)} elements 
	 * @param {SummonActivationCondition[]} upgradeConditions 
	 * @param {boolean=} isImprovedByAmount 
	 * @param {boolean=} isImprovedByRange 
	 * @param {boolean=} isImprovedByDuration 
	 */
	constructor(
		name, 
		elements, 
		upgradeConditions,
		isImprovedByAmount,
		isImprovedByRange,
		isImprovedByDuration
	)
	{
		this.name = name;
		this.elements = [];

		if (elements)
		{
			if (typeof elements === "object" && elements.constructor === Array)
			{
				for (let i = 0; i < elements.length; i++)
				{
					const emblem = new Emblem(elements[i]);
					this.elements.push(emblem);
				}
			}
			else
			{
				const emblem = new Emblem(elements);
				this.elements.push(emblem);
			}
		}

		if (upgradeConditions)
			this.upgradeConditions = upgradeConditions;

		this.isImprovedByAmount = Boolean(isImprovedByAmount);
		this.isImprovedByRange = Boolean(isImprovedByRange);
		this.isImprovedByDuration = Boolean(isImprovedByDuration);
	}

	/**
	 * @returns {boolean}
	 */
	hasAnyElements()
	{
		return this.elements && this.elements.length > 0;
	}

	/**
	 * 
	 * @param {string} elementName 
	 * @returns {boolean}
	 */
	hasElement(elementName)
	{
		if (!this.elements)
			return false;

		for (let i = 0; i < this.elements.length; i++)
		{
			const element = this.elements[i];
			if (elementName === element.name)
				return true;
		}

		return false;
	}
}
