const toggle = document.querySelector('input');
const body = document.querySelector("body");

toggle.addEventListener('change', e => {
    
    // let nighttime = body.style.getPropertyValue('--nighttime');
    let daytime = getComputedStyle(body).getPropertyValue('--daytime');
    let nighttime = getComputedStyle(body).getPropertyValue('--nighttime');
   
    toggle.checked == true ? body.style.background = (daytime) : body.style.background =(nighttime)
})


