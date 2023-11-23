import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context';

const BookEdit = ({ book, onSubmit }) => {

  const { editBookById } = useBooksContext();

  const [title, setTitle] = useState(book.title);

  const handleEdit = (event) => {
    setTitle(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }

  return (
    <>
      <form className='book-edit'>
        <label>Title</label>
        <input value={title} onChange={handleEdit} />
        <button className='button is-primary' onClick={handleFormSubmit}>Save</button>
      </form>
    </>
  );
}

export default BookEdit