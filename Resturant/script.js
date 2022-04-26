const menuItems=[
    {
        id:1,
        item:"Chilli Chicken",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?",
        img:"images/1-19.jpg",
        hotel:"Om Sai Resturant",
        desc:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?"
    },
    {
        id:2,
        item:"Masala Omelet",
        oneLiner:"Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?",
        img:"images/pexels-caio-1278020.jpg",
        hotel:"Jitendra Chilli",
        desc:"Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?"
    },
    {
        id:3,
        item:"Prone Chowmein",
        oneLiner:"Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?",
        img:"images/pexels-dana-tentis-725997.jpg",
        hotel:"Swastil Vatia",
        desc:"Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?"
    },
    {
        id:4,
        item:"Pasta",
        oneLiner:"Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?",
        img:"images/pexels-engin-akyurt-1437267.jpg",
        hotel:"Swapna Hatasia Reaturant",
        desc:"Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?"
    },
    {
        id:5,
        item:"Pizza",
        oneLiner:"Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?",
        img:"images/pexels-kristina-paukshtite-1146760.jpg",
        hotel:"Samal Thunder",
        desc:"Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi magni delectus tempore! Distinctio explicabo sapiente nulla ea illum, magni est vel rerum necessitatibus, facere molestias, inventore aut expedita iusto?"
    },
]

const item= document.getElementById('item');
const oneLiner= document.getElementById('oneLiner');
const img= document.getElementById('img');
const hotel= document.getElementById('hotel');
const desc= document.getElementById('desc');
const prev= document.getElementById('prev');
const random= document.getElementById('random');
const next= document.getElementById('next');

let currentMenu = 0;
window.addEventListener('DOMContentLoaded',function(
){
    // let menu=menuItems[currentMenu];
    // item.textContent=menu.item;
    // oneLiner.textContent=menu.oneLiner;
    // img.src=menu.img;
    // hotel.textContent=menu.hotel;
    // desc.textContent=menu.desc;
    allMenu(currentMenu)
})

const allMenu=()=>{
    let menu=menuItems[currentMenu];
    item.textContent=menu.item;
    oneLiner.textContent=menu.oneLiner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
}

//random menu

random.addEventListener('click',()=>{
    currentMenu = Math.floor(Math.random()*menuItems.length);
    allMenu(currentMenu);
});


//prev btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
})
//nextbtn
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})