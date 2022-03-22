import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.add(
  new Movie(
    778,
    'Avengers',
    100,
    2012,
    ['Sci-Fi', 'Action', 'Adventure'],
    '2:17',
    'Avengers Assemble!'
  )
);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));

console.log(cart.sum());
