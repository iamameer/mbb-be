export interface Book {
  id: string; // note: uuid
  title: string;
  author: string;
  description?: string;
  price: number;
  tags?: string[];
}

export interface BookCreate {
  title: string;
  author: string;
  description?: string;
  price: number;
  tags?: string[];
}
