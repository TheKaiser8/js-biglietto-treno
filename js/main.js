// 1. Chiedi all'utente il numero di km che vuole percorrere e salva il dato
let distance = Number(prompt ("Inserisci il numero di km che vuoi percorrere") );
console.log('Numero km che l\'utente vuole percorrere:', distance);
// 2. Chiedi all'utente l'età del passeggero e salva il dato
let age = Number(prompt ("Inserisci l'età del passeggero") );
console.log('Età del passeggero:', age);
// 3. Definisci la costante del prezzo al km (€/km)
let priceForKm = 0.21;
console.log('Prezzo al km:', priceForKm, "€/km");
// 4. Determina il prezzo del biglietto senza sconto
let ticketPrice = (distance * priceForKm).toFixed(2);
console.log('Prezzo biglietto senza sconto:', ticketPrice, "€");
// 5. Determina il prezzo del biglietto finale
//    5a. SE il passeggero è minorenne va applicato uno sconto del 20%
//        ALTRIMENTI SE il passeggero ha un'età maggiore o uguale a 65 anni va applicato uno sconto del 40%
//        ALTRIMENTI il prezzo del biglietto sarà intero senza sconto
if( age < 18 ) {
    let ticketPriceDiscount20 = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
    console.log('Prezzo finale scontato 20%:', ticketPriceDiscount20, "€");
} else if ( age > 65 ) {
    let ticketPriceDiscount40 = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);
    console.log('Prezzo finale scontato 40%:',ticketPriceDiscount40, "€");
} else {
    console.log('Prezzo finale senza sconto:', ticketPrice, "€");
}
// 6. Stampa sulla pagina HTML il prezzo del biglietto del treno

// MODO 2
// 4. Determina il prezzo del biglietto senza sconto
// let ticketPrice = (distance * priceForKm).toFixed(2);
// console.log('Prezzo biglietto senza sconto:', ticketPrice, "€");
// 5. Determina il prezzo del biglietto con sconto 20%
// let ticketPriceDiscount20 = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
// console.log('Prezzo biglietto sconto 20%:', ticketPriceDiscount20);
// 6. Determina il prezzo del biglietto con sconto 40%
// let ticketPriceDiscount40 = ticketPrice - (ticketPrice * 0.4);
// console.log('Prezzo biglietto sconto 40%:', ticketPriceDiscount40);
// 7. Determina il prezzo finale del biglietto in base all'età del passeggero
// if( age < 18 ) {
//     let ticketPriceDiscount20 = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
//     console.log('Prezzo finale scontato 20%:', ticketPriceDiscount20, "€");
// } else if ( age > 65 ) {
//     let ticketPriceDiscount40 = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);
//     console.log('Prezzo finale scontato 40%:',ticketPriceDiscount40, "€");
// } else {
//     console.log('Prezzo finale senza sconto:', ticketPrice, "€");
// }
// 8. Stampa sulla pagina HTML il prezzo del biglietto del treno



