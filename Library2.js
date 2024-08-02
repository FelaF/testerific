let body = document.body
let libraryOBJ = []

/* I created the table at the beginning of the script.
Added two properties on the Book's constructor.
id:
used to add set "book-id" for each table row, so we can easily remove the row by selecting element by e.g. getElementById('book-id')
used as index when we need to remove the book from libraryObj array, so we don't need to iterate it
values: an array of Book's values, that we iterate over when creating the table row for it
When the confirm button is clicked, we get the selected radio button directly using the class input[name="read"]:checked as found on StackOverflow.
I created a function createDeleteBtn and moved the corresponding code there, to keep the other function a bit cleaner.
There's two functions that updates the table:
addTableRow(): creates a row for the book, and then loops over book.values to create a cell for each value. Finally, add a deleteBtn. It's called by addBookToLibrary.
removeTableRow(): simply selects the row element using book.id, tableBody.removeChild(). */

// table //

const table = document.createElement('table')
const tableBody = document.createElement('tbody')
table.appendChild(tableBody)
body.appendChild(table)
// DOM //
const dialogBox = document.getElementById("NewBook")
const dialogBoxButton = document.getElementById("NB")
const bookTitle = dialogBox.querySelector("#Title")
const bookPages = dialogBox.querySelector("#Pages")
const bookAuthor = dialogBox.querySelector("#Author")
const bookRead = document.getElementsByName("read")
const confirmButton = dialogBox.querySelector("#Confirm")


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
    this.values = [title, author, pages, read]
    this.id = libraryOBJ.length
    this.info = function(){
        if(read == true){
            return this.title + " by " + this.author + " has " + this.pages + "and has been read";
        }
        else if (read == false){
            return this.title + " by " + this.author + " has " + this.pages + "and has not been read";
        }
    }
}
function checkBookPresence(Book){
    Library = libraryOBJ.map((i)=> i.title);
    BookPresence = Library.includes(Book.title);
    return BookPresence
};
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

function addBookToLibrary(Book){
    if((checkBookPresence(Book)) === true){
        console.log("Book is already in Library. cannot re-add");
    }

    else if((checkBookPresence(Book) === false)){
        libraryOBJ.push(Book);
        addTableRow(Book)
        console.log(`added ${Book.title}`);
    }
    displayLibrary()
};
function removeBookfromLibrary(Book){

    if((checkBookPresence(Book)) === true){
        libraryOBJ.splice((Book.id),1);
        removeTableRow(Book)
        console.log(`Deleted ${Book.title}`)
    }
    else if((checkBookPresence(Book) === false)){
        console.log("Cannot remove book that is not there. Deleted Nothing.");
    }
    displayLibrary()
};
function addTableRow(Book) {
    // create row for the book
    const row = document.createElement('tr');
    row.setAttribute('id', `book-${Book.id}`);

    Book.values.forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
    });
    const deleteBtn = createDeleteBtn(Book);
    row.appendChild(deleteBtn);
    tableBody.appendChild(row);
}
function removeTableRow(book){
    const row = document.querySelector(`#book-${book.id}`);
    console.log(row)
    tableBody.removeChild(row)
    console.log(`removing row ${Book.title} from table`)
}
function CheckBook(Book){
    Object.getPrototypeOf(Book) === Book.prototype;
}

function displayLibrary(){
    let Library = libraryOBJ.map((i)=> (i).title);
    console.log(Library);
}
confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let read;
    const checkedBtn = document.querySelector('input[name="read"]:checked');
    const status = checkedBtn.value;
    if(status == 'yes'){
        read = true;
    }
    else if (status == 'no'){
        read = false;
    }
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, read);
    console.log(book.values);
    addBookToLibrary(book);
    displayLibrary();


})

dialogBoxButton.addEventListener("click", ()=> {
    dialogBox.showModal();
})

addBookToLibrary(LordoftheFiles)
addBookToLibrary(MobyDick)
removeBookfromLibrary(LordoftheFiles)
addBookToLibrary(TheLightningThief)
addBookToLibrary(TheCatintheHat)
addBookToLibrary()
