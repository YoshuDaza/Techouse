//Botón de menú
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
const login = document.querySelector('.button');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});



//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");



ham.addEventListener('click', () => {
    login.classList.toggle('Login');
});

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

//Validaciones 
const formIn = document.getElementById('formIn');
const formUp = document.getElementById('formUp');

const btn = document.getElementById('btnDatos');

const userIn = document.getElementById('userIn');
const userUp = document.getElementById('userUp');
const nameUp = document.getElementById('nameUp');
const mailUp = document.getElementById('mailUp');

const passwordIn = document.getElementById('passwordIn');
const passwordUp = document.getElementById('passwordUp');



//Control de validacion

const objecValidIn ={
    usuarioIn:false,
    contraIn:false,
};

formIn.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (validForm() === -1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
})

const validForm = ()=>{
    const values = Object.values(objecValidIn);
    let response = values.findIndex(e => e === false);
    return response;
};


userIn.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const names1Regex = /^[a-zA-Z0-9\_\-]{4,16}$/g;
    let valorNames1= e.target.value;
    objecValidIn.usuarioIn= valorNames1.match(names1Regex) ? true : false;
    console.log(Object.values(objecValidIn));
});

passwordIn.addEventListener('change',function(e){
    console.log(e.target.value);
    const passwordInRegex = /^.{4,15}$/g;
    if ((passwordIn.value.match(passwordInRegex))){
        objecValidIn.contraIn = true;
    }else{
        objecValidIn.contraIn = false;
    }
    console.log(Object.values(objecValidIn));
});


const objecValidUp ={
    nombreUp:false,
    usuarioUp:false,
    correo:false,
    contraUp:false
};

const validForm1 = ()=>{
    const values = Object.values(objecValidUp);
    let response = values.findIndex(e => e === false);
    return response;
};

formUp.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (validForm1() === -1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
})

nameUp.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const nameRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorName= e.target.value;
    objecValidUp.nombreUp= valorName.match(nameRegex) ? true : false;
    console.log(Object.values(objecValidUp));
});

userUp.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const names2Regex = /^[a-zA-Z0-9\_\-]{4,16}$/g;
    let valorNames2= e.target.value;
    objecValidUp.usuarioUp= valorNames2.match(names2Regex) ? true : false;
    console.log(Object.values(objecValidUp));
});

mailUp.addEventListener('change',function(e){
    console.log(e.target.value);
    const mailUpRegex = /^[_a-z0-9-+]+(\.[_a-z0-9-+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g;
    let valormaill= e.target.value;
    objecValidUp.correo= valormaill.match(mailUpRegex) ? true : false;
    console.log(Object.values(objecValidUp));
});

passwordUp.addEventListener('change',function(e){
    console.log(e.target.value);
    const passwordUpRegex = /^.{4,15}$/g;
    if ((passwordUp.value.match(passwordUpRegex))){
        objecValidUp.contraUp = true;
    }else{
        objecValidUp.contraUp = false;
    }
    console.log(Object.values(objecValidUp));
});


