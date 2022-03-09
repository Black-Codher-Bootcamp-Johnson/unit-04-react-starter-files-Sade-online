import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bookData from "./models/books.json";
import Header from "./components/Header";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import BookCasePage from "./pages/BookCasePage";

function App() {
  const [books, setBooks] = useState(bookData);
  const [keyword, setKeyword] = useState("");

  async function findBooks(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&f
    ilter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    // <BookList books={books} addBook={addBook}></BookList>

    <Router>
      <Header />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        findBooks={findBooks}
        setBooks={setBooks}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage books={books} addBook={addBook} />}
        />
        <Route
          exact
          path="/bookcase"
          element={<BookCasePage books={books} />}
        />
      </Routes>
    </Router>
  );
}

function addBook(title) {
  console.log(`The Book ${title} was clicked`);
}

export default App;

// old code for individual component rather than as a whole
// return books.map(bookItem => <Book
// book={bookItem}/>);
