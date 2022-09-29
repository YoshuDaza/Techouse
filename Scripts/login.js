const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body')

signupBtn.onclick = function(){
    formBx.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick = function(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}

//Validaciones 


const formIn = document.getElementById('formIn');
const formUp = document.getElementById('formUp');

const btn = document.getElementById('btnDatos');

const userIn = document.getElementById('userIn');
const userUp = document.getElementById('userUp');

const mailUp = document.getElementById('mailUp');

const passwordIn = document.getElementById('passwordIn');
const passwordUp1 = document.getElementById('passwordUp1');
const passwordUp2 = document.getElementById('passwordUp2');

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
    const names1Regex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
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
    usuarioUp:false,
    correo:false,
    contraUp1:false,
    contraUp2:false
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


userUp.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const names2Regex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames2= e.target.value;
    objecValidUp.usuarioUp= valorNames2.match(names2Regex) ? true : false;
    console.log(Object.values(objecValidUp));


mailUp.addEventListener('change',function(e){
    console.log(e.target.value);
    const mailUpRegex = /^[_a-z0-9-+]+(\.[_a-z0-9-+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g;
    let valormaill= e.target.value;
    objecValidUp.correo= valormaill.match(mailUpRegex) ? true : false;
    console.log(Object.values(objecValidUp));
});

passwordUp1.addEventListener('change',function(e){
    console.log(e.target.value);
    const passwordUp1Regex = /^.{4,15}$/g;
    if ((passwordUp1.value.match(passwordUp1Regex))){
        objecValidUp.contraUp1 = true;
    }else{
        objecValidUp.contraUp1 = false;
    }
    console.log(Object.values(objecValidUp));
});

passwordUp2.addEventListener('change',function(e){
    console.log(e.target.value);
    const passwordUp2Regex = /^.{4,15}$/g;
    if ((passwordUp2.value.match(passwordUp2Regex))){
        objecValidUp.contraUp2 = true;
    }else{
        objecValidUp.contraUp2 = false;
    }
    console.log(Object.values(objecValidUp));
});





