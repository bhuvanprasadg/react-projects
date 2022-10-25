import React from "react";
import Book from "./Book";
import BookForm from "../Forms/BookForm";
import * as api from "../../api/index";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";

let columns = [];

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      ip: "",
    };
  }
  columns = [
    {
      name: "title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "author",
      selector: (row) => row.author,
      sortable: true,
    },
  ];
  componentDidMount() {
    this.getBooks();
  }
  addBook = (title, author) => {
    api
      .addBook({
        title: title,
        author: author,
        cover: "",
      })
      .then(() => {
        this.getBooks();
      });
  };
  async getBooks() {
    const response = await api.fetchAllBooks();
    this.setState({ books: response });
  }
  render() {
    return (
      <div>
        <BookForm addBook={this.addBook} />
        {/* <DataTable columns={this.columns} data={this.state.books}/> */}
        <br />
        <label>
          Search:{" "}
          <input
            type="text"
            onChange={(e) => this.setState({ ip: e.target.value })}
            value={this.state.ip}
          />
        </label>
        <table className="table table-responsive table-bordered table-striped">
          <thead>
            <tr>
              <th>Book</th>
              <th>Cover</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books
              .filter((book) => {
                if (!this.state.ip) return true;
                let name = book.title.toLowerCase();
                return name.startsWith(this.state.ip.toLowerCase());
              })
              .map((book, i) => (
                <Book
                  title={book.title}
                  cover={book.cover || null}
                  author={book.author}
                  bookid={book.bookid}
                  key={i}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookList;
