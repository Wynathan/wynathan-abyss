class Loader
{
	static #loaderId = "loader";
	static #hiddenClassName = "loader-hidden";

	static #queue = 0;
	static #lock = 0;

	static #getLoader()
	{
		const loader = window.document.getElementById(Loader.#loaderId);
		return loader;
	}

	static show()
	{
		if (Loader.#lock === 0 && Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.remove(Loader.#hiddenClassName);
		}

		Loader.#queue += 1;
	}

	static hide()
	{
		Loader.#queue -= 1;

		if (Loader.#lock === 0 && Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.add(Loader.#hiddenClassName);
		}
	}

	static lockState()
	{
		Loader.#lock += 1;
	}

	static unlockState()
	{
		Loader.#lock -= 1;
	}
}
