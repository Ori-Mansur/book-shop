'use strict'
// console.log('service');
const BOOKS_KEY = 'books'
var gNextId = 1
var gBooks;


function createBooks() {
    var books = loadBooksFromStorage();
    if (!books || books.length === 0) {
        books = [createBook('Mazda 3', 33000, 'img/3.jpg'),
        createBook('Mazda 6', 40000, 'img/6.jpg'),
        createBook('Mazda cx5', 37000, 'img/cx5.jpg')];
    }
    gBooks = books;
    saveBooksToStorage();
}

function createBook(name, price, imgUrl) {
    if(loadBooksFromStorage()) gNextId=loadBooksFromStorage().length+1
    return {
        id: gNextId++,
        name: name,
        price: price,
        imgUrl: imgUrl,
        rate: 0
    }
}
function getBooks() {
    return gBooks
    // var startIdx = carsInPageCount * gCurrPage;
    // return gBooks.slice(startIdx, startIdx + carsInPageCount);
}
function readBook(bookId) {
    var book = gBooks.find(function (book) {
        return book.id === bookId
    })
    if (!book) return;
    return book
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) { return book.id === bookId })
    if (bookIdx === -1) return;
    gBooks.splice(bookIdx, 1);
    saveBooksToStorage();
}

function addNewBook(name, price, imgUrl) {
    var book = createBook(name, price, imgUrl)
    gBooks.unshift(book)
    saveBooksToStorage()
}

function updateBook(bookId, value, key) {
    var book = gBooks.find(function (book) {
        return book.id === bookId
    })
    if (!book) return;
    book[key] = value;
    saveBooksToStorage()

}

function saveBooksToStorage() {
    saveToStorage(BOOKS_KEY, gBooks)
}
function loadBooksFromStorage() {
    return loadFromStorage(BOOKS_KEY);
}