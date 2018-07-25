#! /usr/bin/env node

// https://www.youtube.com/embed/53pcd8gF2yk?start=60&end=90
// https://youtu.be/53pcd8gF2yk?t=1m

let s = "https://www.youtube.com/embed/";
const sourceLink = prompt("Введите ссылку на видео",
    "https://youtu.be/53pcd8gF2yk?t=1m");

const arr = /https?:\/\/youtu\.be\/([^?]+)\?t?=?(.+)/
    .exec(sourceLink);

const hash = arr[1];
const start = arr[2];

console.log(arr[0]);
console.log(hash);
console.log(start);

s += hash;

const regExp = /(\d+h)?(\d+m)?(\d+s)?/;
const timeArr = regExp.exec(start);
const startHours = timeArr[1] === undefined ? 0 : parseInt(timeArr[1]);
const startMinutes = timeArr[2] === undefined ? 0 : parseInt(timeArr[2]);
const startSeconds = timeArr[3] === undefined ? 0 : parseInt(timeArr[3]);

s += "?start=" + (startSeconds +
    (startMinutes +
        (startHours * 60)) * 60);

console.log(startHours);
console.log(startMinutes);
console.log(startSeconds);

const end = prompt(`Время окончания фрагмента (должно быть больше, чем ${start})\n, можно оставить пустым`);
const endTimeArr = regExp.exec(end);
const endHours = endTimeArr[1] === undefined ? 0 : parseInt(endTimeArr[1]);
const endMinutes = endTimeArr[2] === undefined ? 0 : parseInt(endTimeArr[2]);
const endSeconds = endTimeArr[3] === undefined ? 0 : parseInt(endTimeArr[3]);

console.log(endHours);
console.log(endMinutes);
console.log(endSeconds);

s += "&end=" + (endSeconds +
    (endMinutes +
        (endHours * 60)) * 60);

if (confirm("Хочешь autoplay?"))
    s += "&autoplay=1";

prompt("Вот она ваша ссылка:", s);