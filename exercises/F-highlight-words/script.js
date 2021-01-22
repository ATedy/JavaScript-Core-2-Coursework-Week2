function highlightWords(paragraph, colours) {
  // Write your code here...
  // creates p tag and append it to #content
  const content  = document.getElementById('content');
  const par = document.createElement('p');
  // par.textContent = paragraph;
  content.append(par);
  
  const parentEl  = document.createElement('select');
  content.appendChild(parentEl);
  

  for(let i = 0; i < colours.length; i++){
    parentEl.appendChild(document.createElement('option')).innerHTML = `${colours[i]}`;
  }
  let splitPar = [];
   splitPar = paragraph.split(" ");

  // console.log(splitPar);

  for( let j = 0; j < splitPar.length; j++){
    let wordSpan = document.createElement('span');
    wordSpan.innerHTML = `${splitPar[j]} `;
    wordSpan.addEventListener('click', function(){

      if(parentEl.value === "none"){
        this.style.backgroundColor = "";
      }else{
        this.style.backgroundColor = parentEl.value;
      }
    })

 par.appendChild(wordSpan);


  }

  const spanEvnt = document.getElementsByTagName('span');
  
  
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);



