const pool = require("./pool");

async function getAllBooks(pageNum, pageSize){
    const client = await pool.connect();
    try{
        const text = "SELECT * FROM BOOKS where num_of_books > 0 offset $1 limit $2";
        const values = [(pageNum-1) * pageSize, pageSize];
        const response = await client.query(text, values);
        return response;
    } finally{
        client.release();
    }
}

module.exports = {getAllBooks};