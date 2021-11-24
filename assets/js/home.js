var toggled=false;

const tbtn= document.getElementById('toggle-button');
const toggle= document.getElementById('toggle');
const buttons= document.querySelectorAll('button');
var bodyTag= document.getElementsByTagName("body")[0];
const container= document.getElementById('task-container');
const card= document.getElementById('color-change');
var pageHead= document.querySelector('h1');
var headings= document.getElementById('task-container');
var addbtn= document.querySelector("a");

tbtn.addEventListener('click', ()=>{
    if(!toggled){
        pageHead.classList.add("white-color");
       bodyTag.classList.add('toggle-bck');
        tbtn.style.marginLeft="78px";
        tbtn.style.backgroundColor= "white";
        toggle.classList.add("color-white");       
         container.style.color="darkslategrey";
        headings.style.color="whitesmoke";
        toggled=true;
    }
    else{
        pageHead.classList.remove("white-color");
        bodyTag.style.backgroundColor="whitesmoke";
        bodyTag.style.background
        tbtn.style.marginLeft = "1px";
        tbtn.style.backgroundColor= "black";
        bodyTag.classList.remove('toggle-bck');
        toggle.classList.remove("color-white");
        container.style.color="black";
        headings.style.color="black";  
        toggled = false;
    }
});
