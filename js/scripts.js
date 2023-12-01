//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni.
//va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
//Questo richiederà un minimo di ricerca.

let numeroKm; 
let etaPasseggero;
const prezzoKm = 0.21; 


numeroKm = prompt('Quanti km intendi percorrere?');
numeroKm = parseInt (numeroKm);
document.getElementById('numeroKm').innerHTML = numeroKm;
console.log('Km scelti', numeroKm, typeof numeroKm );

etaPasseggero = prompt ("Inserisci la tua età"); 
etaPasseggero = parseInt (etaPasseggero);
document.getElementById('etaPasseggero').innerHTML = etaPasseggero;
console.log('eta passeggero', etaPasseggero, typeof etaPasseggero);

let prezzoBiglietto = numeroKm * prezzoKm;


//Di quanto viene scontato il biglietto?
let scontoPrezzoBigliettoMinorenni = ((prezzoBiglietto * 20) / 100);
//Prezzo del biglietto meno lo sconto minorenni.
let prezzoBigliettoMinorenni = prezzoBiglietto - scontoPrezzoBigliettoMinorenni;


//Calcolo sconto under 65
let scontoOver65 = ((prezzoBiglietto *40) / 100);
let prezzoBigliettoOver65 = prezzoBiglietto - scontoOver65;


//UNICO BLOCCO (if-else if-else) -IF può andare da solo, else vuole sempre un if.
// Else IF è opzionale e in più vuoel un IF


if ( isNaN(numeroKm) || isNaN (etaPasseggero) ){
    console.log('Errore, inserire numero!');
    document.getElementById('errore').innerHTML = 'Errore, inserire numero!';
}

else {
    console.log('Operazione corretta!');

    if (etaPasseggero <18 && etaPasseggero >0) {
        console.log('Prezzo biglietto minori', prezzoBigliettoMinorenni);
        document.getElementById('prezzoBigliettoMinorenni').innerHTML = prezzoBigliettoMinorenni.toFixed(2) + ' (Sconto minori)';
    }
    else if (etaPasseggero >65){
    console.log('Prezzo Biglietto Over 65', prezzoBigliettoOver65);
    document.getElementById('prezzoBigliettoOver65').innerHTML = prezzoBigliettoOver65.toFixed(2) + ' (Sconto Over 65)';

    }
    else {
        console.log('Prezzo Totale biglietto', prezzoBiglietto);
        document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto.toFixed(2);

    }
}


