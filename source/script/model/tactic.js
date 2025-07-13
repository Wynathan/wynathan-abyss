class Tactic 
{
	/** @type {string} */
	name;
	/** @type {string} */
	description;
	/** @type {TacticTarget[]} */
	targets = [];
	/** @type {SummonActivationCondition[]} */
	activationConditions = [];

	/**
	 * 
	 * @param {string} name 
	 * @param {string} description 
	 * @param {TacticTarget[]} targets 
	 * @param {SummonActivationCondition[]} activationConditions 
	 */
	constructor(name, description, targets, activationConditions)
	{
		this.name = name;
		this.description = description;

		if (targets)
			this.targets = targets;

		if (activationConditions)
			this.activationConditions = activationConditions;
	}
}
