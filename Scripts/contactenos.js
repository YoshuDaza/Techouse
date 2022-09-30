const form = document.getElementById('form');
const btn = document.getElementById('btnDatos');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const mail = document.getElementById('mail');
const phon = document.getElementById('phon');

//Control de validacion

const objecValid ={
    names:false,
    lname:false,
    email:false,
    numero:false
};

//Validar el formulario completo
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (validForm() === -1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
})


const validForm = ()=>{
    const values = Object.values(objecValid);
    let response = values.findIndex(e => e === false);
    return response;
};


nombre.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames= e.target.value;
    objecValid.names= valorNames.match(namesRegex) ? true : false;
    console.log(Object.values(objecValid));
});

apellido.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorlname= e.target.value;
    objecValid.lname= valorlname.match(namesRegex) ? true : false;
    console.log(Object.values(objecValid));
});

mail.addEventListener('change',function(e){
    console.log(e.target.value);
    const mailRegex = /^[_a-z0-9-+]+(\.[_a-z0-9-+]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g;
    let valorml= e.target.value;
    objecValid.email= valorml.match(mailRegex) ? true : false;
    console.log(Object.values(objecValid));
});

phon.addEventListener('change',function(e){
    console.log(e.target.value);
    const numberRegex = /(^[0-9]{3,12}$)/g;
    if ((phon.value.match(numberRegex))){
        objecValid.numero = true;
    }else{
        objecValid.numero = false;
    }
    console.log(Object.values(objecValid));
});
