// Validate Data ----------------------------------------------------------------------
let room
let firstname = document.getElementById('first-name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let checkin = document.getElementById('checkin')
let checkout = document.getElementById('checkout')
let adult = document.getElementById('adult')
let children = document.getElementById('children')
let qty = document.getElementById('qty')
let errorcolor = document.getElementById("color-error")
const error = document.querySelector('.error-warning');
error.textContent = '';
function submit_form(e) {
    console.log("Jalan")
    e.preventDefault();
    let firstnamev = firstname.value;
    let emailv = email.value;
    let numberv = number.value;
    let checkinv = checkin.value;
    let checkoutv = checkout.value;
    let adultv = adult.value;
    let childrenv = children.value;
    let qtyv = qty.value;
    error.textContent = "";
    errorcolor.style.color = "#e60505"
    let date_in = checkinv.split("/")
    console.log(date_in)
    let date_out = checkoutv.split("/")
    console.log(date_out)
  
    if (firstnamev.length < 5) {
        error.textContent = "*First name must be at least 5 characters";
    } else if (!emailv.endsWith("@gmail.com")) {
        error.textContent = "*Email must end with @gmail.com";
    } else if ((/^\d+$/.test(numberv)) != true) {
        console.log(typeof numberv)
        error.textContent = "*Phone number must be a number";
    } else if (numberv.length < 4) {
        error.textContent = "*Phone number must be at least 4 digits";
    } else if (date_in.length<3){
        error.textContent = "*Check in must be (DD/MM/YYYY)";
    } else if(parseInt(date_in[0])>31){
        error.textContent = "*Check in date must be within 31 day";
    } else if(parseInt(date_in[1])>12){
        error.textContent = "*Check in month must be within 12 month";
    } else if(parseInt(date_in[2])<2023){
        error.textContent = "*Check in year must be at least be 2023";
    } else if(date_out.length<3){
        error.textContent = "*Check out must be (DD/MM/YYYY)";
    } else if(parseInt(date_out[0])>31){
        error.textContent = "*Check out date must be within 31 day";
    } else if(parseInt(date_out[1])>12){
        error.textContent = "*Check out month must be within 12 month";
    } else if(parseInt(date_out[2])<2023){
        error.textContent = "*Check out year must at least be 2023";
    } else if ((/^\d+$/.test(adultv)) != true) {
        console.log("jalan")
        error.textContent = "*Adult must be a number";
    } else if (parseInt(adultv)<1){
        error.textContent = "*There must be at least 1 adult";
    } else if ((/^\d+$/.test(childrenv)) != true) {
        error.textContent = "*Children must be a number";
    } else if ((/^\d+$/.test(qtyv)) != true) {
        error.textContent = "*Room quantity must be a number";
    } else if (parseInt(qtyv)<1){
        error.textContent = "*There must be at least 1 room";
    } else if (room==null) {
        error.textContent = "*Must pick the room type";
    } else if (parseInt(date_out[0]) === parseInt(date_in[0]) && parseInt(date_out[1]) === parseInt(date_in[1]) && parseInt(date_out[2]) === parseInt(date_in[2])) {
        error.textContent = "*Check-in and check-out must be different";
    } else{
        error.textContent = "*Receipt succesfully sent to email";
        errorcolor.style.color = "green"
    }
}




// Dropdown ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown')
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle')
    const dropdownMenu = dropdown.querySelector('.dropdown-menu')
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item')
    const arr = document.querySelectorAll('.arrow')

    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show')
        arr.forEach(element => {
            element.classList.toggle('arrow-rotated')
        });
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownToggle.textContent = item.textContent
            room = item.textContent
            console.log(room)
            dropdownMenu.classList.remove('show')
        });
    });
});

// Gallery -----------------------------------------------------------------------------------

const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.--right')
const prevButton = document.querySelector('.--left')
const dotsnav = document.querySelector('.carousel-nav')
const dots = Array.from(dotsnav.children)
nextButton.classList.remove('hide')
const bottomtitle = document.querySelector('.bottom-title');

bottomtitle.textContent = 'Deluxe Suite';

const slidewidth = slides[0].getBoundingClientRect().width

const slideposition = (slide, index) => {
    slide.style.left = slidewidth * index + 'px';
}
slides.forEach(slideposition)

const movetoslide = (track, currentslide, targetslide) =>{
    track.style.transform = 'translateX(-' + targetslide.style.left + ')'
    currentslide.classList.remove('current')
    targetslide.classList.add('current')
}

const hide = (slides, prevButton, nextButton, targetindex) =>{
    if (targetindex === 0 ){
        prevButton.classList.add('hide')
        nextButton.classList.remove('hide')
    }else if (targetindex === slides.length-1){
        prevButton.classList.remove('hide')
        nextButton.classList.add('hide')
    }else{
        prevButton.classList.remove('hide')
        nextButton.classList.remove('hide')
    }

    if(targetindex===0){
        bottomtitle.textContent = 'Deluxe Suite'
    }else if(targetindex===1){
        bottomtitle.textContent = 'Deluxe Suite Bundaran HI View'
    }else if(targetindex===2){
        bottomtitle.textContent = 'Grand Deluxe Suite'
    }else if(targetindex===3){
        bottomtitle.textContent = 'Grand Deluxe Suite Bundaran View'
    }else if(targetindex===4){
        bottomtitle.textContent = 'Luxurious Suite'
    }else if(targetindex===5){
        bottomtitle.textContent = 'Luxurious Suite Bundaran HI View'
    }
}

prevButton.addEventListener('click' , e => {
    const currentslide = track.querySelector('.current')
    const prevslide = currentslide.previousElementSibling
    
    movetoslide(track, currentslide, prevslide)

    const previndex = slides.findIndex(slide => slide === prevslide)
    hide(slides, prevButton, nextButton, previndex)

    const currentdot = dotsnav.querySelector('.current')
    const prevdot = currentdot.previousElementSibling
    currentdot.classList.remove('current')
    prevdot.classList.add('current')

})

nextButton.addEventListener('click' , e => {
    const currentslide = track.querySelector('.current')
    const nextslide = currentslide.nextElementSibling
    movetoslide(track, currentslide, nextslide)

    const nextindex = slides.findIndex(slide => slide === nextslide)
    hide(slides, prevButton, nextButton, nextindex)

    const currentdot = dotsnav.querySelector('.current')
    const nextdot = currentdot.nextElementSibling
    currentdot.classList.remove('current')
    nextdot.classList.add('current')
    
})

dotsnav.addEventListener('click', e =>{
    const targetdot = e.target.closest('button')
    if (!targetdot) return

    const currentslide = track.querySelector('.current')
    const currentdot = dotsnav.querySelector('.current')
    const targetindex = dots.findIndex(dot => dot === targetdot)
    const targetslide = slides[targetindex]

    movetoslide(track, currentslide, targetslide)

    currentdot.classList.remove('current')
    targetdot.classList.add('current')

    hide(slides, prevButton, nextButton, targetindex)
})

