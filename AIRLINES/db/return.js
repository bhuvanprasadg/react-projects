const pool = require("./pool");

async function returnBooks(book_ids, penalty_amounts, student_id, staff_id) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const bookBorrowings = [];
    const returns = [];
    await Promise.all(
      book_ids.map(async (book) => {
        const result = await client
          .query(
            `select book_borrowings_id from borrowings inner join book_borrowings on borrowings.borrowings_id = book_borrowings.borrowings_id where student_id = ${student_id} and book_id = ${book}`
          )
          .then()
          .catch((err) => {
            error: err;
          });
        if (result.rows.length == 0) {
          bookBorrowings.push({
            book_id: book,
            book_borrowings_id: result.rows[0].book_borrowings_id,
          });
        } else {
          throw `book id ${book} or student id ${student_id} is not available`;
        }
      })
    );

    for (let i = 0; i < penalty_amounts.length; i++) {
      bookBorrowings[i].penalty = penalty_amounts[i];
    }

    await Promise.all(
      bookBorrowings.map(async (borrow) => {
        const text =
          "insert into returns values(nextval('return_ids'),$1,$2,$3,$4)";
        const values = [borrow, staff_id, new Date(), borrow.penalty];
        await client
          .query(text, values)
          .then()
          .catch((err) => {
            error: err;
          });

        await client
          .query(
            "update books set num_of_books = num_of_books+1 where book_id = $1",
            [borrow.book]
          )
          .then()
          .catch((err) => {
            error: err;
          });
        returns.push(borrow.book);
      })
    );

    await client.query("COMMIT");
    return returns;
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
}

module.exports = { returnBooks };
