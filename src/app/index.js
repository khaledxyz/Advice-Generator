const counter = document.querySelector('.counter');
const advice = document.querySelector('.advice');
const randomBtn = document.querySelector('.randomBtn');

let counterNumber =1;

fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => advice.innerHTML = `"${data.slip.advice}"`)

function getAdvice() {
    counterNumber++
    
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => advice.innerHTML = `"${data.slip.advice}"`)

    counter.innerHTML = `ADVICE #00${counterNumber}`
    if(counterNumber > 9){
        counter.innerHTML = `ADVICE #0${counterNumber}`
    }
    if(counterNumber > 99){
        counter.innerHTML = `ADVICE #${counterNumber}`
    }
}

randomBtn.addEventListener('click', ()=>{getAdvice()})