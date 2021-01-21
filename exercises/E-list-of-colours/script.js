function listOfColours(colours) {
  // Write your code here...
  const content = document.getElementById('content');
  const txt = document.createElement('p');
  txt.innerHTML = "Colors: ";
  txt.className = "pos";
  content.appendChild(txt);

  const parentEl = document.createElement('select');
  content.appendChild(parentEl);
  

  for( let i = 0; i < colours.length; i++){
   parentEl.appendChild(document.createElement('option')).innerHTML = `${colours[i]}`
  }

  const colorOptions = document.getElementsByTagName("select");
  for( let j =0; j < colorOptions.length; j++){

    colorOptions[j].onclick = function() {
    content.style.color = `${colours[j]}`;
  }
  
   }

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
