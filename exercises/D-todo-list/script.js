function todoList(todos) {
  // Write your code here...
  //creates ul tag and append it to the dic
  const content = document.getElementById('content');
  const parentEl = document.createElement('ul');
  content.appendChild(parentEl);


  for( let i = 0; i < todos.length; i++){
   //create li ele, loops through the array and and assign the li value from array todos
  parentEl.appendChild(document.createElement('li')).innerHTML = `${todos[i].todo}`
  const lists = document.getElementsByTagName('li');
  // toggles on click 
    lists[i].onclick = function() {
    lists[i].classList.toggle("listStyle");
    }
  }


}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);