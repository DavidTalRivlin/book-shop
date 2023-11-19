'use strict'

function onInit() {
      renderBooks()
}

function renderBooks() {

      const elTable = document.querySelector('.books-table')
      // const keys = Object.keys(gBooks[0])
      var strHtml = `
      <thead>
         <tr>
         <td>PN</td>
         <td>Title</td>
         <td>Price</td>
         <td>Actions</td>
         </tr>
         </thead>
         <tbody>`

      strHtml += gBooks.map((book) => {
            return `<tr>
      <td>${book.id}</td>
      <td>${book.name}</td>
      <td>${book.price}</td>
            <td> 
      <button class="book-btn read-book-btn" onclick="onReadBook('${book.id}')">Read</button>
      <button class="book-btn update-book-btn" onclick="onUpdateBook('${book.id}')">Update</button>
      <button class="book-btn delete-book-btn" onclick="onDeleteBook('${book.id}')">Delete</button>
      </td>
      </tr>`
      }).join('')

      strHtml += `</tbody>
            </table>`

      elTable.innerHTML = strHtml




}

function onAddBook() {
      var name = prompt('please enter book name')
      var price = prompt('please enter price')
      if (!name && !price) return
      
      addBook(name, price)
      renderBooks()
}


function onDeleteBook(bookId) {
      removeBook(bookId)
      flashMsg(`Book removed successfully`)
}


function onUpdateBook(bookId) {
      var newBookPrice = +prompt('please type new price...')
      if (!newBookPrice) return
      updateBook(bookId, newBookPrice)
      flashMsg(`Book's price updated successfully`)
}


function onReadBook(bookId) {
      const book = getBookById(bookId)
      const elModal = document.querySelector('.modal')
  
      elModal.querySelector('h3').innerText = book.name
      elModal.querySelector('h4 span').innerText = book.price
      elModal.querySelector('img').src=book.imgUrl
        
      elModal.classList.add('open')
  }

  function onCloseModal() {
      document.querySelector('.modal').classList.remove('open')
  }

function flashMsg(msg) {
      const elUserMsg = document.querySelector('.user-msg')
  
      elUserMsg.innerText = msg
      elUserMsg.classList.add('open')
      setTimeout(() => elUserMsg.classList.remove('open'), 3000)
  }


