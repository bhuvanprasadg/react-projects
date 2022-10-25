import React, { useState} from "react";

const ReviewForm = (props) => {
    const [content, setContent] = useState();
    const { addReview, bookid} = props;

    const createReview = (e) => {
        e.preventDefault();
        addReview({content:content, bookid:bookid});
        setContent("");
    }

    return(
        <form onSubmit={createReview}>
            <label>
            Review:<input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
            </label>
            <button type="submit" onClick = {(e) => {e.preventDefault(); addReview({content:content, bookid:bookid})}}>Add Review</button>
        </form>
    )
}

export default ReviewForm;