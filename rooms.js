const q = document.querySelectorAll('.q')
const a = document.querySelectorAll('.a')
const arr = document.querySelectorAll('.arrow')
const ct1 = document.querySelectorAll('.container-room')
const button = document.querySelectorAll('.booknowbtn1')

for (let i=0 ; i<q.length; i++){
    q[i].addEventListener('click', ()=> {
        let screenWidth = window.innerWidth;
        console.log(screenWidth);
        a[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
        ct1[i].classList.toggle('container-room-opened');
        button[i].classList.toggle('booknowbtn1-after');
    })
}
