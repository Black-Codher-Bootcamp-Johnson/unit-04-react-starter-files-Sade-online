import './BookCounter.css';
import React from 'react';

const BookCounter = (props) => {

  return (
    <main className='booklist'>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshBooks()}>Refresh Books!</button>
      {props.library.books.map((book) => (<div><ul><li>{book.volumeInfo.title}<br/>{book.volumeInfo.description}</li></ul></div>))}
    </main>
  );
}

export default BookCounter;
