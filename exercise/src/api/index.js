const URL = "http://localhost:3030/api/bookreactions/";

export const fetchAllBooks = async () => {
    const response = await fetch(URL + "Books");
    return await response.json();
}

export const fetchBook = async (bookid) => {
    const response = await fetch(URL + "Books/"+ bookid);
    return await response.json();
}

export const fetchAllReviews = async (bookid) => {
    const response = await fetch(URL + "Reviews/"+ bookid);
    return await response.json();
}

const headers = {
    accept: "application/json",
    'content-type': "application/json",
};

export const addBook = async (book) => {
    const response = await fetch(URL + 'Books', { 
        method: 'post',
        mode: 'cors',
        headers: headers,
        body:JSON.stringify(book)
    });
    return await response.json();
}

export const addReview = async (review) => {
    const response = await fetch(URL + 'Reviews', { 
        method: 'post',
        mode: 'cors',
        headers: headers,
        body:JSON.stringify(review)
    });
    return await response.json();
}
