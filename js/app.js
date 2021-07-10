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

// SWIPPER
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 50,
    
  
    },
  });

//   VIDEO
const videoFile=document.getElementById('video-file');
const videoButton= document.getElementById('video-button');
const videoIcon= document.getElementById('video-icon');
function playPause(){

    if(videoFile.paused){
        videoFile.play()
        videoIcon.classList.add("ri-pause-fill")
        videoIcon.classList.remove("ri-play-line")
    }
    else{
        videoFile.pause()
        videoIcon.classList.remove("ri-pause-fill")
        videoIcon.classList.add("ri-play-line")
    
    }


}

videoButton.addEventListener('click',playPause)
function finalVideo(){
    videoIcon.classList.remove("ri-pause-fill")
    videoIcon.classList.add("ri-play-line")

}
videoFile.addEventListener("ended",finalVideo)


// SCROLL UP
function scrollUp(){
    const scrollUp= document.getElementById('scroll-up')
    if(this.scrollY >= 200)scrollUp.classList.add('show-scroll')
    window.addEventListener('scroll',scrollUp)
}

// SCROLL SECTION ACTIVE LINK
const sections= document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current=>{
        const sectionHeight =current.offsetHeight
        const sectionTop= current.offsetTop -50;
        sectionId =current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight)

        {
            document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.add('active-link')}else{
                document.querySelector('.nav__menu a[href*=' +sectionId +']').classList.remove('active-link')
            }
            
        
    })
}
window.addEventListener('scroll',scrollActive)