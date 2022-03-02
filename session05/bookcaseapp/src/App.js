import React, {useState} from 'react';
import BookList from './components/bookList';
import bookData from './models/books.json';

function App() {
  const [books] = useState(bookData);

  return <BookList books={books}></BookList>
}

export default App;


// old code for individual component rather than as a whole
// return books.map(bookItem => <Book
// book={bookItem}/>);