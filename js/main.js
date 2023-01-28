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