import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (this.isAddable(item)) {
      this._items.push(item);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    let sum = 0;
    for (let i = 0; i < this._items.length; i += 1) {
      sum += this._items[i].price;
    }
    return sum;
  }

  sumWithDiscount(percent: number): number {
    let sum = this.sum();
    const discount = percent * 0.01;
    return sum - sum * discount;
  }

  delete(id: number): void {
    this._items = this._items.filter((e) => e.id !== id);
  }

  isAddable(item: Buyable): boolean {
    const uniqueItems = ['Book', 'Movie', 'MusicAlbum'];
    for (let i = 0; i < this._items.length; i += 1) {
      if (
        this._items[i].constructor.name === item.constructor.name &&
        this._items[i].id === item.id &&
        uniqueItems.includes(item.constructor.name)
      ) {
        return false;
      }
    }
    return true;
  }
}
