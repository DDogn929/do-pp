const order = document.querySelector('.Select-order-button-tl');
const delivery = order.querySelector('.delivery');
const packaging = order.querySelector('.packaging');

const login = document.querySelector('.login');
const memberIn = login.querySelector('.member-login-button');
const noMemberIn = login.querySelector('.non-members-login-button');
const socialIn = login.querySelectorAll('.social-login-button');
const xButton = login.querySelector('.x-button-1 > img')

const store = document.querySelector('.store-search-m');
const storeSet = store.querySelector('.search-button');

const address = document.querySelector('.address-search');
const addressSet = address.querySelector('.search-button');

let logined = false;

let deliveryed = false;
let packaginged = false;

function reset () {
    deliveryed = false;
    packaginged = false;
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
    } else {
        login.style.display = 'none';
        store.style.display = 'flex';
        logined = true;
    }

}

delivery.addEventListener("click",()=>{
    deliveryed = true;
    openLogin ();

    console.log(deliveryed);
    console.log(packaginged);
    console.log('배달주문');
})

packaging.addEventListener("click",()=>{
    packaginged = true;
    openLogin ();
    
    console.log(deliveryed);
    console.log(packaginged);
    console.log('방문포장');
})

memberIn.addEventListener("click",()=>{
    setLogin ();

    console.log('회원로그인');
})

noMemberIn.addEventListener("click",()=>{
    setLogin ();

    console.log('비회원로그인');
})

for (let i = 0; i < socialIn.length; i++) {
    
    socialIn[i].addEventListener("click",()=>{
        setLogin ();
    
        console.log('소셜로그인');
    })
    
}

storeSet.addEventListener("click",()=>{
    store.style.display = 'none';
})

store.addEventListener("click",()=>{
    store.style.display = 'none';
    reset()
})

addressSet.addEventListener("click",()=>{
    address.style.display = 'none';
})

address.addEventListener("click",()=>{
    address.style.display = 'none';
    reset()

})

xButton.addEventListener("click",()=>{
    login.style.display = 'none';
    
    deliveryed = false;
    packaginged = false;
    console.log('로그인취소');
})



// transform: translateY(30px);