import React, { useState } from 'react'

const BookEdit = ( { book, onSubmit } ) => {

  const [title, setTitle] = useState(book.title);

  const handleEdit = ( event ) => {
    setTitle(event.target.value);
  }

  const handleFormSubmit = ( event ) => {
      event.preventDefault();
      onSubmit(book.id, title);
  }

  return (
    <>
      <form className='book-edit'>
        <label>Title</label>
        <input value={title} onChange={handleEdit}/>
        <button className='button is-primary' onClick={handleFormSubmit}>Save</button>
      </form>
    </>
  );
}

export default BookEdit