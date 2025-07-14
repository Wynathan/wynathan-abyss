class Emblem
{
	//#region Defines
	// #region Stat Emblems
	static StatVigour = "Vigour";
	static StatSkill = "Skill";
	static StatStrength = "Strength";
	static StatSpeed = "Speed";
	static StatWisdom = "Wisdom";
	static StatCharm = "Charm";

	static ElementFlame = "Flame";
	static ElementIce = "Ice";
	static ElementWind = "Wind";
	static ElementBolt = "Bolt";
	static ElementSlay = "Slay";
	// #endregion Stat Emblems

	// #region Factions
	static FactionWei = "Wei";
	static FactionWu = "Wu";
	static FactionShu = "Shu";
	static FactionJin = "Jin";
	static FactionLvBu = "Lü Bu Army";
	static FactionDongZhuo = "Dong Zhuo Army";
	static FactionYuanShao = "Yuan Shao Army";
	static FactionYellowTurbans = "Yellow Turbans";

	static FactionOda = "Oda";
	static FactionToyotomi = "Toyotomi";
	static FactionTokugawa = "Tokugawa";
	static FactionUesugi = "Uesugi";
	static FactionTakeda = "Takeda";
	static FactionSanada = "Sanada";
	static FactionHojo = "Hojo";
	static FactionImagawa = "Imagawa";
	static FactionAzai = "Azai";
	static FactionMori = "Mori";
	static FactionShimazu = "Shimazu";
	static FactionTachibana = "Tachibana";
	static FactionChosokabe = "Chosokabe";
	static FactionDate = "Date";

	static FactionIndependent = "Independent";
	// #endregion Factions

	static TypeAbility = 1;
	static TypeStat = Emblem.TypeAbility;

	static TypeAttribute = 2;
	static TypeElement = Emblem.TypeAttribute;

	static TypePersonal = 3;
	static TypeFaction = 4;
	//#endregion Defines

	/**
	 * 
	 * @param {string} name name of the Emblem.
	 * @returns {number} type of the Emblem.
	 */
	static getType(name)
	{
		switch (name)
		{
			// #region Stat Emblems
			case Emblem.StatVigour:
			case Emblem.StatSkill:
			case Emblem.StatStrength:
			case Emblem.StatSpeed:
			case Emblem.StatWisdom:
			case Emblem.StatCharm:
				return Emblem.TypeStat;
			case Emblem.ElementFlame:
			case Emblem.ElementIce:
			case Emblem.ElementWind:
			case Emblem.ElementBolt:
			case Emblem.ElementSlay:
				return Emblem.TypeElement;
			// #endregion Stat Emblems

			// #region Factions
			case Emblem.FactionWei:
			case Emblem.FactionWu:
			case Emblem.FactionShu:
			case Emblem.FactionJin:
			case Emblem.FactionLvBu:
			case Emblem.FactionDongZhuo:
			case Emblem.FactionYuanShao:
			case Emblem.FactionYellowTurbans:
			case Emblem.FactionIndependent:
			case Emblem.FactionOda:
			case Emblem.FactionToyotomi:
			case Emblem.FactionTokugawa:
			case Emblem.FactionUesugi:
			case Emblem.FactionTakeda:
			case Emblem.FactionSanada:
			case Emblem.FactionHojo:
			case Emblem.FactionImagawa:
			case Emblem.FactionAzai:
			case Emblem.FactionMori:
			case Emblem.FactionShimazu:
			case Emblem.FactionTachibana:
			case Emblem.FactionChosokabe:
			case Emblem.FactionDate:
				return Emblem.TypeFaction;
			// #endregion Factions
			
			// #region Personal Emblems
			default:
				return Emblem.TypePersonal;
			// #endregion Personal Emblems
		}
	}

	/**
	 * 
	 * @param {string} name name of the Emblem.
	 * @returns {number} sorting order of the Emblem.
	 */
	static getSortOrder(name)
	{
		switch (name)
		{
			// #region Stat Emblems
			case Emblem.StatVigour:
				return 1;
			case Emblem.StatSkill:
				return 2;
			case Emblem.StatStrength:
				return 3;
			case Emblem.StatSpeed:
				return 4;
			case Emblem.StatWisdom:
				return 5;
			case Emblem.StatCharm:
				return 6;
			
			case Emblem.ElementFlame:
				return 10;
			case Emblem.ElementIce:
				return 11;
			case Emblem.ElementWind:
				return 12;
			case Emblem.ElementBolt:
				return 13;
			case Emblem.ElementSlay:
				return 14;
			// #endregion Stat Emblems
			
			// #region Factions
			case Emblem.FactionWei:
				return 20;
			case Emblem.FactionWu:
				return 21;
			case Emblem.FactionShu:
				return 22;
			case Emblem.FactionJin:
				return 23;
			case Emblem.FactionLvBu:
				return 24;
			case Emblem.FactionDongZhuo:
				return 25;
			case Emblem.FactionYuanShao:
				return 26;
			case Emblem.FactionYellowTurbans:
				return 27;
			
			case Emblem.FactionOda:
				return 30;
			case Emblem.FactionToyotomi:
				return 31;
			case Emblem.FactionTokugawa:
				return 32;
			case Emblem.FactionUesugi:
				return 33;
			case Emblem.FactionTakeda:
				return 34;
			case Emblem.FactionSanada:
				return 35;
			case Emblem.FactionHojo:
				return 36;
			case Emblem.FactionImagawa:
				return 37;
			case Emblem.FactionAzai:
				return 38;
			case Emblem.FactionMori:
				return 39;
			case Emblem.FactionShimazu:
				return 40;
			case Emblem.FactionTachibana:
				return 41;
			case Emblem.FactionChosokabe:
				return 42;
			case Emblem.FactionDate:
				return 43;
			
			case Emblem.FactionIndependent:
				return 50;
			// #endregion Factions
			
			// TODO
			// #region Personal Emblems

			// #endregion Personal Emblems

			default:
				return 1000;
		}
	}

	/** @type {string} */
	name;
	/** @type {number} */
	type;
	/** @type {number} */
	amount;
	/** @type {number} */
	sortOrder;

	/**
	 * 
	 * @param {string} name name of the Emblem.
	 * @param {number=} type type of the Emblem; if not provided, will determine by `name`.
	 */
	constructor(name, type)
	{
		this.name = name;

		if (type)
			this.type = type;
		else
			this.type = Emblem.getType(name);

		this.amount = 1;

		this.sortOrder = Emblem.getSortOrder(this.name);
	}

	isStat()
	{
		return this.type === Emblem.TypeStat;
	}

	isElement()
	{
		return this.type === Emblem.TypeElement;
	}

	isStatOrElement()
	{
		return this.isStat() || this.isElement();
	}

	isPersonal()
	{
		return this.type === Emblem.TypePersonal
			|| this.isFaction();
	}

	isFaction()
	{
		return this.type === Emblem.TypeFaction;
	}
}
