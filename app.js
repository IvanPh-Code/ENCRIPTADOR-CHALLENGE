let ingrese = document.querySelector(".ingrese");
/* ---------------------------------------------- */
let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
/* ---------------------------------------------- */
let mensaje_texto = document.querySelector(".mensaje-texto");
const mensajeone = document.querySelector(".mensajeone");
const mensajetwo = document.querySelector(".mensajetwo");
const btnCopiar = document.querySelector(".copiar");
const ocultarImagen = document.getElementById("ocultarImagen");

/* ------------- Función para validar el texto-------------- */

function validarTxt(txt){
    let mayusculas = /[A-Z]/g;
    let caracteres = /[ÁÉÍÓÚáéíóú~!@#$%^&*()]/g;
    let vacio = "";

    if (txt.match(mayusculas) || txt.match(caracteres) ){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true;
    }else if (txt==vacio){
        alert("Ingrese un texto para encriptar");
        return true;
    }else{
        return false;
    }
}

btnEncriptar.addEventListener("click", function () {
  let textarea = document.querySelector(".ingrese").value;
  let txtIngresado = textarea;

  if (validarTxt(txtIngresado) == false) {
    let enCripTado = encriptar(txtIngresado);
    let respuesta = document.querySelector('.mensaje-texto');
    respuesta.value = enCripTado;

  }else{
    textarea = "";
  }

});

btnDesencriptar.addEventListener("click", function () {
  let textarea = document.querySelector(".ingrese").value;
  let textoIngresado = textarea;

  if (validarTxt(textoIngresado) == false) {
    let desenCripTado = desencriptar(textoIngresado);
    let respuesta = document.querySelector(".mensaje-texto");
    respuesta.value = desenCripTado;
  } else {
    textarea = "";
  }
});

/* ---------------------------FUNCION PARA ENCRIPTAR------------------------------ */

const reglamento = {
    'e' : 'enter',
    'i' : 'imes',
    'a' : 'ai',
    'o' : 'ober',
    'u' : 'ufat'
};

function encriptar(txtIngresado){
    let encrypted = "";

    for(const obj in reglamento){
        encrypted = txtIngresado.replaceAll(obj, reglamento[obj]);
        txtIngresado = encrypted;
        ocultarTxtImg();
        ingrese.value = "";
    }
    return encrypted;
}
/* ------------------------COPIAR------------------------------- */

btnCopiar.addEventListener('click', function(){
    let copied = document.querySelector(".mensaje-texto").value;
    alert('Texto Copiado!')
    navigator.clipboard.writeText(copied);
    mostrarTxtImg();
    document.querySelector(".mensaje-texto").value = "";
});

