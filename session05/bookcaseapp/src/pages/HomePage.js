import BookList from "../components/bookList";

const HomePage = (props) => {
  const { books } = props;

  return (
    <>
      <h2>Welcome to the Bookcase App</h2>
      <BookList books={books} />
    </>
  );
};

export default HomePage;
