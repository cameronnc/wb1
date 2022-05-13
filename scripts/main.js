//const myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

/*myHeading.textContent = 'Exacto!';
function f1 () {
    console.log('welcome');
}*/

/*document.querySelector('html').addEventListener('keyup', (event) => {
    if (event.key == 'ArrowUp') {
    alert('***menu-controller***');
    }
});*/


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '/home/cameronnc/wb1/images/starlyn2.jpeg') {
        myImage.setAttribute('src', '/home/cameronnc/wb1/images/starlyn1.jpeg');
        } else {
            myImage.setAttribute('src','/home/cameronnc/wb1/images/starlyn2.jpeg');
        }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Thank you, ' + myName;
	}
   
}

if (!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Thank you, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
