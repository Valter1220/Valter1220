/* ------------------------------------------------------ */
/*                 VARIABLES GLOBALES                     */
/* ------------------------------------------------------ */
var modoAuto = false
var refTimer
var estadoSemaforo = 0
var oscuro = false

/* ------------------------------------------------------ */
/*                 FUNCIONES GLOBALES                     */
/* ------------------------------------------------------ */
function cambiarColorLuzSemaforo(id, prender) {
    var color = 'gray'
    if(prender) color = id
    document.getElementById(id).style.backgroundColor = color
}

/* Muestra el cartel de modo del semáforo: manual/automático */
function mostrarModo(modoauto) {
    document.querySelector('h4').innerHTML = modoauto? 'MODO AUTOMÁTICO':'MODO MANUAL'
}

/* Cambio el modo del semáforo manual/automático */
function cambiarModo() {
    modoAuto = !modoAuto

    mostrarModo(modoAuto)

    if(modoAuto) {
        /* Cambio el estado del semáforo automaticamente cada 2 segundos */
        refTimer = setInterval(cambiarSemaforo,2000)
    }
    else {
        clearInterval(refTimer)
    }
}

/* Cambio el estado del semáforo con el evento del botón */
function cambiarSemaforoBoton() {
    if(!modoAuto) cambiarSemaforo()
}

function cambiarSemaforo() {
    console.log(estadoSemaforo)

    switch(estadoSemaforo) {

        /* ROJO */
        case 0:
            cambiarColorLuzSemaforo('red', true)
            cambiarColorLuzSemaforo('yellow', false)
            cambiarColorLuzSemaforo('green', false)
            break

        /* ROJO - AMARILLO */
        case 1:
            cambiarColorLuzSemaforo('red', true)
            cambiarColorLuzSemaforo('yellow', true)
            cambiarColorLuzSemaforo('green', false)
            break

        /* VERDE */
        case 2:
            cambiarColorLuzSemaforo('red', false)
            cambiarColorLuzSemaforo('yellow', false)
            cambiarColorLuzSemaforo('green', true)
            break

        /* AMARILLO */
        case 3:
            cambiarColorLuzSemaforo('red', false)
            cambiarColorLuzSemaforo('yellow', true)
            cambiarColorLuzSemaforo('green', false)
            break

        /* DEFAULT (ERROR) */
        default:
            cambiarColorLuzSemaforo('red', false)
            cambiarColorLuzSemaforo('yellow', false)
            cambiarColorLuzSemaforo('green', false)
            estadoSemaforo = 0
            break
    }

    estadoSemaforo++
    if(estadoSemaforo > 3) estadoSemaforo = 0
}

function cambiarModoOscuro() {
    oscuro = !oscuro
    document.querySelector('body').style.backgroundColor = oscuro? '#333': ''
    document.querySelector('h4').style.color = oscuro? '#fff': '#000'
}

function start() {
    console.log('Semáforo en JS')

    cambiarColorLuzSemaforo('red', false)
    cambiarColorLuzSemaforo('yellow', false)
    cambiarColorLuzSemaforo('green', false)
}

/* ------------------------------------------------------ */
/*                      EJECUCIONES                       */
/* ------------------------------------------------------ */
window.onload = start
//start()

