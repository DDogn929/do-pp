const main = document.querySelector('.main-section')
const sliderButton =document.querySelectorAll('.main-slider > li');
const button = document.querySelectorAll('.main-slider-button');

const sliderTl = main.querySelector('.main-title-img');
const leftButton = main.querySelector('.slider-l');
const rightButton = main.querySelector('.slider-r');

const slider = sliderTl.querySelector('.main-title-img > ul')
const mainContent = sliderTl.querySelectorAll('.main-content');

let index = 0;

console.log(mainContent);


function apply() {
    nextButtonClicked();
    slider.style.transition = `0.5s`
    slider.style.transform = `translateX(calc((-100vw)*${index}))`;
    for(let i = 0 ; i < sliderButton.length ; i ++) {
        button[i].classList.remove('main-slider-button-select');
    }
    button[index].classList.add('main-slider-button-select');
}

leftButton.addEventListener("click",()=>{
    nextButtonClicked
    if(index > 0) {
        index--
        apply()
    } else {
        index = sliderButton.length -1;
        apply()
    }
})

rightButton.addEventListener("click",()=>{
    nextButtonClicked
    if(index < slider.childElementCount -1) {
        index++
        apply();
    } else {
        index = 0;
        apply()
    }
})

for (let i = 0; i < sliderButton.length; i++) {
    const button = sliderButton[i];

    button.addEventListener("click",()=>{
        
        index = i;

        apply();
        
    })

}

let intervalId;

function slideTransition() {
    if(index < slider.childElementCount -1) {
        index++
        apply();
    } else {
        index = 0;
        apply()
    }
    console.log("3초마다 작동");
}

intervalId = setInterval(slideTransition, 3000);

function nextButtonClicked() {
    clearInterval(intervalId); // 타이머 초기화
    // slideTransition(); // 바로 다음 슬라이드로 이동
    intervalId = setInterval(slideTransition, 3000); // 3초 간격으로 다시 인터벌 설정
}

// transform: translateX(calc((100vw)*0));

// element.classList.add('className')
// element.classList.remove('className')

// setInterval
// setTimeout ( function ()
// {
// console . log ( "2초후에 한번 실행됩니다." );
// }, 2000 );