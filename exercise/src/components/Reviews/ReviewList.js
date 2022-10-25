import Review from './Review';
import Book from "../Books/Book.js";
import React, { useState, useEffect } from 'react';
import ReviewForm from '../Forms/ReviewForm';
import {useParams} from "react-router-dom";
import DataTable from "react-data-table-component";
import * as api from "../../api/index";

function ReviewList() {

    const {bookid, title} = useParams();
    const [reviews, setReviews] = useState([]);
    const [book, setBook] = useState({
        cover:"",
        title:"",
        author:"",
        bookid:0
    });

    const columns = [
        {
            name:"Review",
            selector: (row) => row.content,
            sortable: true,
        },
        {
            name:"Book Id",
            selector: (row) => row.bookid,
            sortable: true,
        }
    ]

    const getReviews = () => {
        api.fetchAllReviews(bookid).then((response) => {
            setReviews(response);
        });
    }

    const getBook = () => {
        api.fetchBook(bookid).then((response) => {
            setBook(response[0]);
        });
    }

    useEffect(() => {
        getReviews();
    },[bookid]);

    useEffect(()=>{
        getBook();
    },[bookid]);

    const addReview = (review) =>{
        api.addReview(review).then(() => {
            getReviews();
        });
    }

    return (
        <div className="row">
            <ReviewForm addReview = {addReview} bookid={bookid}/>
            {/* <DataTable columns={columns} data={reviews}/> */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Reviews of {title} </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((item, i) => {
                            return (<Review review={item.content} key={i} />);
                        }
                        )}
                    </tbody>
                </table>
                <Book cover={book.cover ? book.cover:""} title={book.title} author={book.author} bookid={book.bookid}/>
            </div>
        </div>
    )

}

export default ReviewList;