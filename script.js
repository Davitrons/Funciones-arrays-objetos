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

/* const obj = { a: "uno", b: "dos", c: "tres" };
const btn2 = document.getElementById("btn2").addEventListener('click', ()=>{
    let invert ={};
    for (let clave in obj) { // clave nos da el nombre de las claves / obj[clave] el valor de esa clave
        console.log(Object.keys(obj));
        invert[obj][claves] = claves;
    }
    console.log(invert);
}); */