const selectPayment = document.querySelector('.select-payment');
const selectSubMenu = document.querySelector('.submenu');

selectPayment.addEventListener("click",()=>{
    if(selectPayment.classList.contains('select-payment-click')){
        closeSelectPayment()
    }else{
        openSelectPayment()
    }

})



function closeSelectPayment(){
    selectPayment.classList.remove('select-payment-click');
    selectSubMenu.classList.remove('select-payment-click-submenu');
}
function openSelectPayment(){
    selectPayment.classList.add('select-payment-click');
    selectSubMenu.classList.add('select-payment-click-submenu');
}


let subMenuList = Array.from(document.querySelectorAll(".submenu > li"));

const selectPaymentOption = function(item) {
    selectPayment.children[0].children[0].innerHTML = item.textContent;  
    selectPayment.classList.remove('select-payment-click');
    selectSubMenu.classList.remove('select-payment-click-submenu');
}

// function selectPaymentOption() {
//     selectPayment.children[0].children[0].innerHTML = item.textContent;  
//     selectPayment.classList.remove('select-payment-click');
//     console.log('닫힘')
// }

subMenuList.forEach(function(option){
option.addEventListener('click', function(){selectPaymentOption(option)})
})
