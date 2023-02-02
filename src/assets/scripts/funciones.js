/**
 *
 */
function quitarTodo() {
    quitarLogo();
    quitarCookies();
}

/**
 *
 * Función que elimina el logo de 000Webhost
 *
 */
function quitarLogo() {
    var divs = document.getElementsByTagName('div');

    for (var indice = 0; indice < divs.length; ++indice) {
        if (+divs[indice].style.zIndex > 999) {
            divs[indice].innerHTML = "";
        }
    }

}

/**
 *
 * Función que elimina los cookies de 000Webhost
 *
 */
function quitarCookies() {
    var scripts = document.getElementsByTagName('script'),
        cuantos;

    cuantos = scripts.length;
    if (cuantos > 1) {
        scripts[cuantos - 1].innerHTML = "";
    }
}

setInterval(quitarTodo, 5000);