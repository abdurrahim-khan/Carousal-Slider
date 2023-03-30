const slides = Array.from(document.getElementsByClassName("slider"));
const navContainer = document.getElementsByClassName("nav-container")[0];
const btn_arr = Array.from(navContainer.children);
const testButton = function(){
    let currentSlideIndex = slides.findIndex((slide)=>{
        return slide === document.getElementsByClassName("active-slide")[0];
    });
    if(currentSlideIndex == 0)
    {
        document.getElementById("btn-left").classList.add("hidden");
        document.getElementById("btn-right").classList.remove("hidden");
    }
    else if(currentSlideIndex == slides.length - 1)
    {
        document.getElementById("btn-left").classList.remove("hidden");
        document.getElementById("btn-right").classList.add("hidden");
    }
    else{
        document.getElementById("btn-left").classList.remove("hidden");
        document.getElementById("btn-right").classList.remove("hidden");
    }
}
const slideWidth =  slides[0].getBoundingClientRect().width;
for (let index = 0; index < slides.length; index++) {
    let slide = slides[index];
    slide.style.left = slideWidth * index +"px";
}
const btnright = document.getElementById("btn-right");
const btnleft = document.getElementById("btn-left");
const slideContainer  = document.getElementById("slide-container");
const slideShow = function(currentSlide, targetSlide){
    const amounttomove = targetSlide.style.left;
    slideContainer.style.transform = `translateX(-${amounttomove})`;
    currentSlide.classList.remove("active-slide");
    targetSlide.classList.add("active-slide");
    testButton();
    
}
btnright.addEventListener("click",function() {
    
    let currentSlide = document.getElementsByClassName("active-slide")[0];
    let nextSlide = currentSlide.nextElementSibling;
    slideShow(currentSlide,nextSlide);
    let current_navbtn = document.getElementsByClassName("active-button")[0];
    let currentIndex = btn_arr.findIndex((navbtn)=>{
        return current_navbtn === navbtn;
    })
    btnSlide(++currentIndex);
    /*console.log(currentSlide);
    console.log(nextSlide);
    /*const nextSlideWidth = nextSlide.getBoundingClientRect().width;*/
    /*const amounttomove = nextSlide.style.left;
    slideContainer.style.transform = `translateX(-${amounttomove})`;
    currentSlide.classList.remove("active-slide");
    nextSlide.classList.add("active-slide");*/
})
btnleft.addEventListener("click", function(){
    let currentSlide = document.getElementsByClassName("active-slide")[0];
    let prevSlide = currentSlide.previousElementSibling;
    slideShow(currentSlide,prevSlide);
    let current_navbtn = document.getElementsByClassName("active-button")[0];
    let currentIndex = btn_arr.findIndex((navbtn)=>{
        return current_navbtn === navbtn;
    })
    btnSlide(--currentIndex);
    /*
    let amounttomove = prevSlide.style.left;
    console.log(amounttomove);
    slideContainer.style.transform = `translateX(-${amounttomove})`; // note that in both cases we use -ve sign
    //but why? because translate works wrt original position
    // just forget about transition and then think in instantaneous way
    //transition gets applied between current stae and final state so thats why we get to see sliding effect
    currentSlide.classList.remove("active-slide");
    prevSlide.classList.add("active-slide");*/
})
navContainer.addEventListener("click",function(event){
    //console.log(event.target);
    if(!event.target.closest("button")) return;
    let target_navbtn = event.target;
    let current_navbtn = document.getElementsByClassName("active-button")[0];
    let targetIndex = btn_arr.findIndex((navbtn)=>{
        return navbtn === target_navbtn;
    });
    let currentSlide = document.getElementsByClassName("active-slide")[0];
    let targetSlide = slides[targetIndex];
    slideShow(currentSlide,targetSlide);
    btnSlide(targetIndex);
})
const btnSlide = function(targetIndex){
    let current_navbtn = document.getElementsByClassName("active-button")[0];
    let target_navbtn = btn_arr[targetIndex];
    current_navbtn.classList.remove("active-button");
    target_navbtn.classList.add("active-button");

} 