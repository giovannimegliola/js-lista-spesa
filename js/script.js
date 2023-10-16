const shoppingList = []; // inizializzazione dell'array lista della spesa

while (true) {
  const product = prompt("Inserisci un prodotto da acquistare o scrivi 'stop' per terminare):");
  
  if (product.toLowerCase() === 'stop') {    //controllo sulla scrittura di 'stop'
    break;
  }
  
  shoppingList.push(product); // aggiungi il prodotto inserito alla lista 
}

console.log("Lista della spesa:", shoppingList);  // stampa lista






