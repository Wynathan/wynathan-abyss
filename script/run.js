
function runOnLoad()
{
	Config.initialise();
	Data.initialise();
	
	Prompt.initialise();
	CopyrightPrompt.initialise();
	
	Form.render();
	Renderer.render();
	
	Form.resetOptions();
	Form.resetFilters();
};

window.document.addEventListener('DOMContentLoaded', runOnLoad, false);
