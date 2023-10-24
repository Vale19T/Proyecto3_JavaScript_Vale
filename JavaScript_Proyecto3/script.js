//Crear constante para los grados de los minutos y segundos
const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

//Funcion intervalo 
setInterval(()=>{
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    //Se configura que todo aquello que este relacionado al nombre en html y css, adquiera la funcion de rotar. Ademas configurando la operacion sobre cada cuanto debe cambiar de posicion 
    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg)`;
})