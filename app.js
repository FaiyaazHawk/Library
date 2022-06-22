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
    const name = document.getElementById('seriesname').value;
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
            console.log(book.author + 'hello there')

        });
    }

}


//DOM selections

const addingcard = document.getElementsByClassName("addingcard")[0]
const submitbtn = document.getElementById('submit')

// event listeners




