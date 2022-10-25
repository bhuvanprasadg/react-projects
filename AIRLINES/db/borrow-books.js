const pool = require("./pool");

async function borrowTheBooks(book_ids, student_id, staff_id) {
  const client = await pool.connect();
  try {
    const books = [];
    await Promise.all(
      book_ids.map(async (book) => {
        const r = await client
          .query(`select count(*) from books where book_id = ${book}`)
          .then()
          .catch((err) => {
            throw err;
          });
        if (r.rows[0].count != 0) {
          books.push(book);
        }
      })
    );
    let difference = book_ids.filter((x) => !books.includes(x));
    if (difference.length > 0) {
      return difference;
    } else {
      try {
        const text =
          "insert into borrowings values(nextval('borrowings_id'),$1,$2, now(), date(now()):: date + INTERVAL '15 day')";
        const values = [student_id, staff_id];
        const result = await client
          .query(text, values)
          .then()
          .catch((err) => {
            error: err;
          });
        for(let i=0; i<books.length; i++){
            await client.query("insert into book_borrowings values (nextval('book_borrowings_ids'),50014,$1)",[books[i]]).then().catch((err) => { error: err });
            await client.query("update books set num_of_books = num_of_books-1 where book_id = $1",[books[i]]).then().catch((err) => { error: err });
        }

        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        const date = new Date();
        return {
          book_ids: book_ids,
          student_id: student_id,
          staff_id: staff_id,
          borrowing_date: date.toISOString().slice(0, 10),
          return_date: date.addDays(15).toISOString().slice(0, 10),
        };
      } catch (e) {
        throw e;
      }
    }
  } finally {
    client.release();
  }
}

module.exports = { borrowTheBooks };
