#! /usr/bin/env node

// https://www.youtube.com/embed/53pcd8gF2yk?start=60&end=90
// https://youtu.be/53pcd8gF2yk?t=1m
// javascript:p=prompt,t=c=>{let d=x=>x?parseInt(x):0,[,h,m,s]=/(\d+h)?(\d+m)?(\d+s)?/i.exec(c);return(d(h)*60+d(m))*60+d(s)},[,h,s]=/https?:\/\/youtu\.be\/([^?]+)\?t?=?(.+)/i.exec(p("Введите ссылку на видео")),e=p(`Время окончания фрагмента (должно быть больше, чем ${s})\n, можно оставить пустым`);void p("Вот она ваша ссылка:", `https://www.youtube.com/embed/${h}?start=${t(s)}&end=${t(e)}&autoplay=1`)
// import fs from 'fs';

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../package.json');

// console.log(filePath);

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
        console.log(`received data: ${data}`);

        // JSON parsing
        const json = JSON.parse(data);
        const {
            devDependencies: {"babel-cli": babelCli},
            scripts: {run}
        } = json;
        console.log(babelCli);
        console.log(run);

        // File lines read
        const lines = data.split('\n');
        for (let line of lines) {
            console.log(line.substr(0, 15));
        }
    } else
        console.log(err);
});
