// PASSWORD GENERATOR


// Chiedi all’utente il suo nome
let nomeUtente = prompt ("Inserisci qui il tuo nome");


// chiedi all'utente il suo cognome
let cognomeUtente = prompt ("Inserisci qui il tuo cognome");


// chiedi all'utente il suo colore preferito

let colorePreferito = prompt ("Inserisci qui il tuo colore preferito");

// crea nuova password

let nuovaPassword = nomeUtente+cognomeUtente+colorePreferito;

// scrivi sulla pagina nomecognomecolorepreferito23

console.log( 
    `La nuova password è: ${nuovaPassword}23`
);

document.getElementById('my_id').innerHTML = nuovaPassword + "23";