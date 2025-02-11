const array = [5, 12, 18, 7, 21, 30];
const btn1 = document.getElementById("btn1").addEventListener("click", () => {
  let sum = 0;
  let resultado = "";
  array.forEach((el) => {
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

const arrayVariado = [1, "hola", true, 42, false, "mundo", null, undefined];
const btn4 = document.getElementById("btn4").addEventListener("click", () => {
  let obj = {};
  let contnum = 0,
    contstring = 0,
    contbool = 0,
    contobj = 0,
    contundefined = 0;
  arrayVariado.forEach((el) => {
    switch (typeof el) {
      case "number":
        contnum++;
        break;

      case "string":
        contstring++;
        break;

      case "boolean":
        contbool++;
        break;

      case "object":
        contobj++;
        break;

      case "undefined":
        contundefined++;
        break;
      default:
        console.log("Error al leer el tipo de dato");
        break;
    }
  });

  console.log(
    (obj = {
      number: contnum,
      string: contstring,
      boolean: contbool,
      objetc: contobj,
      undefined: contundefined,
    })
  );
});

const btn5 = document.getElementById("btn5").addEventListener("click", () => {
  let arrayNumeros = [4, 8, 15, 16, 23, 42];
  let obj = {};

  let sum = 0,
    prome = 0,
    max = arrayNumeros[0],
    min = arrayNumeros[0];

  arrayNumeros.forEach((el) => {
    sum += el;

    if (el < min) min = el;
    if (el > max) max = el;
  });

  prome = sum / arrayNumeros.length;

  console.log((obj = { suma: sum, promedio: prome, menor: min, mayor: max}));
});
