/*possible method from (somvirs57)
const letterDiv = document.querySelector('.letter-div');

let letters;

const init = function(state) {
    wordDiv.innerHTML ='';
    if (state === 'start'){
        for (const i of 'abcdefghijklmnopqrstuvwxyz') {
            const html = `<button class = "alpha">${i.toUpperCase()}</button>`;
            letterDiv.interAjacentHTML('beforeend', html)
        }
    } else if (state === 'reset') {
        letters.forEach(btn => {
            btn.classList.remove('disabled');
            notif.classList.add('hidden');
        });
    }
    
    letters = document.querySelectorAll('.alpha');

}*/
/* possible method of letters from (cathydutton)*/

window.onload = function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
        }
    }
    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }

        }
    }    
}