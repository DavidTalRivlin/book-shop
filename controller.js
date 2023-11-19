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