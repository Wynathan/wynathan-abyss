class SummonSkill 
{
	/** @type {string} */
	name;
	/** @type {Emblem=} */
	element;
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
	 * @param {string=} element 
	 * @param {SummonActivationCondition[]} upgradeConditions 
	 * @param {boolean=} isImprovedByAmount 
	 * @param {boolean=} isImprovedByRange 
	 * @param {boolean=} isImprovedByDuration 
	 */
	constructor(
		name, 
		element, 
		upgradeConditions,
		isImprovedByAmount,
		isImprovedByRange,
		isImprovedByDuration
	)
	{
		this.name = name;
		
		if (element)
			this.element = new Emblem(element);

		if (upgradeConditions)
			this.upgradeConditions = upgradeConditions;

		this.isImprovedByAmount = Boolean(isImprovedByAmount);
		this.isImprovedByRange = Boolean(isImprovedByRange);
		this.isImprovedByDuration = Boolean(isImprovedByDuration);
	}
}
