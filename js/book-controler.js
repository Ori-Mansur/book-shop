'use strict'
// console.log('controler');


function init() {
    createBooks()
    renderBooks()
}
function renderBooks() {
    var books = getBooks();
    var strHTMLs = books.map(function (book) {
        return `<tr>
                <td>${book.id}</td><td>${book.name}</td>
                <td data-currency="currency">${book.price}$</td>
                <td><img src="${book.imgUrl}"></td>
                <td>
                <button class="read" onclick="onReadBook(${book.id},'flex')" 
                title="Read details about this book" data-trans="read-btn">Read</button>
                <button class="update" onclick="onUpdateBook(${book.id})" title="Update Book Price"
                data-trans="update-btn">Update</button>
                <button class="delete" onclick="onRemoveBook(${book.id})" title="Remove this Book"
                data-trans="delete-btn">Delete</button>
                </td>
                </tr>`
    })
    document.querySelector('tbody').innerHTML = strHTMLs.join('');
}

function onRemoveBook(bookId) {
    var isSure = confirm('Are you sure?')
    if (!isSure) return;

    removeBook(bookId);
    renderBooks();
}

function openAddBook() {
    var elNewBook = document.querySelector('.new-book')
    elNewBook.classList.toggle('hide')
}
function onReadBook(bookId, display) {//onOpenModal or onShowModel
    var elDetailes = document.querySelector('.book-details')//elBookDetails
    var book = readBook(bookId) //findBookById
    elDetailes.innerHTML = `<button onclick="closeAndOpenModal('none')">X</button>
    <h3>Book Name: ${book.name}</h3>
     <img src="${book.imgUrl}">
     <p>Great book, intresting and recomend</p>
     <div>
     <input type="number" class="book-rate" max="10" min="0" value="${book.rate}">
     <button onclick="onSetRate(${bookId})">Set</button>
     </div> `
    closeAndOpenModal(display)
}
function closeAndOpenModal(display) {
    var elDetailes = document.querySelector('.book-details')
    elDetailes.style.display = display
}
function readNewPrice(bookId) {
    var elNewPrice = document.querySelector('.update-price')
    elNewPrice.classList.toggle('hide')
    var elNewPrice = document.querySelector('.new-price')
    var price = elNewPrice.value
    if (!price) return
    updateBook(bookId, price, 'price');
    elNewPrice.value = ''
}

function onUpdateBook(bookId) {
    readNewPrice(bookId)
    // updateBook(bookId, price, 'price');
    renderBooks()

}
function onSetRate(bookId) {
    var elRate = document.querySelector('.book-rate')
    var rate = elRate.value
    updateBook(bookId, rate, 'rate')

}

function onReadAndAddNewBook() {
    var elBookName = document.querySelector('.book-name');
    var elBookPrice = document.querySelector('.book-price');
    var elBookImg = document.querySelector('.book-img');
    var bookName = elBookName.value;
    var bookPrice = elBookPrice.value;
    var bookImg = elBookImg.value;
    if (!bookName || !bookPrice || !bookImg) return;
    addNewBook(bookName, bookPrice, bookImg)
    elBookName.value = '';
    elBookPrice.value = '';
    elBookImg.value = '';
    renderBooks()
}

function onSetLang(lang) {
    setLang(lang)
    onDoTrans()
    getCuntryCurrency(lang)

}


function onDoTrans() {
    var elsDataTrans = document.querySelectorAll('[data-trans]')
    elsDataTrans.forEach(function (el) {
        var transKey = el.dataset.trans;
        var txt = getTrans(transKey);
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    })
}

function getCuntryCurrency(lang){
    var elPrices = document.querySelectorAll('[data-currency]')
    var books=getBooks()
    books.forEach(function(book,idx){
        var currPrice=book.price
            if(lang==='en'){
                var cuntry=lang+'-US'
                var coin='USD'
            }else if(lang==='es'){
                var cuntry=lang+'-ES'
                var coin='EUR'
                currPrice*=0.8
            }else if(lang==='he'){
                var cuntry=lang+'-IL'
                var coin='ILS'
                currPrice*=3.5
            }
        var price=formatCurrency(currPrice,cuntry,coin)
        elPrices[idx].innerText = price
    })
}


///not in use bur good///
function onSetCurrency() {
    var elPrices = document.querySelectorAll('[data-currency]')
    elPrices.forEach(function (elPrice) {
        var strPrice = elPrice.innerText
        var price = +strPrice.match(/\d/ig, '').join('')
        var cuntryPrice = getCuntryCurrency(price)
        elPrice.innerText = cuntryPrice
    })
}