
function runOnLoad()
{
	Loader.show();
	Loader.lockState();

	Config.initialise();
	Data.initialise();
	
	Prompt.initialise();
	CopyrightPrompt.initialise();
	
	Form.render();
	Renderer.render();
	
	Form.resetOptions();
	Form.resetFilters();

	Loader.unlockState();
	Loader.hide();
};

window.document.addEventListener('DOMContentLoaded', runOnLoad, false);
