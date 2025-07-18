class SummonSkill 
{
	static BuffAmount = "Amount";
	static BuffRange = "Range";
	static BuffDuration = "Duration";

	/** @type {string} */
	name;
	/** @type {Emblem[]=} */
	elements;
	/** @type {SummonActivationCondition[]} */
	upgradeConditions = [];
	/** @type {boolean} */
	isBuffedByAmount;
	/** @type {boolean} */
	isBuffedByRange;
	/** @type {boolean} */
	isBuffedByDuration;

	/**
	 * 
	 * @param {string} name 
	 * @param {(string|string[]|null)} elements 
	 * @param {SummonActivationCondition[]} upgradeConditions 
	 * @param {boolean=} isBuffedByAmount 
	 * @param {boolean=} isBuffedByRange 
	 * @param {boolean=} isBuffedByDuration 
	 */
	constructor(
		name, 
		elements, 
		upgradeConditions,
		isBuffedByAmount,
		isBuffedByRange,
		isBuffedByDuration
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

		this.isBuffedByAmount = Boolean(isBuffedByAmount);
		this.isBuffedByRange = Boolean(isBuffedByRange);
		this.isBuffedByDuration = Boolean(isBuffedByDuration);
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

	/**
	 * 
	 * @param {string} buff 
	 * @param {boolean} value 
	 * @returns {boolean}
	 */
	hasBuffValue(buff, value)
	{
		const valueBoolean = Boolean(value);

		if (buff === SummonSkill.BuffAmount)
			return this.isBuffedByAmount === valueBoolean;

		if (buff === SummonSkill.BuffRange)
			return this.isBuffedByRange === valueBoolean;

		if (buff === SummonSkill.BuffDuration)
			return this.isBuffedByDuration === valueBoolean;

		return false;
	}

	/**
	 * 
	 * @param {SummonSkill} other 
	 * @returns {boolean}
	 */
	equals(other)
	{
		if (!other)
			return false;

		if (this.name !== other.name)
			return false;

		if (this.elements.length !== other.elements.length)
			return false;

		if (this.upgradeConditions.length !== other.upgradeConditions.length)
			return false;

		for (let i = 0; i < this.elements.length; i++)
		{
			if (!this.elements[i].equals(other.elements[i]))
				return false;
		}

		for (let i = 0; i < this.upgradeConditions.length; i++)
		{
			if (!this.upgradeConditions[i].equals(other.upgradeConditions[i]))
				return false;
		}

		if (this.isBuffedByAmount !== other.isBuffedByAmount)
			return false;

		if (this.isBuffedByRange !== other.isBuffedByRange)
			return false;

		if (this.isBuffedByDuration !== other.isBuffedByDuration)
			return false;

		return true;
	}
}
