import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly genres: Array<string>,
    readonly duration: string,
    readonly tagline: string
  ) {}
}
