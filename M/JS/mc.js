const optionSelectList = document.getElementsByClassName('option-select-list')

const leftButton = optionSelectList[0].querySelector('.option-left-button')
const rightButton = optionSelectList[0].querySelector('.option-right-button')
const slider = optionSelectList[0].querySelector('ul')
const optionSelectButton =  optionSelectList[0].querySelector('.option-select-list-button')

let index = 0;

console.log()

leftButton.addEventListener('click',()=>{

    index--
    
    if(index >= 0) {
        slider.style.transform = `translateX(calc((-132px + -16px)*${index}))`
    }
    
    // alert('이것은 왼쪽버튼입니다');
})

rightButton.addEventListener('click',()=>{

    index++

    if(index < slider.childElementCount) {
        slider.style.transform = `translateX(calc((-132px + -16px)*${index}))`
    }

    // alert('이것은 오른쪽버튼입니다');
})

// for (let i = 0; i < optionSelectButton.length; i++) {
    
// }


// transform: translateX(calc((-132px + -16px)*index));

// const ul = document.getElementsByClassName("option-slide-container")
// const optionList = document.getElementsByClassName("option-select-list-button")
// const leftButton = document.getElementsByClassName("option-left-button")
// const rightButton = document.getElementsByClassName("option-right-button")

