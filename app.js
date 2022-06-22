//Data structure and functions
let library = []

class Book {
    constructor (name, author, volume, status) {
        this.name = name;
        this.author = author;
        this.volume = volume;
        this.status = status
    }
}

function addBookToLibrary() {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const volume = document.getElementById('volume').value;
    const readstatus = document.getElementById('readstatus').checked;
    let book =  new Book(name,author,volume,readstatus)
    library.push(book)
    displayFromLibrary()
    
}

function showCard() {
    if (addingcard.style.display == "") {
        addingcard.style.display = "none"
    } else {
        addingcard.style.display = ""
    }
}

function displayFromLibrary() {
    if (!library) {
        return null
    }else {
        library.forEach(book => {
            createBook(book)
        });
    }

}

function createBook(book) {
    const body = document.getElementsByClassName('container')[0]
    const card = document.createElement('div')
    const name = document.createElement('div')
    const author = document.createElement('div')
    const volume = document.createElement('div')
    const readstatus = document.createElement('button')

    card.classList.add('card')

    name.textContent = `Title: ${book.name}`;
    card.appendChild(name);

    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    volume.textContent = `Volume: ${book.volume}`;
    card.appendChild(volume);

    
    if(book.status === false) {
        readstatus.style.backgroundColor = 'red'
    } else {
        readstatus.style.backgroundColor = 'green'
    }
    card.appendChild(readstatus);

    body.appendChild(card)
}


//DOM selections

const addingcard = document.getElementsByClassName("addingcard")[0]
const submitbtn = document.getElementById('submit')

// event listeners




