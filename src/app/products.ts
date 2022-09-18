export interface Products {
  id: number,
  name: string,
  price: number,
  description: string,
  brand: string,
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    brand: 'apple',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    brand: 'apple',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A basic phone with all facilities',
    brand: 'apple',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
  },
  {
    id: 4,
    name: 'Samsung A12',
    price: 299,
    description: 'A basic phone with all facilities',
    brand: 'samsung',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg',
  }
];
