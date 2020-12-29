import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'The Red Lotus', author: 'Chris Bohjalian', id: 1 },
    {title: 'Hamnet', author: "Maggie O'Ferrell", id: 2 },
    {title: 'Bridgerton: The Duke and I', author: "Julia Quinn", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: v4() }])
  };

  const removeBook = (id) => {
    setBooks([books.filter(book => book.id !== id )])
  };

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
