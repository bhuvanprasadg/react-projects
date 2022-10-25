const client = require("./auth");

exports.books = function (req, res, next) {
  console.log("*** books");
  client.query("select * from books", (err, booksJSON) => {
    if (err) throw err;
    res.json(booksJSON.rows);
  });
};

exports.book = function (req, res, next) {
  console.log("*** book by id");
  client.query(
    "select * from books where bookid=$1",
    [req.params.bookId],
    (err, booksJSON) => {
      if (err) throw err;
      res.json(booksJSON.rows);
    }
  );
};

exports.addBook = function (req, res, next) {
  console.log("*** addBook");

  client.query(
    "insert into books(bookid,title,author) values(nextval('bookId'),$1,$2)",
    [req.body.title, req.body.author],
    (err, booksJSON) => {
      if (err) throw err;
      res.json(booksJSON.rows);
    }
  );
};

exports.reviews = function (req, res, next) {
  console.log("*** reviews");
  client.query(
    "select * from reviews where bookid=$1",
    [req.params.bookId],
    (err, booksJSON) => {
      if (err) throw err;
      res.json(booksJSON.rows);
    }
  );
};

exports.addReview = function (req, res, next) {
  console.log("*** addReview");

  client.query(
    "insert into reviews values(nextval('reviewid'),$1,$2)",
    [req.body.content, req.body.bookid],
    (err, booksJSON) => {
      if (err) throw err;
      res.json(booksJSON.rows);
    }
  );
};
