import React from "react";
import Book from './Book.js';

const BookList = (props) => {
    const { books } = props;

    return books.map(book => <Book key={book.id} book={book} />)
}

export default BookList;
