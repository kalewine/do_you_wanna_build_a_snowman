// toggle screen
const toggle = document.querySelector('input');
const background = document.querySelector(".fixed-background");

toggle.addEventListener('change', e => {
    let daytime = getComputedStyle(background).getPropertyValue('--daytime');
    let nighttime = getComputedStyle(background).getPropertyValue('--nighttime');
   
    toggle.checked == true ? background.style.background = (daytime) : background.style.background =(nighttime)
})


// const base = document.getElementById('base');
// const middle = document.getElementById('middle');
// const topBall = document.getElementById('top');

// const baseActivator = document.getElementById('activate-1');
// const middleActivator = document.getElementById('activate-2');
// const topActivator = document.getElementById('activate-3');


const snowballs = document.querySelectorAll('.snow__ball')

const activator = document.querySelectorAll('.activator')

const activatorsOptions = {};
let index = 2;
const activatorsObserver = new IntersectionObserver((entries, activatorsObserver) => {
   
    entries.forEach(entry => {
        
        if(!entry.isIntersecting){
            return
        }else{
            
            snowballs[index].classList.add('activate');
            console.log(index)
            index--
        }
        activatorsObserver.unobserve(entry.target)
    })
}, activatorsOptions)

activator.forEach(element => {
    activatorsObserver.observe(element)
    
})


// Base Observer
// baseOptions= {
//     threshold: 1
// };

// const baseObserver = new IntersectionObserver((entries, baseObserver) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return
//         }else{
//             // base.style.transform = ('translateX(42vw)')
//             base.classList.add("activate")
//         }
//     })
    
// }, baseOptions )

// baseObserver.observe(baseActivator)

// Middle Observer
// middleOptions= {
//     threshold: 1
// };

// const middleObserver = new IntersectionObserver((entries, middleObserver) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return
//         }else{
//             // middle.style.transform = ('translateX(43vw) translateY(-140px)')
//             middle.classList.add('activate')
//         }
//     })
    
// }, middleOptions )

// middleObserver.observe(middleActivator)

// Top Observer
// topOptions= {
//     threshold: 1
// };

// const topObserver = new IntersectionObserver((entries, topObserver) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return
//         }else{
//             // topBall.style.transform = ('translateX(44vw) translateY(-235px)')
//             topBall.classList.add("activate")
//         }
//     })
    
// }, topOptions )

// topObserver.observe(topActivator)