import React, { useEffect, useState } from "react";
import getAllBooksBorrowedByStudent from "./api";
import DataTable from "react-data-table-component";
import {useLocation, useNavigate} from "react-router-dom";

let columns = [
  {
    name: "student id",
    selector: (row) => row.student_id,
    sortable: true,
  },
  {
    name: "name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "borrowing date",
    selector: (row) => row.borrowing_date,
    sortable: false,
  },
  {
    name: "book id",
    selector: (row) => row.book_id,
    sortable: false,
  },
  {
    name: "borrowings id",
    selector: (row) => row.borrowings_id,
    sortable: false,
  },
  {
    name: "book borrowings id",
    selector: (row) => row.book_borrowings_id,
    sortable: false,
  },
];

const BorrowBooks = (props) => {
  const [borrow, setBorrow] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const getDataOutside = async () => {
    console.log("inside the borrow-books",location.state.studentId);
    const booksById = await getAllBooksBorrowedByStudent(location.state.studentId?location.state.studentId:0);
    setBorrow(booksById);
  };
  useEffect(() => {
    async function getData() {
      getDataOutside();
    }
    getData();
  }, []);
  return (
    <div>
      <h4>Borrowed Books by student</h4>
      <DataTable columns={columns} data={borrow} />
      <br />
      <button onClick={()=>{navigate("/")}}>Back</button>
    </div>
  );
};

export default BorrowBooks;
