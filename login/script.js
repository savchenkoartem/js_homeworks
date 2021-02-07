let login=document.querySelector('.signin');
let reg=document.querySelector('.registr');
let active=document.querySelector('.active');
let noactive=document.querySelector('.noactive');
let name=document.querySelector('.name');
let surname=document.querySelector('.lastname');
let mail=document.querySelector('#mail');
let password=document.querySelector('#Password');
let getStart=document.querySelector('#start');

login.onclick=function() {
login.style.backgroundColor='#1AB188';
reg.style.backgroundColor='#435259';
active.classList.remove('active');
active.classList.add('noactive');
noactive.classList.remove('noactive');
noactive.classList.add('active');
}

reg.onclick=function() {
reg.style.backgroundColor='#1AB188';
login.style.backgroundColor='#435259';
noactive.classList.remove('active');
noactive.classList.add('noactive');
active.classList.remove('noactive');
active.classList.add('active');
}


function regForm () {
if (name.value==""||surname.value==""||mail.value==""||password.value=="") {
alert('Заполните все поля')
return;
} else if (mail.value.includes(" ")) {
alert('в названии почтового ящика не может быть пробелов проверьте пожалуйста корректность ввода')
return;
} else if (mail.value.slice(-10)!=='@gmail.com') {
alert('Ваша почта должна быть зарегистрирована на Gmail.com');
return;
}
if (mail.value.length<20) {
alert ('количество символов должно быть 10')
return;
} else{
let mailVal=mail.value.trim();
let pasValue=password.value.trim();
alert(`Artem вы успешно зарегистрированы`);
mail.style.borderColor='#838E94'
return [mailVal,pasValue]
}
}

getStart.onclick=regForm;



    



