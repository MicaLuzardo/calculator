let primerIngresado = ""
let segundoIngresado = ""
//let resultado = ""
let operacion = ""

function operar(dato) {
    if (!isNaN(dato) && operacion === "") {
        primerIngresado += dato
        apreteElBoton(primerIngresado)
    }
    else if (operacion === "") {
        operacion = dato
        apreteString(dato);
    }
    else {
        segundoIngresado += dato
        apreteElBoton(segundoIngresado)
    }
}

function ac(){
    apreteElBoton("")
    primerIngresado= ""
    segundoIngresado= ""
    operacion= ""
    apreteString("")
}

function resultado() {
    let res = 0
    switch (operacion) {
        case "+":
            res = Number(primerIngresado) + Number(segundoIngresado)
            break
        case "*":
            res = Number(primerIngresado) * Number(segundoIngresado)
            break
        case "/":
            res = Number(primerIngresado) / Number(segundoIngresado)
            break
        case "-":
            res = Number(primerIngresado) - Number(segundoIngresado)
            break
    }

    apreteElBoton(res)
    primerIngresado= ""
    segundoIngresado= ""
    operacion= ""
    apreteString("")
}

function apreteElBoton(num) {
    let el = document.getElementById('display')
    el.value = Number(num);
}
function apreteString(texto) {
    let tex = document.getElementById('texto')
    tex.value = texto;
}

