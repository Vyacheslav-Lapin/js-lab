export default class Event<T> {
    constructor(private name: string = "", private obj: T) {
    }

    get(): T {
        return this.obj;
    }
}
