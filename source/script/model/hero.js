class Hero
{
	static SexMale = 1;
	static SexFemale = 2;

	/** @type {string} */
	name;
	/** @type {string=} */
	nameInGame = null;
	/** @type {string[]} */
	searchTokens;
	/** @type {number} */
	sex;
	/** @type {Object.<string, Emblem>} */
	emblems = { };
	/** @type {Object.<string, Emblem>} */
	emblemsTranscended = { };
	/** @type {string[]} */
	trait1 = [];
	/** @type {string[]} */
	trait1Transcended = [];
	/** @type {string[]} */
	trait2 = [];
	/** @type {string[]} */
	trait2Transcended = [];
	/** @type {SummonSkill} */
	summonSkill;
	/** @type {SummonSkill} */
	summonSkillTranscended;
	/** @type {Tactic} */
	tactic;
	/** @type {Tactic} */
	tacticTranscended;

	/**
	 * 
	 * @param {string} name name of the Hero.
	 * @param {string=} nameInGame (optional) name of the Hero as displayed in-game.
	 * @param {string[]=} searchTokens (optional) additional extra search tokens.
	 * @param {number} sex sex of the Hero.
	 * @param {string[]} statEmblems 
	 * @param {string[]=} statEmblemsTranscended 
	 * @param {string[]} personalEmblems 
	 * @param {string[]=} personalEmblemsTranscended 
	 * @param {string[]} trait1 
	 * @param {string[]=} trait1Transcended 
	 * @param {string[]} trait2 
	 * @param {string[]=} trait2Transcended 
	 * @param {SummonSkill} summonSkill 
	 * @param {SummonSkill=} summonSkillTranscended 
	 * @param {Tactic} tactic 
	 * @param {Tactic=} tacticTranscended 
	 */
	constructor(
		name, 
		nameInGame, 
		searchTokens, 
		sex, 
		statEmblems,
		statEmblemsTranscended,
		personalEmblems,
		personalEmblemsTranscended,
		trait1,
		trait1Transcended,
		trait2,
		trait2Transcended,
		summonSkill,
		summonSkillTranscended,
		tactic,
		tacticTranscended
	)
	{
		this.searchTokens = [];

		this.name = name;
		this.searchTokens.push(this.name);
		
		if (nameInGame && typeof nameInGame === "string" && nameInGame.length > 0)
		{
			this.nameInGame = nameInGame;
			this.searchTokens.push(this.nameInGame);
		}

		if (searchTokens)
		{
			for (let i = 0; i < searchTokens.length; i++)
				this.searchTokens.push(searchTokens[i]);
		}

		this.sex = sex ?? Hero.SexMale;

		/**
		 * 
		 * @param {string[]} source 
		 * @param {Object.<string, Emblem>} target 
		 */
		let copyEmblems = function(source, target)
		{
			for (let i = 0; i < source.length; i++)
			{
				const emblemName = source[i];
				let emblem = new Emblem(emblemName);
				if (target[emblemName])
					target[emblemName].amount += 1;
				else
					target[emblemName] = emblem;
			}
		}

		if (statEmblems && statEmblems.length > 0)
			copyEmblems(statEmblems, this.emblems);

		if (statEmblemsTranscended && statEmblemsTranscended.length > 0)
			copyEmblems(statEmblemsTranscended, this.emblemsTranscended);
		else
			copyEmblems(statEmblems, this.emblemsTranscended);

		if (personalEmblems && personalEmblems.length > 0)
			copyEmblems(personalEmblems, this.emblems);

		if (personalEmblemsTranscended && personalEmblemsTranscended.length)
			copyEmblems(personalEmblemsTranscended, this.emblemsTranscended);
		else
			copyEmblems(personalEmblems, this.emblemsTranscended);

		let copyTraits = function(source, target)
		{
			for (let i = 0; i < source.length; i++)
				target.push(source[i]);
		}

		if (trait1)
			copyTraits(trait1, this.trait1);

		if (trait1Transcended && trait1Transcended.length > 0)
			copyTraits(trait1Transcended, this.trait1Transcended);
		else
			copyTraits(trait1, this.trait1Transcended);

		if (trait2)
			copyTraits(trait2, this.trait2);
		
		if (trait2Transcended && trait2Transcended.length > 0)
			copyTraits(trait2Transcended, this.trait2Transcended);
		else
			copyTraits(trait2, this.trait2Transcended);

		if (summonSkill)
			this.summonSkill = summonSkill;

		if (summonSkillTranscended)
			this.summonSkillTranscended = summonSkillTranscended;
		else
			this.summonSkillTranscended = summonSkill;

		if (tactic)
			this.tactic = tactic;

		if (tacticTranscended)
			this.tacticTranscended = tacticTranscended;
		else
			this.tacticTranscended = tactic;
	}

	doesT12ChangeStats()
	{
		/**
		 * 
		 * @param {Object.<string, Emblem>} a 
		 * @param {Object.<string, Emblem>} b 
		 * @returns boolean
		 */
		const doesNotContain = function(a, b)
		{
			for (let emblemName in a)
			{
				const aEmblem = a[emblemName];
				if (!aEmblem.isStatOrElement())
					continue;

				const bEmblem = b[emblemName];
				if (!bEmblem)
					return true;

				if (aEmblem.amount !== bEmblem.amount)
					return true;
			}

			return false;
		}

		const a = this.emblems;
		const b = this.emblemsTranscended;

		return doesNotContain(a, b) || doesNotContain(b, a);
	}

	doesT12ChangePersonal()
	{
		/**
		 * 
		 * @param {Object.<string, Emblem>} a 
		 * @param {Object.<string, Emblem>} b 
		 * @returns boolean
		 */
		const doesNotContain = function(a, b)
		{
			for (let emblemName in a)
			{
				const aEmblem = a[emblemName];
				if (!aEmblem.isPersonal())
					continue;

				const bEmblem = b[emblemName];
				if (!bEmblem)
					return true;

				if (aEmblem.amount !== bEmblem.amount)
					return true;
			}

			return false;
		}

		const a = this.emblems;
		const b = this.emblemsTranscended;

		return doesNotContain(a, b) || doesNotContain(b, a);
	}

	/**
	 * 
	 * @param {string[]} a 
	 * @param {string[]} b 
	 * @returns {boolean}
	 */
	#areStringArraysEqual(a, b)
	{
		if (!a || !b)
			return false;

		if (a === b)
			return true;

		if (a.length !== b.length)
			return false;

		for (let i = 0; i < a.length; i++)
		{
			if (a[i] !== b[i])
				return false;
		}

		return true;
	}

	doesT12ChangeTrait1()
	{
		return !this.#areStringArraysEqual(this.trait1, this.trait1Transcended);
	}

	doesT12ChangeTrait2()
	{
		return !this.#areStringArraysEqual(this.trait2, this.trait2Transcended);
	}
}
