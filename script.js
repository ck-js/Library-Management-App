
const myLibrary = [];

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
function displayLibraryArray() {
    const output = document.getElementById('output');
    
    for (let i = 0; i < myLibrary.length; i++) {
        const bookObject = myLibrary[i];
        
        const paragraph = document.createElement('p');
        paragraph.textContent = `Read ${bookObject.title} by ${bookObject.author} now`;

        output.appendChild(paragraph)
    }
} 
 

let book1 = new Book('Range', 'Matthew Walker', 325, false)
let book2 = new Book('4 Hour Work Week', 'Tim Ferris', 325, false)