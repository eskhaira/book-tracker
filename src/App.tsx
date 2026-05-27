import "./App.css";
import Book from "./Book";

const books = [
  { id: 1, title: "Ansible for Dev-Ops", author: "Jeff Geerling", year: 2018 },
  { id: 2, title: "The Art of Seduction", author: "Robert Greene", year: 2016 },
  {
    id: 3,
    title: "Choose Your Enemies Wisely",
    author: "Patrick Bet-David",
    year: 2023,
  },
  {
    id: 4,
    title: "Doing The Impossible",
    author: "Patrick Bet-David",
    year: 2019,
  },
  {
    id: 5,
    title: "Thinking Fast And Slow",
    author: "Daniel Kahneman",
    year: 2011,
  },
];

const booksToRead = [
  {
    id: 6,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 1998,
  },
  {
    id: 7,
    title: "The 33 Strategies of War",
    author: "Robert Greene",
    year: 2006,
  },
  {
    id: 8,
    title: "The Art of War",
    author: "Sun Tzu",
    year: 500,
  },
];

function App() {
  return (
    <>
      <h1>List of Books</h1>
      <h2>Books that I have read and recommend</h2>
      <ul>
        {books.map((book, index) => (
          <Book
            position={index + 1}
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
          />
        ))}
      </ul>
      <h2>Books that I want to read</h2>
      <ul>
        {booksToRead.map((book, index) => (
          <Book
            position={index + 1}
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
