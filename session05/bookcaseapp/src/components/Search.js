import React from "react";
const Search = (props) => {
  const { keyword, setKeyword, findBooks } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="">Search:</label>
          <input
            type="text"
            name="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="Search" />
        </p>
        <p style={{ color: "red" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      </form>
    </div>
  );
};

export default Search;
