'use strict'

var gBooks = []
const STORAGE_KEY = 'booksDB'
var gFilterBy = { search: '', minRate: 0 }

_createBooks()

function getBooks() {
      var books = gBooks.filter(book =>
            book.name.includes(gFilterBy.search) &&
            book.rate >= gFilterBy.minRate)
      return books
}


function saveBooks() {
      saveToStorage(STORAGE_KEY, gBooks)
}


function addBook(name, price, rate) {
      const book = _createBook(name, price, rate)
      gBooks.unshift(book)

      _saveBooksToStorage()

}


function deleteBook(BookId) {
      const bookIdx = gBooks.findIndex(book => BookId === book.id)
      gBooks.splice(bookIdx, 1)

      _saveBooksToStorage()

}


function updateBook(bookId, newPrice) {
      const book = gBooks.find(book => book.id === bookId)
      book.price = newPrice

      _saveBooksToStorage()

}


function getBookById(bookId) {
      return gBooks.find(book => bookId === book.id)
}


function updateBookRate(bookId, value) {
      var book = getBookById(bookId)
      book.rate = value
      _saveBooksToStorage()
}


function setBookFilter(filterBy) { // { minSpeed: 90 }
      if (filterBy.search !== undefined) gFilterBy.search = filterBy.search
      if (filterBy.minRate !== undefined) gFilterBy.minRate = filterBy.minRate

      return gFilterBy
}



//////////// private functions

function _createBook(name, price, rate = 0) {
      return {
            id: makeId(),
            name,
            price,
            imgUrl: `img/${getRandomInt(1, 6)}.jpg`,
            rate,
      }
}


function _createBooks() {


      var books = loadFromStorage('booksDB')
      if (!books || !books.length) {


            books = [
                  {
                        id: makeId(),
                        name: 'itchy nose giraffe',
                        price: 74,
                        imgUrl: 'img/giraffe.jpg',
                        rate: 9

                  },
                  {
                        id: makeId(),
                        name: 'ayalet metayelet',
                        price: 50,
                        imgUrl: 'img/ayalet.jpg',
                        rate: 8

                  },
                  {
                        id: makeId(),
                        name: 'stroy of a knight',
                        price: 70,
                        imgUrl: 'img/abir.jpg',
                        rate: 7

                  }]
            saveToStorage('booksDB', books)

      }
      gBooks = books
}


function _saveBooksToStorage() {
      saveToStorage(STORAGE_KEY, gBooks)
}