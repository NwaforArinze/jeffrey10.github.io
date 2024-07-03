let currentDay = document.querySelector('[data-testid="currentDay"]');
let currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')

setInterval(() => {
    const date = new Date();
    currentTimeUTC.innerHTML = date.toUTCString()
}, 1000);

const date = new Date();
const dayOfWeekNumber = date.getDay();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

currentDay.innerHTML = (dayOfWeekName);

function navSlide(){
    const burger = document.querySelector('#menu-btn');
    const nav = document.querySelector('nav');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    });
}   
 navSlide();