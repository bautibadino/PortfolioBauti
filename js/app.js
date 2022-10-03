//SELECTOR
const h2 = document.querySelector('.nombre h2')
const parrafo = document.querySelector('.parrafo');

const maquinaEscribir = (text = '', tiempo = 200, etiqueta = '' ) => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''; 
    console.log(arrayCaracteres);
    let cont = 0;
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres [cont]
        cont++
        if(cont === arrayCaracteres.length){
            clearInterval(escribir)
        }
    }, tiempo)
}

maquinaEscribir('HOLA, ME LLAMO:', 200 , parrafo)


const maquinaEscribir2 = (text = '', tiempo = 200 , etiqueta='') =>{
    let arregloCaracteres = text.split('');
    etiqueta.innerHTML= '';

    let cont = 0;
    let escribir = setInterval(function(){
        etiqueta.innerHTML += arregloCaracteres [cont]
        cont++
        if(cont === arregloCaracteres.length){
            clearInterval(escribir)
        }
    }, tiempo);
}

maquinaEscribir2('BAUTISTA BADINO DAVICO',  200 , h2)