let body = document.body
let libraryOBJ = []
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
    this.info = function(){
        if(read == true){
            return this.title + " by " + this.author + " has " + this.pages + "and has been read";
        }
        else if (read == false){
            return this.title + " by " + this.author + " has " + this.pages + "and has not been read";
        }
    }
}

function addBooktoLibrary(Book){
    let Library = libraryOBJ.map((i) => i.title);
    if((Library.includes(Book.title)) == false){
        libraryOBJ.push(Book);
    }
    else if((Library.includes(Book.title) == true)){
        console.log("Book is already in Library. cannot re-add")
    }
    console.log(libraryOBJ);
}

function removeBookfromLibrary(Book){
    let Library = libraryOBJ.map((i) => i.title);
    if((Library.includes(Book.title)) == false){
        console.log("Book is not in Library... Deleted Nothing");
    }
    else if((Library.includes(Book.title)) == true){
        Indexed = Library.indexOf(Book.title);
        libraryOBJ.splice(Indexed, 1);
    }
    console.log(libraryOBJ,Indexed,);
}

function displayLibrary(){
    let Library = libraryOBJ.map((i)=> (i).title);
    console.log(Library);
}

dialogBoxButton.addEventListener("click", ()=> {
    dialogBox.showModal();
})

confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let read;
    let newDialogBook;
    for (i = 0; i < bookRead.length; i++) {
        if (bookRead[i].type == 'radio' && bookRead[i].checked) {
            read = bookRead[i].value;
        }
    }

    if (read == 'yes'){
        newDialogBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, true);
         
    }
    else if (read == 'no'){
        newDialogBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, false);
    }
    console.log(bookTitle.value, bookAuthor.value, bookPages.value, read)
    addBooktoLibrary(newDialogBook)
    displayLibrary()
    tableOfBooks(libraryOBJ)


})

function tableOfBooks(libraryOBJ){
    let tableOfBooks = document.createElement("table")
    let tblbody = document.createElement("tbody")
    for(i = 0; i < libraryOBJ.length; i++){
        bookrow = document.createElement("tr")
            let authorCell = document.createElement("td")
            let authorCellText = document.createTextNode(`${libraryOBJ[i].author}`)
            let pagesCell = document.createElement("td")
            let pagesCellText = document.createTextNode(`${libraryOBJ[i].pages}`)
            let readCell = document.createElement("td")
            let readCellText = document.createTextNode(`${libraryOBJ[i].read}`)
            let titleCell = document.createElement("td")
            let titleCellText = document.createTextNode(`${libraryOBJ[i].title}`)
            authorCell.appendChild(authorCellText)
            titleCell.appendChild(titleCellText)
            pagesCell.appendChild(pagesCellText)
            console.log(pagesCellText)
            readCell.appendChild(readCellText)
            bookrow.appendChild(titleCell)
            bookrow.appendChild(authorCell)
            bookrow.appendChild(pagesCell)
            bookrow.appendChild(readCell)
            tblbody.appendChild(bookrow)
        };

    tableOfBooks.appendChild(tblbody);
    document.body.appendChild(tableOfBooks);
};

function libraryList(Book){
    Library = libraryOBJ.map((i)=> i.title)
    return Library.includes(Book.title)
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

x = libraryOBJ.filter(libraryList)
console.log(x)