// Palidroma

// Chiedere all’utente di inserire una parola
const word = document.getElementById("user_word").value;
console.log(word);

const verify = documen

const invertWord = myIvertWord(word);
console.log(invertWord);
// FUNZIONI
// Creare una funzione per capire invertire le lettere della parola 
function myIvertWord(str) {
   
    let rst = str.split("");
    rst = rst.reverse();
    rst = rst.join("");
    return rst
}


// se la parola inserita è palindroma
if ( word === invertWord) {
    console.log( "la parola è palindorma ");
} else {
    console.log("la parola non è palindroma");
} 


// word = "ciao"
// let invertedWord;
// for(let i = word.length; i >= 0; i--) {
//     let lettera = word[i]
//     invertWord += lettera
// }


// console.log(invertWord) 