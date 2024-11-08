import { bookService } from '../book.service';
import * as dbHelper from '../../../database/db.helper';

jest.spyOn(dbHelper, 'readBooks').mockReturnValue([
  {
    id: '1',
    title: 'Mock Book',
    author: 'Mock Author',
    description: 'A mock description',
    price: 15.5,
    tags: ['test'],
  },
]);

describe('bookService.getBookById', () => {
  it('returns a book when a valid Book Id', () => {
    const book = bookService.getBookById('id=1');
    expect(book).toEqual({
      id: '1',
      title: 'Mock Book',
      author: 'Mock Author',
      description: 'A mock description',
      price: 15.5,
      tags: ['test'],
    });
  });

  it('returns undefined if an invalid Book Id is provided', () => {
    const book = bookService.getBookById('id=2');
    expect(book).toBeUndefined();
  });
});
