import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getAllBooks, getAllStudents } from "./api";
import { useNavigate, useLocation } from "react-router-dom";

let columns = [
  {
    name: "title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "book id",
    selector: (row) => row.book_id,
    sortable: true,
  },
  {
    name: "author",
    selector: (row) => row.author,
    sortable: true,
  },
  {
    name: "price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "publisher",
    selector: (row) => row.publisher,
    sortable: false,
  },
  {
    name: "edition",
    selector: (row) => row.edition,
    sortable: false,
  },
  {
    name: "available books",
    selector: (row) => row.num_of_books,
    sortable: false,
  },
  {
    name: "isbn number",
    selector: (row) => row.isbn,
    sortable: false,
  },
];

const BrowseBooks = () => {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState();
  const [selectedBookIds, setSelectedBookIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);

    const selectedBooks = selectedRows.map((rows) => {
      return rows.book_id;
    });
    setSelectedBookIds(selectedBooks);
  };

  const updateBorrowBooks = async () => {
    console.log("selected student id",selectedStudentId);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        book_ids: selectedBookIds,
        student_id: selectedStudentId,
        staff_id: 51,
      }),
    };

    await fetch(`/borrow-books`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("the books are borrowed by the selected student");
        }
        getData();
      });
  };

  async function getData() {
    const booksJSON = await getAllBooks();
    setBooks(booksJSON);

    const students = await getAllStudents();
    setStudents(students);

    console.log("inside browse-books");
  }

  useEffect(() => {
    async function getData() {
      const booksJSON = await getAllBooks();
      setBooks(booksJSON);

      const students = await getAllStudents();
      setStudents(students);

      console.log("inside browse-books");
    }
    getData();
  }, []);

  const toBorrowBooks = () => {
    navigate("/borrow-books", {
      state: { selectedStudentId: selectedStudentId },
    });
  };

  return (
    <div>
      <DataTable
        columns={columns}
        selectableRows
        onSelectedRowsChange={handleChange}
        data={books}
      />

      <h3>Select a student for borrow books</h3>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedStudentId(e.target.value);
        }}
      >
        {students.map((item) => (
          <option key={item.student_id} value={item.student_id}>
            {item.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          updateBorrowBooks();
        }}
      >
        Borrow Books
      </button>
      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Click to see borrowed books</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.mobile}</td>
              <td>
                <button
                  onClick={(e) => {
                    navigate("/borrow-books", {
                      state: { studentId: student.student_id },
                    });
                  }}
                >
                  Show Borrowed Books
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default BrowseBooks;
