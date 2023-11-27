import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

function View({books, deleteBooks}){
    return books.map((book)=>
    <tr>
        <td key={book.number}>{book.number}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td className='delete-btn'onClick={()=> deleteBooks(book.number)}>
          <Icon icon={trash} />
        </td>
      </tr>
        
    )
}

export default View