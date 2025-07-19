
function runOnLoad()
{
	Loader.show();

	Config.initialise();
	Data.initialise();
	
	Prompt.initialise();
	CopyrightPrompt.initialise();
	
	Form.render();
	Renderer.render();
	
	Form.resetOptions();
	Form.resetFilters();

	Loader.hide();
};

window.document.addEventListener('DOMContentLoaded', runOnLoad, false);
