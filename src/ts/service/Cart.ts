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
      const keys = Object.keys(this._items[i]);
      const values = Object.values(this._items[i]);
      const price = values[keys.indexOf('price')];
      sum += price;
    }
    return sum;
  }

  sumWithDiscount(percent: number): number {
    let sum = 0;
    const discount = percent * 0.01;
    for (let i = 0; i < this._items.length; i += 1) {
      const keys = Object.keys(this._items[i]);
      const values = Object.values(this._items[i]);
      const price = values[keys.indexOf('price')];
      sum += price;
    }
    sum = sum - sum * discount;
    return sum;
  }

  delete(id: number): void {
    for (let i = 0; i < this._items.length; i += 1) {
      const keys = Object.keys(this._items[i]);
      const values = Object.values(this._items[i]);
      const idToDel = values[keys.indexOf('id')];
      if (id === idToDel) {
        this._items.splice(i, 1);
        return;
      }
    }
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
