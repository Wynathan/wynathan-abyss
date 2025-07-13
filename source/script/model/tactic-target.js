class TacticTarget
{
	static Player = "Player";

	static TypePlayer = 1;
	static TypeHero = 2;
	static TypeEmblem = 3;
	static TypeSummoningSkill = 4;

	/** @type {number} */
	type;
	/** @type {string=} */
	name;
	/** @type {Emblem=} */
	emblem;

	/**
	 * 
	 * @param {number} type 
	 * @param {string=} name 
	 */
	constructor(type, name)
	{
		this.type = type;

		switch (type)
		{
			case TacticTarget.TypePlayer:
				this.name = TacticTarget.Player;
				break;
			case TacticTarget.TypeEmblem:
				this.emblem = new Emblem(name);
				this.name = this.emblem.name;
				break;
			default:
				this.name = name;
				break;
		}
	}

	isPlayer()
	{
		return this.type === TacticTarget.TypePlayer;
	}

	isHero()
	{
		return this.type === TacticTarget.TypeHero;
	}

	isEmblem()
	{
		return this.type === TacticTarget.TypeEmblem;
	}

	isSummonSkill()
	{
		return this.type === TacticTarget.TypeSummoningSkill;
	}
}
