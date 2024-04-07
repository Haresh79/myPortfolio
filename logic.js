let sliderDom=document.querySelector('.slide .years');
let head=document.querySelector('.about .heading');
let topic=document.querySelector('.about .name');
let des=document.querySelector('.about .desc');

let bg=[{background:'webdev.jpg', heading:'IN MY 1st YeAR',topic:'WEB DEV',des:'Hii every one this is my initial day of college so in that time i cannot have laptop i do coding from mobile.'},
        {background:'androiddev.jpg', heading:'IN MY 2nd YeAR',topic:'ANDROID DEV',des:'Hii this is my second year at college now i become just responsible so i think i have good mark so i can get laptop from govt but i cannot rich the cutoff marks so i try coding from mobile phone first but i face so many problems then i ask my parents for a laptop dunig my 3rd sem then i do Android Development with this laptope.'},
        {background:'dsa.jpg', heading:'IN MY 3rd YeAR',topic:'DSA',des:'Hii this is my final year so i focus in logic building because sineoirs are says that with out DSA no can place you on there company so i decided to Logic building and DSA.'}];
let n=0;

document.querySelector('.homebtn').addEventListener('click',function(){
    document.getElementById('home').style.backgroundImage="url(homepic1.jpg)";
    head.innerText="HII I AM,";
    topic.innerText="HARESH";
    des.innerText="An Android and Frontend Developer.";
    addBlur()
})

function addBlur(){
    head.classList.add('blurload');
    topic.classList.add('blurload');
    des.classList.add('blurload');
}
function addBlur2(){
    head.classList.add('blurremove');
    topic.classList.add('blurremove');
    des.classList.add('blurremove');
}
addBlur()
function removeBlur(){
    head.classList.remove('blurload');
    topic.classList.remove('blurload');
    des.classList.remove('blurload');
}
function removeBlur2(){
    head.classList.remove('blurremove');
    topic.classList.remove('blurremove');
    des.classList.remove('blurremove');
}
function next(){
    document.getElementById('home').style.backgroundImage=`url(${bg[n].background})`;
    document.getElementById('home').style.zIndex="10";
    head.innerText=bg[n].heading;
    topic.innerText=bg[n].topic;
    des.innerText=bg[n].des;
    let itemslider=document.querySelectorAll('.slide .years .item')
    sliderDom.appendChild(itemslider[0])
    addBlur();
    n++;
    if (n>=3) {
        n=0;
    }
} 
function previous(){
    document.getElementById('home').style.backgroundColor=bg[n].background;
    head.innerText=bg[n].heading;
    topic.innerText=bg[n].topic;
    des.innerText=bg[n].des;
    let itemslider=document.querySelectorAll('.slide .years .item')
    sliderDom.prepend(itemslider[2])
    addBlur2()
    n--;
    if (n<0) {
        n=2;
    }
}
setInterval(removeBlur, 1900) 
setInterval(removeBlur2, 1900) 

// code for project section

document.querySelectorAll('.card').forEach((e) => {
    e.addEventListener('mouseenter', ()=>{
        e.classList.add('active');
        e.querySelector('h2').style.opacity="1";
    })
    e.addEventListener('mouseleave', () =>{
        e.classList.remove('active');
        e.querySelector('h2').style.opacity="0";
    })
})
