let DialogButton = document.getElementById("showDialog")
let NEWBOOK = document.getElementById("NBDialog")
let body = document.body
let BookTable = document.createElement("table")
let confirmBtn = NEWBOOK.querySelector("#Confirm")
let NBhRead = document.getElementsByName("read")
let NBTitle = NEWBOOK.querySelector("#Title")
let NBPages = NEWBOOK.querySelector("#Pages")
let NBAuthor = NEWBOOK.querySelector("#Author")
let Library = []

function Book(title,author,pages,hRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = hRead
    this.info = function(){
        if (this.read == true){
            return this.title + " by " + this.author + " is " + this.pages + " pages has been read";
        }
        else if (this.read == false) {
            return this.title + " by " + this.author + " is " + this.pages + " pages has not been read";
        }
    }};

function addBooktoLibrary(Book){
    TempLibr = Library.map((i) => i.title)
    if (TempLibr.includes(Book.title)){
    }
    else {
        Library.push(Book)
    };

};
function displayLibrary(Library){
    let TempLibr = Library.map((i) => i.title)
    console.log(TempLibr)
}
function createTable(Library){
    for(i = 0; i < Library.length ; i++){
        TR = document.createElement("tr")
        TR.setAttribute("id", i)
        TR.innerHTML = `<td>${Library[i].title}</td> <td>${Library[i].author}</td> <td>${Library[i].pages}</td>`
        BookButton = document.createElement("button")
        BookButton.setAttribute("class", i)
        BookButton.style.height = '60px';
        BookButton.style.width = '60px';
        BookButton.textContent = "Delete Book"
        BookTable.appendChild(TR)
        BookTable.appendChild(BookButton)
        BookTable.setAttribute("id","Books")

    }
    body.appendChild(BookTable)
};
function deleteBook(Library,Book){
    let Bookslist = Library.map((i) => i.title);
    let Index = Bookslist.indexOf(Book);
    console.log(Bookslist);
    x = Library.splice(Index, 1);
    console.log(Library,x);

}
function updateTable(Library){

}

const TheLightningThief = new Book("The Lightning Thief","Rick Riordan", 400, true)

const TheCatintheHat = new Book("The Cat in the Hat", "Dr.Suess", 50, false)
const Fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 176, false)
const LordoftheFiles = new Book("Lord of the Flies", "William Golding", 336, true)
const MobyDick = new Book("Moby Dick", "Herman Melville", 632, false)
const TheOddessy = new Book("The Oddessy", "Homer", 416, false)



console.log(Library)


addBooktoLibrary(TheCatintheHat)
addBooktoLibrary(Fahrenheit451)
addBooktoLibrary(LordoftheFiles)
displayLibrary(Library)

console.log(Library)

DialogButton.addEventListener("click", ()=>{
    NEWBOOK.showModal();
});

confirmBtn.addEventListener("click", (e)=>{
    let HREAD;
    let FormedBook;
    e.preventDefault();
    console.log(NBAuthor.value);
    console.log(NBPages.value);
    console.log(NBTitle.value);
    for (i = 0; i < NBhRead.length; i++) {
        if (NBhRead[i].type == 'radio' && NBhRead[i].checked) {
            HREAD = NBhRead[i].value;
        }
    }
    if (HREAD == 'yes'){
        FormedBook = new Book(NBTitle.value,NBAuthor.value,NBPages.value, true);
    }
    else if (HREAD == 'no'){
        FormedBook = new Book(NBTitle.value,NBAuthor.value,NBPages.value, false);
    }
    let Bookslist = Library.map((i) => i.title);
    for(i= 0; i<Bookslist.length; i++){
        if (Bookslist[i] == FormedBook){
            console.log(Bookslist)
            console.log("This book is already in Library. Cannot be added")
        }
        else{
            addBooktoLibrary(FormedBook);
        }
    } console.log(Library)
    
});

createTable(Library)


