const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
placesList.appendChild(li);

const mainContainer = document.getElementById('main-content');
const section = document.createElement('h1');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'burger';
ul.appendChild(li1);

const li2 = document.createElement('li');
li1.innerText = 'mur';
ul.appendChild(li2);

const li3 = document.createElement('li');
li1.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly.

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
    </ul>
`

mainContainer.appendChild(sectionDress);                                         