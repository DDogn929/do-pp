const headerLogin = document.querySelector('.header-login')
const loginSet = headerLogin.querySelector('.in')
const loginSetOut = headerLogin.querySelector('.out')

const pcStart = document.querySelector('.pc-main-button')

const order = document.querySelector('.Select-order-button-tl');
const delivery = order.querySelector('.delivery');
const packaging = order.querySelector('.packaging');

const login = document.querySelector('.login');
const memberIn = login.querySelector('.member-login-button');
const noMemberIn = login.querySelector('.non-members-login-button');
const socialIn = login.querySelectorAll('.social-login-button');

let xButton = Array.from(document.querySelectorAll(".x-button-img"));

const store = document.querySelector('.store-search-m');
const storeSet = store.querySelector('.search-button');

const address = document.querySelector('.address-search');
const addressSet = address.querySelector('.search-button');

const payment = document.querySelector('.payment-section')
const setDelivery = payment.querySelector('.payment-delivery')
const setPackaging = payment.querySelector('.payment-packaging')

let logined = false;

let deliveryed = false;
let packaginged = false;


function loginReset () {
    deliveryed = false;
    packaginged = false;
}

function loginOut () {
    loginSet.style.display = 'none';
    loginSetOut.style.display = 'flex';
}

function openLogin () {
    if(logined) {
        setLogin()
    }else{
        login.style.display = 'flex';
    }
}

function setLogin () {

    if(deliveryed) {
        login.style.display = 'none';
        address.style.display = 'flex';
        logined = true;
        loginOut ()
    } else if (packaginged) {
        login.style.display = 'none';
        store.style.display = 'flex';
        logined = true;
        loginOut ()
    } else {
        login.style.display = 'none';
        logined = true;
        loginOut ()
    }

}

function scrollLock() {
    document.body.style.overflow = 'hidden';
}

function scrollUnlock() {
    document.body.style.removeProperty('overflow');
}

// window.onload = function () {
//     setTimeout (function () {
//         scrollTo(0,0);
//     }, 100);
// }

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

if (logined) {
    document.body.style.removeProperty('overflow');
} else {
    document.body.style.overflow = 'hidden';
}

headerLogin.addEventListener("click",()=>{
    if(logined){
        loginSet.style.display = 'flex';
        loginSetOut.style.display = 'none';
        logined = false;
    } else {
        login.style.display = 'flex';
        scrollLock()
    }
    
})

pcStart.addEventListener("click",()=>{
    if(logined){
        // loginSet.style.display = 'flex';
        // loginSetOut.style.display = 'none';
        // logined = false;
    } else {
        login.style.display = 'flex';
        scrollLock();
    }
})

delivery.addEventListener("click",()=>{
    deliveryed = true;
    packaginged = false;
    openLogin();
    scrollLock();
    setDelivery.style.display = 'flex';
    setPackaging.style.display = 'none';

    console.log('배달주문');
})

packaging.addEventListener("click",()=>{
    deliveryed = false;
    packaginged = true;
    openLogin();
    scrollLock();
    setDelivery.style.display = 'none';
    setPackaging.style.display = 'flex';
    
    console.log('방문포장');
})

memberIn.addEventListener("click",()=>{
    setLogin ();
    scrollUnlock();
    console.log('회원로그인');
})

noMemberIn.addEventListener("click",()=>{
    setLogin ();
    scrollUnlock();
    console.log('비회원로그인');
})

for (let i = 0; i < socialIn.length; i++) {
    
    socialIn[i].addEventListener("click",()=>{
        setLogin ();
        scrollUnlock();
        console.log('소셜로그인');
    })
    
}

storeSet.addEventListener("click",()=>{
    store.style.display = 'none';
    scrollUnlock();
})

// store.addEventListener("click",()=>{
//     store.style.display = 'none';
//     reset()
// })

addressSet.addEventListener("click",()=>{
    address.style.display = 'none';
    scrollUnlock();
})

// if (address.style.display = 'flex') {
//     mBackSpaceBtn.addEventListener("click",()=>{
//         address.style.display = 'none';
//     })
// }

// address.addEventListener("click",()=>{
//     address.style.display = 'none';
//     reset()

// })

xButton[0].addEventListener("click",()=>{
    login.style.display = 'none';
    loginReset();
    scrollUnlock();
    console.log('로그인취소');
})

xButton[1].addEventListener("click",()=>{
    store.style.display = 'none';
    address.style.display = 'none';
    loginReset();
    scrollUnlock();
    console.log('선택취소');
})

xButton[2].addEventListener("click",()=>{
    store.style.display = 'none';
    address.style.display = 'none';
    loginReset();
    scrollUnlock();
    console.log('선택취소');
})



// transform: translateY(30px);