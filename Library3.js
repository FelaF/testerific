const body = document.body;
const libraryOBJ = []
// DOM
const dialogBox = document.getElementById("NewBook")
const dialogBoxButton = document.getElementById("NB")
const bookTitle = dialogBox.querySelector("#Title")
const bookPages = dialogBox.querySelector("#Pages")
const bookAuthor = dialogBox.querySelector("#Author")
const confirmButton = dialogBox.querySelector("#Confirm")
// table
const table = document.createElement('table');
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
body.appendChild(table);

const TheLightningThief = new Book("The Lightning Thief","Rick Riordan", 400, true);
const TheCatintheHat = new Book("The Cat in the Hat", "Dr.Suess", 50, false);
const Fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 176, false);
const LordoftheFiles = new Book("Lord of the Flies", "William Golding", 336, true);
const MobyDick = new Book("Moby Dick", "Herman Melville", 632, false);
const TheOddessy = new Book("The Oddessy", "Homer", 416, false);
const TheBadBeginning = new Book("The Bad Beginning", "Lemony Snicket", 162, true);

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    // assign an id based on library's length
    // this id will be used to remove the table row corresponding to it
    this.id = libraryOBJ.length;

    // make an array to iterate when creating rows
    this.values = [title, author, pages, read];

    this.info = function(){
        // i like ternary operator
        const msg = 'and has ' + (read === true) ? 'been read' : 'not been read';

        return `${this.title} by ${this.author} + has ${this.pages} + ${msg}`;
    }
}

function isBookNotPresent(title) {
    // filter the library: if it doesn't find the title, return true
    return libraryOBJ.filter(book => book.title === title).length === 0;
}

function addBooktoLibrary(book){
    libraryOBJ.push(book);
    // add to table
    addTableRow(book);

    console.log(libraryOBJ);
}

function removeBookfromLibrary(book){
    const id = book.id;

    if (libraryOBJ[book.id] !== undefined) {
        libraryOBJ.splice(id, 1);
    }

    console.log(libraryOBJ);

    removeTableRow(id)
}

function displayLibrary(){
    console.log(libraryOBJ);
}

dialogBoxButton.addEventListener("click", ()=> {
    dialogBox.showModal();
})

confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    
    // get the checked btn
    // thanks @StackOverflow: https://stackoverflow.com/a/15839451
    const checkedBtn = document.querySelector('input[name="read"]:checked');
    const status = checkedBtn.value;
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, status);
    
    console.log(book.values)

    // if title isn't present in the library
    if (isBookPresent(book.title)) {
        addBooktoLibrary(book);
        displayLibrary()
    } else {
        console.log("Book is already in Library. cannot re-add")
    }

})

function addTableRow(book) {
    // create row for the book
    const row = document.createElement('tr');
    row.setAttribute('id', `book-${book.id}`);

    // create a cell for each value of the book
    book.values.forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
    });

    // create delete btn
    const deleteBtn = createDeleteBtn(book);
    row.appendChild(deleteBtn);
    tableBody.appendChild(row);
}

function removeTableRow(id) {
    const row = document.querySelector(`#book-${id}`);
    tableBody.removeChild(row);
}

function createDeleteBtn(book) {
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "Deleter")
    deleteBtn.setAttribute("id", book.id)
    deleteBtn.style.height = '35px';
    deleteBtn.style.width = '60px';
    deleteBtn.textContent = "Delete"
    
    deleteBtn.addEventListener("click", () => {
        removeBookfromLibrary(book);
        });

    return deleteBtn;
}

addBooktoLibrary(LordoftheFiles)
addBooktoLibrary(TheCatintheHat)
removeBookfromLibrary(LordoftheFiles)
displayLibrary()
addBooktoLibrary(LordoftheFiles)
addBooktoLibrary(TheCatintheHat)
addBooktoLibrary(TheBadBeginning)
displayLibrary()
removeBookfromLibrary(TheCatintheHat)
displayLibrary()