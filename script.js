let myLibary = [];
let bookContainer = document.querySelector(".bookContainer");
let newBookButton = document.querySelector(".newBookButton");
let addBook = document.querySelector(".addBook");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let stat = document.querySelector("#status");
let visibilityOfForm = document.querySelector("#myDropdown");
let indexOfBook = 0;

newBookButton.addEventListener("click", () => {
  showForm() 
  Book();
});

function showForm() {
  visibilityOfForm.classList.toggle("show");
}

function Book() {
  title.value = "";
  author.value = "";
  pages.value = "";
  stat.checked = false;
}

addBook.addEventListener('click', (event) => {
  let flag = false;
  if(title.value === "" || author.value === "" || pages.value === ""){
    return;
  } else if (title.value != "" && author.value != "" && pages.value != ""){
    flag = true;
  }
  if(flag){
    myLibary.push([{
        title: title.value,
        author: author.value,
        pages: pages.value,
        stat: stat.checked
    }]);
    showBook(indexOfBook);
    indexOfBook++;
  }
})

function showBook(indexOfBook) {
    let newBook = document.createElement("div");
    bookContainer.append(newBook);

    let removeBookButton = document.createElement("button");
    removeBookButton.className = "remove";
    newBook.id = indexOfBook;
    removeBookButton.innerText = "Remove";
    removeBookButton.onclick = function() { 
      deleteBook(indexOfBook); };

    let setStatus = document.createElement("button");
    setStatus.className = "status";
    setStatus.innerText = "Change Status";
    setStatus.onclick = function() {
      changeStatus(indexOfBook);
    };

    myLibary[indexOfBook].forEach((d) => {
      newBook.classList = "box";
      newBook.innerText = "Title : " + d.title + "\n" +
        "Author : " + d.author + "\n" +
        "Pages : " + d.pages +
        readStatus(d.stat);
      newBook.append(removeBookButton);
      newBook.append(setStatus);
    });
}


function changeStatus(indexOfBook) {
  myLibary[indexOfBook][0].stat = !myLibary[indexOfBook][0].stat;
  let bookToUpdate = document.getElementById(indexOfBook);
  bookToUpdate.remove();
  showBook(indexOfBook);
}

function readStatus(stat) {
  if(stat){
    return "\nStatus : Completed";
  } else {
    return "\nStatus : Incomplete";
  }
}

function deleteBook(id) {
  delete myLibary[id];
  let bookToDelete = document.getElementById(id);
  bookToDelete.remove();
}