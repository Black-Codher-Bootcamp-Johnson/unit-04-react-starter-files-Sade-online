import React from 'react';

const Book = (props) => {
  return (
 
    <div className='book'>

      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} />
      <h2>{props.book.volumeInfo.title}</h2>
      
    </div>
  )
};

 
export default Book;
