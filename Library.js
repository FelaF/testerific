let DialogButton = document.getElementById("showDialog")
let NEWBOOK = document.getElementById("NBDialog")
let NewBookTable = document.getElementById("NewBookCatalog2")
let NewBookDiv = document.getElementById("NewBookCatalog")
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
    let newBook = Book
    Library.push(newBook)
}
function displayLibrary(Library){
    TempLibr = Library.map((i) => i.title)
    console.log(TempLibr)
    for(let i= 0; i < Library.length; i++){
        console.log(Library[i].title)
    }};

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
addBooktoLibrary(MobyDick)
addBooktoLibrary(TheOddessy)
displayLibrary(Library)

console.log(Library)

DialogButton.addEventListener("click", ()=>{
    NEWBOOK.showModal()
});

confirmBtn.addEventListener("click", (e)=>{
    let HREAD;
    let FormedBook;
    e.preventDefault()
    console.log(NBAuthor.value)
    console.log(NBPages.value)
    console.log(NBTitle.value)
    for (i = 0; i < NBhRead.length; i++) {
        if (NBhRead[i].type == 'radio' && NBhRead[i].checked) {
            HREAD = NBhRead[i].value
        }
    }
    if (HREAD == 'yes'){
        FormedBook = new Book(NBTitle.value,NBAuthor.value,NBPages.value, true)
    }
    else if (HREAD == 'no'){
        FormedBook = new Book(NBTitle.value,NBAuthor.value,NBPages.value, false)
    }
    /* Lines 84 - 95 check if a book has already been added to librarys*/
    
});


