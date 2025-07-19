class Loader
{
	static #loaderId = "loader";
	static #hiddenClassName = "loader-hidden";

	/** @type {number} */
	static #queue = 0;

	static #getLoader()
	{
		const loader = window.document.getElementById(Loader.#loaderId);
		return loader;
	}

	static show()
	{
		if (Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.remove(Loader.#hiddenClassName);
		}

		Loader.#queue += 1;
	}

	static hide()
	{
		Loader.#queue -= 1;

		if (Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.add(Loader.#hiddenClassName);
		}
	}
}
