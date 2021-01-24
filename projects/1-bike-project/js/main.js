
function colors(){
  let btnBlue = document.getElementById('blueBtn');
  let btnOrange = document.getElementById('orangeBtn');
  let btnGreen = document.getElementById('greenBtn');
  let jumboContainer = document.querySelector('.jumbotron');
  let btnDonate = document.getElementById('donate-button');
  let btnVolu = document.getElementById('volunteer-button');

 // Part-1
  // blue button
  btnBlue.addEventListener('click', evt => {
    jumboContainer.style.backgroundColor = '#588fbd';
    btnDonate.style.backgroundColor  = '#ffa500';
    btnVolu.style.background = 'black';
    btnVolu.style.color = 'white';
  })

 // Orange button
  btnOrange.addEventListener('click', evt => {
    jumboContainer.style.backgroundColor = '#f0ad4e';
    btnDonate.style.backgroundColor  = '#5751fd';
    btnVolu.style.background = '#31b0d5';
    btnVolu.style.color = 'white';
  })

 // green button
  btnGreen.addEventListener('click', evt => {
    jumboContainer.style.backgroundColor = '#87ca8a';
    btnDonate.style.backgroundColor  = 'black';
    btnVolu.style.background = '#8c9c08';
    btnVolu.style.color = 'white';
  })


  //Part -2
  //object.preventDefault
  




  


  


}

colors();