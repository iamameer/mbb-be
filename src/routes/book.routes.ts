import express, { Request, Response } from 'express';
import { bookController } from '../modules/book/book.controller';
import { writeBooks } from '../database/db.helper';

const bookRouter = express.Router();

bookRouter.get('/', bookController.getAllBooks);
bookRouter.get('/:id', bookController.getBookById);
bookRouter.post('/', bookController.createBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

// Reset to initial data
bookRouter.get('/reset', (req: Request, res: Response) => {
  const initialBooks = require('../database/book.data.json');
  writeBooks(initialBooks);
  res.status(200).json({ message: 'Books data has been reset to default' });
});

export default bookRouter;
