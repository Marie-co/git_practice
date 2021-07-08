const navMenu =document.getElementById('nav-menu');
const navToggle =document.getElementById('nav-toggle');
const navClose =document.getElementById('nav-close');


// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')

    })

    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }
}
console.log('hello');