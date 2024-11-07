import { readBooks, writeBooks } from '../../database/db.helper';
import { Book } from './book.interface';
import { v4 as uuidv4 } from 'uuid';

export const bookService = {
  getAllBooks(): Book[] {
    return readBooks();
  },

  getBookById(id: string): Book | undefined {
    const books = readBooks();
    return books.find((book) => book.id === id.split('=')[1]);
  },

  createBook(book: Book): Book {
    const books = readBooks();
    const newBook = {
      ...book,
      id: uuidv4(),
      image: 'https://picsum.photos/id/24/300/200',
    };
    books.push(newBook);
    writeBooks(books);
    return newBook;
  },

  updateBook(id: string, updatedBook: Partial<Book>): Book | undefined {
    const books = readBooks();
    const index = books.findIndex((book) => book.id === id.split('=')[1]);
    if (index === -1) return undefined;

    books[index] = { ...books[index], ...updatedBook };
    writeBooks(books);
    return books[index];
  },

  deleteBook(id: string): boolean {
    let books = readBooks();
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) return false;

    books = books.filter((book) => book.id !== id);
    writeBooks(books);
    return true;
  },
};
