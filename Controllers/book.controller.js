const Book = require("../Models/book.model");

async function create(req, res) {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const book = await Book.findOneAndUpdate({ id: id }, updates, {
      new: true,
    });
    if (!book) {
      const errorMessage = `book with id: ${id} was not found`;
      console.log(errorMessage);
      return res.status(404).json({ message: errorMessage });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function fetch(req, res) {
  try {
    const id = req.params.id;
    const book = await Book.findOne({ id: id });
    if (!book) {
      const errorMessage = `book with id: ${id} was not found`;
      console.log(errorMessage);
      return res.status(404).json({ message: errorMessage });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function fetchAll(req, res) {
  try {
    
    const args = req.query;
    const searchQuery = {};
   
    if ("title" in args) {
      searchQuery.title = args.title;
    } else if ("author" in args) {
      searchQuery.author = args.author;
    } else if ("genre" in args) {
      searchQuery.genre = args.genre;
    } 

    const sortField = args.sort || "id";
    const sortOrder = args.order === 'DESC' ? -1 : 1;
   //  let booksResponse;
   //  if(searchKey){
   //   booksResponse = await Book.find({searchKey : searchVal}).sort({ [sortField]: sortOrder, id: 1 });

   //  }

   const booksResponse = await Book.find(searchQuery).sort({ [sortField]: sortOrder, id: 1 });

   //  console.log(sortField, sortOrder );


   //  console.log(searchKey, searchVal);

    res.status(200).json({ books: booksResponse });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { create, update, fetch, fetchAll };
