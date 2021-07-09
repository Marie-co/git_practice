const navMenu =document.getElementById('nav-menu');
const navToggle =document.getElementById('nav-toggle');
const navClose =document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link') ;


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

// REMOVE MENU MOBILE

console.log('hello');

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER

function scrollHeader(){
    const header= document.getElementById('header')

    if(this.scrollY >= 100) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
