{	
	let dataStorage = document.querySelector(".data-storage"),
		buffer = null,
		textarea = document.createElement("textarea");

	function enterData(e) {
		
		if (e.ctrlKey && e.keyCode == 69) {
			e.preventDefault();
			textarea = document.createElement("textarea");
			textarea.className = "enter-data";
			buffer = dataStorage.parentElement.replaceChild(textarea, dataStorage);
			textarea.focus();
		} else if (e.ctrlKey && e.keyCode == 83) {
			e.preventDefault();
			buffer.innerHTML = "<p>" + textarea.value + "</p>"; 
			textarea.parentElement.replaceChild(buffer,textarea);
		} else if (e.keyCode == 27) {
			textarea.parentElement.replaceChild(buffer,textarea);
		} else
			return
	}

	window.addEventListener("keydown", enterData, true);

}
