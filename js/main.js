/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" />
   </div>
*/

// ===================================================

const btnLnk = document.querySelector('#alertButton');
const inputLnk = document.querySelector('#alertInput');

console.log('btnLnk', btnLnk);
console.log('');
console.log('inputLnk', inputLnk);

btnLnk.addEventListener('click', onClick);

function onClick() { 
    const message = inputLnk.value;
    alert(message);
}

/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/
const btnSwpLnk = document.querySelector('#swapButton');
const inputLeftLnk = document.querySelector('#leftSwapInput');
const inputRightLnk = document.querySelector('#rightSwapInput');

btnSwpLnk.addEventListener('click', toggleValue);

function toggleValue()
{
    const inputLVal = inputLeftLnk.value;
    
    inputLeftLnk.value = inputRightLnk.value;

    inputRightLnk.value = inputLVal;
}

/*
Задача 3

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" type="text">
        <button id="passwordButton">Приховати</button>
    </div>

*/

const inputPassLnk = document.querySelector('#passwordInput');
const btnPassLnk = document.querySelector('#passwordButton');

btnPassLnk.addEventListener('click', hidePassText);

function hidePassText() { 
    //inputPassLnk.type = 'password';
    if (inputPassLnk.type === 'password') {
        inputPassLnk.type = 'text';
        btnPassLnk.textContent = 'Приховати';
    }

    else {
        inputPassLnk.type = 'password';
        btnPassLnk.textContent = 'Показати';
    }
}

/*

Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    </div>
*/

const boxLnk = document.querySelector('#box');
const btnDecrLnk = document.querySelector('#decrease');
const btnIncrLnk = document.querySelector('#increase');

console.dir(boxLnk);

let size = boxLnk.clientWidth;

btnDecrLnk.addEventListener('click', decrBoxSize);
btnIncrLnk.addEventListener('click', incrBoxSize);

function decrBoxSize()
{
    size -= 10;
    const sizeW = size;
    const sizeH = size;
    boxLnk.style.width = sizeW  + "px";
    boxLnk.style.height = sizeH  + "px";
    //boxLnk.style.width = (boxLnk.clientWidth - 10) + "px";
    //boxLnk.style.height = (boxLnk.clientHeight - 10) + "px";
}

function incrBoxSize()
{ 
    size += 10;
    const sizeW = size;
    const sizeH = size;
    boxLnk.style.width = sizeW  + "px";
    boxLnk.style.height = sizeH  + "px";
    //boxLnk.style.width = (boxLnk.clientWidth + 10) + "px";
    //boxLnk.style.height = (boxLnk.clientHeight + 10) + "px";
}



/* ---------------------------------*/
//Вивести 4 червоні квадрати, при кліку на будь-який,
//він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати
//назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений
//квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще
//хоч 100 квадратів, при цьому скрипт не
//треба міняти).

/* 
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  
*/

const squareLnk = document.querySelectorAll('.square');

console.log(squareLnk);

squareLnk.forEach(element => element.addEventListener('click', toggleColor));

function toggleColor(event) { 
    console.log(event.target);
    event.target.classList.toggle('green');
}

/*

Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази


    <div>
        <ul class="list">
            <li class="listItem">1</li>
            <li class="listItem">4</li>
            <li class="listItem">8</li>
            <li class="listItem">16</li>
            <li class="listItem">20</li>
            <li class="listItem">30</li>
        </ul>
        <button id="double">Удвоить</button>
    </div>

*/

const listLnk = document.querySelector('.list');

const double = document.querySelector('#double');

double.addEventListener('click', doublerValue);

console.dir(listLnk);
function doublerValue() { 
    [...listLnk.children].forEach(elemetC => { 
        console.log(elemetC);
        elemetC.textContent *= 2;
        //const valBkp = elemetC.textContent;
        //elemetC.textContent = 2 * valBkp;
    });
}


/*
Задача 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.


    <div>
        <div class="statList">
            <button class="calcButton" data-number=5>Button #1</button>
            <button class="calcButton" data-number=2>Button #2</button>
            <button class="calcButton" data-number=10>Button #3</button>
            <button class="calcButton" data-number=50>Button #4</button>
            <button class="calcButton" data-number=0>Button #5</button>
            <button class="calcButton" data-number=20>Button #6</button>
        </div>
        <button id="resultButton">Вывести результат</button>
        <div id="resultSection"></div>
    </div>


*/


const statListLnk = document.querySelector('.statList');
const resultButtonLnk = document.querySelector('#resultButton');
const resultSectionLnk = document.querySelector('#resultButton');

let result = 0;

statListLnk.addEventListener('click', onResultBtn);

function onResultBtn(event) { 
    if (event.target.tagName !== 'BUTTON') { return; }
    console.log(event.target.dataset);
    result += Number(event.target.dataset.number);
    console.log(result);
}
resultButtonLnk.addEventListener('click', callback8);

function callback8() { 
    alert('Summ = {$result}');
}
