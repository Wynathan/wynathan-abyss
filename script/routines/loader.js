class Loader
{
	static #loaderId = "loader";
	static #hiddenClassName = "loader-hidden";

	static #queue = 0;
	static #stateLocked = false;

	static #getLoader()
	{
		const loader = window.document.getElementById(Loader.#loaderId);
		return loader;
	}

	static show()
	{
		if (!Loader.#stateLocked && Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.remove(Loader.#hiddenClassName);
		}

		Loader.#queue += 1;
		console.log(Loader.#queue);
	}

	static hide()
	{
		Loader.#queue -= 1;

		if (!Loader.#stateLocked && Loader.#queue === 0)
		{
			const loader = Loader.#getLoader();
			loader.classList.add(Loader.#hiddenClassName);
		}
		console.log(Loader.#queue);
	}

	static lockState()
	{
		Loader.#stateLocked = true;
	}

	static unlockState()
	{
		Loader.#stateLocked = false;
	}
}
