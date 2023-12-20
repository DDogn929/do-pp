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