init();

function init(){
    getBooks()
}

//fetch
function getBooks(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(bookdata=> bookdata.forEach(book => showTitle(book)))
}

function showTitle(books){
    const list = document.getElementById('list')
    let bookTitle = document.createElement('li')
    bookTitle.textContent = books.title 

    list.appendChild(bookTitle)

    bookTitle.addEventListener('click', ()=> showBookDetails(books))
}


function showBookDetails(books){
    const showBook = document.getElementById('show-panel')

    let bookImg = document.createElement('img')
    bookImg.src = books.img_url

    let bookTitle = document.createElement('h1')
    bookTitle.textContent= books.title

    let bookSubtitle = document.createElement('h2')
    bookSubtitle.textContent = books.subtitle

    let bookAuthor = document.createElement('h2')
    bookAuthor.textContent= books.author

    let bookDescription = document.createElement('h3')
    bookDescription.textContent= books.description

    const ul= document.createElement('ul')

    for(const user of books.users) {
        const li = document.createElement('li')
        li.textContent = user.username
        ul.append(li)
    }

    //or use forEach
    // books.users.forEach(user=> {
    //     const li = document.createElement('li')
    //     li.textContent = user.username
    //     ul.append(li)
    // })

    let likeButton = document.createElement('button')
    likeButton.textContent= 'LIKE'
    //want to click on button 
    likeButton.addEventListener('click', (e)=> clickButton(e))


    showBook.innerText = ''
    showBook.append(bookImg, bookTitle, bookSubtitle, bookAuthor, bookDescription,ul, likeButton)

}

function clickButton(e){
    if(e.target.innerText=== "LIKE"){
        e.target.innerText= "UNLIKE"
    }else{
        e.target.innerText="LIKE"
    }
}