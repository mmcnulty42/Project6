let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let overlay = document.getElementById('overlay');
let missed = 0;
let button = document.querySelector("#bttn");
let bttnReset = document.querySelector('.btn__reset');
bttnReset.addEventListener('click', (e)=> {overlay.style.display = "none";})

let phrases = ['early bid gets the worm', 'a man who stands for nothing will fall for anything', 'teach a man to fish', 'a fool and his money are soon parted', 
'back to square one'];
function getRandomPhraseAsArray(arr) { 
    const random = arr[Math.floor(Math.random()*arr.length)];
    const splitPhrase = random.split('');
    return splitPhrase;

}

 
const phraseArray = getRandomPhraseAsArray(phrasesArray);

function addPhraseToDisplay(arr) {

  for (let i = 0; i < phraseArray.length; i++) {
    const listItem = phraseArray[i];
    const liPhrase = document.createElement('li');
    liPhrase.textContent = li;
    const ul = document.querySelector('#phrase ul');
    ul.appendChild(liPhrase);

    if (listItem !== " ") {
      liPhrase.classList.add('letter');
    } else if (listItem === " ") {
      liPhrase.classList.add('space');
    }

  }
}

addPhraseToDisplay(phraseArray);

const checkLetter = button => {}
let check = document.querySelector('li');
let match = null;
for (i = 0; i < checkLetter.length; i++){  
if (button == checkLetter) {checkLetter.classList.add('show');
match = document.getElementById('bttn');   }
else if (button !== checkLetter){ missed == button;

} else{
return match;}
}
qwerty.addEventListener('click', (e) => {
checkLetter(e.target.textContent);
const btns = document.querySelectorAll('button');
for (i = 0; i < btns.length; i++){ if (e.target === btns[i]) {
e.target.classList.add('chosen');
e.target.disabled = true;
} else (btns = "null") 
}

})

const checkWin = () => {
const liLetter = document.classList.add('letter').length;
const liShow = document.classList.add('show').length;
if (liLetter == liShow ){console.log('You win!')} else if (missed >= 5); {console.log('You lose!')};


}

