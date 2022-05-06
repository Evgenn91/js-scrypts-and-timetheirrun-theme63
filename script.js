//тема 65 Скрипты и время их выполнения
"use strict";

//сделаем так, чтобы анонимная функция запустилась через 2 секунды

const timerId = setTimeout(function(){
    console.log('Heloo');
},2000);