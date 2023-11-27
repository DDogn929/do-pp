const sliderTl = document.querySelector('.main-title-img');

const slider = sliderTl.querySelector('.main-title-img > ul')
const mainContent = sliderTl.querySelectorAll('.main-content');
const leftButton = sliderTl.querySelector('.slider-l');
const rightButton = sliderTl.querySelector('.slider-r');

const sliderButton =sliderTl.querySelectorAll('.main-slider-button')

let index = 0;

console.log(mainContent);


leftButton.addEventListener("click",()=>{
    if(index > 0) {
        index--
        slider.style.transform = `translateX(calc((-100vw)*${index}))`;
    }
})

rightButton.addEventListener("click",()=>{
    if(index < slider.childElementCount -1) {
        index++
        slider.style.transform = `translateX(calc((-100vw)*${index}))`;
    }
})

for (let i = 0; i < sliderButton.length; i++) {
    const button = sliderButton[i];

    button.addEventListener("click",()=>{
        slider.style.transform = `translateX(calc((-100vw)*${i}))`;
        sliderButton[i].classList.add('main-slider-button-select');
    })

}

// transform: translateX(calc((100vw)*0));

// element.classList.add('className')
// element.classList.remove('className')