import BookList from "../components/bookList";

const BookCasePage = (props) => {
  const { books } = props;
  return (
    <>
      <h2>Welcome to the Bookcase App testing testing</h2>
      <BookList books={books} />
    </>
  );
};

export default BookCasePage;
