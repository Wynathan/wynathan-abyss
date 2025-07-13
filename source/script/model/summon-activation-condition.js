class SummonActivationCondition
{
	//#region Defines
	static TypeHero = 1;
	static TypeStatEmblem = 2;
	static TypePersonalEmblem = 3;
	//#endregion Defines

	/** @type {string} */
	name;
	/** @type {number} */
	type;
	/** @type {number} */
	amount;

	/**
	 * 
	 * @param {string} name 
	 * @param {number} type 
	 * @param {number=} amount
	 */
	constructor(name, type, amount)
	{
		this.name = name;
		this.type = type;
		this.amount = amount || 1;
	}

	isHero()
	{
		return this.type === SummonActivationCondition.TypeHero;
	}

	isStat()
	{
		return this.type === SummonActivationCondition.TypeStatEmblem;
	}

	isPersonalEmblem()
	{
		return this.type === SummonActivationCondition.TypePersonalEmblem;
	}
}
