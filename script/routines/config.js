class Config
{
	static #keyOptions = "filter-options";
	static #keyDisplayOptions = "display-options";
	static #keyDisplayColumns = "display-columns";

	static initialise()
	{
		if (!window || !window.localStorage)
			return;

		const options = Config.getDefaultOptions(0);
		const displayOptions = Config.getDefaultDisplayOptions(0);
		const displayColumns = Config.getDefaultDisplayColumns(0);

		window.localStorage.clear();

		Config.setDefaultOptions(options);
		Config.setDefaultDisplayOptions(displayOptions);
		Config.setDefaultDisplayColumns(displayColumns);
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

	// #region Filter Options
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
	// #endregion Filter Options

	// #region Display Options
	/**
	 * 
	 * @param {number} minLength 
	 * @returns {boolean[]}
	 */
	static getDefaultDisplayOptions(minLength)
	{
		return Config.#getArrayBool(Config.#keyDisplayOptions, minLength, false);
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
	// #endregion Display Options

	// #region Show/Hide Specific Columns
	/**
	 * 
	 * @param {number} minLength 
	 * @returns {boolean[]}
	 */
	static getDefaultDisplayColumns(minLength)
	{
		return Config.#getArrayBool(Config.#keyDisplayColumns, minLength, true);
	}

	/**
	 * 
	 * @param {boolean[]} options 
	 */
	static setDefaultDisplayColumns(options)
	{
		if (!window || !window.localStorage)
			return;

		window.localStorage[Config.#keyDisplayColumns] = options;
	}

	/**
	 * 
	 * @param {number} index 
	 * @param {boolean} value 
	 * @returns 
	 */
	static setDefaultDisplayColumnAt(index, value)
	{
		if (!window || !window.localStorage)
			return;

		const array = Config.getDefaultDisplayColumns(index + 1);
		array[index] = value;
		Config.setDefaultDisplayColumns(array);
	}
	// #endregion Show/Hide Specific Columns
}
