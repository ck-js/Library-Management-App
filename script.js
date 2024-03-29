
const myLibrary = [
    {
        title: 'Lean Startup',
        author: 'Eric Ries',
        pages: 554,
        readStatus: false,
    },
];

// convert constructor to class syntax
class Book {
    constructor(title,author,pages,readStatus)  {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}



// function Book(title,author,pages,readStatus) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.readStatus = readStatus
// this.info = function() {
//     alert(`Read ${this.title} by ${this.author} now!`)
// }
// }

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject)
}
function displayBook() {
    const output = document.getElementById('output');
    
    while (output.firstChild) {
        output.removeChild(output.firstChild)
    }

    for (let i = 0; i < myLibrary.length; i++) {
        const bookObject = myLibrary[i];

        const cardContainer = document.createElement('div')
        const title = document.createElement('h3')
const author = document.createElement('p');
const pages = document.createElement('p');
const checkboxContainer = document.createElement('div');
const toggleSwitch = document.createElement('span');
toggleSwitch.setAttribute('class', 'slider round')
const readStatusLabel = document.createElement('label');

readStatusLabel.htmlFor = 'checkbox' + '-' + i;
readStatusLabel.appendChild(document.createTextNode('Read Status'))


const readStatusCheckbox = document.createElement('input');
readStatusCheckbox.type = 'checkbox';
readStatusCheckbox.id = 'checkbox' + '-' + i;


const removeBtn = document.createElement('button')


cardContainer.setAttribute('id', i);
cardContainer.setAttribute('data-index', i);
cardContainer.setAttribute('class', 'card-item');
removeBtn.setAttribute('data-index', i);
removeBtn.setAttribute('onclick', 'removeBook(event)');
removeBtn.setAttribute('class', 'remove-btn');
removeBtn.setAttribute('aria-label', 'Remove book from library')
removeBtn.textContent = 'X';
readStatusCheckbox.setAttribute('data-index', i)
checkboxContainer.setAttribute('class', 'checkbox-container');
// readStatusLabel.setAttribute('class', 'checkbox')
// readStatusCheckbox.setAttribute('class', 'checkbox')

title.textContent = `${bookObject.title}`;
        author.textContent = `Author: ${bookObject.author}`;
        pages.textContent = `Pages: ${bookObject.pages}`;

        
        output.appendChild(cardContainer);
        cardContainer.appendChild(title);
        cardContainer.appendChild(author);
        cardContainer.appendChild(pages);

        cardContainer.appendChild(checkboxContainer)
        checkboxContainer.appendChild(readStatusLabel);
        checkboxContainer.appendChild(readStatusCheckbox);
        checkboxContainer.appendChild(toggleSwitch);
        cardContainer.appendChild(removeBtn)

        
    }
    
    displayOverview();
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
    let pages = document.getElementById('pages').value;

    
const instance = new Book(title,author, pages)
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

// function toggleCardBackground(dataIndex) {
    
// }



document.body.classList.add('dark-mode')

const overviewContainer = document.getElementById('overview-container')
function displayOverview() {
const totalBooks = document.getElementById('total-books')

for (let i = 0; i < myLibrary.length; i++) {
    totalBooks.textContent = 'Books on shelf: ' + myLibrary.length
    
}
}
function displayOverviewReadUnread() {
    const booksRead = document.getElementById('books-read')
const booksUnread = document.getElementById('books-unread')

let read = 0;
let unread = 0;

for (let i = 0; i < myLibrary.length;i++) {
let bookObject = myLibrary[i];

if (bookObject.readStatus === false ) {
    unread++;
}
if (bookObject.readStatus === true) {
    read++
} 
booksUnread.textContent = 'Books Unread: ' + unread;
booksRead.textContent = 'Books Read: ' + read;

}


}
displayOverviewReadUnread();

displayOverview();

function sortNewest() {
    myLibrary.reverse();

    displayBook();
}
function sortOldest() {
    myLibrary.reverse();

    displayBook();

}
function sortAlphabetically() {
    myLibrary.sort((a,b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    })
    displayBook();
}
function sortAuthor() {
    myLibrary.sort((a,b) => {
        const authorA = a.author.toLowerCase();
        const authorB = b.author.toLowerCase();

        if (authorA < authorB) {
            return -1;
        }
        if (authorA > authorB) {
            return 1;
        }
        return 0;
    })
    displayBook();
}

// sort books by order read status, could not find solution for adding new array over the original one
// function sortReadStatusTrue() {
//      let filteredArray = myLibrary.filter(
//         obj => obj.readStatus ===true)
//         console.log(filteredArray);
            
//             displayBook();
        
//     }

function toggleTheme() {
const body = document.getElementById('body-container')
const button = document.getElementById('toggle-theme')
const isDarkMode = body.classList.contains('dark-mode')

if (isDarkMode) {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
button.textContent = 'Dark Mode'
}else {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    button.textContent = 'Light Mode'
}




}



const output = document.getElementById('output');
output.addEventListener('click', event => {
  const target = event.target;
const dataIndex = +target.getAttribute('data-index');

  if (target.checked) {
    console.log(target.id + 'is checked');
    console.log(dataIndex);
    readStatusChecked(dataIndex)

    target.parentNode.parentNode.classList.remove('unchecked')
target.parentNode.parentNode.classList.add('checked')
    
  }
  if (!(target.checked)) {
console.log(target.id + ' is unchecked');
readStatusUnchecked(dataIndex)

target.parentNode.parentNode.classList.remove('checked')
target.parentNode.parentNode.classList.add('unchecked')

  }
    // console.log(target.id);
    displayOverviewReadUnread();
  
})
// openDialog();
displayBook();





