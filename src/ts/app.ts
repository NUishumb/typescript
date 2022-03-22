import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();

const book1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const book2 = new Book(1001, 'World of Starcraft', 'lizzard', 12, 56);
const book3 = new Book(1001, 'test', 'ttt', 555, 333);
const book4 = new Book(1001, 'abc', 'asd', 123, 321);

cart.add(book1);
cart.add(book2);
cart.add(book3);
cart.add(book4);

console.log(cart.items);
