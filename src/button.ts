import Event from "./event";
import Eventer from "./eventer";

class Button<T> extends Eventer<T> {
    constructor(private name: string) {
        super();
    }

    click(obj:T) {
        this.notify(new Event("event1", obj));
    }
}

const button1 = new Button("1");
const button2 = new Button("2");
const button3 = new Button("3");

// button1.khgsf();

let x = 0;
button2.addListener(event => x = 1);
//...
button2.click("123456");
if (x !== 1)
    console.log("error!");

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
