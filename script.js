//тема 65 Скрипты и время их выполнения
"use strict";

//сделаем так, чтобы анонимная функция запустилась через 2 секунды
// const timerId = setTimeout(function(){
//     console.log('Heloo');
// },2000);

const timerId = setTimeout(function (text) {
    console.log(text);
}, 2000, 'Hello');//аргементов может быть сколько угодно(а не 1 как в нашем случаем

//можно передать функцию
// const timeId1 = setTimeout(logger, 2000);
// function logger(){console.log('Hello');}

//timerId - это числовой идентификатор таймера
//таймер можно остановить clearInterval(temirId);

//выполнение через определенной колличество времени, а не один раз
const btn = document.querySelector('.btn');
let timerIdd,
    i = 0;
btn.addEventListener('click', () => {
    timerIdd = setInterval(logger,500);
});

function logger(){
    if(i === 3){clearInterval(timerIdd);}
    console.log('texxt');
    i++;
}

//рекурсивный вызов setTimeout(решает проблему setInterval - 
//который вызывает следующуу итерацию, независимо закончилась ли предыдущая)

let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
},500);

//делаем, чтобы квадрат начал двигаться
function myAnimation(){
    const elem = document.querySelector('.box');
    let pos =0;

    const id = setInterval(frame,10);
    function frame(){
        if(pos == 300){ clearInterval(id);}
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

}

btn.addEventListener('click', myAnimation);