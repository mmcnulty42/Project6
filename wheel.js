let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let overlay = document.getElementById('overlay');
let missed = 0;
let button = document.querySelector("#bttn");
let bttnReset = document.querySelector('.btn__reset');
bttnReset.addEventListener('click', (e)=> {overlay.style.display = "none";})

let phrases = ['early bird gets the worm', 'a man who stands for nothing will fall for anything', 'teach a man to fish', 'a fool and his money are soon parted', 
'back to square one'];

function getRandomPhraseAsArray() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];
  const phraseAsCharacters = randomPhrase.split('');
  return phraseAsCharacters;
}


 
const phraseArray = getRandomPhraseAsArray();

function addPhraseToDisplay(arr) {

  for (let i = 0; i < arr.length; i++) {
    const listItem = arr[i];
    const liPhrase = document.createElement('li');
    const ul = document.querySelector('#phrase ul');
    liPhrase.textContent = listItem;
    ul.appendChild(liPhrase);
    if (listItem !== " ") {
      liPhrase.classList.add('letter');
    } else if (listItem === " ") {
      liPhrase.classList.add('space');
    }

  }
}

addPhraseToDisplay(phraseArray);

function checkLetter(button) {
  let letterLi = document.querySelectorAll('.letter');
  let match = null;

  for (let i = 0; i < letterLi.length; i++) {
    let letters = letterLi[i];
    let letterMatch = letters.textContent;
    if (button === letterMatch) {
      letters.classList.add('show');
      match = true;
    }
  }
  return match;
}
checkLetter();

qwerty.addEventListener('click', (e) => {
    const newLocal_2 = checkLetter(e.target.textContent);
    if (e.target.tagName === 'BUTTON') {
      const newLocal = e.target.classList.add('chosen');
               
      let match = checkLetter(e.target.textContent);
    }
    const hearts = document.querySelectorAll('.tries img');
    if(!match) {
      hearts[missed].src = 'images/lostHeart.png';
      missed++;
    }
    const btns = document.querySelectorAll('button');
    for (i = 0; i < btns.length; i++) {
      if (e.target === btns[i]) {
        e.target.classList.add('chosen');
        e.target.disabled = true;
          }
checkWin();
  }
  
});

function checkWin() {
    let letterFirst = document.querySelectorAll('.letter');

    let showLi = document.querySelectorAll('.show');
    if (letterFirst.length == showLi.length) {
      overlay.className = 'win';
      document.querySelector('h2.title').innerHTML = 'You win!';
      overlay.style.display = "flex";
    }

    else
      (missed >= 5)
    {
     
      document.querySelector('h2.title').innerHTML = 'Sorry you lose!';
      overlay.style.display = 'flex';
    }
}
