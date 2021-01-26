
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
}

colors();

  
  const btnSubmit = document.getElementById('submitId');

  function formValidator(){
    const formInput = document.getElementsByClassName('form-control');
    let inputCounter = 0;
    // console.log(formFields[0].nodeValue);
    for( let i = 0; i < formInput.length; i++){
      // if no input is given to the fields
      if(!(formInput[i].value).length > 0){
        inputCounter++;
        formInput[i].style.backgroundColor =" #f7a29c";
      }
    }
    const emailValue = formInput[0].value;
    // if the email input isn't passed
    if(!emailValue.includes('@')){
      inputCounter++;
      formInput[0].style.backgroundColor =" #f7a29c";
    }
    
    // if all tests passed
    // Object.reset() empty the input fields after submitting
    if(inputCounter === 0){
      let RegForm = document.getElementById("RegForm");
      RegForm.reset();
      alert("Thank you for filling out the form");
   }
   
}
 

  btnSubmit.addEventListener("click",function(e){
    e.preventDefault();
    formValidator();
});