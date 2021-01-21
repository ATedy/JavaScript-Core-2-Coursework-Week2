function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

// creates h1 and give the object name
function h1Create(personName){
  let newH1 = document.createElement('h1');
  newH1.innerHTML = personName;
  return newH1;
}
// creates h2 and give the object name
function h2Create(personJob){
  let newH2 = document.createElement('h2');
  newH2.innerHTML = personJob;
  return newH2;
}
// accessing the parent dic
const parentEl = document.getElementById('content');
for(let i = 0; i < people.length; i++  ){
  parentEl.append(h1Create(people[i].name))
  parentEl.append(h2Create(people[i].job))
}

// document.getElementById('content').appendChild(document.createElement('h1').innerText = `${people[0].name}`);








