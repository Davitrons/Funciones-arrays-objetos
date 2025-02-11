const array = [5, 12, 18, 7, 21, 30];
const btn1 = document.getElementById("btn1").addEventListener('click', ()=>{
    let sum = 0;
    let resultado = "";
    array.forEach(el => {
        if (el > 10 && el % 3 === 0) {
          resultado += ` ${el} `;
          sum += el;  
        }
    });
    console.log(`El resultado es : ${sum} // [${resultado}]`);
});