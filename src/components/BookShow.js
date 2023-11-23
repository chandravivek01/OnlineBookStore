import { useState } from 'react'
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

const BookShow = ( { book } ) => {

  const { deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(!showEdit);
  }


  let content = <h3>{book.title}</h3>
  if ( showEdit )
    content = <BookEdit book={book} onSubmit={handleSubmit} />;

  return (
    <div className='book-show'>

      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="abc" />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}></button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow