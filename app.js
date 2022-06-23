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
    clearPage()
    displayFromLibrary()
    
}

function showCard() {
    if (addingcard.style.display == "") {
        addingcard.style.display = "none"
    } else {
        addingcard.style.display = ""
    }
}
//hacky way to remove duplicates from showing on page
function clearPage() {
    const body = document.getElementsByClassName('container')[0]
    body.innerHTML = ''
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
    const removeBtn = document.createElement('button');

    card.classList.add('card')

    name.textContent = `Title: ${book.name}`;
    card.appendChild(name);

    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    volume.textContent = `Volume: ${book.volume}`;
    card.appendChild(volume);

    
    if(book.status === false) {
        readstatus.style.backgroundColor = 'red'
        readstatus.textContent = "Not yet read"
    } else {
        readstatus.style.backgroundColor = 'lightgreen'
        readstatus.textContent = "Read"
    }
    card.appendChild(readstatus);

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('class', 'removeBtn');
    
    card.appendChild(removeBtn);

    body.appendChild(card)
}

function removeCard() {
    console.log('hello')
}




//DOM selections

const addingcard = document.getElementsByClassName("addingcard")[0]
const submitbtn = document.getElementById('submit')
const removeBtns = document.querySelectorAll("removeBtn")

// event listeners
removeBtns.forEach(function (btn) {
    btn.addEventListener("click", removeCard())    
})


