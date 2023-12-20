const burgerItem = {
    "item": [
        {
            "itemName": "패티",
            "itemEngName": "Patty",
            "cost": "1500"
        },
        {
            "itemName": "베이컨",
            "itemEngName": "Bacon",
            "cost": "800"
        },
        {
            "itemName": "후라이드 에그",
            "itemEngName": "Fried Egg",
            "cost": "800"
        },
        {
            "itemName": "그릴드 머쉬룸",
            "itemEngName": "Grilled Mushrooms",
            "cost": "800"
        },
        {
            "itemName": "치즈",
            "itemEngName": "Cheese",
            "cost": "800"
        },
        {
            "itemName": "양상추",
            "itemEngName": "Lettuce",
            "cost": "500"
        },
        {
            "itemName": "양파",
            "itemEngName": "Onion",
            "cost": "300"
        },
        {
            "itemName": "토마토",
            "itemEngName": "Tomamo",
            "cost": "500"
        },
        {
            "itemName": "피클",
            "itemEngName": "Pickle",
            "cost": "300"
        },
        {
            "itemName": "할라피뇨",
            "itemEngName": "Jalapeño",
            "cost": "300"
        }
    ]
}

let addItem = Array.from(document.querySelectorAll(".add-item"));
let addItemBtn = Array.from(document.querySelectorAll(".add-item-button"));
let subtract = Array.from(document.querySelectorAll(".subtract-item"));
let subtractBtn = Array.from(document.querySelectorAll(".subtract-item-button"));

for (let i = 0; i < addItem.length; i++) {
    addItem[0].addEventListener("click",()=>{
        addItemBtn[i].classList.remove('option-select-button-on');
        addItemBtn[0].classList.add('option-select-button-on');
    })

    addItem[i].addEventListener("click",()=>{
        if(addItemBtn[i].classList.contains('option-select-button-on')){
            addItemBtn[i].classList.remove('option-select-button-on');
        } else {
            addItemBtn[i].classList.add('option-select-button-on');
            addItemBtn[0].classList.remove('option-select-button-on');
        }
    })
    
}

for (let i = 0; i < subtract.length; i++) {
    subtract[0].addEventListener("click",()=>{
        subtractBtn[i].classList.remove('option-select-button-on');
        subtractBtn[0].classList.add('option-select-button-on');
    })

    subtract[i].addEventListener("click",()=>{
        if(subtractBtn[i].classList.contains('option-select-button-on')){
            subtractBtn[i].classList.remove('option-select-button-on');
        } else {
            subtractBtn[i].classList.add('option-select-button-on');
            subtractBtn[0].classList.remove('option-select-button-on');
        }
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


