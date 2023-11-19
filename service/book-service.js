'use strict'

var gBooks = []
const STORAGE_KEY = 'booksDB'
_createBooks()

function saveBooks() {
      saveToStorage(STORAGE_KEY, gBooks)
}


function addBook(name, price) {
      const book = _createBook(name, price)
      gBooks.unshift(book)

      _saveBooksToStorage()
      renderBooks()
}


function removeBook(BookId) {
      const bookIdx = gBooks.findIndex(book => BookId === book.id)
      gBooks.splice(bookIdx, 1)

      _saveBooksToStorage()
      renderBooks()
}



function updateBook(bookId, newPrice) {
      const book = gBooks.find(book => book.id === bookId)
      book.price = newPrice

      _saveBooksToStorage()
      renderBooks()
}


      //////////// private functions

      function _createBook(name, price) {
            return {
                  id: makeId(),
                  name,
                  price,
                  imgUrl: `img/${getRandomInt(1, 6)}.jpg`,
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

                        },
                        {
                              id: makeId(),
                              name: 'ayalet metayelet',
                              price: 50,
                              imgUrl: 'img/ayalet.jpg',

                        },
                        {
                              id: makeId(),
                              name: 'stroy of a knight',
                              price: 70,
                              imgUrl: 'img/abir.jpg',

                        }]
                  saveToStorage('booksDB', books)

            }
            gBooks = books
      }


      function _saveBooksToStorage() {
            saveToStorage(STORAGE_KEY, gBooks)
      }