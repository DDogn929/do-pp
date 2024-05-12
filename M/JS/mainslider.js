const main = document.querySelector('.main-section')
const sliderButton =document.querySelectorAll('.main-slider > li');
const button = document.querySelectorAll('.main-slider-button');

const leftButton = main.querySelector('.slider-l');
const rightButton = main.querySelector('.slider-r');
const moveButton = main.querySelector('.arrow');

const kindWrap = main.querySelector('.main-title-img');
const slider = kindWrap.querySelector('.main-title-img > ul')
const slideLis = kindWrap.querySelectorAll('.main-content');

// // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
// const clone1 = slideLis[0].cloneNode(true);
// const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
// slider.insertBefore(cloneLast,slideLis[0]);
// slider.appendChild(clone1);

// /* 주요 변수 초기화 */
// let currentIdx = 0;
// let translate = 0;
// const speedTime = 500;

// /* CSSOM 셋업 */
// const sliderCloneLis = slider.querySelectorAll('li');
// const liWidth = slideLis[0].clientWidth;
// const sliderWidth = liWidth * sliderCloneLis.length;
// slider.style.width = `${sliderWidth}px`;
// currentIdx = 1;
// translate = -liWidth;
// slider.style.transform = `translateX(${translate}px)`

// /* 리스너 설치하기 */
// moveButton.addEventListener('click', moveSlide);

// /* 슬라이드 실행 */
// function move(D) {
//     currentIdx += (-1 * D);
//     translate += liWidth * D;
//     slider.style.transform = `translateX(${translate}px)`;
//     // slider.style.transform = `translateX(calc((-100vw)*${currentIdx}))`;
//     slider.style.transition = `all ${speedTime}ms ease`
//     for(let i = 0 ; i < sliderButton.length ; i ++) {
//         button[i].classList.remove('main-slider-button-select');
//     }
//     button[currentIdx - 1].classList.add('main-slider-button-select');
// }

// /* 클릭 버튼 */
// function moveSlide(event) {
//     event.preventDefault();
//     if (event.target.className === 'slider-r' || event.target.className === 'next') {
//         move(-1);
//         if (currentIdx === sliderCloneLis.length -1) {
//             setTimeout(() => {
//                 slider.style.transition = 'none';
//                 currentIdx = 1;
//                 translate = -liWidth;
//                 slider.style.transform = `translateX(${translate}px)`;
//             }, speedTime);
//         }
//     } else {
//         move(1);
//         if (currentIdx === 0) {
//             setTimeout(() => {
//             slider.style.transition = 'none';
//             currentIdx = sliderCloneLis.length -2;
//             translate = -(liWidth * currentIdx);
//             slider.style.transform = `translateX(${translate}px)`;
//             }, speedTime);
//         }
//     }
// }

// for (let i = 0; i < sliderButton.length; i++) {
//     const button = sliderButton[i];

//     button.addEventListener("click",()=>{
        
//         // currentIdx = i;

//         move(i * -1);
//         console.log(currentIdx)
//     })

// }

let currentIdx = 0;

let intervalId;

console.log(slideLis);

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
    slider.style.transform = `translateX(calc((-100vw)*${currentIdx}))`;
    for(let i = 0 ; i < sliderButton.length ; i ++) {
        button[i].classList.remove('main-slider-button-select');
    }
    button[currentIdx].classList.add('main-slider-button-select');
}

leftButton.addEventListener("click",()=>{
    nextButtonClicked()
    if(currentIdx > 0) {
        currentIdx--
        apply()
    } else {
        currentIdx = sliderButton.length -1;
        apply()
    }
})

rightButton.addEventListener("click",()=>{
    nextButtonClicked()
    if(currentIdx < slider.childElementCount -1) {
        currentIdx++
        apply();
    } else {
        currentIdx = 0;
        apply()
    }
})

for (let i = 0; i < sliderButton.length; i++) {
    const button = sliderButton[i];

    button.addEventListener("click",()=>{
        
        currentIdx = i;

        apply();
        
    })

}

function slideTransition() {
    if(currentIdx < slider.childElementCount -1) {
        currentIdx++
        apply();
    } else {
        currentIdx = 0;
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
