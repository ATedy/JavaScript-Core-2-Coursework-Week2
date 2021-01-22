function listOfColours(colours) {
  // Write your code here...
const content = document.getElementById('content');
  const txt = document.createElement('p');
  txt.innerHTML = "Colors: ";
  txt.className = "pos";
  content.appendChild(txt);

  const parentEl = document.createElement('select');
  const messageP = document.createElement('p');
 
  content.appendChild(parentEl);
  content.appendChild(messageP);
  

  for( let i = 0; i < colours.length; i++){
    let optionDrop =  document.createElement('option');
    optionDrop.innerHTML = `${colours[i]}`;
   parentEl.appendChild(optionDrop);
}
//  console.log( `${parentEl.options[0].textContent}`);
 parentEl.addEventListener('change', function(){
   messageP.innerHTML = `You have Selected: ${this.value}`;
   messageP.style.color = this.value;

  //  this.style.backgroundColor = this.value;
 //
  //  this.style.color = this.value;
   
 })


function colorChanger(colours){
  for( let j = 0; j < colours.length; j++){
    parentEl.options[j].style.color = `${parentEl.options[j].textContent}`;

    }
  }

  parentEl.addEventListener('click', colorChanger);



}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);


// const content = document.getElementById('content');
//   const txt = document.createElement('p');
//   txt.innerHTML = "Colors: ";
//   txt.className = "pos";
//   content.appendChild(txt);

//   const parentEl = document.createElement('select');
//   content.appendChild(parentEl);
  

//   for( let i = 0; i < colours.length; i++){
//    parentEl.appendChild(document.createElement('option')).innerHTML = `${colours[i]}`;

//   }
//  console.log( `${parentEl.options[0].textContent}`);


// function colorChanger(colours){
//   for( let j = 0; j < colours.length; j++){
//     parentEl.options[j].style.color = `${parentEl.options[j].textContent}`;

//     }
//   }

//   parentEl.addEventListener('click', colorChanger);



// for( let j =0; j < colours.length; j++){

//   parentEl.onclick = function() {
//     parentEl.options[j].style.color = `${colours[j]}`;
// }
// }
