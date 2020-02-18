let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello ' + storedName;
}

function setUserName() {
	let myName = prompt('please input your name');
	if(!myName | myName===null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Hello ' + myName;
	}
}

myButton.onclick = function() {
	setUserName();
}

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/3D.PNG') {
		myImage.setAttribute('src', 'images/particle.PNG');
	} else {
		myImage.setAttribute('src', 'images/3D.PNG');
	}
}
