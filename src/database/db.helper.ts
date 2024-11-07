import fs from 'fs';
import path from 'path';
import { Book } from '../modules/book/book.interface';

const filePath = path.resolve(__dirname, 'book.data.json');

export const readBooks = (): Book[] => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeBooks = (books: Book[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2), 'utf-8');
};
