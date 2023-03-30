// possible method of letters from (cathydutton)

window.onload = function () {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
        

    let words =['whale', 'turtle', 'fish' ];
    let word = words[Math.floor(Math.random() * words.length)];

    let guesses = [];
    let remainingLives = 6;
    let gameover = false;



    let buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (let i=0; i < alphabet.length; i ++){
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    result = function () {
        let space = 0;
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++){
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "_") {
                guess.innerHTML = "_";
                space = 1;
            } else { 
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    //lives
    remaining = function() {
        showLives.innerHTML = "You have" + remainingLives + "lives";
        if (remainingLives < 1) {
            showLives.innerHTML = "You did not win";
        }
        for (let i = 0; i < guesses.length; i++){
            if (counter + space === guesses.length){
                showLives.innerHTML = "Won!";
            }
        }
    }   
    
    buttons();
    result();
    remaining();
}