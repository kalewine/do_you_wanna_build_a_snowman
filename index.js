// toggle screen
const toggle = document.querySelector('input');
const body = document.querySelector("body");

toggle.addEventListener('change', e => {
    
    // let nighttime = body.style.getPropertyValue('--nighttime');
    let daytime = getComputedStyle(body).getPropertyValue('--daytime');
    let nighttime = getComputedStyle(body).getPropertyValue('--nighttime');
   
    toggle.checked == true ? body.style.background = (daytime) : body.style.background =(nighttime)
})


const base = document.getElementById('base');
const middle = document.getElementById('middle');
const top = document.getElementById('top');

const baseActivator = document.getElementById('activate-1');
const middleActivator = document.getElementById('activate-2');
const topActivator = document.getElementById('activate-3');


baseOptions= {};

const baseObserver = new IntersectionObserver((entries, baseActivator) => {
    base.classList.add('activate')
}, baseOptions )

baseObserver.observer(baseActivator)