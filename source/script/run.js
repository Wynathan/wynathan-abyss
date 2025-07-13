
function runOnLoad()
{
	Data.initialise();
	Prompt.initialise();
	CopyrightPrompt.initialise();
	
	Form.render();
	Renderer.render();
	
	Form.clear();
};

window.document.addEventListener('DOMContentLoaded', runOnLoad, false);
