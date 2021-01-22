function readingList(books) {
  // Write your code here...
  //get ele by id and create h2, give text content to h2 
  const parentEl = document.getElementById('content');
  const bookHeader = document.createElement('h2');
  bookHeader.textContent = 'Book List';
  parentEl.append(bookHeader);
  const eachImg  = document.createElement('img');

  //loops through the books
  //create div element and append it to parentEl
  //creates p tag gives arr.tile and author store it in eachBook
  //creates img tag and adds it in the div container
  for( let i = 0; i < books.length; i++){
   const bookContainer = parentEl.appendChild(document.createElement('div'));
   const eachBook  = bookContainer.appendChild(document.createElement('p')).innerHTML = `${books[i].title} by ${books[i].author}`;
   const eachImg = bookContainer.appendChild(document.createElement('img'));

   //adds bookStyle class to each div
   bookContainer.classList.add('bookStyle');

   if(books[i].alreadyRead === true){
    bookContainer.style.backgroundColor = 'green';
  }
  else{
   bookContainer.style.backgroundColor = 'red';
  }
  }
// takes all the img tags and give src value from the arr of objects
 const allImgs = document.getElementsByTagName('img');
 for( let j = 0; j < allImgs.length; j++){
   allImgs[j].src  = `${books[j].image}`;
   allImgs[j].style.height = '200px';
   allImgs[j].style.marginLeft = '30px';
 }

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEQv-BLbJLRfzv9OZHQSBlY7ZIYmXFlcJHQ&usqp=CAU"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image: "https://i.pinimg.com/originals/a4/aa/c1/a4aac1f3d86869bcfd2833e8be768014.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_cover.jpg",
  }
];

readingList(books);



// parenEl.appendChild(document.createElement('li')).innerHTML = `${arrList[list]}`;