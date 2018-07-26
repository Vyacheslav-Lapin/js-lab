#! /usr/bin/env node

// https://www.youtube.com/embed/53pcd8gF2yk?start=60&end=90
// https://youtu.be/53pcd8gF2yk?t=1m
// javascript:p=prompt,t=c=>{let d=x=>x?parseInt(x):0,[,h,m,s]=/(\d+h)?(\d+m)?(\d+s)?/i.exec(c);return(d(h)*60+d(m))*60+d(s)},[,h,s]=/https?:\/\/youtu\.be\/([^?]+)\?t?=?(.+)/i.exec(p("Введите ссылку на видео")),e=p(`Время окончания фрагмента (должно быть больше, чем ${s})\n, можно оставить пустым`);void p("Вот она ваша ссылка:", `https://www.youtube.com/embed/${h}?start=${t(s)}&end=${t(e)}&autoplay=1`)

try {
    if (Math.round(Math.random() * 2) % 2 === 1) {
        console.log("one");
        eval("khjsgdfjkhgas");
    } else
        throw new Error("jkhsdkjfg");
} catch (e) {
    console.log(e);
}

const timeout = setTimeout(() => console.log("jhsdf"), 2000);
console.log(timeout);
console.log("qwerty");
clearTimeout(timeout);
//...
const interval = setInterval(() => console.log("qwerty"), 2000);
console.log(interval);

const x = setInterval(() => {
    console.log(x);clearInterval(x)}, 2000);
