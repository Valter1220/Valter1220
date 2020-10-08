/* ------------------------------------------- */
/*             VARIABLES GLOBALES              */
/* ------------------------------------------- */
var opcionJugador

/* ------------------------------------------- */
/*             FUNCIONES GLOBALES              */
/* ------------------------------------------- */
function ponerTitulo(titulo) {
    $('.caja-titulo').html('<i>' + titulo + '</i>')
}

function imprimirResultado(resultado) {

    $('.caja-resultado').html('<i>' + resultado + '</i>')

    switch(resultado) {
        case 'GANÉ':
        case 'EMPATÉ':
        case 'PERDÍ':
            var objResultadoColor = {
                'EMPATÉ': 'yellow',
                'GANÉ': 'limegreen',
                'PERDÍ': '#FF0000'
            }
            $('.caja-resultado').css('color',objResultadoColor[resultado])
            break

        default:
            $('.caja-resultado').css('color','')
    }
}

function configurarSelectorJugador() {
    opcionJugador = 'piedra'
    imprimirImagen('img-jugador',opcionJugador)
    
    /* evento cambio select */
    $('select').change(cambioOpcionJugador)
    function cambioOpcionJugador() {
        opcionJugador = $('select').val()
        console.log(opcionJugador)

        imprimirImagen('img-jugador',opcionJugador)
        imprimirImagen('img-computadora','')
        imprimirResultado('Jugar!')
    }
}

function imprimirImagen(id, img) {
    $('#'+id).attr('src',img? 'imagenes/'+img+'.jpg': '')
}


function configurarBotonJugar() {
    $('button').click(jugar)

    function jugar() {
        console.log('Jugar!')

        var opcionComputadora = sortear()
        imprimirImagen('img-computadora',opcionComputadora)

        var resultado = obtenerResultado(opcionComputadora, opcionJugador)
        imprimirResultado(resultado)
    }

}

function sortear() {
    var opciones = ['piedra','papel','tijera']

    var random = Math.random()  //0 - 0.9999999
    random *= 3                 //0 - 2.9999999
    random = parseInt(random)   //0 - 2

    return opciones[random]
}

function obtenerResultado(oc, oj) {
    var res = 'EMPATÉ'

    if(oc == 'piedra') {
        if(oj == 'papel') res = 'GANÉ'
        else if(oj == 'tijera') res = 'PERDÍ'
    }
    else if(oc == 'papel') {
        if(oj == 'tijera') res = 'GANÉ'
        else if(oj == 'piedra') res = 'PERDÍ'
    }
    else if(oc == 'tijera') {
        if(oj == 'piedra') res = 'GANÉ'
        else if(oj == 'papel') res = 'PERDÍ'
    }
    return res
}


function start() {
    ponerTitulo('Piedra, Papel ó Tijera')

    configurarSelectorJugador()
    configurarBotonJugar()


    imprimirResultado('Por favor, elegir opción y jugar')
}

/* ------------------------------------------- */
/*                 EJECUCIÓN                   */
/* ------------------------------------------- */
//window.onload = start
$(document).ready(start)
