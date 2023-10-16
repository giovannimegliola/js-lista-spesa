

const shoppingList = []; // inizializzazione dell'array lista della spesa

while (true) {
  const product = prompt("Inserisci un prodotto da acquistare o scrivi 'stop' per terminare):");
  
  if (product.toLowerCase() === 'stop') {    //controllo sulla scrittura di 'stop'
    break;
  }
  
  shoppingList.push(product); // aggiungi il prodotto inserito alla lista 
}

console.log("Lista della spesa:", shoppingList);  // stampa lista


const listContainer = document.getElementById("productList"); 

// Ciclo  negli elementi nella lista e li stampo sulla pagina in elenco
for (let i = 0; i < shoppingList.length; i++) {

  const item = document.createElement("li"); 
  item.innerText = shoppingList[i];
  listContainer.append(item);

}




