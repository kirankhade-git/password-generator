var passwordbox=document.querySelector("input");
var length=10;

var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase="abcdefghijklmnoprstuvwxyz"
var num="012345789"
var symbols="~!@#$%^&*()_-{}[]:'<>:/\|*-+"

var allChars=upperCase+lowerCase+num+symbols;


function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
      password+= allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordbox.value=password;
}