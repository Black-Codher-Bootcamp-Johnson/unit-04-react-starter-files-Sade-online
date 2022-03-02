import React, {useState} from 'react';
import BookList from './components/bookList';
import bookData from './models/books.json';

function App() {
  const [books] = useState(bookData);

  return <BookList books={books}></BookList>
}

export default App;


// return books.map(bookItem => <Book
//   book={bookItem}/>);