let DialogButton = document.getElementById("showDialog")
let NEWBOOK = document.getElementById("NBDialog")
let NewBookTable = document.getElementById("NewBookCatalog2")
let NewBookDiv = document.getElementById("NewBookCatalog")
let confirmBtn = NEWBOOK.querySelector("#Confirm")
let NBhRead = NEWBOOK.querySelector("#read")
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
    newBook = Book
    console.log(newBook)
    Library.push(newBook)
}
function displayLibrary(Library){
    for(let i= 0; i < Library.length; i++){
        console.log(Library[i].info())
    }
}


const TheLightningThief = new Book("The Lightning Thief","Rick Riordan", 400, true)

console.log(TheLightningThief.info())

const TheCatintheHat = new Book("The Cat in the Hat", "Dr.Suess", 50, false)
const Fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 176, false)
const LordoftheFiles = new Book("Lord of the Flies", "William Golding", 336, true)
const MobyDick = new Book("Moby Dick", "Herman Melville", 632, false)
const TheOddessy = new Book("The Oddessy", "Homer", 416, false)

console.log(Object.getPrototypeOf(TheCatintheHat) === Book.prototype)
console.log(Object.getPrototypeOf(TheLightningThief) === Book.prototype)
console.log(TheCatintheHat.valueOf())


console.log(Library)


addBooktoLibrary(TheCatintheHat)
addBooktoLibrary(Fahrenheit451)
addBooktoLibrary(LordoftheFiles)
addBooktoLibrary(MobyDick)
addBooktoLibrary(TheOddessy)
displayLibrary(Library)


DialogButton.addEventListener("click", ()=>{
    NEWBOOK.showModal()
});

NEWBOOK.addEventListener("close", ()=>{
    if (NEWBOOK.returnValue != "default"){
        console.log(NEWBOOK.returnValue)
        TableBook = document.createElement("td")

    }
});
confirmBtn.addEventListener("click", (NBAuthor,NBPages,NBTitle,NBhRead)=>{
    e.preventDefault()
    FormedBook = Book(NBTitle,NBAuthor,NBPages)
    addBooktoLibrary(FormedBook)
    displayLibrary(Library)
    console.log(NBAuthor,NBPages,NBTitle,NBhRead)
});