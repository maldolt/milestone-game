/* possible method of letters from (cathydutton)

window.onload = function () {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
        

    let words =['whale', 'turtle', 'fish' ]

    let buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (let i=0; i < alphabet.length; i ++){
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
        }
    }
}*/

var buttonsContainer = document.getElementById("buttons");


var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

for (var i = 0; i < alphabet.length; i++) {
  var button = document.createElement("button"); 
  button.innerHTML = alphabet[i]; 
  button.addEventListener("click", function() { 
    alert("You clicked the letter " + this.innerHTML); 
  });
  buttonsContainer.appendChild(button); 
}