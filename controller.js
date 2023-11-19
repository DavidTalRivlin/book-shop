'use strict'

function onInit() {
      renderBooks()
}

function renderBooks() {

      const elTable = document.querySelector('.books-table')
      const keys = Object.keys(gBooks[0])
      var strHtml = `
      <thead>
         <tr>`

      strHtml += keys.map((key) => `<th>${key}</th>`).join('')

      strHtml += `<th>Actions</th>`

      strHtml += `
         </tr>
      </thead>
      <tbody>`

      strHtml += gBooks.map((book) => {
            return `<tr>
      <td>${book.id}</td>
      <td>${book.name}</td>
      <td>${book.price}</td>
      <td><img src="${book.imgUrl}" alt="${book.name}"></td>
      <td> 
      <button class="book-btn read-book-btn" onclick="onRead(${book.id})">Read</button>
      <button class="book-btn update-book-btn" onclick="onUpdate(${book.id})">Update</button>
      <button class="book-btn delete-book-btn" onclick="onDelete(${book.id})">Delete</button>
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
      addBook(name,price)
      renderBooks()
}