const main = document.querySelector('.main-section')
const sliderButton =document.querySelectorAll('.main-slider > li');
const button = document.querySelectorAll('.main-slider-button');

const sliderTl = main.querySelector('.main-title-img');
const leftButton = main.querySelector('.slider-l');
const rightButton = main.querySelector('.slider-r');

const slider = sliderTl.querySelector('.main-title-img > ul')
const mainContent = sliderTl.querySelectorAll('.main-content');

// // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
// const startSlide = mainContent[0];
// const endSlide = mainContent[slideItems.length - 1];
// // 엘리먼트 생성
// const startElem = document.createElement(startSlide.tagName);
// const endElem = document.createElement(endSlide.tagName);
// // 엘리먼트에 클래스 적용, 내용 복사 동일하게 하기
// endSlide.classList.forEach((c) => endElem.classList.add(c));
// endElem.innerHTML = endSlide.innerHTML;
// startSlide.classList.forEach((c) => startElem.classList.add(c));
// startElem.innerHTML = startSlide.innerHTML;
// // 각 복제한 엘리먼트를 각 위치에 추가하기
// mainContent[0].before(endElem);
// mainContent[mainContent.length - 1].after(startElem);
// // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
// mainContent = document.querySelectorAll(".main-content");
// let offset = slideWidth * currSlide;
// mainContent.forEach((i) => {
//   i.setAttribute("style", `left: ${-offset}px`);
// });

let nowScreen = 0;

let intervalId;

console.log(mainContent);

intervalId = setInterval(slideTransition, 5000);

function nextButtonClicked() {
    clearInterval(intervalId); // clearInterval 타이머 초기화
    // slideTransition(); // 바로 다음 슬라이드로 이동
    intervalId = setInterval(slideTransition, 5000); // 5초 간격으로 다시 인터벌 설정
}

//슬라이드 움직이기
function apply() {
    nextButtonClicked();
    slider.style.transition = `0.5s`
    slider.style.transform = `translateX(calc((-100vw)*${nowScreen}))`;
    for(let i = 0 ; i < sliderButton.length ; i ++) {
        button[i].classList.remove('main-slider-button-select');
    }
    button[nowScreen].classList.add('main-slider-button-select');
}

leftButton.addEventListener("click",()=>{
    nextButtonClicked()
    if(nowScreen > 0) {
        nowScreen--
        apply()
    } else {
        nowScreen = sliderButton.length -1;
        apply()
    }
})

rightButton.addEventListener("click",()=>{
    nextButtonClicked()
    if(nowScreen < slider.childElementCount -1) {
        nowScreen++
        apply();
    } else {
        nowScreen = 0;
        apply()
    }
})

for (let i = 0; i < sliderButton.length; i++) {
    const button = sliderButton[i];

    button.addEventListener("click",()=>{
        
        nowScreen = i;

        apply();
        
    })

}

function slideTransition() {
    if(nowScreen < slider.childElementCount -1) {
        nowScreen++
        apply();
    } else {
        nowScreen = 0;
        apply()
    }
    console.log("5초마다 작동");
}

// transform: translateX(calc((100vw)*0));

// element.classList.add('className')
// element.classList.remove('className')

// setInterval
// setTimeout ( function ()
// {
// console . log ( "2초후에 한번 실행됩니다." );
// }, 2000 );