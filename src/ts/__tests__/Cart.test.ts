import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

describe('Cart', () => {
  const cart = new Cart();

  it('new cart is empty', () => {
    expect(cart.items.length).toBe(0);
  });

  it('adds new item to cart', () => {
    cart.add(new Book(2342, 'Fisherman and His Soul', 'Oscar Wilde', 700, 555));
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
    expect(cart.items.length).toBe(4);
  });

  it('sums cart items without discount', () => {
    expect(cart.sum()).toBe(3700);
  });

  it('sums cart items with discount', () => {
    expect(cart.sumWithDiscount(20)).toBe(2960);
  });

  it('deletes item from cart', () => {
    cart.delete(1001);
    expect(cart.items.length).toBe(3);
  });

  it('does not add multiple unique items', () => {
    cart.add(new Book(2342, 'Fisherman and His Soul', 'Oscar Wilde', 700, 555));
    cart.add(new Book(2342, 'Fisherman and His Soul', 'Oscar Wilde', 700, 555));
    cart.add(new Book(2342, 'Fisherman and His Soul', 'Oscar Wilde', 700, 555));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.items.length).toBe(3);
  });

  it('adds multiple smartphones', () => {
    cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
    cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
    cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));
    cart.add(new Smartphone(448, 'Asus Zenfone', 21500, 2019));

    expect(cart.items.length).toBe(7);
  });
});
