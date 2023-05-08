// Palidroma

// Chiedere all’utente di inserire una parola
const word = prompt ("inserisci una parola");
console.log(word);

const invertWord = myIvertWord (word);
console.log(invertWord);
// FUNZIONI
// Creare una funzione per capire invertire le lettere della parola 
function myIvertWord (str) {
   
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