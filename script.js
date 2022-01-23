const body = document.querySelector('body');

const pTag = document.createElement('p');
pTag.setAttribute('style', 'color: red; font-size:2rem'); 
pTag.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue; font-size: 3rem');
h3.textContent= 'I\'m a blue h3!';

const mainDiv = document.createElement('div');
mainDiv.setAttribute('style', 'border:1px solid black; background-color: pink;');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const mainPTag = document.createElement('p');
mainPTag.textContent = "ME TOO!";

const button = document.createElement('button');
button.setAttribute('style', 'width: 10rem; height: 3rem; font-size: 2rem; margin-bottom: 10px');
button.textContent = 'Click Me';

//best method of adding click events to HTML Elements
button.addEventListener('click', (e) =>{
    alert('Hello World!');
    e.target.style.background = 'blue';
});

mainDiv.appendChild(h1);
mainDiv.appendChild(mainPTag);

body.appendChild(button);
body.appendChild(mainDiv);
body.appendChild(h3);
body.appendChild(pTag);