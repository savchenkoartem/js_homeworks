let login=document.querySelector('.signin');
let reg=document.querySelector('.registr');
let active=document.querySelector('.active');
let noactive=document.querySelector('.noactive');
let name=document.querySelector('.name');
let surname=document.querySelector('.lastname');
let mail=document.querySelector('#mail');
let password=document.querySelector('#Password');
let getStart=document.querySelector('#start');
let mailLog=document.querySelector('#mailLog');
let passwordLog=document.querySelector('#PasswordLog');
let getEnter=document.querySelector('#start2');


let logIn=login.onclick=function () {
login.style.backgroundColor='#1AB188';
reg.style.backgroundColor='#435259';
active.classList.remove('active');
active.classList.add('noactive');
noactive.classList.remove('noactive');
noactive.classList.add('active');
}

reg.onclick=function signUp () {
reg.style.backgroundColor='#1AB188';
login.style.backgroundColor='#435259';
noactive.classList.remove('active');
noactive.classList.add('noactive');
active.classList.remove('noactive');
active.classList.add('active');
}

let regex=/[0-9]/g;


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
} else if (password.value.length<6) {
alert ('количество символов пароля должно быть не менее 6')
return; 
} else if (password.value.search(regex)==-1) {
alert('Пароль должен содержать не менее 1 цифры')
return;
} 
else{
//let mailVal=mail.value.trim();
//let pasValue=password.value.trim();
alert(`Artem вы успешно зарегистрированы`);
logIn();
return result={
mail:mail.value.trim(),
pass:password.value.trim(),
name:name.value,
lastName:surname.value
}
}
};
getStart.onclick=regForm;
 

getEnter.onclick=function () {
if (mailLog.value==result.mail&&passwordLog.value==result.pass) {
alert(`Поздравляем ${result.value} вы вошли в систему!!!:)))`)
} else {
alert('неверно указан логин или пароль')
}

}

//let ooo=getStart.onclick=regForm;
 






    



