
const myLibrary = [
    {
        title: 'Lean Startup',
        author: 'Eric Ries',
        pages: 554,
        readStatus: true,
    },
];

function Book(title,author,pages,readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
this.info = function() {
    alert(`Read ${this.title} by ${this.author} now!`)
}
}
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject)

}
function displayBook() {
    const output = document.getElementById('output');
    
    for (let i = 0; i < myLibrary.length; i++) {
        const bookObject = myLibrary[i];

        const cardContainer = document.createElement('div')
        const title = document.createElement('h3')
const author = document.createElement('p');
const pages = document.createElement('p');
const readStatus = document.createElement('p');
const removeBtn = document.createElement('button')


cardContainer.setAttribute('id', i);
cardContainer.setAttribute('data-index', i);
removeBtn.setAttribute('data-index', i);
removeBtn.setAttribute('onclick', 'removeBook(event)');

title.textContent = `${bookObject.title}`;
        author.textContent = `Author: ${bookObject.author}`;
        pages.textContent = `Pages: ${bookObject.pages}`;
        
        output.appendChild(cardContainer);
        cardContainer.appendChild(title);
        cardContainer.appendChild(author);
        cardContainer.appendChild(pages);
        cardContainer.appendChild(removeBtn)
    }
} 

// dialog element 
const dialog = document.getElementById('my-dialog');
function openDialog() {
    dialog.showModal();
}
function closeDialog() {
    dialog.close();
}

// retrieve the form data 
let formData = {};

document.addEventListener('DOMContentLoaded', () => {


function handleSubmit(event) {
    event.preventDefault();

    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    // formData.title = title;
    // formData.author = author;
const instance = new Book(title,author)
addBookToLibrary(instance)

displayBook()
closeDialog()

}
document.getElementById('my-form').addEventListener('submit',handleSubmit)

})

function removeBook(event) {
const element = event.target;
const dataIndex = +element.getAttribute('data-index')
console.log(typeof(dataIndex));
const libraryIndexValue = myLibrary[dataIndex]

console.log(libraryIndexValue);

}
