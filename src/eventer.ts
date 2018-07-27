import Event from "./event";

export default class Eventer<T> {

    private eventListeners = [];

    public addListener(listener) {
        this.eventListeners.push(listener);
    }

    removeEventListener(listener) {
        const {eventListeners} = this;
        const number = eventListeners.indexOf(listener);
        if (number !== -1)
            eventListeners.splice(number, 1)
    }

    protected notify(event: Event<T>) {
        for (const eventListener of this.eventListeners)
            eventListener(event);
        // event.get()
    }
}
