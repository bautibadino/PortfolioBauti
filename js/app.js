//SELECTOR
const h2 = document.querySelector('.nombre h2')
const parrafo = document.querySelector('.parrafo');



const maquinaEscribir = (text = '', tiempo = 300, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = '';
    // console.log(arrayCaracteres);
    let cont = 0;
    let escribir = setInterval(function () {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont === arrayCaracteres.length) {
            clearInterval(escribir)
        }
    }, tiempo)
}

maquinaEscribir('HOLA, ME LLAMO:', 200, parrafo)


const maquinaEscribir2 = (text = '', tiempo = 300, etiqueta = '') => {
    let arregloCaracteres = text.split('');
    etiqueta.innerHTML = '';

    let cont = 0;
    let escribir = setInterval(function () {
        etiqueta.innerHTML += arregloCaracteres[cont]
        cont++
        if (cont === arregloCaracteres.length) {
            clearInterval(escribir)
        }
    }, tiempo);
}

maquinaEscribir2('BAUTISTA BADINO DAVICO', 150, h2)

// FIN REDACTAR NOMBRE LETRA POR LETRA
// FIN REDACTAR NOMBRE LETRA POR LETRA
// FIN REDACTAR NOMBRE LETRA POR LETRA


//CAMBIAR ESTILO A LINKS HEADER//
//CAMBIAR ESTILO A LINKS HEADER//
//CAMBIAR ESTILO A LINKS HEADER//
//CAMBIAR ESTILO A LINKS HEADER//

const linkInicio = document.querySelector('#inicio')
const linkSobreMi = document.querySelector('#sobre-mi')
const linkProyectos = document.querySelector('#proyectos')
const linkContacto = document.querySelector('#contacto')





document.addEventListener('DOMContentLoaded', () => {   //CUANDO CARGA EL DOM QUE INICIE CON LA CLASE LINK ACTIVO EN EL INICIO
    linkInicio.classList.replace('link','link-activo');            

})

window.addEventListener('scroll', () => {


    if (window.scrollY >= 350) {

        linkSobreMi.classList.replace('link' , 'link-activo')
        linkInicio.classList.replace('link-activo' , 'link')
    }
    if (window.scrollY <= 450) {
        linkInicio.classList.replace( 'link' , 'link-activo')
        linkSobreMi.classList.replace('link-activo', 'link')
    }
    if (window.scrollY >= 1150){
        linkSobreMi.classList.replace('link-activo', 'link')
        linkProyectos.classList.replace('link', 'link-activo')
    }
    if(window.scrollY <= 1149){
        linkProyectos.classList.replace('link-activo', 'link')
    }
})

//BARRA DE SCROLLDISTANCE


function animacionProgressBar(){
    
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${scrollTop / (scrollHeight - window.innerHeight) * 100}%; `;

    console.log(scrollPercent)
    document.querySelector('.progressbar').style = 'width:' + scrollPercent;
}

document.addEventListener('scroll', animacionProgressBar)

