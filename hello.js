let btn=document.querySelector(".main");

let key1=document.querySelector(".one");
let key2=document.querySelector(".two");
let key3=document.querySelector(".three");
let key4=document.querySelector(".four");

const handleKey=(event)=>{
    console.log(event);
    key1.innerText= `Key Pressed is: ${event.key}`;
    key2.innerText=`Key Code is: ${event.code}`;
    key3.innerText=`Char code is: ${event.key.charCodeAt(0)}`;
    key4.innerText=`Key Type is: ${event.type}`;

};

btn.addEventListener("keydown",handleKey);



