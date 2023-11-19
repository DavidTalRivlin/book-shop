'use strict'

var gBooks = []
const STORAGE_KEY = 'booksDB'
_createBooks()

function saveBooks() {
      saveToStorage(STORAGE_KEY, gBooks)
}



function addBook(name,price) {
      const book = _createBook(name,price)
      gBooks.unshift(book)
  
      _saveBooksToStorage()
  }

// function removeBook(carId) {
//       const carIdx = gCars.findIndex(car => carId === car.id)
//       gCars.splice(carIdx, 1)
      
//       _saveCarsToStorage()
//   }
  


//   function updateCar(carId, newSpeed) {
//       const car = gCars.find(car => car.id === carId)
//       car.maxSpeed = newSpeed
  
//       _saveCarsToStorage()
//       return car



//////////// private functions

function _createBook(name, price){
      return {
            id: makeId(),
            name,
            price,
            imgUrl: `img/${getRandomInt(1,6)}.jpg`,
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
                  saveToStorage('booksDB',books)
                  
      }
      gBooks = books
}


function _saveBooksToStorage() {
      saveToStorage(STORAGE_KEY, gBooks)
  }