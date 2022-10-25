import React, {memo} from "react";
import propTypes from "prop-types";
import noImage from "./no-image.jpg";
import {Link} from "react-router-dom";

function Book(props){
    const { title, cover, author, bookid } = props;
    return(
        <tr>
            <td><Link to={`/reviews/${bookid}/${title}`}> {title} </Link>
            </td>
            <td>{<img src={cover==null ? noImage:cover}/>}</td>
            <td>{author}</td>
        </tr>
    )
}
Book.propTypes = {
    title: propTypes.string,
    author: propTypes.string,
    cover: propTypes.any,
    bookid: propTypes.number.isRequired,
};
Book.defaultProps = {
    title:'unknown',
    cover:{noImage},
    author:'unknown',
};

export default React.memo(Book);