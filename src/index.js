#! /usr/bin/env node

// https://www.youtube.com/embed/53pcd8gF2yk?start=60&end=90
// https://youtu.be/53pcd8gF2yk?t=1m
// javascript:p=prompt,t=c=>{let d=x=>x?parseInt(x):0,[,h,m,s]=/(\d+h)?(\d+m)?(\d+s)?/i.exec(c);return(d(h)*60+d(m))*60+d(s)},[,h,s]=/https?:\/\/youtu\.be\/([^?]+)\?t?=?(.+)/i.exec(p("Введите ссылку на видео")),e=p(`Время окончания фрагмента (должно быть больше, чем ${s})\n, можно оставить пустым`);void p("Вот она ваша ссылка:", `https://www.youtube.com/embed/${h}?start=${t(s)}&end=${t(e)}&autoplay=1`)

class Eventer {
    constructor() {
        this.eventListeners = [];
    }
    addListener(listener) {
        this.eventListeners.push(listener);
    }
    removeEventListener(listener) {
        const number = this.eventListeners.indexOf(listener);
        if (number >= 0)
            this.eventListeners.splice(number, 1)
    }
    notify(event) {
        for (let eventListener of this.eventListeners) {
            eventListener(event);
        }
    }
}

class Button extends Eventer {
    constructor(name) {
        super();
        this.name = name;
    }

    click() {
        this.notify({name: this.name});
    }
}

const button1 = new Button("1");
const button2 = new Button("2");
const button3 = new Button("3");

button2.addListener(event => console.log(event));
//...
button2.click();
