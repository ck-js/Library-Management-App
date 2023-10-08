
const myLibrary = [
    {
        title: 'Lean Startup',
        author: 'Eric Ries',
        pages: 554,
        readStatus: undefined,
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
const readStatusLabel = document.createElement('label');

readStatusLabel.htmlFor = 'checkbox' + '-' + i;
readStatusLabel.appendChild(document.createTextNode('Read Status'))


const readStatusCheckbox = document.createElement('input');
readStatusCheckbox.type = 'checkbox';
readStatusCheckbox.id = 'checkbox' + '-' + i;
// readStatusLabel.appendChild(readStatusCheckbox)

const removeBtn = document.createElement('button')


cardContainer.setAttribute('id', i);
cardContainer.setAttribute('data-index', i);
cardContainer.setAttribute('class', 'card-item');
removeBtn.setAttribute('data-index', i);
removeBtn.setAttribute('onclick', 'removeBook(event)');
readStatusCheckbox.setAttribute('data-index', i)


title.textContent = `${bookObject.title}`;
        author.textContent = `Author: ${bookObject.author}`;
        pages.textContent = `Pages: ${bookObject.pages}`;

        
        output.appendChild(cardContainer);
        cardContainer.appendChild(title);
        cardContainer.appendChild(author);
        cardContainer.appendChild(pages);

        cardContainer.appendChild(readStatusLabel);
        cardContainer.appendChild(readStatusCheckbox);
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
const cardContainer = element.parentNode;
const outputContainer = cardContainer.parentNode;

outputContainer.removeChild(cardContainer)

myLibrary.splice(dataIndex, 1)


displayBook()

}

// function checkAllBoxes() {
// let checkboxes = document.querySelectorAll('input[type="checkbox"]');

// checkboxes.forEach((checkbox) => {
//     checkbox.checked = true;
// })

// }
// access the dynamic checkbox input

function readStatusChecked(dataIndex) {
const index = dataIndex;
const bookObject = myLibrary[index]
bookObject.readStatus = true;

getPrototype(bookObject)
}
function readStatusUnchecked(dataIndex) {
    const index = dataIndex;
    const bookObject = myLibrary[index]
    bookObject.readStatus = false;
    console.log(bookObject);
    
    getPrototype(bookObject)
    }


function getPrototype(obj) {
     return Object.getPrototypeOf(obj);
}

function toggleCardBackground(dataIndex) {
    
}




const output = document.getElementById('output');
output.addEventListener('click', event => {
  const target = event.target;
const dataIndex = +target.getAttribute('data-index');

  if (target.checked) {
    console.log(target.id + 'is checked');
    console.log(dataIndex);
    readStatusChecked(dataIndex)

    target.parentNode.classList.remove('unchecked')
target.parentNode.classList.add('checked')
    
  }
  if (!(target.checked)) {
console.log(target.id + ' is unchecked');
readStatusUnchecked(dataIndex)

target.parentNode.classList.remove('checked')
target.parentNode.classList.add('unchecked')

  }
    // console.log(target.id);
  
})
