let name = document.querySelector('.name');
let pass1 =document.querySelector('.pass1');
let pass2 =document.querySelector('.pass2');
let btn1 = document.querySelector('.btn1');
let btn2= document.querySelector('.btn2');
let submit = document.querySelector('.submit');
let p1 = document.querySelector('.user_input');
let p2 = document.querySelector('.p2');
let e_mail = document.querySelector('#email');
let res = document.querySelector('.result');

btn1.addEventListener('click' ,(e)=>{
    e.preventDefault();
    if (pass1.type === "password") {
        pass1.type = "text";
        btn1.textContent = "Hide";
    } else {
        pass1.type = "password";
       btn1.textContent = "Show";
    }
})

btn2.addEventListener('click' ,(e)=>{
    e.preventDefault();
    if (pass2.type === "password") {
        pass2.type = "text";
        btn2.textContent = "Hide";
    } else {
        pass2.type = "password";
       btn2.textContent = "Show";
    }
})


let namefun = (user)=>{

    const usernamePattern = /^[a-zA-Z0-9_.]+$/;
    if(user ===""){
        p1.textContent="enter your username"
    }
 
   else  if (!usernamePattern.test(user)) {
    p1.textContent= "Username can only contain letters, numbers, underscores (_), and dots (.)";
   }
    else if(user.length <=5 || user.length>12){
        p1.textContent="plzz enter character btw 5 to 12"
    }
    else{
        p1.textContent="";
        return true;
    }
   
    return false;

}

let passfun=(pass , conf_pass)=>{
    const minLength = 8;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasDigit = /[0-9]/;
  const hasSpecialChar = /[\W_]/;
  
  let p3=document.querySelector('.p3');
  let p4= document.querySelector('.p4');


if(pass.length ===0){
    p3.textContent="Plzz enter password";
}
else if (pass.length < minLength) {
p3.textContent= `Password must be at least ${minLength} characters long.`;
}
else if (!hasUpperCase.test(pass)) {
p3.textContent ="Password must contain at least one uppercase letter.";
}
else if (!hasLowerCase.test(pass)) {
p3.textContent="Password must contain at least one lowercase letter.";
}
else if (!hasDigit.test(pass)) {
p3.textContent="Password must contain at least one digit.";
}
else if (!hasSpecialChar.test(pass)) {
p3.textContent="Password must contain at least one special character.";
}
 
  else{
    p3.textContent="";
    if(conf_pass.length === 0){
        p4.textContent='Confirm Password is Required'
    }
    else if(conf_pass!==pass){
        p4.textContent='Confirm Password must match Password'
    }
    else{
        p4.textContent=''
        return true;
    }
  }
  return false;
}

let emailfun = () => {
    if (!e_mail.validity.valid) {
        p2.textContent = "Please enter a valid email address";
    } else {
        p2.textContent = ""; 
        return true;
    }
    return false;
};

submit.addEventListener('click', (e)=>{
    
    let user = name.value;
    let emaildata = e_mail.value;
    let pass=pass1.value;
    let conf_pass=pass2.value;
    let a= namefun(user);
    let b=emailfun();
    let c =passfun(pass,conf_pass);
    if(a=== true && b===true && c===true){ 
        res.innerHTML=`
        <h2>name :-<span>${name.value}</span><h2>
        <h2>email:-<span>${e_mail.value}</span><h2>
        <h2>password:-<span>${pass1.value}</span><h2>
        `
    }
    e.preventDefault();
  
})