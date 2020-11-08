var userInput = document.getElementById('userInput');
var btn = document.getElementById('enter');
var ul = document.querySelector('ul');

function getInputLength(){
	return userInput.value.length;
}

function createListItem(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(userInput.value));
	ul.append(li);	
	userInput.value = "";
}

function pressEnter(event){
	if(getInputLength() > 0 && event.which === 13){
		createListItem();
	}
}

function pressButton(){
	if(getInputLength() > 0){
		createListItem();
	}
}

btn.addEventListener('click',pressButton);
userInput.addEventListener('keypress',pressEnter);