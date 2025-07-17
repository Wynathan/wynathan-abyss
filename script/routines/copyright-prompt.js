class CopyrightPrompt
{
	static Id = "copyright";
	static ButtonOpenId = "copyright-button-open";
	static ButtonCloseId = "copyright-button-close";

	static #getArticle()
	{
		const article = window.document.getElementById(CopyrightPrompt.Id);
		return article;
	}

	static #getButtonOpen()
	{
		const button = window.document.getElementById(CopyrightPrompt.ButtonOpenId);
		return button;
	}

	static #getButtonClose()
	{
		const button = window.document.getElementById(CopyrightPrompt.ButtonCloseId);
		return button;
	}

	static #getFooter()
	{
		const footer = window.document.querySelector("footer");
		return footer;
	}

	static initialise()
	{
		CopyrightPrompt.hide();

		const buttonOpen = CopyrightPrompt.#getButtonOpen();
		buttonOpen.addEventListener("click", CopyrightPrompt.show);

		const buttonClose = CopyrightPrompt.#getButtonClose();
		buttonClose.addEventListener("click", CopyrightPrompt.hide);

		const footer = window.document.querySelector("footer ." + Renderer.CursorPointerClassName);
		footer.addEventListener("click", CopyrightPrompt.show);
	}

	static show()
	{
		const article = CopyrightPrompt.#getArticle();
		article.classList.remove(Renderer.HiddenClassName);

		const footer = CopyrightPrompt.#getFooter();
		footer.classList.add(Renderer.HiddenClassName);
	}

	static hide()
	{
		const article = CopyrightPrompt.#getArticle();
		article.classList.add(Renderer.HiddenClassName);

		const footer = CopyrightPrompt.#getFooter();
		footer.classList.remove(Renderer.HiddenClassName);
	}
}
