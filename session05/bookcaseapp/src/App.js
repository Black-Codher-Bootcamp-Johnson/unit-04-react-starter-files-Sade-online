import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BookList from './components/bookList';
import bookData from './models/books.json';
import Header from './components/Header';

function App() {
  const [books] = useState(bookData);

  return 
  // <BookList books={books} addBook={addBook}></BookList>

  <Router>
    <routes>
<Route exact path="/" element={() => (
<>
<Header />
<h2>Welcome to the Bookcase App</h2>
<BookList books={Book}/>
</>
)} />
<Route exact path="/bookcase" element={() => (
<>
<Header />
<h2>Welcome to the Bookcase App testing testing</h2>
<BookList books={Book}/>
</>
)} />
</routes>
</Router>


}


function addBook(title){
  console.log(`The Book ${title} was clicked`)
}

export default App;


// old code for individual component rather than as a whole
// return books.map(bookItem => <Book
// book={bookItem}/>);