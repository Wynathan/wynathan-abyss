class Icons 
{
	// Crop a circle: https://imagy.app/circle-crop-image-online/
	// Convert .png to base64: https://base64.guru/converter/encode/image/png

	static EmblemIconWidth = 57;
	static EmblemIconHeight = 57;
	static EmblemIconScale = 0.5;
	static T12IconScale = 0.3;
	static SummonSkillBuffWidth = 40;
	static SummonSkillBuffHeight = 40;
	static SummonSkillIconScale = 0.5;

	/** @type {Object.<string, string>} */
	static MapEmblemToFilePath = 
	{
		[Emblem.StatVigour]: "icons/emblems/01. Vigour.png",
		[Emblem.StatSkill]: "icons/emblems/02. Skill.png",
		[Emblem.StatStrength]: "icons/emblems/03. Strength.png",
		[Emblem.StatSpeed]: "icons/emblems/04. Speed.png",
		[Emblem.StatWisdom]: "icons/emblems/05. Wisdom.png",
		[Emblem.StatCharm]: "icons/emblems/06. Charm.png",

		[Emblem.ElementFlame]: "icons/emblems/10. Flame.png",
		[Emblem.ElementIce]: "icons/emblems/11. Ice.png",
		[Emblem.ElementWind]: "icons/emblems/12. Wind.png",
		[Emblem.ElementBolt]: "icons/emblems/13. Bolt.png",
		[Emblem.ElementSlay]: "icons/emblems/14. Slay.png",
	};

	/** @typedef {Object.<boolean, string>} DictionaryBoolString */

	/** @type {DictionaryBoolString} */
	static MapT12ValueToFilePath = 
	{
		[true]: "icons/Spear T12.png",
		[false]: "icons/Spear non-T12.png",
	};

	/** @type {Object.<string, DictionaryBoolString>} */
	static MapSummonSkillBuffValueToFilePath = 
	{
		[SummonSkill.BuffAmount]: 
		{
			[true]: "icons/summon-skill-buffs/Amount - Active.png",
			[false]: "icons/summon-skill-buffs/Amount - Inactive.png",
		},
		[SummonSkill.BuffRange]: 
		{
			[true]: "icons/summon-skill-buffs/Range - Active.png",
			[false]: "icons/summon-skill-buffs/Range - Inactive.png",
		},
		[SummonSkill.BuffDuration]: 
		{
			[true]: "icons/summon-skill-buffs/Duration - Active.png",
			[false]: "icons/summon-skill-buffs/Duration - Inactive.png",
		},
	};
}
