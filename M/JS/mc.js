const optionSelectList = document.getElementsByClassName("option-select-list");

for (let i = 0; i <optionSelectList.length; i++) {
    const element = optionSelectList[i];

        
    const leftButton = element.querySelector('.option-left-button');
    const rightButton = element.querySelector('.option-right-button');
    const slider = element.querySelector('ul');

    let index = 0;

    leftButton.addEventListener("click",()=>{
        if(index > 0) {
        index--
            slider.style.transform = `translateX(calc((-132px + -16px)*${index}))`;
        }

        // index에 따라 translate 적용해주는 구문 넣기
    })

    rightButton.addEventListener("click",()=>{
        if(index < slider.childElementCount -1) {
            index++
            slider.style.transform = `translateX(calc((-132px + -16px)*${index}))`;
        }
    })
    
}






// const ul = document.getElementsByClassName("option-slide-container")
// const optionList = document.getElementsByClassName("option-select-list-button")
// const leftButton = document.getElementsByClassName("option-left-button")
// const rightButton = document.getElementsByClassName("option-right-button")