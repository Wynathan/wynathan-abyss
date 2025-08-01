class Data
{
	/** @type {Object.<string, Hero>} */
	static Heroes = { };
	/** @type {Object.<string, boolean>} */
	static SummonSkills = { };

	static initialise()
	{
		for (let i = 0; i < Data.#heroes.length; i++) 
		{
			const hero = Data.#heroes[i];
			Data.Heroes[hero.name] = hero;
			Data.SummonSkills[hero.summonSkill.name] = true;
			Data.SummonSkills[hero.summonSkillTranscended.name] = true;
		}
	}

	/**
	 * 
	 * @returns {Object.<string, Hero>}
	 */
	static copy()
	{
		return Data.copyFrom(Data.Heroes);
	}

	/**
	 * 
	 * @param {Object.<string, Hero>} data 
	 * @returns {Object.<string, Hero>}
	 */
	static copyFrom(data)
	{
		/** @type {Object.<string, Hero>} */
		let result = { };

		for (let heroKey in data)
			result[heroKey] = data[heroKey];

		return result;
	}

	static HeroesInGameOrder = 
	[
		"Xiahou Dun",
		"Cao Cao",
		"Xiahou Yuan",
		"Dian Wei",
		"Xu Chu",
		"Cao Ren",
		"Zhang Liao",
		"Xu Huang",
		"Zhang He",
		"Yue Jin",
		"Xun Yu",
		"Guo Jia",
		"Jia Xu",
		"Cao Pi",
		"Zhen Ji",
		"Wang Yi",

		"Zhou Yu",
		"Sun Jian",
		"Sun Ce",
		"Sun Quan",
		"Sun Shangxiang",
		"Da Qiao",
		"Xiao Qiao",
		"Lu Su",
		"Lü Meng",
		"Lu Xun",
		"Huang Gai",
		"Taishi Ci",
		"Gan Ning",
		"Zhou Tai",
		"Ling Tong",

		"Zhao Yun",
		"Liu Bei",
		"Guan Yu",
		"Zhang Fei",
		"Zhuge Liang",
		"Ma Chao",
		"Huang Zhong",
		"Wei Yan",
		"Huang Yueying",
		"Pang Tong",
		"Xu Shu",
		"Guan Ping",
		"Guan Yinping",
		"Fa Zheng",
		"Jiang Wei",
		"Zhang Xingcai",

		"Sima Yi",
		"Zhang Chunhua",
		"Sima Shi",
		"Sima Zhao",
		"Wang Yuanji",
		"Zhong Hui",

		"Zhang Jiao",
		"Dong Zhuo",
		"Yuan Shao",
		"Lü Bu",
		"Diaochan",
		"Lü Lingqi",
		"Chen Gong",
		"Meng Huo",
		"Zhurong",


		"Oda Nobunaga",
		"Lady No",
		"Akechi Mitsuhide",
		"Mori Ranmaru",
		"Oichi",
		"Shibata Katsuie",
		"Maeda Toshiie",
		"Maeda Keiji",
		"Gracia",

		"Toyotomi Hideyoshi",
		"Nene",
		"Takenaka Hanbei",
		"Kuroda Kanbei",
		"Ishida Mitsunari",
		"Shima Sakon",
		"Otani Yoshitsugu",
		"Kato Kiyomasa",
		"Chacha",
		"Sanada Yukimura (Mature)",

		"Tokugawa Ieyasu",
		"Hattori Hanzo",
		"Honda Tadakatsu",
		"Ina",
		"Ii Naotora",
		"Ii Naomasa",
		"Todo Takatora",
		"Hojo Ujiyasu",
		"Kai",
		"Fuma Kotaro",

		"Sanada Yukimura",
		"Kunoichi",
		"Takeda Shingen",
		"Uesugi Kenshin",
		"Naoe Kanetsugu",
		"Sanada Masayuki",
		"Sanada Nobuyuki",
		"Sasuke",

		"Date Masamune",
		"Azai Nagamasa",
		"Saika Magoichi",
		"Imagawa Yoshimoto",
		"Ishikawa Goemon",
		"Okuni",
		"Mori Monotari",
		"Kobayakawa Takakage",
		"Shimazu Yoshihiro",
		"Shimazu Toyohisa",
		"Tachibana Ginchiyo",
		"Tachibana Muneshige",
		"Chosokabe Motochika",


		"Sophie",
		"Ryza",
		"Yumia",
		"Hayabusa Ryu",
		"Ayane",
		"Rachel",
		"Momiji",
	];
	
	static #heroes = 
	[
		// Order:
		// 		Ruling Clan (e.g., Cao) from main branch to others (e.g., Cao Cao's branch, then Cao Ren)
		//			From eldest to youngest (e.g., Masayuki as father, Nobuyuki, Yukimura)
		//				Main spouse where applicable (e.g., Zhen Ji)
		// 				Concubines by significance (e.g., Chacha then Kai if applicable)
		// 		Notable clans (e.g. Xiahou, Guan, Zhang, Honda, Ii)
		// 		Advisors (e.g., Xun Yu, Guo Jia)
		//		Bodyguards and Shinobi where applicable (e.g., Dian Wei, Xu Chu; or Kunoichi, Sasuke)
		//		Famous general groups (e.g., Five Elite Generals of Cao Wei, Five Tiger Generals of Shu-Han)
		//		Generals
		//		Notable ladies (e.g., Kai in Hojo)
		//		Others


		// #region Cao Wei

		// #region Cao Cao
		new Hero(
			"Cao Cao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Charm", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Ruler", "Talent", "Commander"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Wei] Emblem.",
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 7% for every [Wei] Emblem.",
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 2
				"Increases Defence by 5% for every [Wei] Emblem.",
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases Defence by 7% for every [Wei] Emblem.",
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Absorption", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Conditions
					new SummonActivationCondition("Xun Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Guo Jia", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Cao Cao's Might", // Tactic Name
				"Increase Attack by 70% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Cao Cao's Might", // Tactic Name
				"Increase Attack and Defence by 70% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 10),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Cao Pi
		new Hero(
			"Cao Pi", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Ruler", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 10% for every [Wei] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 10% for every [Wei] Emblem.",
				"Increases Attack by 5% for every [Ice] Emblem.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
				"Increases your Tears of Blood by 500 at the start of battle in each phase.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
				"Increases your total [Ice] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Explosive Bullet", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhen Ji", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Ingenious Commands", // Tactic Name
				"Increases Attack for the [Ice] attribute by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Ingenious Commands", // Tactic Name
				"Increases Attack for the [Ice] attribute by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Zhen Ji
		new Hero(
			"Zhen Ji", // Name
			"Zhenji", // Name In-Game
			["Lady Zhen Ji", "Lady Zhenji"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Yuan Shao Army", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Grace] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 10% for every [Grace] Emblem.",
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2
				"Increases your total [Charm] Emblems by 50%.",
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Charm] Emblems by 50%.",
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Explosive Bullet", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Pi", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Captivating Performance", // Tactic Name
				"Increases Attack by 50% during Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Captivating Performance", // Tactic Name
				"Increases Attack by 60% during Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Cao Ren
		new Hero(
			"Cao Ren", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Commander", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Wei] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases Attack and Defence by 6% for every [Wei] Emblem.",
				"Increases Defence by 100% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2
				"Increases your total [Strength] Emblems by 50%.",
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Strength] Emblems by 50%.",
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Iron Wall", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Xiahou Dun", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Xiahou Yuan", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Unrelenting Blade", // Tactic Name
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Unrelenting Blade", // Tactic Name
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Xiahou Dun
		new Hero(
			"Xiahou Dun", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Brave General", "Commander"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Wei] Emblem.",
				"Slightly charges Musou Gauge when you inflict [Slay] Wound of enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Wei] Emblem.",
				"Slightly charges Musou Gauge when you inflict [Slay] Wound of enemies.",
			],
			[ // Trait 2
				"Cuts 1 second from the summoning cooldown timer when you inflict [Slay] Wound on enemies.",
				"Increases Attack Speed by 10% for 20 seconds when you are knocked into the air by an enemy attack.",
			],
			[ // Trait 2 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Slay] Wound on enemies.",
				"Increases Attack Speed by 10% for 20 seconds when you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Xiahou Yuan", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"One-Eyed Legend", // Tactic Name
				"Increases Attack by 100% for heroes with [Wei] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Commander", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"One-Eyed Legend", // Tactic Name
				"Increases Attack by 120% for heroes with [Wei] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
					new TacticTarget(TacticTarget.TypeEmblem, "Commander"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Commander", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Xiahou Yuan
		new Hero(
			"Xiahou Yuan", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Master Archer"], // Personal Emblems
			["Wei", "Brave General", "Master Archer"], // Personal Emblems Transcended
			[ // Trait 1
				"Replenishes 3% of your Health when you defeat 1 Sin Spewer enemy.",
			],
			[ // Trait 1 Transcended
				"Replenishes 3% of your Health when you defeat 1 Sin Spewer enemy.",
				"Increases Attack by 30% towards Level Boss enemies.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
				"Increases Attack by 50% towards Sin Spewer enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
				"Increases Attack by 300% towards Sin Spewer enemies.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Xiahou Dun", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Thundering Arrows of Miaocai", // Tactic Name
				"Causes and explosion that damages nearby enemies when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer)
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Master Archer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Thundering Arrows of Miaocai", // Tactic Name
				"Causes and explosion that damages nearby enemies when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer)
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Master Archer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Xun Yu
		new Hero(
			"Xun Yu", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.",
				"Increases your total [Ice] Emblems by 50%.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
				"Icreases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Wei] Emblems to appear at Crystal Saplings.",
				"Icreases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Talented Advisor", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Talented Advisor", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 20% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Guo Jia
		new Hero(
			"Guo Jia", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Wisdom"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Strategist"], // Personal Emblems
			["Wei", "Strategist", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Charges Musou Gauge and Assemble Gauge by 20% when you acquire Peaches.",
			],
			[ // Trait 1 Transcended
				"Charges Musou Gauge and Assemble Gauge by 20% when you acquire Peaches.",
				"Shortens summoning cooldown for all heroes by 20% when Health is above 80%.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.",
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.",
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Attack)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Xun Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhang Liao", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Virtuous Speed", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Virtuous Speed", // Tactic Name
				"Shortens summoning cooldown by 30% and increases attribute Attack by 30% for heroes with [Wei] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 6),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Jia Xu
		new Hero(
			"Jia Xu", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Dong Zhuo Army", "Strategist", "Xiliang"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.",
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.",
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			[ // Trait 2
				"Makes Danger Zones appear more.",
				"Increases the amount of Tears of Blood acquired by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Wisdom] Emblems by 50%.",
				"Increases the amount of Tears of Blood acquired by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Meteor Strike", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Feint and Ambush", // Tactic Name
				"Doubles the chance of a [Slay] attribute attack one-hit killing an enemy.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Feint and Ambush", // Tactic Name
				"Doubles the chance of a [Slay] attribute attack one-hit killing an enemy.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 4),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Dian Wei
		new Hero(
			"Dian Wei", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Brave General", "Might", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 200% when Health is below 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Defence by 300% when Health is below 50%.",
				"Increases Attack by 70% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2
				"Increases Attack by 100% while Health is below 50%.",
				"Bestowns you with invulnerability for 3 seconds when you are hit by an enemy.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 100% while Health is below 50%.",
				"Bestowns you with invulnerability for 3 seconds when you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Xiahou Dun", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Xu Chu", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Old Elai Returned", // Tactic Name
				"Increases Attack by 3% for every Strength Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Old Elai Returned", // Tactic Name
				"Increases Attack by 4% for every [Strength] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Xu Chu
		new Hero(
			"Xu Chu", // Name
			"Xu Zhu", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Brave General", "Might", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases your total [Strength] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases your total [Strength] Emblems by 50%.",
				"Increases Attack by 3% for every [Strength] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Might] Emblem.",
				"Increases your maximum Health by 10% for every 5 levels (max 100%).",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 15% for every [Might] Emblem.",
				"Increases your maximum Health by 10% for every 5 levels (max 100%).",
			],
			new SummonSkill( // Summon Skill
				"Sweeping Cyclone", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Dian Wei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Strength of the Tiger", // Tactic Name
				"Increases Attack for Summoning Skill [Sweeping Cyclone] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sweeping Cyclone"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Strength of the Tiger", // Tactic Name
				"Increases Attack for Summoning Skill [Sweeping Cyclone] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sweeping Cyclone"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
		),
		// #endregion
		// #region Yue Jin
		new Hero(
			"Yue Jin", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Speed"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Brave General", "Five Wei Elite"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 15 seconds after every 1000 consecutive hits.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 30 seconds after every 1000 consecutive hits.", 
				"Replenishes Health by 10% at the start of battle in each phase.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.", 
				"Cuts 1 second from the summoning cooldown timer when you inflict [Ice] Freeze on enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 10% for every [Wei] Emblem.", 
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Ice] Freeze on enemies.",
			],
			new SummonSkill( // Summon Skill
				"Soaring Blade", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhang Liao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Lateral Thinker", // Tactic Name
				"Increases Attack of [Ice] attribute attacks against enemy barriers by 30%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Lateral Thinker", // Tactic Name
				"Increases Attack of [Ice] attribute attacks against enemy barriers by 50%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Xu Huang
		new Hero(
			"Xu Huang", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Brave General", "Five Wei Elite"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 20% while Health is above 80%.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% while Health is above 80%.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			[ // Trait 2
				"Increases Attack and Defence by 50% for 10 seconds when you acquire a Peach.", 
				"Increases Attack Speed by 5% for 10 seconds after evading.",
			],
			[ // Trait 2 Transcended
				"Increases Attack and Defence by 50% for 45 seconds when you acquire a Peach.", 
				"Increases Attack Speed by 10% for 10 seconds after evading.",
			],
			new SummonSkill( // Summon Skill
				"Amplifying Orb", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhang He", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Long Path to Glory", // Tactic Name
				"When you inflict [Slay] Wound on enemies, inflicts [Slay] Wound on nearby enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhang Liao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 6),
				]
			),
			new Tactic( // Tactic Transcended
				"Long Path to Glory", // Tactic Name
				"When you inflict [Slay] Wound on enemies, inflicts [Slay] Wound on nearby enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhang Liao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Zhang Liao
		new Hero(
			"Zhang Liao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Bolt"], // Stat Emblems
			["Skill", "Speed", "Bolt"], // Stat Emblems Transcended
			["Wei", "Lü Bu Army", "Dong Zhuo Army", "Brave General", "Five Wei Elite"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Brave General] Emblem.", 
				"Increases Attack by 50% for 10 seconds after every 100 enemies defeated.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 6% for every [Brave General] Emblem.",
				"Increases Attack by 50% for 20 seconds after every 100 enemies defeated.",
			],
			[ // Trait 2
				"Deals extra [Bolt] damage to enemies who have been knocked into the air.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Deals extra [Bolt] damage to enemies who have been knocked into the air.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Sweeping Cyclone", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Liao has arrived!", // Tactic Name
				"Increases Attack by 40% for heroes with [Brave General] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Liao has arrived!", // Tactic Name
				"Increases Attack by 60% for heroes with [Brave General] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wei", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			)
		),
		// #endregion
		// #region Zhang He
		new Hero(
			"Zhang He", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Yuan Shao Army", "Brave General", "Five Wei Elite", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Grace] Emblem.", 
				"Replenishes 20% of your Health when you level up.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 9% for every [Grace] Emblem.", 
				"Replenishes 20% of your Health when you level up.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 50% for 30 seconds after every 1000 consecutive hits.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Swift Strike", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Yuan Shao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Xiahou Yuan", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Spectacular Contest of the Five Elites", // Tactic Name
				"Summons other heroes who have the [Five Wei Elite] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Five Wei Elite"),
					// new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Five Wei Elite", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			),
			new Tactic( // Tactic Transcended
				"Spectacular Contest of the Five Elites", // Tactic Name
				"Summons other heroes who have the [Five Wei Elite] or [Grace] Emblems when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Five Wei Elite"),
					new TacticTarget(TacticTarget.TypeEmblem, "Grace"),
					// new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Five Wei Elite", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Wang Yi
		new Hero(
			"Wang Yi", // Name
			null, // Name In-Game
			["Lady Wang Yi"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Flower of War", "Xiliang"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Slightly charges Assemble Gauge when you inflict [Ice] Freeze on enemies.", 
			],
			[ // Trait 1 Transcended
				"Slightly charges Assemble Gauge when you inflict [Ice] Freeze on enemies.", 
				"Increases Attack for Charge Attacks by 5% every time you clear a phase (max 100%).",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Ice] Freeze.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Ice] Freeze.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Burst of Flowers", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Yi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Nine Brilliant Strategies", // Tactic Name
				"Increases Attack for Summoning Skill [Burst of Flowers] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Burst of Flowers"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Xiliang", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Nine Brilliant Strategies", // Tactic Name
				"Increases Attack for Summoning Skill [Burst of Flowers] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Burst of Flowers"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Xiliang", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion

		// #endregion Cao Wei

		// #region Sun Wu

		// #region Sun Jian
		new Hero(
			"Sun Jian", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Strength"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Brave General", "Ruler", "Jiangdong Hero"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Wu] Emblem.", 
				"Increases Attack by 50% towards enemies with [Flame] Burn.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Wu] Emblem.", 
				"Increases Attack by 50% towards enemies with [Flame] Burn.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Wu] Emblem.", 
				"Charges Assemble Gauge by 20% when you take hits from enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 10% for every [Wu] Emblem.", 
				"Charges Assemble Gauge by 20% when you take hits from enemies.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ruler", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Tiger of Jiangdong", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Tiger of Jiangdong", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Sun Ce
		new Hero(
			"Sun Ce", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Brave General", "Ruler", "Jiangdong Hero", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Wu] Emblem.", 
				"Bestows Normal Attacks with the [Bolt] attribute while Health is below 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 9% for every [Wu] Emblem.", 
				"Bestows Normal Attacks with the [Bolt] attribute while Health is below 90%.",
			],
			[ // Trait 2
				"Cuts 1 second from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.", 
				"Increases Attack by 3% when you move to the next phase without being hit by an enemy attack (max 50%).",
			],
			[ // Trait 2 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.", 
				"Increases Attack by 3% when you move to the next phase without being hit by an enemy attack (max 100%).",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhou Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Da Qiao", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Young Conqueror of Jiangdong", // Tactic Name
				"Increases Attack by 100% for heroes with [Wu] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Young Conqueror of Jiangdong", // Tactic Name
				"Increases Attack by 120% for heroes with [Wu] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
					new TacticTarget(TacticTarget.TypeEmblem, "Ruler"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Da Qiao
		new Hero(
			"Da Qiao", // Name
			"Daqiao", // Name In-Game
			["Lady Da Qiao", "Lady Daqiao"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm"], // Stat Emblems
			["Charm", "Bolt"], // Stat Emblems Transcended
			["Wu", "Flower of War", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Grace] Emblem.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Defence by 7% for every [Grace] Emblem.", 
				"Increases Attack by 50% towards enemies with [Bolt] Shock.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Wu] Emblem.", 
				"Charges Assemble Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 7% for every [Wu] Emblem.", 
				"Charges Assemble Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Defence)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Ce", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Large Flower of the Two Qiaos", // Tactic Name
				"Increases Attack by 100% for [Sun Ce].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Sun Ce"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Xiao Qiao", SummonActivationCondition.TypeHero),
				]
			),
			new Tactic( // Tactic Transcended
				"Large Flower of the Two Qiaos", // Tactic Name
				"Increases Attack by 120% for [Sun Ce].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Sun Ce"),
					new TacticTarget(TacticTarget.TypeHero, "Xiao Qiao"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Xiao Qiao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Sun Quan
		new Hero(
			"Sun Quan", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Charm", "Flame"], // Stat Emblems
			["Strength", "Charm", "Flame"], // Stat Emblems Transcended
			["Wu", "Ruler", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Wu] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 6% for every [Wu] Emblem.", 
				"Shortens summoning cooldown by 20% for heroes with [Wu] Emblem.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Wu] Emblems to appear at Crystal Saplings.", 
				"Slightly charges Assemble Gauge when you acquire EXP.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Wu] Emblems to appear at Crystal Saplings.", 
				"Slightly charges Assemble Gauge when you acquire EXP.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Jian", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 8),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Sun Wu's Command", // Tactic Name
				"Increases Attack by 40% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 7),
				]
			),
			new Tactic( // Tactic Transcended
				"Sun Wu's Command", // Tactic Name
				"Shortens summoning cooldown by 20% and increases Attack by 50% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 7),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Sun Shangxiang
		new Hero(
			"Sun Shangxiang", // Name
			null, // Name In-Game
			["Lady Sun Shangxiang", "SSX"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Skill", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Master Archer", "Flower of War"], // Personal Emblems
			["Wu", "Shu", "Master Archer", "Flower of War", "Torchbearer"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 10% for every [Wu] Emblem.", 
				"Slightly charges Assemble Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 10% for every [Wu] Emblem.", 
				"Slightly charges Assemble Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Bow Bearing Princess", // Tactic Name
				"Gives you Tears of Blood when you attack enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			null
		),
		// #endregion
		// #region Zhou Yu
		new Hero(
			"Zhou Yu", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Charm", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Strategist", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Wu] Emblem.", 
				"Bestows Normal Attacks with the [Flame] attribute while Health is below 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Wu] Emblem.", 
				"Bestows Normal Attacks with the [Flame] attribute while Health is below 90%.",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you inflict [Flame] Burn on enemies.", 
				"Increases Attack by 30% towards Level Boss enemies.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you inflict [Flame] Burn on enemies.", 
				"Increases Attack by 30% towards Level Boss enemies.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Ce", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Strategy of Divine Flames", // Tactic Name
				"When you inflict [Flame] Burn, causes an explosion that inflicts enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Huang Gai", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Strategy of Divine Flames", // Tactic Name
				"When you inflict [Flame] Burn, causes an explosion that inflicts enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Huang Gai", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 8),
				]
			)
		),
		// #endregion
		// #region Xiao Qiao
		new Hero(
			"Xiao Qiao", // Name
			"Xiaoqiao", // Name In-Game
			["Lady Xiao Qiao", "Lady Xiaoqiao"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm"], // Stat Emblems
			["Charm", "Flame"], // Stat Emblems Transcended
			["Wu", "Flower of War", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Grace] Emblem.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 7% for every [Grace] Emblem.", 
				"Increases Attack by 50% towards enemies with [Flame] Burn.",
			],
			[ // Trait 2
				"Increases Defence by 5% for every [Wu] Emblem.", 
				"Replenishes 1% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Defence by 7% for every [Wu] Emblem.", 
				"Replenishes 3% of your Health when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Homing Blades", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhou Yu", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Little Flower of the Two Qiaos", // Tactic Name
				"Increases Attack by 100% for [Zhou Yu].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Zhou Yu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Da Qiao", SummonActivationCondition.TypeHero),
				]
			),
			new Tactic( // Tactic Transcended
				"Little Flower of the Two Qiaos", // Tactic Name
				"Increases Attack by 120% for [Zhou Yu].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Zhou Yu"),
					new TacticTarget(TacticTarget.TypeHero, "Da Qiao"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Da Qiao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Lu Su
		new Hero(
			"Lu Su", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wisdom"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Makes it more likely for heroes with [Wu] Emblems to appear at Crystal Saplings.", 
			],
			[ // Trait 1 Transcended
				"Makes it more likely for heroes with [Wu] Emblems to appear at Crystal Saplings.", 
				"Increases Attack by 50% during Assemble.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 10% for every [Wu] Emblem.", 
				"Increases the amount of Tears of Blood acquired by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 10% for every [Wu] Emblem.", 
				"Increases the amount of Tears of Blood acquired by 100%.",
			],
			new SummonSkill( // Summon Skill
				"Oppressive Formation (Attack)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Quan", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Dividing the Land", // Tactic Name
				"Increases Attack by 3% for every [Wisdom] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Dividing the Land", // Tactic Name
				"Increases Attack by 4% for every [Wisdom] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Lü Meng
		new Hero(
			"Lü Meng", // Name
			"Lu Meng", // Name In-Game
			["Lv Meng"], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% towards Level Boss enemies.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 30% towards Level Boss enemies.", 
				"Increases your maximum Health by 10% every 5 levels (max 100%).",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 10% for every [Wu] Emblem.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 15% for every [Wu] Emblem.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Sword Dance", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Quan", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Lu Xun", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Refined Strategies", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Refined Strategies", // Tactic Name
				"Shortens summoning cooldown by 30% and increases Attack by 20% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Lu Xun
		new Hero(
			"Lu Xun", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Flame"], // Stat Emblems
			["Strength", "Wisdom", "Flame"], // Stat Emblems Transcended
			["Wu", "Strategist", "Commander"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Wu] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Flame] Burn on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases your total [Flame] Emblems by 50%.", 
				"Slightly charges Musou Gauge when you inflict [Flame] Burn on enemies.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Wu] Emblem.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 15% for every [Wu] Emblem.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Quan", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Commander", SummonActivationCondition.TypePersonalEmblem, 2),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Flames of Wisdom and Courage", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Flames of Wisdom and Courage", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Wu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wu"),
					new TacticTarget(TacticTarget.TypeEmblem, "Commander"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Huang Gai
		new Hero(
			"Huang Gai", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Might", "Jiangdong Hero"], // Personal Emblems
			["Wu", "Brave General", "Might", "Jiangdong Hero"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 8% for every [Wu] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Wu] Emblem.", 
				"Increases Defence by 100% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.", 
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2 Transcended
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.", 
				"Increases Attack by 70% for 20 seconds when you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Amplifying Orb", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Jian", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Desperate Measures", // Tactic Name
				"Changes the Status Infliction for Summoning Skill [Amplifying Orb] to 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Amplifying Orb"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhou Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Desperate Measures Policy", // Tactic Name
				"Summons other heroes who have the [Jiangdong Hero] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Jiangdong Hero"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhou Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Jiangdong Hero", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Taishi Ci
		new Hero(
			"Taishi Ci", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Brave General", "Master Archer", "Jiangdong Hero"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Bestows Normal Attacks with the [Wind] attribute while Health is below 50%.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack and Defence by 3% for every [Brave General] Emblem.", 
				"Replenishes 3% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2
				"Increases Attack by 7% for every [Jiangdong Hero] Emblem.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 18% for every [Jiangdong Hero] Emblem.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Tornado Blade", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Ce", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Twin Rods of Fidelity", // Tactic Name
				"Increases Attack for Summoning Skill [Tornado Blade] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Tornado Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Twin Rods of Fidelity", // Tactic Name
				"Increases Attack for Summoning Skill [Tornado Blade] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Tornado Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Zhou Tai
		new Hero(
			"Zhou Tai", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Jiangdong Hero", "King's Shield"], // Personal Emblems
			["Wu", "Brave General", "Jiangdong Hero", "King's Shield"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
				"Increases your total [Slay] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Swift Strike", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Quan", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Impenetrable Blade", // Tactic Name
				"Increases Attack by 3% for every [Strength] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Impenetrable Blade", // Tactic Name
				"Increases Attack by 4% for every [Strength] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wu", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Gan Ning
		new Hero(
			"Gan Ning", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Brave General", "Jiangdong Hero"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Cuts 1 second from summoning cooldown timer when you inflict [Slay] Wound on enemies.", 
				"Increases Attack by 50% for 20 seconds when you level up.",
			],
			[ // Trait 1 Transcended
				"Cuts 1 second from summoning cooldown timer when you inflict [Slay] Wound on enemies.", 
				"Increases Attack by 3% for every [Slay] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 3% for every [Speed] Emblem.", 
				"Causes an explosion that damages nearby enemies when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 4% for every [Speed] Emblem.", 
				"Increases your total [Slay] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Soaring Blade", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Lü Meng", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Gan Ning of the Bells", // Tactic Name
				"Increases Attack for the [Slay] attribute by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Jiangdong Hero", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Gan Ning of the Bells", // Tactic Name
				"Increases Attack for the [Slay] attribute by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Jiangdong Hero", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Ling Tong
		new Hero(
			"Ling Tong", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wu", "Jiangdong Hero"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Cuts 1 second from the summoning cooldown timer when you inflict [Flame] Burn on enemies.", 
			],
			[ // Trait 1 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Flame] Burn on enemies.", 
				"Increases Attack by 18% for every [Jiangdong Hero] Emblem.",
			],
			[ // Trait 2
				"Increases Attack and Defence by 50% for 5 seconds when you acquire Karma Embers.", 
				"Adds 50% of your Speed to your Attack.",
			],
			[ // Trait 2 Transcended
				"Increases Attack and Defence by 50% for 15 seconds when you acquire Karma Embers.", 
				"When you inflict [Flame] Burn, causes an explosion that inflicts enemies with [Flame] Burn.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Mist", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sun Quan", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Fearless in the Face of Death", // Tactic Name
				"Slightly charges Musou Gauge when you attack enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					// The game does not show it buffing the Player, even though it should
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Fearless in the Face of Death", // Tactic Name
				"Moderately charges Musou Gauge when you attack enemies with [Flame] Burn.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					// The game does not show it buffing the Player, even though it should
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Sun Wu

		// #region Shu-Han

		// #region Liu Bei
		new Hero(
			"Liu Bei", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Charm", "Charm"], // Stat Emblems
			["Charm", "Charm", "Bolt"], // Stat Emblems Transcended
			["Shu", "Ruler"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Makes it more likely for heroes with [Shu] Emblems to appear a Crystal Saplings.", 
				"Increases the number of heroes at Crystal Saplings by 1.",
			],
			[ // Trait 1 Transcended
				"Makes it more likely for heroes with [Shu] Emblems to appear a Crystal Saplings.", 
				"Increases the number of heroes at Crystal Saplings by 1.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Shu] Emblem.", 
				"At the start of each phase, replenishes your Health to 50% if Health is below 20%",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 8% for every [Shu] Emblem.", 
				"At the start of each phase, replenishes your Health to 50% if Health is below 40%",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Oath of the Peach Garden", // Tactic Name
				"Increases Attack by 100% for [Liu Bei], [Guan Yu], and [Zhang Fei].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Liu Bei"),
					new TacticTarget(TacticTarget.TypeHero, "Guan Yu"),
					new TacticTarget(TacticTarget.TypeHero, "Zhang Fei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Guan Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhang Fei", SummonActivationCondition.TypeHero),
				]
			),
			new Tactic( // Tactic Transcended
				"Oath of the Peach Garden", // Tactic Name
				"Increases Attack by 120% for [Liu Bei], [Guan Yu], and [Zhang Fei].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Liu Bei"),
					new TacticTarget(TacticTarget.TypeHero, "Guan Yu"),
					new TacticTarget(TacticTarget.TypeHero, "Zhang Fei"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Guan Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhang Fei", SummonActivationCondition.TypeHero),
				]
			)
		),
		// #endregion
		// #region Guan Yu
		new Hero(
			"Guan Yu", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Strength", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Brave General", "Five Shu Tigers", "Might"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Brave General] Emblem.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 6% for every [Brave General] Emblem.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 2
				"Increases Attack for summoned heroes by 30%.", 
				"Bestows Normal Attacks with the [Flame] attribute while Health is below 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Attack for summoned heroes by 30%.", 
				"Applies the [Flame] attribute to Normal Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Unity of Five Tigers", // Tactic Name
				"Summons other heroes who have the [Five Shu Tigers] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Five Shu Tigers"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Five Shu Tigers", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			null
		),
		// #endregion
		// #region Guan Ping
		new Hero(
			"Guan Ping", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Bestows Normal Attacks with the [Slay] attribute while Health is below 50%.", 
			],
			[ // Trait 1 Transcended
				"Applies the [Slay] attribute to Normal Attacks.", 
				"Increases Attack by 7% for every [Torchbearer] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Shu] Emblem.", 
				"Increases Attack by 30% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 15% for every [Shu] Emblem.", 
				"Increases Attack by 50% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Tornado Blade", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Guan Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Guan Yinping", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Horse-Felling Strike", // Tactic Name
				"Increases Attack of [Slay] attribute attacks against enemy barriers by 30%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Horse-Felling Strike", // Tactic Name
				"Increases Attack of [Slay] attribute attacks against enemy barriers by 50%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Guan Yinping
		new Hero(
			"Guan Yinping", // Name
			null, // Name In-Game
			["Lady Guan Yinping"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Vigour", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Flower of War", "Might", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Makes it more likely for heroes with [Shu] Emblems to appear at Crystal Saplings.", 
			],
			[ // Trait 1 Transcended
				"Makes it more likely for heroes with [Shu] Emblems to appear at Crystal Saplings.", 
				"Increases hero rerolls at Crystal Saplings by 8.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Might] Emblem.", 
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 15% for every [Might] Emblem.", 
				"Increases Attack by 70% for 30 seconds after every 1000 consecutive hits.",
			],
			new SummonSkill( // Summon Skill
				"Explosive Bullet", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Guan Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Tiger Cub's Awakening", // Tactic Name
				"Increases Attack for Summoning Skill [Explosive Bullet] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Explosive Bullet"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Tiger Cub's Awakening", // Tactic Name
				"Increases Attack for Summoning Skill [Explosive Bullet] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Explosive Bullet"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Zhang Fei
		new Hero(
			"Zhang Fei", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Vigour", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Brave General", "Five Shu Tigers", "Might"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Might] Emblem.", 
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 15% for every [Might] Emblem.", 
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Sweeping Cyclone", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Match for 10,000 Foes", // Tactic Name
				"Increases Attack by 100% towards enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"), 
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 10),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Match for 10,000 Foes", // Tactic Name
				"Increases Attack by 120% towards enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"), 
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 10),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			)
		),
		// #endregion
		// #region Zhang Xingcai
		new Hero(
			"Zhang Xingcai", // Name
			"Xingcai", // Name In-Game
			["Lady Zhang Xingcai"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Skill", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Flower of War", "Torchbearer", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Shu] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Defence by 7% for every [Shu] Emblem.", 
				"Increases your total [Strength] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 20% while Health is above 80%.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 20% for every [King's Shield] Emblem.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhang Fei", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Watchful Stars", // Tactic Name
				"Increases Defence by 5% for every [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Watchful Stars", // Tactic Name
				"Increases Defence by 7% for every [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Zhuge Liang
		new Hero(
			"Zhuge Liang", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Wisdom", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Strategist", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 10% for every [Shu] Emblem.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 10% for every [Shu] Emblem.", 
				"Increases your total [Wisdom] Emblems by 70%.",
			],
			[ // Trait 2
				"Negates all Status Ailments inflicted on the hero.", 
				"Increases Attack and Defence by 50% if you have the \"Four-Wheeled Chariot\" Treasure.",
			],
			[ // Trait 2 Transcended
				"Increases Attack for all attributes by 30%.", 
				"Increases Attack and Defence by 80% if you have the \"Four-Wheeled Chariot\" Treasure.",
			],
			new SummonSkill( // Summon Skill
				"Meteor Strike", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Warfare of the Sleeping Dragon", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 50% for heroes with [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Huang Yueying", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Warfare of the Sleeping Dragon", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 50% for heroes with [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeAllSummons),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Huang Yueying", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			)
		),
		// #endregion
		// #region Huang Yueying
		new Hero(
			"Huang Yueying", // Name
			"Yueying", // Name In-Game
			["Lady Huang Yueying"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Ice"], // Stat Emblems
			["Wisdom", "Ice"], // Stat Emblems Transcended
			["Shu", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases hero rerolls at Crystal Saplings by 15.", 
			],
			[ // Trait 1 Transcended
				"Increases hero rerolls at Crystal Saplings by 15.", 
				"Bestows you with 1 Crystal Bead from the start.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Shu] Emblem.", 
				"Slightly charges Musou Gauge when you acquire EXP.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 7% for every [Shu] Emblem.", 
				"Shortens summoning cooldown by 20% for heroes with [Shu] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Roaring Tiger Chariot", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Roaring Tiger Chariot", // Tactic Name
				"Shortens summoning cooldown by 30% and increases Attack by 20% for heroes with [Shu] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Pang Tong
		new Hero(
			"Pang Tong", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Strategist"], // Personal Emblems
			["Shu", "Strategist", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Shu] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 10% for every [Shu] Emblem.", 
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2
				"At the start of each phase, replenishes your Health tp 50% if Health is below 20%.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"At the start of each phase, replenishes your Health tp 50% if Health is below 40%.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Oppressive Formation (Defence)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Young Strategist's Scheme", // Tactic Name
				"Increases Attack by 100% for heroes with [Shu] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Young Strategist's Scheme", // Tactic Name
				"Increases Attack by 120% for heroes with [Shu] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Xu Shu
		new Hero(
			"Xu Shu", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Shu", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the number of heroes at Crystal Saplings by 1.", 
			],
			[ // Trait 1 Transcended
				"Increases the number of heroes at Crystal Saplings by 1.", 
				"Increases Attack by & for every [Strategist] Emblem.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Shu] Emblems to appear at Crystal Saplings.", 
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Shu] Emblems to appear at Crystal Saplings.", 
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			new SummonSkill( // Summon Skill
				"Homing Blades", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhang Liao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Pang Tong", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Visionary Strategist", // Tactic Name
				"Increases Attack by 30% for heroes with [Strategist] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Strategist"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Visionary Strategist", // Tactic Name
				"Increases Attack by 50% for heroes with [Shu], [Brave General], or [Strategist] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Shu"),
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
					new TacticTarget(TacticTarget.TypeEmblem, "Strategist"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 6),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Fa Zheng
		new Hero(
			"Fa Zheng", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wind"], // Stat Emblems
			["Wisdom", "Wind"], // Stat Emblems Transcended
			["Shu", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.", 
				"Increases Attack for Charge Attacks by 5% every time you clear a phase (max 100%).",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Shu] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 7% for every [Shu] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			new SummonSkill( // Summon Skill
				"Amplifying Orb", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Kindness Repaid, Wrongs Avenged", // Tactic Name
				"Slightly charges Assemble Gauge when you attack enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Kindness Repaid, Wrongs Avenged", // Tactic Name
				"Moderately charges Assemble Gauge when you attack enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Zhao Yun
		new Hero(
			"Zhao Yun", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Bolt"], // Stat Emblems
			["Vigour", "Skill", "Bolt"], // Stat Emblems Transcended
			["Shu", "Brave General", "Five Shu Tigers"], // Personal Emblems
			["Shu", "Brave General", "Five Shu Tigers", "King's Shield"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Shu] Emblem.", 
				"Cuts 1 second from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Shu] Emblem.", 
				"Cuts 1 second from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
				"Increases Musou Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
				"Increases your total [Bolt] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Soaring Blade", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Indomitable Spirit", // Tactic Name
				"Increases Attack for Summoning Skill [Soaring Blade] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Soaring Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Indomitable Spirit", // Tactic Name
				"Increases Attack for Summoning Skill [Soaring Blade] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Soaring Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Huang Zhong
		new Hero(
			"Huang Zhong", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Strength"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Master Archer", "Five Shu Tigers"], // Personal Emblems
			["Shu", "Brave General", "Master Archer", "Five Shu Tigers"], // Personal Emblems Transcended
			[ // Trait 1
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 1 Transcended
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.", 
				"Increases Attack by 15% for every [Master Archer] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Shu] Emblem.", 
				"Cuts 1 second from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 15% for every [Shu] Emblem.", 
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Guan Yu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wei Yan", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Divine Marksman", // Tactic Name
				"Increases Attack for Summoning Skill [April Showers] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "April Showers"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Master Archer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Divine Marksman", // Tactic Name
				"Increases Attack for Summoning Skill [April Showers] by 140%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "April Showers"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Master Archer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Ma Chao
		new Hero(
			"Ma Chao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Brave General", "Five Shu Tigers", "Xiliang"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 30% in Danger Zones.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 40% in Danger Zones.", 
				"Increases Attack by 3% for every [Wind] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards Sin Spewer enemies.", 
				"Makes Danger Zones appear more.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 300% towards Sin Spewer enemies.", 
				"Increases your total [Wind] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Swift Strike", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhang Fei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Shu", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Ma Chao the Splendid", // Tactic Name
				"Increases Attack for the [Wind] attribute by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Xiliang", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Ma Chao the Splendid", // Tactic Name
				"Increases Attack for the [Wind] attribute by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Xiliang", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Wei Yan
		new Hero(
			"Wei Yan", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Slay", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Brave General"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 70% for 30 seconds after every 1000 consecutive hits.", 
				"Increases Attack by 50% for 10 seconds when you acquire Tears of Blood.",
			],
			[ // Trait 2
				"Slightly charges Assemble Gauge when you inflict [Slay] Wound on enemies.", 
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Assemble Gauge when you inflict [Slay] Wound on enemies.", 
				"Increases Attack by 70% for 20 seconds when you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Sweeping Cyclone", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Liu Bei", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhao Yun", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Defiant Blade", // Tactic Name
				"Increases Attack by 50% for 10 seconds when you acquire Tears of Blood.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Defiant Blade", // Tactic Name
				"Increases Attack by 50% for 20 seconds when you acquire Tears of Blood.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Jiang Wei
		new Hero(
			"Jiang Wei", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Strength"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shu", "Brave General", "Talent", "Xiliang", "Commander"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% for 20 seconds when you level up.", 
				"Replenishes 20% of your Health when you level up.",
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 50% for 20 seconds when you level up.", 
				"Replenishes 40% of your Health when you level up.",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.", 
				"Doubles Formation slot bonus effects.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.", 
				"Triples Formation slot bonus effects.",
			],
			new SummonSkill( // Summon Skill
				"Sword Dance", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhao Yun", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Child Prodigy", // Tactic Name
				"Shortens summoning cooldown by 50% for heroes with Summoning Skill [Sword Dance].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sword Dance"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Child Prodigy", // Tactic Name
				"Shortens summoning cooldown by 70% for heroes with Summoning Skill [Sword Dance].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sword Dance"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Shu-Han

		// #region Sima Jin

		// #region Sima Yi
		new Hero(
			"Sima Yi", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wisdom", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Jin", "Strategist", "Commander"], // Personal Emblems
			["Wei", "Jin", "Ruler", "Strategist", "Commander"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases your total [Wisdom] Emblems by 50%.", 
				"Slightly charges Musou Gauge when you inflict [Ice] Freeze on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases your total [Wisdom] Emblems by 70%.", 
				"Slightly charges Musou Gauge when you inflict [Ice] Freeze on enemies.",
			],
			[ // Trait 2
				"Shortens summoning cooldown for all heroes by 50% when Health is below 50%.", 
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
			],
			[ // Trait 2 Transcended
				"Shortens summoning cooldown for all heroes by 50% when Health is below 80%.", 
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Pi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			new SummonSkill( // Summon Skill Transcended
				"Iron Wall", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Cao Pi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			new Tactic( // Tactic
				"Face of a Wolf", // Tactic Name
				"When you inflict any status ailment, inflicts [Ice] Freeze on nearby enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Face of a Wolf", // Tactic Name
				"When you inflict any status ailment, inflicts [Ice] Freeze on nearby enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Cao Cao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 8),
				]
			)
		),
		// #endregion
		// #region Zhang Chunhua
		new Hero(
			"Zhang Chunhua", // Name
			null, // Name In-Game
			["Lady Zhang Chunhua"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Wei", "Jin", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the amount of Health restored by Peaches by 50%.", 
			],
			[ // Trait 1 Transcended
				"Increases the amount of Health restored by Peaches by 50%.", 
				"Increases your Health recovery rate by 30%.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 10% for every [Talent] Emblem.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 10% for every [Talent] Emblem.", 
				"Replenishes Health by 2% after every 50 enemies defeated.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Attack)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Yi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Meat Buns of Love", // Tactic Name
				"Replenishes Health by 20% at the start of battle in each phase.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Meat Buns of Love", // Tactic Name
				"Replenishes Health by 25% at the start of battle in each phase.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Sima Shi
		new Hero(
			"Sima Shi", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Jin", "Talent", "Commander", "Torchbearer"], // Personal Emblems
			["Wei", "Jin", "Talent", "Commander", "Torchbearer"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.", 
				"Increases Defence by 15% for every [Jin] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 15% for every [Jin] Emblem.", 
				"Increases Attack by 10% for every [Commander] Emblem.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 15% for every [Jin] Emblem.", 
				"Increases Attack by 15% for every [Commander] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Amplifying Orb", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Yi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Zhang Chunhua", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Calm Commander", // Tactic Name
				"Increases Attack by 40% for heroes with [Jin] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Jin"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Jin", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Calm Commander", // Tactic Name
				"Increases Attack by 50% for heroes with [Jin] or [Torchbearer] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Jin"),
					new TacticTarget(TacticTarget.TypeEmblem, "Torchbearer"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Jin", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Sima Zhao
		new Hero(
			"Sima Zhao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Charm"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Jin", "Talent", "Commander", "Torchbearer"], // Personal Emblems
			["Wei", "Jin", "Talent", "Commander", "Torchbearer"], // Personal Emblems Transcended
			[ // Trait 1
				"Shortens summoning cooldown for all heroes by 20% when Health is above 80%.", 
				"Increases Attack by 50% towards Sin Spewer enemies.",
			],
			[ // Trait 1 Transcended
				"Shortens summoning cooldown for all heroes by 20% when Health is above 80%.", 
				"Increases Attack by 300% towards Sin Spewer enemies.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 15% for every [Jin] Emblem.", 
				"Increases Attack by 3% for every [Speed] Emblem.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 15% for every [Jin] Emblem.", 
				"Increases Attack by 4% for every [Speed] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Meteor Strike", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Yi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wang Yuanji", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Wild Strategies", // Tactic Name
				"Summons other heroes who have the [Jin] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Jin"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Jin", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Wild Strategies", // Tactic Name
				"Summons other heroes who have the [Jin] or [Torchbearer] Emblems when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Jin"),
					new TacticTarget(TacticTarget.TypeEmblem, "Torchbearer"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Jin", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Wang Yuanji
		new Hero(
			"Wang Yuanji", // Name
			null, // Name In-Game
			["Lady Wang Yuanji"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Jin", "Talent"], // Personal Emblems
			["Wei", "Jin", "Grace", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 20% while Health is above 80%.", 
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 15% for every [Jin] Emblem.", 
				"Shortens summoning cooldown by 20% for heroes with [Talent] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Jin] Emblem.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 17% for every [Jin] Emblem.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			new SummonSkill( // Summon Skill
				"Homing Blades", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Zhao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Jin", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Perceptive Princess Ming", // Tactic Name
				"Increases Attack by 30% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Perceptive Princess Ming", // Tactic Name
				"Shortens summoning cooldown by 20% and increases Attack by 30% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Zhong Hui
		new Hero(
			"Zhong Hui", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Strength"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Jin", "Talent"], // Personal Emblems
			["Wei", "Jin", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 3% when you move on to the next phase without being hit by an enemy attack (max 50%).", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 3% when you move on to the next phase without being hit by an enemy attack (max 100%).", 
				"Increases selectable portals by 1 when you clear a phase without taking damage from enemies.",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you acquire EXP.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you acquire EXP.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sima Zhao", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Jiang Wei", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Talented Genius", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Talented Genius", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Sima Jin

		// #region Other Dynasty Warriors

		// #region Lü Bu
		new Hero(
			"Lü Bu", // Name
			"Lu Bu", // Name In-Game
			["Lv Bu"], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Vigour", "Skill", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Lü Bu Army", "Dong Zhuo Army", "Brave General", "Master Archer", "Might"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Makes defeated enemies explode, dealing damage to nearby enemies.", 
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.",
			],
			[ // Trait 1 Transcended
				"Makes defeated enemies explode, dealing damage to nearby enemies.", 
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Lü Bu Army] Emblem.", 
				"Increases Attack and Defence by 50% if you have the \"Red Hare\" Treasure.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 30% for every [Lü Bu Army] Emblem.", 
				"Increases Attack and Defence by 80% if you have the \"Red Hare\" Treasure.",
			],
			new SummonSkill( // Summon Skill
				"War God's Cry", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Diaochan", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Peerless Lü Bu", // Tactic Name
				"Increases the amount of extra [Bolt] damage by 200%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Peerless Lü Bu", // Tactic Name
				"Increases the amount of extra [Bolt] damage by 300%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Diaochan
		new Hero(
			"Diaochan", // Name
			null, // Name In-Game
			["Lady Diaochan"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm"], // Stat Emblems
			["Charm", "Bolt"], // Stat Emblems Transcended
			["Lü Bu Army", "Dong Zhuo Army", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases your total [Charm] Emblems by 50%.", 
				"Increases Attack by 10% for every [Dong Zhuo Army] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases your total [Charm] Emblems by 70%.", 
				"Increases Attack by 18% for every [Dong Zhuo Army] Emblem.",
			],
			[ // Trait 2
				"Replenishes Health by 1% after every 50 enemies defeated.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Replenishes Health by 1% after every 50 enemies defeated.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Speed)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Devious Dance", // Tactic Name
				"Increases Attack by 100% for [Lü Bu].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Lü Bu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Lü Bu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Dong Zhuo", SummonActivationCondition.TypeHero),
				]
			),
			new Tactic( // Tactic Transcended
				"Devious Dance", // Tactic Name
				"Increases Attack by 120% for [Lü Bu].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Lü Bu"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Lü Bu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Dong Zhuo", SummonActivationCondition.TypeHero),
				]
			)
		),
		// #endregion
		// #region Lü Lingqi
		new Hero(
			"Lü Lingqi", // Name
			"Lu Lingqi", // Name In-Game
			["Lady Lü Lingqi", "Lady Lv Lingqi", "Lady Lu Lingqi"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Lü Bu Army", "Dong Zhuo Army", "Flower of War"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 5% for 10 seconds after evading.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 10 seconds after evading.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Lü Bu Army] Emblem.", 
				"Increases Attack and Defence by 50% for 10 seconds when you acquire a Peach.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 20% for every [Lü Bu Army] Emblem.", 
				"Increases Attack and Defence by 50% for 45 seconds when you acquire a Peach.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Lü Bu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Valiant Shield Maiden", // Tactic Name
				"Increases Attack by 100% for heroes with [Lü Bu Army] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Lü Bu Army"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Valiant Shield Maiden", // Tactic Name
				"Increases Attack by 120% for heroes with [Lü Bu Army] or [Dong Zhuo Army] Emblems when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Lü Bu Army"),
					new TacticTarget(TacticTarget.TypeEmblem, "Dong Zhuo Army"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Chen Gong
		new Hero(
			"Chen Gong", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Lü Bu Army", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Makes it more likely for heroes with [Brave General] Emblems to appear at Crystal Saplings.", 
			],
			[ // Trait 1 Transcended
				"Makes it more likely for heroes with [Brave General] Emblems to appear at Crystal Saplings.", 
				"Increases the Assemble duration by 50%.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 20% for every [Lü Bu Army] Emblem.", 
				"Increases Musou Gauge charge by 20% while Health is above 80%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 20% for every [Lü Bu Army] Emblem.", 
				"Increases Musou Gauge charge by 7% for every [Brave General] Emblem.", 
			],
			new SummonSkill( // Summon Skill
				"Oppressive Formation (Attack)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Lü Bu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Pincer Strategy", // Tactic Name
				"Summons other heroes who have the [Lü Bu Army] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Lü Bu Army"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Lü Bu Army", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Pincer Strategy", // Tactic Name
				"Summons other heroes who have the [Lü Bu Army] or [Brave General] Emblems when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Lü Bu Army"),
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Lü Bu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 13),
				]
			)
		),
		// #endregion
		
		// #region Dong Zhuo
		new Hero(
			"Dong Zhuo", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Dong Zhuo Army", "Ruler", "Xiliang"], // Personal Emblems
			["Dong Zhuo Army", "Brave General", "Ruler", "Might", "Xiliang"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the amount of Tears of Blood acquired by 100%.", 
			],
			[ // Trait 1 Transcended
				"Increases the amount of Tears of Blood acquired by 100%.",
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2
				"Increases Attack by 30% for 5 seconds when you interrupt an enemy's telegraphed attack.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 100%).",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% for 15 seconds when you interrupt an enemy's telegraphed attack.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 150%).",
			],
			new SummonSkill( // Summon Skill
				"Meteor Strike", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Xiliang", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Tyrant's Bombardment", // Tactic Name
				"Increases Attack of [Flame] attribute attacks against enemy barriers by 30%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Dong Zhuo Army", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Tyrant's Bombardment", // Tactic Name
				"Increases Attack of [Flame] attribute attacks against enemy barriers by 50%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Yuan Shao
		new Hero(
			"Yuan Shao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Charm", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Yuan Shao Army", "Ruler", "Grace", "Commander"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Grace] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 10% for every [Grace] Emblem.", 
				"Increases Attack and Defence by 3% for each allied hero (max 150%).",
			],
			[ // Trait 2
				"Slightly charges Assemble Gauge when you inflict [Bolt] Shock on enemies.", 
				"Increases the amount of Tears of Blood acquired by 50%.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Assemble Gauge when you inflict [Bolt] Shock on enemies.", 
				"Increases the amount of Tears of Blood acquired by 100%.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Commander", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Nobleman's March", // Tactic Name
				"Gives you Tears of Blood when you attack enemies with [Bolt] Shock.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Yuan Shao Army", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Nobleman's Commands", // Tactic Name
				"Summons other heroes who have the [Yuan Shao Army] or [Ruler] Emblems when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Yuan Shao Army"),
					new TacticTarget(TacticTarget.TypeEmblem, "Ruler"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Yuan Shao Army", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Ruler", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Zhang Jiao
		new Hero(
			"Zhang Jiao", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Charm", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Yellow Turbans", "Independent", "Ruler", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Triggers Memories of the Dead more frequently.", 
			],
			[ // Trait 1 Transcended
				"Triggers Memories of the Dead more frequently.", 
				"Bestows you with 3 Crystal Beads from the start.",
			],
			[ // Trait 2
				"Bestows Normal Attacks with the [Flame] attribute while Health is above 80%.", 
				"Replenishes 1% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Applies the [Flame] attribute to Normal Attacks.", 
				"Replenishes 3% of your Health when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Disarming Wave", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ruler", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 6),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Yellow Heaven Arises", // Tactic Name
				"Charges the Assemble Gauge by 20% at the start of each phase.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Ruler", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Yellow Heaven Arises", // Tactic Name
				"Charges the Assemble Gauge by 50% at the start of each phase.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Ruler", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		
		// #region Meng Huo
		new Hero(
			"Meng Huo", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Ruler", "Might"], // Personal Emblems
			["Shu", "Independent", "Ruler", "Might"], // Personal Emblems Transcended
			[ // Trait 1
				"Revives you when your Health reaches 0, up to 1 times.", 
			],
			[ // Trait 1 Transcended
				"Revives you when your Health reaches 0, up to 1 times.", 
				"Increases Attack by 80% each time you are revived (max 300%).",
			],
			[ // Trait 2
				"Adds 10% to the amount of maximum Health raised using Peach Trees.", 
				"Increases Attack an Defence by 50% for 10 seconds when you acquire a Peach.",
			],
			[ // Trait 2 Transcended
				"Adds 10% to the amount of maximum Health raised using Peach Trees.", 
				"Increases Attack an Defence by 50% for 45 seconds when you acquire a Peach.",
			],
			new SummonSkill( // Summon Skill
				"Tornado Blade", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Zhuge Liang", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Appeal from the King of Nanzhong", // Tactic Name
				"Increases Attack by 100% for [Meng Huo] and [Zhurong].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Meng Huo"),
					new TacticTarget(TacticTarget.TypeHero, "Zhurong"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhurong", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Appeal from the King of Nanzhong", // Tactic Name
				"Increases Attack by 120% for [Meng Huo] and [Zhurong].", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeHero, "Meng Huo"),
					new TacticTarget(TacticTarget.TypeHero, "Zhurong"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Zhurong", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Zhurong
		new Hero(
			"Zhurong", // Name
			null, // Name In-Game
			["Lady Zhurong"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Brave General"], // Personal Emblems
			["Shu", "Independent", "Brave General", "Flower of War"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.", 
				"Increases your total [Speed] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with Burn.", 
				"Increases Attack Speed by 5% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with Burn.", 
				"Increases Attack Speed by 10% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Meng Huo", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Descendant of the Fire God", // Tactic Name
				"Increases Attack for Summoning Skill [Dazzling Bullets] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Dazzling Bullets"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Descendant of the Fire God", // Tactic Name
				"Increases Attack for Summoning Skill [Dazzling Bullets] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Dazzling Bullets"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				]
			)
		),
		// #endregion

		// #endregion Other Dynasty Warriors

		// #region Oda

		// #region Oda Nobunaga
		new Hero(
			"Oda Nobunaga", // Name
			"Nobunaga Oda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Charm", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Daimyo", "Talent", "Three Heroes", "Master Gunner"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 7% for every [Oda] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 10% for every [Oda] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			[ // Trait 2
				"Increases Attack for summoned heroes by 30%", 
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases Attack for summoned heroes by 50%", 
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Lady No", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Take the World by Force", // Tactic Name
				"Increases Attack by 70% for heroes with [Oda] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 7),
				]
			),
			new Tactic( // Tactic Transcended
				"Take the World by Force", // Tactic Name
				"Increases Attack by 70% for heroes with [Oda] Emblem and for attacks towards enemy barriers..", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 7),
					new SummonActivationCondition("Master Gunner", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Lady No
		new Hero(
			"Lady No", // Name
			"No", // Name In-Game
			["Nohime", "No hime"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Oda] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 10% for every [Oda] Emblem.", 
				"Increases Attack by 5% for every [Slay] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.", 
				"Replenishes 1% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.", 
				"Replenishes 3% of your Health when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Oda Nobunaga", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Venom Queen", // Tactic Name
				"Slightly charges Assemble Gauge when you inflict [Slay] Wound on enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Venom Queen", // Tactic Name
				"Moderately charges Assemble Gauge when you inflict [Slay] Wound on enemies.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Oichi
		new Hero(
			"Oichi", // Name
			null, // Name In-Game
			["Lady Oichi"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Ice"], // Stat Emblems
			["Strength", "Ice"], // Stat Emblems Transcended
			["Oda", "Azai", "Flower of War", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Triggers Memories of the Dead more frequently.", 
			],
			[ // Trait 1 Transcended
				"Triggers Memories of the Dead more frequently.", 
				"Revives you when your Health reaches 0, up to 1 times.", 
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 20% for every [Azai] Emblem.", 
				"At the start of each phase, replenishes your Health to 50% if Health is below 20%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 20% for every [Azai] Emblem.", 
				"At the start of each phase, replenishes your Health to 50% if Health is below 40%.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Defence)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Azai Nagamasa", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"White Lily of the Battlefield", // Tactic Name
				"Revives you when your Health reaches 0, up to 1 times.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 7),
				]
			),
			new Tactic( // Tactic Transcended
				"White Lily of the Battlefield", // Tactic Name
				"Revives you when your Health reaches 0, up to 2 times.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 7),
				]
			)
		),
		// #endregion
		// #region Akechi Mitsuhide
		new Hero(
			"Akechi Mitsuhide", // Name
			"Mitsuhide Akechi", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Talent", "Master Gunner"], // Personal Emblems
			["Oda", "Daimyo", "Talent", "Master Gunner"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases your total [Skill] Emblems by 50%.", 
			],
			[ // Trait 1 Transcended
				"Increases your total [Skill] Emblems by 50%.", 
				"Increases Attack by 15% for every [Master Gunner] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 50% while Health is below 50%.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 50% while Health is below 50%.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Absorption", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Mori Ranmaru", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Master Gunner", SummonActivationCondition.TypePersonalEmblem, 2),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Bellflower's Insight", // Tactic Name
				"Increases Attack by 100% for heroes with [Oda] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Enemies at Honnoji", // Tactic Name
				"Increases Attack by 150% and reduces Defence by 60% when the player hero attacks enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Gracia
		new Hero(
			"Gracia", // Name
			null, // Name In-Game
			["Lady Gracia", "Akechi Gracia"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Charm"], // Stat Emblems
			["Charm", "Ice"], // Stat Emblems Transcended
			["Oda", "Grace", "Torchbearer"], // Personal Emblems
			["Oda", "Toyotomi", "Grace", "Torchbearer"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases your Tears of Blood by 500 at the start of battle in each phase.", 
			],
			[ // Trait 1 Transcended
				"Increases your Tears of Blood by 500 at the start of battle in each phase.", 
				"Increases Attack and Defence by 2% for each allied hero (max 150%).",
			],
			[ // Trait 2
				"Slightly charges Assemble Gauge when you inflict [Ice] Freeze on enemies.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 100%).",
			],
			[ // Trait 2 Transcended
				"Slightly charges Assemble Gauge when you inflict [Ice] Freeze on enemies.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 150%).",
			],
			new SummonSkill( // Summon Skill
				"Tornado Blade", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Akechi Mitsuhide", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Purely Innocent", // Tactic Name
				"Gives you Tears of Blood when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 3),
				]
			),
			null
		),
		// #endregion
		// #region Maeda Toshiie
		new Hero(
			"Maeda Toshiie", // Name
			"Toshiie Maeda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Toyotomi", "Brave General"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Oda] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 7% for every [Oda] Emblem.", 
				"Increases Musou Gauge charge by 7% for every [Toyotomi] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Increases EXP acquired by 100% when enemies are defeated with Musou Attacks.",
			],
			new SummonSkill( // Summon Skill
				"Sword Dance", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Oda Nobunaga", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Mataza of the Spear", // Tactic Name
				"Increases Musou Gauge charge by 5% for every [Oda] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Mataza of the Spear", // Tactic Name
				"Increases Musou Gauge charge by 6% for every [Oda] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Maeda Keiji
		new Hero(
			"Maeda Keiji", // Name
			"Keiji Maeda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Speed", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Uesugi", "Oda", "Brave General", "Flower of War"], // Personal Emblems
			["Uesugi", "Oda", "Independent", "Brave General", "Flower of War"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% for 5 seconds when you interrupt an enemy's telegraphed attack.", 
				"Slightly charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% for 15 seconds when you interrupt an enemy's telegraphed attack.", 
				"Moderately charges Musou Gauge when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 30% in Danger Zones.", 
				"Increases Attack and Defence by 50% if you have the \"Matsukaze\" Treasure.",
			],
			[ // Trait 2 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 40% in Danger Zones.", 
				"Increases Attack and Defence by 80% if you have the \"Matsukaze\" Treasure.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Naoe Kanetsugu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Eccentric Warrior", // Tactic Name
				"When you inflict [Wind] Disorient, causes an explosion that inflicts enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Okuni", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Eccentric Warrior", // Tactic Name
				"When you inflict [Wind] Disorient, causes an explosion that inflicts enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Okuni", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 8),
				]
			)
		),
		// #endregion
		// #region Mori Ranmaru
		new Hero(
			"Mori Ranmaru", // Name
			"Ranmaru Mori", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Ice"], // Stat Emblems
			["Ice", "Slay"], // Stat Emblems Transcended
			["Oda", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack and Defence by 50% for 10 seconds when you summon [Oda Nobunaga].", 
			],
			[ // Trait 1 Transcended
				"Increases Attack and Defence by 50% for 15 seconds when you summon [Oda Nobunaga].", 
				"Replenishes 3% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2
				"Increases Defence by 200% when Health is below 50%.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 2 Transcended
				"Increases Defence by 300% when Health is below 50%.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Oda Nobunaga", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Akechi Mitsuhide", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Ran's Your Man!", // Tactic Name
				"Summons this hero when other heroes who have the [Oda] Emblem have been summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			null
		),
		// #endregion
		// #region Shibata Katsuie
		new Hero(
			"Shibata Katsuie", // Name
			"Katsuie Shibata", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Brave General"], // Personal Emblems
			["Oda", "Brave General", "Daimyo"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
				"Increases Attack by 7% for every [Oda] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Oda] Emblem.", 
				"Increases Assemble Gauge charge by 50% while Health is below 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 15% for every [Oda] Emblem.", 
				"Shortens summoning cooldown by 20% for heroes with [Brave General] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Swift Strike", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Oichi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Stampeding Shibata", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Brave General] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Stampeding Shibata", // Tactic Name
				"Shortens summoning cooldown by 30% and increases Attack towards enemy barriers by 50% for heroes with [Brave General] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Oda", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Oda

		// #region Toyotomi

		// #region Toyotomi Hideyoshi
		new Hero(
			"Toyotomi Hideyoshi", // Name
			"Hideyoshi Toyotomi", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Charm", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Toyotomi", "Talent", "Three Heroes"], // Personal Emblems
			["Oda", "Toyotomi", "Daimyo", "Talent", "Three Heroes"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 10% for every [Toyotomi] Emblem.", 
				"Increases the amount of Tears of Blood acquired by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 10% for every [Toyotomi] Emblem.", 
				"Increases the amount of Tears of Blood acquired by 100%.",
			],
			[ // Trait 2
				"Slightly charges Assemble Gauge when you inflict [Bolt] Shock on enemies.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 100%).",
			],
			[ // Trait 2 Transcended
				"Shortens summoning cooldown by 20% for heroes with [Toyotomi] Emblem.", 
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 150%).",
			],
			new SummonSkill( // Summon Skill
				"Explosive Bullet", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Nene", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"One-Night Castle", // Tactic Name
				"Shortens summoning cooldown by 30% for heroes with [Oda] or [Toyotomi] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Three Heroes", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Unifier of the Land", // Tactic Name
				"Reduces summoning cooldown by 10% for every 10000 Tears of Blood you possess (max 50%).", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeAllSummons),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Three Heroes", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Nene
		new Hero(
			"Nene", // Name
			null, // Name In-Game
			["Lady Nene"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Shinobi", "Talent"], // Personal Emblems
			["Oda", "Toyotomi", "Shinobi", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Toyotomi] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Defence by 7% for every [Toyotomi] Emblem.", 
				"Increases hero rerolls at Crystal Saplings by 15.",
			],
			[ // Trait 2
				"Bestows you with 2 Crystal Beads from the start.", 
				"Increases Attack Speed by 5% for 10 seconds after evading.",
			],
			[ // Trait 2 Transcended
				"Bestows you with 2 Crystal Beads from the start.", 
				"Increases Attack Speed by 10% for 10 seconds after evading.",
			],
			new SummonSkill( // Summon Skill
				"Burst of Flowers", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Toyotomi Hideyoshi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Lady Nene's Scolding", // Tactic Name
				"Summons other heroes who have the [Toyotomi] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			null
		),
		// #endregion
		// #region Chacha
		new Hero(
			"Chacha", // Name
			null, // Name In-Game
			["Lady Chacha"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Skill", "Charm"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Azai", "Grace", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 7% for every [Toyotomi] Emblem.", 
				"Increases Defence by 15% for every [Azai] Emblem.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 8% for every [Toyotomi] Emblem.", 
				"Increases Defence by 20% for every [Azai] Emblem.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Toyotomi] Emblems to appear at Crystal Saplings.", 
				"Slightly charges Assemble Gauge when you inflict [Flame] Burn on enemies.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Toyotomi] Emblems to appear at Crystal Saplings.", 
				"Moderately charges Assemble Gauge when you attack enemies with [Flame] Burn.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Azai Nagamasa", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Oichi", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Proud Princess", // Tactic Name
				"Increases player hero's Defence by 70% if they have [Toyotomi] or [Azai] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Proud Princess", // Tactic Name
				"Increases player hero's Defence by 85% if they have [Toyotomi] or [Azai] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Takenaka Hanbei
		new Hero(
			"Takenaka Hanbei", // Name
			"Hanbei Takenaka", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Toyotomi", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Doubles Formation slot bonus effects.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Doubles Formation slot bonus effects.", 
				"Increases your total [Wisdom] Emblems by 70%.",
			],
			[ // Trait 2
				"Shortens summoning cooldown for all heroes by 20% when Health is above 80%.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 2 Transcended
				"Shortens summoning cooldown for all heroes by 20% when Health is above 80%.", 
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Mist", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Toyotomi Hideyoshi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Straight Arrow or Loose Cannon?", // Tactic Name
				"Increases Attack by 40% for heroes with [Toyotomi] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			),
			new Tactic( // Tactic Transcended
				"Straight Arrow or Loose Cannon?", // Tactic Name
				"Increases Attack by 50% for heroes with [Toyotomi] and [Oda] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
					new TacticTarget(TacticTarget.TypeEmblem, "Oda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Kuroda Kanbei
		new Hero(
			"Kuroda Kanbei", // Name
			"Kanbei Kuroda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Oda", "Toyotomi", "Strategist", "Western Region"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
				"Increases Attack by 5% for every [Wisdom] Emblem.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 50% while Health is below 50%.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 50% while Health is below 50%.", 
				"Increases your total [Wisdom] Emblems by 70%.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Toyotomi Hideyoshi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Takenaka Hanbei", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Ruthless Tactics", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 50% for heroes with [Toyotomi] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Ruthless Tactics", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 50% for heroes with [Toyotomi] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Ishida Mitsunari
		new Hero(
			"Ishida Mitsunari", // Name
			"Mitsunari Ishida", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 10% for every [Toyotomi] Emblem.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 15% for every [Toyotomi] Emblem.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you inflict [Ice] Freeze on enemies.", 
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you inflict [Ice] Freeze on enemies.", 
				"Charges Musou Gauge and Assemble Gauge by 80% when you level up.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Shima Sakon", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Otani Yoshitsugu", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"One For All, All For One", // Tactic Name
				"Increases duration of immobility while [Ice] frozen by 200%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"One For All, All For One", // Tactic Name
				"Increases Attack by 120% towards enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 7),
				]
			)
		),
		// #endregion
		// #region Shima Sakon
		new Hero(
			"Shima Sakon", // Name
			"Sakon Shima", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Takeda", "Toyotomi", "Brave General", "Talent"], // Personal Emblems
			["Takeda", "Toyotomi", "Brave General", "Strategist", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% towards enemies with [Ice] Freeze.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 50% towards enemies with [Ice] Freeze.", 
				"Increases Assemble Gauge charge by 7% for every [Talent] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 30% towards Level Boss enemies.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 40% towards Level Boss enemies.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ishida Mitsunari", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Demon Sakon", // Tactic Name
				"Slightly charges Assemble Gauge when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Demon Sakon", // Tactic Name
				"Moderately charges Assemble Gauge when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Otani Yoshitsugu
		new Hero(
			"Otani Yoshitsugu", // Name
			"Yoshitsugu Otani", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Azai", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 200% for 20 seconds when you level up.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 50% for 20 seconds when you level up.", 
				"Increases Attack by 70% for 20 seconds when you are hit by an enemy.",
			],
			[ // Trait 2
				"Shortens summoning cooldown for all heroes by 50% when Health is below 50%.", 
				"Increases Attack Speed by 5% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Shortens summoning cooldown for all heroes by 50% when Health is below 50%.", 
				"Increases Attack Speed by 10% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Inspired Formation (Speed)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ishida Mitsunari", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Lord of 10,000 Domains", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Lord of 10,000 Domains", // Tactic Name
				"Shortens summoning cooldown by 30% and increases Attack by 20% for heroes with [Talent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Talent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Kato Kiyomasa
		new Hero(
			"Kato Kiyomasa", // Name
			"Kiyomasa Kato", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Brave General"], // Personal Emblems
			["Tokugawa", "Toyotomi", "Brave General", "Western Region"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 20 seconds when you are knocked into the air by an enemy attack.", 
				"Increases Attack by 30% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 20 seconds when you are hit by an enemy.", 
				"Increases Attack by 50% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2
				"Charges Musou Gauge and Assemble Gauge by 20% when you acquire Peaches.", 
				"Increases Attack by 30% towards Level Boss enemies.",
			],
			[ // Trait 2 Transcended
				"Charges Musou Gauge and Assemble Gauge by 20% when you acquire Peaches.", 
				"Increases Attack by 60% towards Level Boss enemies.",
			],
			new SummonSkill( // Summon Skill
				"Swift Strike", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Toyotomi Hideyoshi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Fearless Seven Spears", // Tactic Name
				"Increases Attack for Summoning Skill [Swift Strike] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Swift Strike"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Fearless Seven Spears", // Tactic Name
				"Increases Attack for Summoning Skill [Swift Strike] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Swift Strike"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Toyotomi", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Sanada Yukimura (Mature)
		new Hero(
			"Sanada Yukimura (Mature)", // Name
			"Mature Yukimura Sanada", // Name In-Game
			["MYS"], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Wisdom", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Sanada", "Toyotomi", "Brave General", "Strategist", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Bestows a random Emblem every 6 levels.", 
				"Increases Attack by 50% towards enemies with [Flame] Burn.",
			],
			[ // Trait 1 Transcended
				"Bestows a random Emblem every 6 levels.", 
				"Increases Attack by 50% towards enemies with [Flame] Burn.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Toyotomi] Emblem.", 
				"Increases Defence for the player hero by 20% towards Level Boss enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 12% for every [Toyotomi] Emblem.", 
				"Increases Defence for the player hero by 30% towards Level Boss enemies.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Chacha", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Japan's Greatest Warrior", // Tactic Name
				"Increases Attack by 100% for heroes with [Sanada], [Skill], or [Wisdom] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
					new TacticTarget(TacticTarget.TypeEmblem, "Skill"),
					new TacticTarget(TacticTarget.TypeEmblem, "Wisdom"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 6),
				]
			),
			new Tactic( // Tactic Transcended
				"Japan's Greatest Warrior", // Tactic Name
				"Increases Attack by 100% for heroes with [Sanada], [Skill], or [Wisdom] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
					new TacticTarget(TacticTarget.TypeEmblem, "Skill"),
					new TacticTarget(TacticTarget.TypeEmblem, "Wisdom"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 6),
				]
			)
		),
		// #endregion

		// #endregion Toyotomi

		// #region Tokugawa / Hojo

		// #region Tokugawa Ieyasu
		new Hero(
			"Tokugawa Ieyasu", // Name
			"Ieyasu Tokugawa", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Charm", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Daimyo", "Talent", "Three Heroes"], // Personal Emblems
			["Tokugawa", "Imagawa", "Daimyo", "Talent", "Three Heroes"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Tokugawa] Emblem.", 
				"Increases your maximum Health by 10% every 5 levels (max 100%).",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 10% for every [Tokugawa] Emblem.", 
				"Increases your maximum Health by 10% every 5 levels (max 100%).",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 10% for every [Tokugawa] Emblem.", 
				"Slightly charges Assemble Gauge when you inflict [Flame] Burn on enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 18% for every [Tokugawa] Emblem.", 
				"Slightly charges Assemble Gauge when you inflict [Flame] Burn on enemies.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Honda Tadakatsu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Soul of Mikawa", // Tactic Name
				"Increases Attack by 50% for heroes with [Tokugawa] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Tokugawa"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Tokugawa", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			),
			new Tactic( // Tactic Transcended
				"Soul of Mikawa", // Tactic Name
				"Increases Attack and Defence by 60% for heroes with [Tokugawa] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Tokugawa"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Tokugawa", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Honda Tadakatsu
		new Hero(
			"Honda Tadakatsu", // Name
			"Tadakatsu Honda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Strength", "Strength", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Brave General", "Flower of War"], // Personal Emblems
			["Tokugawa", "Brave General", "Flower of War", "King's Shield"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 5% for every [Tokugawa] Emblem.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 1 Transcended
				"Increases Attack and Defence by 10% for every [Tokugawa] Emblem.", 
				"Bestows you with invulnerability for 3 seconds after you are hit by an enemy.",
			],
			[ // Trait 2
				"Increases Attack by 20% while Health is above 80%.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% while Health is above 80%.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			new SummonSkill( // Summon Skill
				"Legendary Blow", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Tokugawa Ieyasu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Ina", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Impressive in Spirit and Skill", // Tactic Name
				"Increases continuous damage from flames by 200% while [Flame] burned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Impressive in Spirit and Skill", // Tactic Name
				"Increases continuous damage from flames by 300% while [Flame] burned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Ina
		new Hero(
			"Ina", // Name
			null, // Name In-Game
			["Lady Ina", "Inahime", "Ina hime"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Skill", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Sanada", "Tokugawa", "Master Archer", "Flower of War", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Flower of War] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 7% for every [Flower of War] Emblem.", 
				"Increases Attack by 30% towards Level Boss enemies.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 10% for every [Tokugawa] Emblem.", 
				"Increases your total [Skill] Emblems by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 18% for every [Tokugawa] Emblem.", 
				"Increases your total [Skill] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sanada Nobuyuki", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Lightning Arrow", // Tactic Name
				"Slightly charges Musou Gauge when you attack enemies with [Bolt] Shock.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Lightning Arrow", // Tactic Name
				"Moderately charges Musou Gauge when you attack enemies with [Bolt] Shock.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Ii Naotora
		new Hero(
			"Ii Naotora", // Name
			"Naotora Ii", // Name In-Game
			["Lady Ii Naotora"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Imagawa", "Flower of War"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack Speed by 10% for 15 seconds after every 1000 consecutive hits.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack Speed by 10% for 30 seconds after every 1000 consecutive hits.", 
				"Replenishes Health by 5% after every 1000 consecutive hits.",
			],
			[ // Trait 2
				"Cuts 1 second from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.", 
				"Increases Attack by 5% for every [Torchbearer] Emblem.",
			],
			[ // Trait 2 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Bolt] Shock on enemies.", 
				"Increases Attack by 7% for every [Torchbearer] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ii Naomasa", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Always Fight Head On", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Flower of War] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Always Fight Head On", // Tactic Name
				"Shortens summoning cooldown by 30% and increases attack towards enemy barriers by 50% for heroes with [Flower of War] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Ii Naomasa
		new Hero(
			"Ii Naomasa", // Name
			"Naomasa Ii", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Brave General", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Tokugawa] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 12% for every [Tokugawa] Emblem.", 
				"Increases your total [Flame] Emblems by 50%.",
			],
			[ // Trait 2
				"Cuts 1 second from the summoning cooldown timer when you inflict [Flame] Burn on enemies.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Flame] Burn on enemies.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Sword Dance", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Honda Tadakatsu", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Red Armour of the Ii", // Tactic Name
				"Increases Attack for Summoning Skill [Sword Dance] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sword Dance"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Red Armour of the Ii", // Tactic Name
				"Increases Attack for Summoning Skill [Sword Dance] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Sword Dance"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Hattori Hanzo
		new Hero(
			"Hattori Hanzo", // Name
			"Hanzo Hattori", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Speed"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Shinobi", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Tokugawa] Emblem.", 
				"Increases Attack Speed by 10% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 12% for every [Tokugawa] Emblem.", 
				"Increases Attack Speed by 10% for 30 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2
				"Increases your total [Speed] Emblems by 50%.", 
				"Adds 50% of your Speed to your Attack.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Speed] Emblems by 50%.", 
				"Deals extra [Bolt] damage when you destroy enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Mist", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Tokugawa Ieyasu", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Ninja Arts: Explosive Thunder", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Bolt] Shock.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Ninja Arts: Explosive Thunder", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Bolt] Shock.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Todo Takatora
		new Hero(
			"Todo Takatora", // Name
			"Takatora Todo", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Toyotomi", "Azai", "Talent", "Master Gunner"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the number of heroes at Crystal Saplings by 1.", 
			],
			[ // Trait 1 Transcended
				"Increases the number of heroes at Crystal Saplings by 1.", 
				"Increases selectable portals by 1 when you clear a phase without taking damage from enemies.",
			],
			[ // Trait 2
				"Bestows Normal Attacks with the [Ice] attribute while Health is above 80%.", 
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
			],
			[ // Trait 2 Transcended
				"Bestows Normal Attacks with the [Ice] attribute while Health is above 80%.", 
				"Increases Attack by 50% towards enemies with [Ice] Freeze.",
			],
			new SummonSkill( // Summon Skill
				"Meteor Strike", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Otani Yoshitsugu", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Merciless Ice Blade", // Tactic Name
				"Increases Attack for Summoning Skill [Meteor Strike] by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Meteor Strike"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Merciless Ice Blade", // Tactic Name
				"Increases Attack for Summoning Skill [Meteor Strike] by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Meteor Strike"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		
		// #region Hojo Ujiyasu
		new Hero(
			"Hojo Ujiyasu", // Name
			"Ujiyasu Hojo", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wind"], // Stat Emblems
			["Strength", "Strength", "Wind"], // Stat Emblems Transcended
			["Hojo", "Brave General", "Daimyo"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 20% for every [Hojo] Emblem.", 
				"Increases your total [Strength] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 25% for every [Hojo] Emblem.", 
				"Increases your total [Strength] Emblems by 70%.",
			],
			[ // Trait 2
				"Bestows Normal Attacks with the [Wind] attribute while Health is above 80%.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Bestows Normal Attacks with the [Wind] attribute while Health is above 80%.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Soaring Blade", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Colours of the Five Forces", // Tactic Name
				"Increases Attack by 100% for heroes with [Brave General] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Hojo", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Colours of the Five Forces", // Tactic Name
				"Increases Attack by 120% for heroes with [Brave General] or [Shinobi] Emblems when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Brave General"),
					new TacticTarget(TacticTarget.TypeEmblem, "Shinobi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Hojo", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Fuma Kotaro
		new Hero(
			"Fuma Kotaro", // Name
			"Kotaro Fuma", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Hojo", "Shinobi"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Adds 50% of your Speed to your Defence.", 
			],
			[ // Trait 1 Transcended
				"Increases your total [Slay] Emblems by 50%.", 
				"Increases Attack and Defence by 25% for every [Hojo] Emblem.",
			],
			[ // Trait 2
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
				"Charges Musou Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Increases Attack Speed by 10% for 10 seconds when you one-hit kill an enemy.", 
				"Charges Musou Gauge by 3% when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Burst of Flowers", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Hojo Ujiyasu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Fuma's Incantations", // Tactic Name
				"Summons this hero when other heroes who have the Summoning Skill [Soaring Blade] have been summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Soaring Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Fuma's Grand Incantations", // Tactic Name
				"When you summon heroes with the Summoning Skill [Soaring Blade], summons other heroes with [Shinobi] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Soaring Blade"),
					new TacticTarget(TacticTarget.TypePersonalEmblem, "Shinobi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Kai
		new Hero(
			"Kai", // Name
			null, // Name In-Game
			["Lady Kai", "Kaihime", "Kai hime"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Vigour", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Hojo", "Flower of War", "Might"], // Personal Emblems
			["Toyotomi", "Hojo", "Brave General", "Flower of War", "Might"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.", 
				"Increases your total [Vigour] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Flower of War] Emblem.", 
				"Bestows Normal Attacks with the [Bolt] attribute while Health is below 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 7% for every [Flower of War] Emblem.", 
				"Bestows Normal Attacks with the [Bolt] attribute while Health is below 90%.",
			],
			new SummonSkill( // Summon Skill
				"Tornado Blade", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Hojo Ujiyasu", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"War Rose of the Floating Castle", // Tactic Name
				"Increases Attack by 30% for heroes with [Flower of War] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"War Rose of the Floating Castle", // Tactic Name
				"Increases Attack by 50% for heroes with [Flower of War] or [Might] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
					new TacticTarget(TacticTarget.TypeEmblem, "Might"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Tokugawa / Hojo

		// #region Uesugi / Takeda

		// #region Uesugi Kenshin
		new Hero(
			"Uesugi Kenshin", // Name
			"Kenshin Uesugi", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Skill", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Uesugi", "Brave General", "Daimyo"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack for summoned heroes by 20%.", 
				"Increases your total [Vigour] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack for summoned heroes by 20%.", 
				"Increases your total [Vigour] Emblems by 70%.",
			],
			[ // Trait 2
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.", 
				"Increases Attack by 50% for 10 seconds after every 100 enemies defeated.",
			],
			[ // Trait 2 Transcended
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.", 
				"Increases Attack by 70% for 20 seconds after every 100 enemies defeated.",
			],
			new SummonSkill( // Summon Skill
				"Cleaving Blade", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Takeda Shingen", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"God of War", // Tactic Name
				"Increases Attack for Summoning Skill [Cleaving Blade] by 150%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Cleaving Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"God of War", // Tactic Name
				"Increases Attack for Summoning Skill [Cleaving Blade] by 170%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeSummoningSkill, "Cleaving Blade"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Naoe Kanetsugu
		new Hero(
			"Naoe Kanetsugu", // Name
			"Kanetsugu Naoe", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Uesugi", "Toyotomi", "Strategist"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 20% for every [Uesugi] Emblem.", 
				"Increases Attack for summoned heroes by 20%.",
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 30% for every [Uesugi] Emblem.", 
				"Increases Attack for summoned heroes by 50%.",
			],
			[ // Trait 2
				"Replenishes 3% of your Health when you defeat 1 Sin Spewer enemy.", 
				"Charges Assemble Gauge by 1% when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Replenishes 3% of your Health when you defeat 1 Sin Spewer enemy.", 
				"Increases your total [Bolt] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Amplifying Orb", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Ishida Mitsunari", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 5),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Naoe's Letter", // Tactic Name
				"Increases Attack by 100% for heroes with [Uesugi] or [Toyotomi] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Uesugi"),
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Uesugi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Naoe's Letter", // Tactic Name
				"Increases Attack by 120% for heroes with [Uesugi] or [Toyotomi] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Uesugi"),
					new TacticTarget(TacticTarget.TypeEmblem, "Toyotomi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Uesugi", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		
		// #region Takeda Shingen
		new Hero(
			"Takeda Shingen", // Name
			"Shingen Takeda", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Strength", "Charm"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Takeda", "Daimyo", "Talent"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 50% while Health is above 80%.", 
				"Makes it more likely for heroes with [Takeda] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 1 Transcended
				"Increases Attack and Defence by 50% while Health is above 80%.", 
				"Makes it more likely for heroes with [Takeda] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 15% for every [Takeda] Emblem.", 
				"Increases Attack and Defence by 50% if you have the \"Cherry Blossom Armour\" Treasure.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 25% for every [Takeda] Emblem.", 
				"Increases Attack and Defence by 80% if you have the \"Cherry Blossom Armour\" Treasure.",
			],
			new SummonSkill( // Summon Skill
				"Iron Wall", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Uesugi Kenshin", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Wind, Forest, Fire, Mountain", // Tactic Name
				"Shortens summoning cooldown by 20% and increases Attack by 40% for heroes with [Takeda] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Takeda"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strength", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Takeda", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Wind, Forest, Fire, Mountain", // Tactic Name
				"Increases Attack for all attributes by 60%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypeEmblem, "Slay"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Takeda", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 6),
				]
			)
		),
		// #endregion
		// #region Sanada Masayuki
		new Hero(
			"Sanada Masayuki", // Name
			"Masayuki Sanada", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Wisdom"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Takeda", "Sanada", "Daimyo", "Strategist"], // Personal Emblems
			["Takeda", "Sanada", "Daimyo", "Strategist", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 15% for every [Sanada] Emblem.", 
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 15% for every [Sanada] Emblem.", 
				"Makes all unlocked Formations available for use.",
			],
			[ // Trait 2
				"Makes it more likely for heroes with [Talent] Emblems to appear at Crystal Saplings.", 
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.",
			],
			[ // Trait 2 Transcended
				"Makes it more likely for heroes with [Talent] Emblems to appear at Crystal Saplings.", 
				"Charges Musou Gauge and Assemble Gauge by 50% when you level up.",
			],
			new SummonSkill( // Summon Skill
				"Tactical Focus", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Takeda Shingen", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Man of Two Sides", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Strategist] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Strategist"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Takeda", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Man of Two Sides", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Strategist] or [Daimyo] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Strategist"),
					new TacticTarget(TacticTarget.TypeEmblem, "Daimyo"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Takeda", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Sanada Nobuyuki
		new Hero(
			"Sanada Nobuyuki", // Name
			"Nobuyuki Sanada", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Takeda", "Sanada", "Tokugawa", "Talent", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Defence by 100% for 15 seconds after every 1000 consecutive hits.", 
			],
			[ // Trait 1 Transcended
				"Increases Defence by 120% for 30 seconds after every 1000 consecutive hits.", 
				"Increases Attack for Charge Attacks by 5% every time you clear a phase (max 100%).",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.", 
				"Replenishes 1% of your Health when you destroy enemy projectiles.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you inflict [Bolt] Shock on enemies.", 
				"Replenishes 2% of your Health when you destroy enemy projectiles.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sanada Masayuki", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Ina", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"World Treasure", // Tactic Name
				"Increases Attack by 100% for heroes with [Takeda] or [Sanada] Emblems when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Takeda"),
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"World Treasure", // Tactic Name
				"Increases Attack by 100% for heroes with [Takeda], [Sanada], or [Tokugawa] Emblems when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Takeda"),
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
					new TacticTarget(TacticTarget.TypeEmblem, "Tokugawa"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Torchbearer", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Sanada Yukimura
		new Hero(
			"Sanada Yukimura", // Name
			"Yukimura Sanada", // Name In-Game
			["Young Sanada Yukimura", "YYS"], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Takeda", "Sanada", "Brave General", "Talent", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Replenishes 1% of your Health when you destroy enemy projectiles.", 
			],
			[ // Trait 1 Transcended
				"Replenishes 1% of your Health when you destroy enemy projectiles.", 
				"Increases Attack by 3% for every [Flame] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Brave General] Emblem.", 
				"Slightly charges Musou Gauge when you acquire EXP.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 6% for every [Brave General] Emblem.", 
				"Increases your total [Flame] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"Soaring Blade", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Six-Coin Crest", // Tactic Name
				"Increases Attack for the [Flame] attribute by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Six-Coin Crest", // Tactic Name
				"Increases Attack for the [Flame] attribute by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flame"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Kunoichi
		new Hero(
			"Kunoichi", // Name
			null, // Name In-Game
			["Lady Kunoichi"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed"], // Stat Emblems
			["Speed", "Ice"], // Stat Emblems Transcended
			["Takeda", "Sanada", "Shinobi", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Adds 50% of your Speed to your Attack.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 15% for every [Sanada] Emblem.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			[ // Trait 2
				"Increases Musou Gauge charge by 15% for every [Sanada] Emblem.", 
				"Increases your total [Speed] Emblems by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Musou Gauge charge by 20% for every [Sanada] Emblem.", 
				"Increases your total [Speed] Emblems by 50%.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sanada Yukimura", SummonActivationCondition.TypeHero),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Sanada's Devoted Blade", // Tactic Name
				"Sets Status Infliction to 100% for heroes with [Sanada] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Sanada's Devoted Blade", // Tactic Name
				"Sets Status Infliction to 100% and raises attribute Attack by 20% for heroes with [Sanada] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Sasuke
		new Hero(
			"Sasuke", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Sanada", "Shinobi"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Adds 50% of your Speed to your Attack.", 
				"Increases Attack by 50% towards Archer enemies.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 15% for every [Sanada] Emblem.", 
				"Increases Attack by 7% for every [Shinobi] Emblem.",
			],
			[ // Trait 2
				"Increases your total [Speed] Emblems by 50%.", 
				"Increases Attack Speed by 5% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Speed] Emblems by 50%.", 
				"Increases Attack Speed by 10% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Sanada Yukimura", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Gale of Darkness", // Tactic Name
				"Shortens summoning cooldown by 20% for heroes with [Sanada] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Gale of Darkness", // Tactic Name
				"Increases Attack by 50% for heroes with [Sanada] or [Shinobi] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Sanada"),
					new TacticTarget(TacticTarget.TypeEmblem, "Shinobi"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Sanada", SummonActivationCondition.TypePersonalEmblem, 4),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion

		// #endregion Uesugi / Takeda

		// #region Other Samurai Warriors

		// #region Imagawa Yoshimoto
		new Hero(
			"Imagawa Yoshimoto", // Name
			"Yoshimoto Imagawa", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Charm", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Imagawa", "Daimyo", "Grace"], // Personal Emblems
			["Imagawa", "Master Archer", "Daimyo", "Grace"], // Personal Emblems Transcended
			[ // Trait 1
				"Slightly charges Assemble Gauge when you inflict [Wind] Disorient on enemies.", 
				"Increases your total [Charm] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Moderately charges Assemble Gauge when you inflict [Wind] Disorient on enemies.", 
				"Increases your total [Charm] Emblems by 50%.",
			],
			[ // Trait 2
				"Replenishes Health by 5% after every 1000 consecutive hits.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Replenishes Health by 5% after every 1000 consecutive hits.", 
				"Increases Attack by 60% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Homing Blades", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Imagawa", SummonActivationCondition.TypePersonalEmblem, 2),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Best Archer in Tokaido", // Tactic Name
				"Summons other heroes who have [Daimyo] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Daimyo"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Best Archer in Tokaido", // Tactic Name
				"Summons other heroes who have [Daimyo] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Daimyo"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion
		// #region Azai Nagamasa
		new Hero(
			"Azai Nagamasa", // Name
			"Nagamasa Azai", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Azai", "Brave General", "Daimyo", "Grace"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Cuts 1 second from the summoning cooldown timer when you inflict [Ice] Freeze on enemies.", 
			],
			[ // Trait 1 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Ice] Freeze on enemies.", 
				"Increases your total [Ice] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Attack by 10% for every [Azai] Emblem.", 
				"Increases Attack Speed by 5% for 10 seconds after evading.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 20% for every [Azai] Emblem.", 
				"Increases Attack Speed by 10% for 10 seconds after evading.",
			],
			new SummonSkill( // Summon Skill
				"Sword Dance", // Summon Skill Name
				"Ice", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Oichi", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Brave Spearman of Kohoku", // Tactic Name
				"Slightly charges Musou Gauge when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Brave Spearman of Kohoku", // Tactic Name
				"Moderately charges Musou Gauge when you attack enemies with [Ice] Freeze.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Ice"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Mori Monotari
		new Hero(
			"Mori Monotari", // Name
			"Monotari Mori", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Charm"], // Stat Emblems
			["Wisdom", "Charm", "Slay"], // Stat Emblems Transcended
			["Mori", "Master Archer", "Daimyo", "Talent", "Western Region"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Slightly charges Assemble Gauge when you acquire EXP.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Slightly charges Assemble Gauge when you acquire EXP.", 
				"Increases your total [Wisdom] Emblems by 70%.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 20% while Health is above 80%.", 
				"Doubles Formation slot bonus effects.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 30% for every [Mori] Emblem.", 
				"Doubles Formation slot bonus effects.",
			],
			new SummonSkill( // Summon Skill
				"April Showers", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Wisdom", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"One Million People, One Heart", // Tactic Name
				"Increases Attack by 5% for every [Charm] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Charm", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			null
		),
		// #endregion
		// #region Kobayakawa Takakage
		new Hero(
			"Kobayakawa Takakage", // Name
			"Takakage Kobayakawa", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Wisdom", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Mori", "Strategist", "Western Region", "Torchbearer"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% for 20 seconds when you level up.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 50% for 20 seconds when you level up.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Assemble Gauge charge by 20% while Health is above 80%.", 
				"Cuts 1 second from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.",
			],
			[ // Trait 2 Transcended
				"Increases Assemble Gauge charge by 20% for every [Western Region] Emblem.", 
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.",
			],
			new SummonSkill( // Summon Skill
				"Oppressive Formation (Defence)", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Mori Monotari", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Arrow of Wisdom", // Tactic Name
				"Increases Attack by 3% for every [Wisdom] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Arrow of Wisdom", // Tactic Name
				"Increases Attack by 4% for every [Wisdom] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Strategist", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Shimazu Yoshihiro
		new Hero(
			"Shimazu Yoshihiro", // Name
			"Yoshihiro Shimazu", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Vigour"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shimazu", "Brave General", "Daimyo", "Master Gunner", "Western Region"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 30% in Danger Zones.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 40% in Danger Zones.", 
				"Increases Attack by 5% for every [Brave General] Emblem.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Wind] Disorient.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Demon Shimazu", // Tactic Name
				"Increases Attack by 100% for heroes with [Western Region] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Western Region"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Demon Shimazu", // Tactic Name
				"Increases Attack by 120% for heroes with [Western Region] or [Might] Emblems when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Western Region"),
					new TacticTarget(TacticTarget.TypeEmblem, "Might"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Shimazu Toyohisa
		new Hero(
			"Shimazu Toyohisa", // Name
			"Toyohisa Shimazu", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Shimazu", "Brave General", "Master Gunner", "Western Region", "King's Shield"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 20% in Danger Zones.", 
				"Bestows Normal Attacks with the [Flame] attribute while Health is above 80%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack, Defence, Musou Gauge charge, and Assemble Gauge charge by 80% in Danger Zones.", 
				"Applies the [Flame] attribute to Normal Attacks.",
			],
			[ // Trait 2
				"Increases Attack by 30% towards Level Boss enemies.", 
				"Increases Attack Speed by 10% for 10 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 40% towards Level Boss enemies.", 
				"Increases Attack Speed by 10% for 10 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Sweeping Cyclone", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Shimazu Yoshihiro", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Sacrificial Gambit", // Tactic Name
				"Increases Attack by 100% for heroes with [Master Gunner] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Master Gunner"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Sacrificial Gambit", // Tactic Name
				"Increases Attack by 120% for heroes with [Master Gunner] or [King's Shield] Emblem when attacking enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Master Gunner"),
					new TacticTarget(TacticTarget.TypeEmblem, "King's Shield"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("King's Shield", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Tachibana Ginchiyo
		new Hero(
			"Tachibana Ginchiyo", // Name
			"Ginchiyo Tachibana", // Name In-Game
			["Lady Tachibana Ginchiyo"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tachibana", "Flower of War", "Western Region", "Torchbearer"], // Personal Emblems
			["Tachibana", "Brave General", "Flower of War", "Western Region", "Torchbearer"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Musou Gauge charge by 30% for every [Tachibana] Emblem.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 1 Transcended
				"Increases Musou Gauge charge by 40% for every [Tachibana] Emblem.", 
				"Increases your total [Bolt] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Bolt] Shock.", 
				"Increases Attack by 3% for every [Bolt] Emblem.",
			],
			new SummonSkill( // Summon Skill
				"Homing Blades", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Tachibana Muneshige", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Sword of Lightning", // Tactic Name
				"Increases Attack for the [Bolt] Attribute by 100%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Sword of Lightning", // Tactic Name
				"Increases Attack for the [Bolt] Attribute by 120%.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Bolt"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Tachibana Muneshige
		new Hero(
			"Tachibana Muneshige", // Name
			"Muneshige Tachibana", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Strength", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tachibana", "Brave General", "Master Archer", "Flower of War", "Western Region"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 10% for every [Western Region] Emblem.", 
				"Increases Assemble Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 15% for every [Western Region] Emblem.", 
				"Increases Assemble Gauge charge by 50% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2
				"Replenishes 20% of your Health when you level up.", 
				"Increases Attack by 30% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2 Transcended
				"Replenishes 20% of your Health when you level up.", 
				"Increases Attack by 50% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			new SummonSkill( // Summon Skill
				"Rapid-Fire Cannon", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Tachibana Ginchiyo", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Bravest Warrior of Chinzei", // Tactic Name
				"Increases Attack by 50% for heroes with [Western Region] or [Strength] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Western Region"),
					new TacticTarget(TacticTarget.TypeEmblem, "Strength"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			),
			new Tactic( // Tactic Transcended
				"Bravest Warrior of Chinzei", // Tactic Name
				"Increases Attack by 60% for heroes with [Western Region] or [Strength] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Western Region"),
					new TacticTarget(TacticTarget.TypeEmblem, "Strength"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 2),
				]
			)
		),
		// #endregion
		// #region Chosokabe Motochika
		new Hero(
			"Chosokabe Motochika", // Name
			"Motochika Chosokabe", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Chosokabe", "Daimyo", "Western Region"], // Personal Emblems
			["Toyotomi", "Chosokabe", "Brave General", "Daimyo", "Western Region"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 50% for 20 seconds when you are hit by an enemy.", 
				"Increases your total [Skill] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 80% each time you are revived (max 300%).", 
				"Increases your total [Skill] Emblems by 50%.",
			],
			[ // Trait 2
				"Revives you when your Health reaches 0, up to 1 times.", 
				"Increases Attack by 30% for 15 seconds after every 1000 consecutive hits.",
			],
			[ // Trait 2 Transcended
				"Revives you when your Health reaches 0, up to 1 times.", 
				"Increases Attack by 70% for 30 seconds after every 1000 consecutive hits.",
			],
			new SummonSkill( // Summon Skill
				"Penetrating Blade", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Western Region", SummonActivationCondition.TypePersonalEmblem, 3),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Music of the Young Demon", // Tactic Name
				"Increases Attack by 100% during Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Music of the Young Demon", // Tactic Name
				"Increases Attack by 100% during Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Skill", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Date Masamune
		new Hero(
			"Date Masamune", // Name
			"Masamune Date", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Speed", "Wind"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Tokugawa", "Date", "Daimyo", "Talent", "Master Gunner"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Cuts 1 second from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.", 
			],
			[ // Trait 1 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.", 
				"Increases your total [Wind] Emblems by 50%.",
			],
			[ // Trait 2
				"Bestows Normal Attacks with the [Wind] attribute while Health is below 50%.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Bestows Normal Attacks with the [Wind] attribute while Health is below 90%.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Dazzling Bullets", // Summon Skill Name
				"Wind", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Daimyo", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Master Gunner", SummonActivationCondition.TypePersonalEmblem, 2),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"One-Eyed Dragon", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			),
			new Tactic( // Tactic Transcended
				"One-Eyed Dragon", // Tactic Name
				"Causes an explosion that damages nearby enemies when you attack enemies with [Wind] Disorient.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Wind"),
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Talent", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Saika Magoichi
		new Hero(
			"Saika Magoichi", // Name
			"Magoichi Saika", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Skill", "Skill"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Toyotomi", "Independent", "Brave General", "Master Gunner"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 30% towards Level Boss enemies.", 
				"Increases Attack Speed by 5% for 5 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 30% towards Level Boss enemies.", 
				"Increases Attack Speed by 10% for 15 seconds when you interrupt an enemy's telegraphed attack.",
			],
			[ // Trait 2
				"Increases Attack by 50% towards enemies with [Flame] Burn.", 
				"Increases Attack by 3% when you move on to the next phase without being hit by an enemy attack (max 50%).",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 50% towards enemies with [Flame] Burn.", 
				"Increases Attack by 3% when you move on to the next phase without being hit by an enemy attack (max 100%).",
			],
			new SummonSkill( // Summon Skill
				"Earth Shatter", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Toyotomi Hideyoshi", SummonActivationCondition.TypeHero),
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 5),
				],
				true,  // Is Improved by Amount
				false, // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Three-Legged Crow", // Tactic Name
				"Increases Attack by 40% for heroes with [Master Gunner] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Master Gunner"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
					new SummonActivationCondition("Master Gunner", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Three-Legged Crow", // Tactic Name
				"Increases Attack by 50% for heroes with [Master Gunner] or [Independent] Emblems.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Master Gunner"),
					new TacticTarget(TacticTarget.TypeEmblem, "Independent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 6),
					new SummonActivationCondition("Master Gunner", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Okuni
		new Hero(
			"Okuni", // Name
			null, // Name In-Game
			["Lady Okuni"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Wind"], // Stat Emblems
			["Charm", "Wind"], // Stat Emblems Transcended
			["Independent", "Grace", "Might", "Western Region"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the number of heroes at Crystal Saplings by 1.", 
			],
			[ // Trait 1 Transcended
				"Increases the number of heroes at Crystal Saplings by 1.", 
				"Increases Attack by 10% for every [Independent] Emblem.",
			],
			[ // Trait 2
				"Cuts 1 second from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Cuts 2 seconds from the summoning cooldown timer when you inflict [Wind] Disorient on enemies.", 
				"Increases Attack by 50% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Disarming Wave", // Summon Skill Name
				null, // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Maeda Keiji", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Kabuki Dance", // Tactic Name
				"Replenishes 20% of your Health when you activate Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Kabuki Dance", // Tactic Name
				"Replenishes 30% of your Health when you activate Assemble.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Ishikawa Goemon
		new Hero(
			"Ishikawa Goemon", // Name
			"Goemon Ishikawa", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour"], // Stat Emblems
			["Vigour", "Speed"], // Stat Emblems Transcended
			["Independent", "Shinobi"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the amount of Tears of Blood acquired by 50%.", 
				"Adds 10% to the amount of maximum Health raised using Peach Trees.",
			],
			[ // Trait 1 Transcended
				"Increases the amount of Tears of Blood acquired by 100%.", 
				"Adds 10% to the amount of maximum Health raised using Peach Trees.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 100%).", 
				"Increases Attack Speed by 5% for 10 seconds after evading.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 5% for every 1000 Tears of Blood you possess (max 150%).", 
				"Increases Attack Speed by 10% for 10 seconds after evading.",
			],
			new SummonSkill( // Summon Skill
				"Burst of Flowers", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Okuni", SummonActivationCondition.TypeHero),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"World's Greatest Thief", // Tactic Name
				"Guarantees that enemies defeated with Musou Attacks will drop Tears of Blood.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 5),
				]
			),
			null
		),
		// #endregion

		// #endregion Other Samurai Warriors

		// #region Guest

		// #region Sophie
		new Hero(
			"Sophie", // Name
			"Lady Sophie", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Flame", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Flower of War", "Talent"], // Personal Emblems
			["Independent", "Flower of War", "Grace", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Assemble Gauge charge by 10% for every [Flower of War] Emblem.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Increases Assemble Gauge charge by 10% for every [Flower of War] Emblem.", 
				"Increases your total [Wisdom] Emblems by 50%.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Independent] Emblem.", 
				"Deals extra [Bolt] damage when you destroy enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 10% for every [Independent] Emblem.", 
				"Deals extra [Bolt] damage when you destroy enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Alchemy", // Summon Skill Name
				["Flame", "Bolt"], // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Law of Profusion", // Tactic Name
				"Shortens summoning cooldown by 20% and increases Attack by 20% for heroes with [Flower of War] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 6),
				]
			),
			new Tactic( // Tactic Transcended
				"Law of Profusion", // Tactic Name
				"Shortens summoning cooldown by 40% and increases Attack by 20% for heroes with [Flower of War] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 3),
					new SummonActivationCondition("Bolt", SummonActivationCondition.TypeStatEmblem, 6),
				]
			)
		),
		// #endregion
		// #region Ryza
		new Hero(
			"Ryza", // Name
			null, // Name In-Game
			["Lady Ryza"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Flame", "Ice"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Flower of War", "Talent"], // Personal Emblems
			["Independent", "Flower of War", "Grace", "Talent"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases hero rerolls at Crystal Saplings by 15.", 
				"Makes it more likely for heroes with [Flower of War] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 1 Transcended
				"Increases hero rerolls at Crystal Saplings by 15.", 
				"Makes it more likely for heroes with [Flower of War] Emblems to appear at Crystal Saplings.",
			],
			[ // Trait 2
				"Increases Attack by 5% for every [Flower of War] Emblem.", 
				"When you defeat an enemy, causes an explosion that inflicts enemies with [Flame] Burn.",
			],
			[ // Trait 2 Transcended
				"Increases Attack by 7% for every [Flower of War] Emblem.", 
				"When you defeat an enemy, causes an explosion that inflicts enemies with [Flame] Burn.",
			],
			new SummonSkill( // Summon Skill
				"Alchemy", // Summon Skill Name
				["Flame", "Ice"], // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Heaven's Quasar", // Tactic Name
				"Summons other heroes who have [Flower of War] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 8),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Heaven's Quasar", // Tactic Name
				"Summons other heroes who have [Flower of War] Emblem when this hero is summoned.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Flower of War"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Flame", SummonActivationCondition.TypeStatEmblem, 6),
					new SummonActivationCondition("Ice", SummonActivationCondition.TypeStatEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Yumia
		new Hero(
			"Yumia", // Name
			null, // Name In-Game
			["Lady Yumia"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Wind", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Flower of War", "Master Gunner"], // Personal Emblems
			["Independent", "Flower of War", "Grace", "Master Gunner"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 5% for every [Independent] Emblem.", 
				"When you inflict [Wind] Disorient, causes an explosion that inflicts enemies with [Wind] Disorient.",
			],
			[ // Trait 1 Transcended
				"Increases Attack by 10% for every [Independent] Emblem.", 
				"When you inflict [Wind] Disorient, causes an explosion that inflicts enemies with [Wind] Disorient.",
			],
			[ // Trait 2
				"Increases your total [Wind] Emblems by 50%.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Increases your total [Wind] Emblems by 50%.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Alchemy", // Summon Skill Name
				["Wind", "Slay"], // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				false, // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Requiem Trigger", // Tactic Name
				"Increases Attack by 50% for heroes with [Independent] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Independent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 6),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 3),
				]
			),
			new Tactic( // Tactic Transcended
				"Requiem Trigger", // Tactic Name
				"Increases Attack by 50% for heroes with [Independent] Emblem and for attacks towards enemy barriers.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Independent"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Wind", SummonActivationCondition.TypeStatEmblem, 6),
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 3),
				]
			)
		),
		// #endregion
		
		// #region Hayabusa Ryu
		new Hero(
			"Hayabusa Ryu", // Name
			"Ryu Hayabusa", // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Vigour", "Skill", "Speed", "Speed"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Brave General", "Shinobi", "Shinobi", "Shinobi"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Replenishes Health by 1% after every 50 enemies defeated.", 
				"Increases your total [Speed] Emblems by 50%.",
			],
			[ // Trait 1 Transcended
				"Replenishes Health by 1% after every 50 enemies defeated.", 
				"Increases your total [Speed] Emblems by 70%.",
			],
			[ // Trait 2
				"Increases Attack Speed by 10% for 10 seconds after evading.", 
				"Increases your total [Vigour] Emblems by 50%.",
			],
			[ // Trait 2 Transcended
				"Increases Attack Speed by 10% for 10 seconds after evading.", 
				"Increases your total [Vigour] Emblems by 70%.",
			],
			new SummonSkill( // Summon Skill
				"Art of the Inferno", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Independent", SummonActivationCondition.TypeHero, 4),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"The Dragon Ninja", // Tactic Name
				"Increases Speed and Attack Speed by 15% for the player hero.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 12),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypeHero, 7),
				]
			),
			new Tactic( // Tactic Transcended
				"The Dragon Ninja", // Tactic Name
				"Increases Speed and Attack Speed by 15% for the player hero.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypeHero, 7),
				]
			)
		),
		// #endregion
		// #region Ayane
		new Hero(
			"Ayane", // Name
			null, // Name In-Game
			["Lady Ayane"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Slay"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Shinobi", "Flower of War"], // Personal Emblems
			["Independent", "Shinobi", "Flower of War", "Grace"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 7% for every [Shinobi] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 7% for every [Shinobi] Emblem.", 
				"Replenishes Health by 1% after every 50 enemies defeated.",
			],
			[ // Trait 2
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			[ // Trait 2 Transcended
				"Slightly charges Musou Gauge when you inflict [Slay] Wound on enemies.", 
				"Sets up a barrier to block attacks for 10 seconds after you defeat 4 Sin Spewer enemies.",
			],
			new SummonSkill( // Summon Skill
				"Flash Kunai", // Summon Skill Name
				"Slay", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 2),
					new SummonActivationCondition("Flower of War", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Mugen Tenshin Style", // Tactic Name
				"Increases Attack by 50% for heroes with the [Speed] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Speed"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			),
			new Tactic( // Tactic Transcended
				"Mugen Tenshin Style", // Tactic Name
				"Increases Attack by 50% for heroes with the [Speed] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Speed"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Slay", SummonActivationCondition.TypeStatEmblem, 5),
					new SummonActivationCondition("Shinobi", SummonActivationCondition.TypePersonalEmblem, 3),
				]
			)
		),
		// #endregion
		// #region Rachel
		new Hero(
			"Rachel", // Name
			null, // Name In-Game
			["Lady Rachel"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Vigour", "Bolt"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Brave General", "Might"], // Personal Emblems
			["Independent", "Brave General", "Flower of War", "Might"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases Attack by 10% for every [Might] Emblem.", 
			],
			[ // Trait 1 Transcended
				"Increases Attack by 10% for every [Might] Emblem.", 
				"Makes defeated enemies explode, dealing damage to nearby enemies.",
			],
			[ // Trait 2
				"Causes an explosion that damages nearby enemies when you destroy enemy projectiles.", 
				"Replenishes 20% of your Health when you level up.",
			],
			[ // Trait 2 Transcended
				"Causes an explosion that damages nearby enemies when you destroy enemy projectiles.", 
				"Replenishes 20% of your Health when you level up.",
			],
			new SummonSkill( // Summon Skill
				"Heavy Machine Gun", // Summon Skill Name
				"Bolt", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Independent", SummonActivationCondition.TypePersonalEmblem, 3),
					new SummonActivationCondition("Brave General", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Fiend Blood", // Tactic Name
				"Increases Attack by 100% for heroes with [Might] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Might"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 6),
				]
			),
			new Tactic( // Tactic Transcended
				"Fiend Blood", // Tactic Name
				"Increases Attack by 100% for heroes with [Might] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Might"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Vigour", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Might", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			)
		),
		// #endregion
		// #region Momiji
		new Hero(
			"Momiji", // Name
			null, // Name In-Game
			["Lady Momiji"], // Additional Search Tokens
			Hero.SexFemale, // Sex
			["Speed", "Flame"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Independent", "Master Archer", "Shinobi", "Grace"], // Personal Emblems
			["Independent", "Master Archer", "Shinobi", "Flower of War", "Grace"], // Personal Emblems Transcended
			[ // Trait 1
				"Increases the number of heroes at Crystal Saplings by 1.", 
			],
			[ // Trait 1 Transcended
				"Increases the number of heroes at Crystal Saplings by 1.", 
				"Restores 10% of your Health at the start of battle in each phase.",
			],
			[ // Trait 2
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			[ // Trait 2 Transcended
				"Causes an explosion that damages nearby enemies when you destroy enemy barriers.", 
				"Increases Attack by 30% for Charge Attacks towards enemy barriers.",
			],
			new SummonSkill( // Summon Skill
				"Heavensong Bow", // Summon Skill Name
				"Flame", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Master Archer", SummonActivationCondition.TypePersonalEmblem, 5),
				],
				true,  // Is Improved by Amount
				true,  // Is Improved by Range
				true   // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Heavenbreaker", // Tactic Name
				"Increases Attack by 5% for every [Speed] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 5),
				]
			),
			new Tactic( // Tactic Transcended
				"Heavenbreaker", // Tactic Name
				"Increases Attack by 5% for every [Speed] Emblem.", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypePlayer),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Speed", SummonActivationCondition.TypeStatEmblem, 10),
					new SummonActivationCondition("Grace", SummonActivationCondition.TypePersonalEmblem, 4),
				]
			)
		),
		// #endregion

		// #endregion Guest
	];

	static #mock = 
	[
		// #region ???
		new Hero(
			"Placeholder", // Name
			null, // Name In-Game
			[], // Additional Search Tokens
			Hero.SexMale, // Sex
			["Placeholder"], // Stat Emblems
			[], // Stat Emblems Transcended
			["Placeholder"], // Personal Emblems
			[], // Personal Emblems Transcended
			[ // Trait 1
				"Placeholder", 
				"Placeholder",
			],
			[ // Trait 1 Transcended
				"Placeholder", 
				"Placeholder",
			],
			[ // Trait 2
				"Placeholder", 
				"Placeholder",
			],
			[ // Trait 2 Transcended
				"Placeholder", 
				"Placeholder",
			],
			new SummonSkill( // Summon Skill
				"Placeholder", // Summon Skill Name
				"Placeholder", // Summon Skill Element (string, string[], or null)
				[ // Summon Skill Activation Condition
					new SummonActivationCondition("Placeholder", SummonActivationCondition.TypeHero, 10),
				],
				false, // Is Improved by Amount
				false, // Is Improved by Range
				false  // Is Improved by Duration
			),
			null, // Summon Skill Transcended
			new Tactic( // Tactic
				"Placeholder", // Tactic Name
				"Placeholder", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Placeholder"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Placeholder", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			),
			new Tactic( // Tactic Transcended
				"Placeholder", // Tactic Name
				"Placeholder", // Tactic Description
				[ // Tactic Targets
					new TacticTarget(TacticTarget.TypeEmblem, "Placeholder"),
				],
				[ // Tactic Activation Conditions
					new SummonActivationCondition("Placeholder", SummonActivationCondition.TypePersonalEmblem, 10),
				]
			)
		),
		// #endregion
	];
}
