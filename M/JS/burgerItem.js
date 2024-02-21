const burgerItem = {
    "addItem": [
        {
            "imgUrl": "#",
            "name": "추가 없음",
            "engName": "No add",
            "cost": 0
        },
        {
            "imgUrl": "#",
            "name": "패티",
            "engName": "Patty",
            "cost": 1500
        },
        {
            "imgUrl": "#",
            "name": "베이컨",
            "engName": "Bacon",
            "cost": 800
        },
        {
            "imgUrl": "#",
            "name": "후라이드 에그",
            "engName": "Fried Egg",
            "cost": 800
        },
        {
            "imgUrl": "#",
            "name": "그릴드 머쉬룸",
            "engName": "Grilled Mushrooms",
            "cost": 800
        },
        {
            "imgUrl": "#",
            "name": "치즈",
            "engName": "Cheese",
            "cost": 800
        },
        {
            "imgUrl": "#",
            "name": "양상추",
            "engName": "Lettuce",
            "cost": 500
        },
        {
            "imgUrl": "#",
            "name": "양파",
            "engName": "Onion",
            "cost": 300
        },
        {
            "imgUrl": "#",
            "name": "토마토",
            "engName": "Tomamo",
            "cost": 500
        },
        {
            "imgUrl": "#",
            "name": "피클",
            "engName": "Pickle",
            "cost": 300
        },
        {
            "imgUrl": "#",
            "name": "할라피뇨",
            "engName": "Jalapeño",
            "cost": 300
        }
    ],

    "subtract": [
        {
            "imgUrl": "#",
            "name": "빼기 없음",
            "engName": "No Subtract",
        },
        {
            "imgUrl": "#",
            "name": "치즈",
            "engName": "Cheese",
        },
        {
            "imgUrl": "#",
            "name": "양상추",
            "engName": "Lettuce",
        },
        {
            "imgUrl": "#",
            "name": "양파",
            "engName": "Onion",
        },
        {
            "imgUrl": "#",
            "name": "토마토",
            "engName": "Tomamo",
        },
        {
            "imgUrl": "#",
            "name": "피클",
            "engName": "Pickle",
        },
        {
            "imgUrl": "#",
            "name": "할라피뇨",
            "engName": "Jalapeño",
        }
    ]
}

const itemContainer = document.querySelector('.item-container')
const subtractContainer = document.querySelector('.subtract-container')

burgerItem.addItem.forEach(item => {
    const addItem = document.createElement('li');
    addItem.classList.add('option-select-list-button');
    addItem.classList.add('add-item');

    // addItem.innerHTML = `
    //     <img src="${item.imgUrl}" alt="재료" class="add-item-button option-select-button">
    //     <p>${item.name}</p>
    //     <p>${item.engName}</p>
    //     <p>+ <span>${item.cost}</span>원</p>
    // `;

    const addImg = document.createElement('img');
        addImg.classList.add('add-item-button');
        addImg.classList.add('option-select-button');
        addImg.src = item.imgUrl;
        addImg.alt = "재료";

    const addName = document.createElement('p');
        addName.innerText = item.name;

    const addEngName = document.createElement('p');
        addEngName.innerText = item.engName;

    const addCostCon = document.createElement('p');
    
    const addCost = document.createElement('span');
        addCost.innerText = item.cost;

        addCostCon.append("+ ",addCost,"원");

    addItem.append(addImg,addName,addEngName,addCostCon);

    itemContainer.appendChild(addItem);
});

burgerItem.subtract.forEach(item => {
    const subtract = document.createElement('li');
    subtract.classList.add('option-select-list-button');
    subtract.classList.add('subtract-item');

    // subtract.innerHTML = `
    //     <img src="${item.imgUrl}" alt="재료" class="subtract-item-button option-select-button">
    //     <p>${item.name}</p>
    //     <p>${item.engName}</p>
    // `;

    const addImg = document.createElement('img');
        addImg.classList.add('subtract-item-button');
        addImg.classList.add('option-select-button');
        addImg.src = item.imgUrl;
        addImg.alt = "재료";

    const addName = document.createElement('p');
        addName.innerText = item.name;

    const addEngName = document.createElement('p');
        addEngName.innerText = item.engName;

    subtract.append(addImg,addName,addEngName);

    subtractContainer.appendChild(subtract);
});

let addItem = Array.from(document.querySelectorAll(".add-item"));
let addItemBtn = Array.from(document.querySelectorAll(".add-item-button"));
let subtract = Array.from(document.querySelectorAll(".subtract-item"));
let subtractBtn = Array.from(document.querySelectorAll(".subtract-item-button"));

const optionSelectList = document.getElementsByClassName("option-select-list");
let optionSlide = Array.from(document.querySelectorAll(".option-slide"));

const headerButton = document.getElementsByClassName("header-button");

// function mobBtn() {
//     //모바일 회전 버튼
//     headerButton.style.transform="rotate(-90deg)";
//     console("-90도회전")
// }

// window.addeventlistener('resize', () => {리사이즈될마다 계산})

let optionContainer = Array.from(document.querySelectorAll(".option-slide-container"));

window.addeventlistener('resize', () => {리사이즈될마다 계산})


function optionReset () {

    for (let i = 0; i < addItem.length; i++) {
        addItemBtn[i].classList.remove('option-select-button-on');
    }
    for (let i = 0; i < subtract.length; i++) {
        subtractBtn[i].classList.remove('option-select-button-on');
    }

    positionReset()
    
    addItemBtn[0].classList.add('option-select-button-on');
    subtractBtn[0].classList.add('option-select-button-on');
}

for (let i = 0; i <optionSelectList.length; i++) {
    const element = optionSelectList[i];

    const leftButton = element.querySelector('.option-left-button');
    const rightButton = element.querySelector('.option-right-button');

    let nowPosition = 0;

    
    function positionReset() {
        for (let i = 0; i < optionSlide.length; i++) {
            optionSlide[i].style.transform = `translateX(calc(0*${nowPosition})))`;  
        }
        console.log('reset')
    }

    leftButton.addEventListener("click",()=>{
        if(nowPosition > 0) {
        nowPosition--
            optionSlide[i].style.transition = `0.5s`
            optionSlide[i].style.transform = `translateX(calc((-132px + -16px)*${nowPosition}))`;
        }

        // nowPosition에 따라 translate 적용해주는 구문 넣기
    })

    rightButton.addEventListener("click",()=>{
        if(nowPosition < optionSlide[i].childElementCount -1) {
            nowPosition++
            optionSlide[i].style.transition = `0.5s`
            optionSlide[i].style.transform = `translateX(calc((-132px + -16px)*${nowPosition}))`;
        }
    })

}

for (let i = 0; i < addItem.length; i++) {

    addItemBtn[0].classList.add('option-select-button-on');

    addItem[0].addEventListener("click",()=>{
        addItemBtn[i].classList.remove('option-select-button-on');
        addItemBtn[0].classList.add('option-select-button-on');
        nowAddSelect.pop(burgerItem.addItem[i].name)
        console.log(nowAddSelect)
    })
    

    addItem[i].addEventListener("click",()=>{

        if(addItemBtn[i].classList.contains('option-select-button-on')){
            addItemBtn[i].classList.remove('option-select-button-on');
            const noAdd = nowAddSelect.filter((element) => element !== burgerItem.addItem[i].name)
            nowAddSelect.splice(0, nowAddSelect.length);
            Array.prototype.push.apply(nowAddSelect, noAdd);

        } else {
            addItemBtn[i].classList.add('option-select-button-on');
            addItemBtn[0].classList.remove('option-select-button-on');
            nowAddSelect.push(burgerItem.addItem[i].name)
        }
        console.log(nowAddSelect)
    })
    
}

for (let i = 0; i < subtract.length; i++) {

    subtractBtn[0].classList.add('option-select-button-on');

    subtract[0].addEventListener("click",()=>{
        subtractBtn[i].classList.remove('option-select-button-on');
        subtractBtn[0].classList.add('option-select-button-on');
        nowSubSelect.pop(burgerItem.subtract[i].name)
        console.log(nowSubSelect)
    })

    subtract[i].addEventListener("click",()=>{
        if(subtractBtn[i].classList.contains('option-select-button-on')){
            subtractBtn[i].classList.remove('option-select-button-on');
            const noSub = nowSubSelect.filter((element) => element !== burgerItem.subtract[i].name)
            nowSubSelect.splice(0, nowSubSelect.length);
            Array.prototype.push.apply(nowSubSelect, noSub);
        } else {
            subtractBtn[i].classList.add('option-select-button-on');
            subtractBtn[0].classList.remove('option-select-button-on');
            nowSubSelect.push(burgerItem.subtract[i].name)
        }
        console.log(nowSubSelect)
    })
}
// burgerItem.item.forEach(item => {

// }

// 배열

// [내가선택한메뉴1번,내가선택한메뉴2번]

// const 메뉴판 = {


// }




// 내가선택한메뉴1번 = {
// 	메뉴이름: ??
// 	메뉴가격: ??

// }

// [데이터1,데이터2,데이터3]

// {
// 	이름: 김철수
// 	나이: 35
// }

// menuData : 오브젝트(객체)

// menu(key) : [메뉴내용](value)

// menuData.menu : 배열

// menuData.menu.find  배열에서 무언가 찾겠다

// menuData.menu.find( (배열안내용물)=> 배열안내용물 === '내가 원하는값' ) 
// )



// {
// 	버거이름:'버거이름',
// 	버거가격: 9999,
// 	추가토핑: ['패티','베이컨']
// 	빼는토핑: [],
// 	최종가격: 15000
// }


// ui기준에서는

// 어떤 버튼이든 누르면 추가없음에서는 붉은색이 빠져야된다.
// 아무리 많은 토핑이 선택되어있더라도 추가 없음을 선택하면 모든 추가의 선택이 해제되어야한다
// 동일한 추가토핑을 눌렀을때는 선택이 취소되어야한다.

// 추가없음.click :
// 	재료추가의 모든 버튼 초기화();
// 	추가토핑 배열 초기화();



// 토핑추가.click :
// 	추가없음컨텐츠 선택 취소();
// 	만약 해당토핑이 선택되어있다면?
// 		선택취소(UI + 배열에서 빼기)
// 	만약 선택되어있지 않다면?
// 		선택 (UI + 배열에 넣기)


