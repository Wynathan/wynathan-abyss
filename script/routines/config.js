class Config
{
	static #keyOptions = "options";
	static #keyDisplayOptions = "display";

	static initialise()
	{
		if (!window || !window.localStorage)
			return;

		const options = Config.getDefaultOptions(0);
		const displayOptions = Config.getDefaultDisplayOptions(0);

		window.localStorage.clear();

		Config.setDefaultOptions(options);
		Config.setDefaultDisplayOptions(displayOptions);
	}

	/**
	 * 
	 * @param {string=} input 
	 * @param {number} minLength 
	 * @param {boolean} defaultValue 
	 * @returns {boolean[]}
	 */
	static #stringToBoolArray(input, minLength, defaultValue)
	{
		/** @type {boolean[]} */
		const result = [];

		/** @type {string[]} */
		let split = [];
		if (input && typeof input === "string" && input.length > 0)
			split = input.split(",");

		const length = minLength > split.length ? minLength : split.length;

		for (let i = 0; i < length; i++)
		{
			if (split.length > i)
				result[i] = split[i] === "true";
			else
				result[i] = defaultValue;
		}

		return result;
	}

	/**
	 * 
	 * @param {string} key 
	 * @param {number} minLength 
	 * @param {boolean} defaultValue 
	 * @returns {boolean[]}
	 */
	static #getArrayBool(key, minLength, defaultValue)
	{
		let rawValue = null;
		if (window && window.localStorage)
			rawValue = window.localStorage[key];

		return Config.#stringToBoolArray(rawValue, minLength, defaultValue);
	}

	/**
	 * 
	 * @param {number} minLength 
	 * @returns {boolean[]}
	 */
	static getDefaultOptions(minLength)
	{
		const defaults = Config.#getArrayBool(Config.#keyOptions, minLength, false);

		if (defaults.length >= 2 && !defaults[0] && !defaults[1])
			defaults[1] = true;

		return defaults;
	}

	/**
	 * 
	 * @param {boolean[]} options 
	 */
	static setDefaultOptions(options)
	{
		if (!window || !window.localStorage)
			return;

		window.localStorage[Config.#keyOptions] = options;
	}

	/**
	 * 
	 * @param {number} index 
	 * @param {boolean} value 
	 * @returns 
	 */
	static setDefaultOptionAt(index, value)
	{
		if (!window || !window.localStorage)
			return;

		const array = Config.getDefaultOptions(index + 1);
		array[index] = value;
		Config.setDefaultOptions(array);
	}

	/**
	 * 
	 * @param {number} minLength 
	 * @returns {boolean[]}
	 */
	static getDefaultDisplayOptions(minLength)
	{
		return Config.#getArrayBool(Config.#keyDisplayOptions, minLength, true);
	}

	/**
	 * 
	 * @param {boolean[]} options 
	 */
	static setDefaultDisplayOptions(options)
	{
		if (!window || !window.localStorage)
			return;

		window.localStorage[Config.#keyDisplayOptions] = options;
	}

	/**
	 * 
	 * @param {number} index 
	 * @param {boolean} value 
	 * @returns 
	 */
	static setDefaultDisplayOptionAt(index, value)
	{
		if (!window || !window.localStorage)
			return;

		const array = Config.getDefaultDisplayOptions(index + 1);
		array[index] = value;
		Config.setDefaultDisplayOptions(array);
	}
}
