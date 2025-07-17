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

	/**
	 * 
	 * @param {Tactic} other 
	 * @param {boolean=} ignoreTargets 
	 * @returns {boolean}
	 */
	equals(other, ignoreTargets)
	{
		if (!other)
			return false;

		if (this.name !== other.name)
			return false;

		if (this.description !== other.description)
			return false;

		if (this.activationConditions.length !== other.activationConditions.length)
			return false;

		if (!ignoreTargets)
		{
			if (this.targets.length !== other.targets.length)
				return false;

			for (let i = 0; i < this.targets.length; i++)
			{
				if (!this.targets[i].equals(other.targets[i]))
					return false;
			}
		}

		for (let i = 0; i < this.activationConditions.length; i++)
		{
			if (!this.activationConditions[i].equals(other.activationConditions[i]))
				return false;
		}

		return true;
	}

	/**
	 * 
	 * @param {Tactic} other 
	 * @returns {boolean}
	 */
	targetsEqual(other)
	{
		if (!other)
			return false;

		for (let i = 0; i < this.targets.length; i++)
		{
			if (!this.targets[i].equals(other.targets[i]))
				return false;
		}

		return true;
	}
}
