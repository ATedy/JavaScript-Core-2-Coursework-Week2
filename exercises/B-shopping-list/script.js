function shoppingList(arrList) {
  // Write your code here...
  const content = document.getElementById('content');
  const parenEl = document.createElement('ul');
  content.appendChild(parenEl);
  for( let list in arrList){
    parenEl.appendChild(document.createElement('li')).innerHTML = `${arrList[list]}`;
 }

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

