// Pari e Dispari





const playGame = document.getElementById('play');

playGame.addEventListener('click', 
    function() {

        // L’utente sceglie pari o dispari
        let userChoice = document.getElementById("user_choice").value;

        //  e inserisce un numero da 1 a 5.
        let numUser = parseInt( document.getElementById('user_number').value );

        console.log(userChoice);
        console.log(numUser);

    
        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        const numPc = randomNumOneToFive ();
        document.getElementById('pc_number').innerHTML = numPc;
        // console.log( "random num one to five is " + numPc );

        // Sommiamo i due numeri.
        const sum = sumNum ( numUser, numPc );
        // console.log( "sum is " + sum );


        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
        const risposta = evenOdd ( sum );
        document.getElementById('answer').innerHTML = risposta;
        // console.log("la risposta è " + risposta );

        // Dichiariamo chi ha vinto.
        if ( risposta === userChoice) {
            document.getElementById('winner').innerHTML = "User";
        } else {
            document.getElementById('winner').innerHTML = "Pc";
        }
    }
)


        

// FUNCTION
function randomNumOneToFive () {
    const num = Math.floor((Math.random() * 5) + 1);

    return num;
}

function sumNum ( num1, num2 ){
    const sum = num1 + num2;
    return sum
}

function evenOdd ( num ) {
    
    if ( num % 2 === 0 ) {
        return "pari"

    } else {
       return "dispari"
    }

}