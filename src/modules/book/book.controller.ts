import { Request, Response } from 'express';
import { bookService } from './book.service';

export const bookController = {
  getAllBooks(req: Request, res: Response) {
    const books = bookService.getAllBooks();
    res.json(books);
  },

  getBookById(req: Request, res: Response) {
    const book = bookService.getBookById(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.json(book);
  },

  createBook(req: Request, res: Response) {
    const newBook = req.body;
    const createdBook = bookService.createBook(newBook);
    res.status(201).json(createdBook);
  },

  updateBook(req: Request, res: Response) {
    const updatedBook = req.body;
    const book = bookService.updateBook(req.params.id, updatedBook);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.json(book);
  },

  deleteBook(req: Request, res: Response): void {
    const success = bookService.deleteBook(req.params.id);
    if (!success) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(204).send();
  },
};
