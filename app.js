function pick(){
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let until = parseInt(document.getElementById('until').value);

    if(from >= until){
        alert('Field "From" should be lower than "Until", please verify!');
        return;
    }

    if(quantity > (until - from + 1)){
        alert('The quantity of numbers should be equal or lower than the gap between \'From\' and \'Until\' fields. Please check and try again!');
        return;
    }

   let pickedNumbers = [];
   let number;

   for(let i = 0; i <quantity; i++){
    number = pickRandomNumbers(from, until);

    while(pickedNumbers.includes(number)){
        number = pickRandomNumbers(from, until);
    }

    pickedNumbers.push(number);
   }

   let result = document.getElementById('result');
   result.innerHTML = `<label class="texto__paragrafo">Numbers picked: ${pickedNumbers}</label>`

   alterButtonStatus();

}

function pickRandomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterButtonStatus(){
   let restartButton = document.getElementById("btn-restart");
   if(restartButton.classList.contains('container__botao-desabilitado')){
    restartButton.classList.remove('container__botao-desabilitado');
    restartButton.classList.add('container__botao');
   }else{
    restartButton.classList.remove('container__botao');
    restartButton.classList.add('container__botao-desabilitado');
   }
}

function restart(){
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = '';
    document.getElementById('until').value = '';
    document.getElementById('result').innerHTML = '<label class="texto__paragrafo">Numbers picked:  none so far</label>';
    alterButtonStatus();
}