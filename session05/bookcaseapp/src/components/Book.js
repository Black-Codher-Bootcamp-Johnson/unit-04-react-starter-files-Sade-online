import React from 'react';

function Book (props) {
const { id,
  saleInfo: {retailPrice},
  volumeInfo: {
  title,
  authors,
  description,
  imageLinks: {thumbnail}
  }
  } = props.book;
    return (
  <div className="book">
  <img src={thumbnail} alt="thumbnail"/>
   <div>
   <h2 title={title}>{title}</h2>
   <p> {authors} </p>
   <p> {description} </p>
   <section> {retailPrice ? retailPrice.amount : 'No price define'}</section>
   <button onClick={()=>props.onClick()}>Add To Cart</button>

   </div>
  </div>
)}

export default Book;

















// import React from 'react';

// const Book = (props) => {
//   return (
 
//     <div className='book'>

//       <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} />
//       <h2>{props.book.volumeInfo.title}</h2>
//       <p>{props.book.volumeInfo.authors}</p>
//       <p>{props.book.volumeInfo.description}</p>
//       <p>{props.book.saleInfo.listPrice.amount}</p>

//     </div>
//   )
// };

 
// export default Book;



// import React from 'react';

// function Book (props) {
// const { id,
//   saleInfo: {retailPrice},
//   volumeInfo: {
//   title,
//   authors,
//   description,
//   imageLinks: {thumbnail}
//   }
//   } = props.book;
//     return (
//   <div className="book">
//   <img src={thumbnail} alt="thumbnail"/>
//    <div>
//    <h2 title={title}>{title}</h2>
//    <p> {authors} </p>
//    <p> {description} </p>
//    <section> {retailPrice ? retailPrice.amount : 'No price define'}</section>
//    <button>Add+</button>

//    </div>
//   </div>
// )}

// export default Book;
