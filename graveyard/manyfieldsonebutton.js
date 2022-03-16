$('.addInput').on('click', addInput);

fields = 0;
pNR = 0;
err = 0;

function addInput() {
	if (fields != 40) {
		document.getElementById("demo").innerHTML = 5 + 6;
		var firstInput = document.createElement("input");
		var secondInput = document.createElement("input");

		firstInput.type = secondInput.type = "text";
		firstInput.name = "first" + pNR;
		secondInput.name = "second" + pNR;

		var text = document.getElementById("text");
		text.appendChild(firstInput);
		text.appendChild(secondInput);
		text.appendChild(document.createElement("br"));
		fields += 1;
		pNR += 1;
	} else {
		var text = document.getElementById("text");
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createTextNode("Adaugati maxim 40 ingrediente."));
	}
}