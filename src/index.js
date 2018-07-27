#! /usr/bin/env node

// https://www.youtube.com/embed/53pcd8gF2yk?start=60&end=90
// https://youtu.be/53pcd8gF2yk?t=1m
// javascript:p=prompt,t=c=>{let d=x=>x?parseInt(x):0,[,h,m,s]=/(\d+h)?(\d+m)?(\d+s)?/i.exec(c);return(d(h)*60+d(m))*60+d(s)},[,h,s]=/https?:\/\/youtu\.be\/([^?]+)\?t?=?(.+)/i.exec(p("Введите ссылку на видео")),e=p(`Время окончания фрагмента (должно быть больше, чем ${s})`);void p("Ваша ссылка:",`https://www.youtube.com/embed/${h}?start=${t(s)}&end=${t(e)}&autoplay=1`)

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080/1.json");
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    console.log(xhr.status);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("Response come!");
        console.log(xhr.responseText);
    }
};
xhr.send(null);
