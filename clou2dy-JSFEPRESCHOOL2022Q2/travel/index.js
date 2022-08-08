// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };
const LoginButton = document.querySelector('.loginButton');
const LogAcc = document.querySelector('.logAccount');
const Reg = document.querySelector('.register')
const Creat = document.querySelector('.create')
const Acc = document.querySelector('.Account')

LoginButton.addEventListener('click', () => {
    LogAcc.classList.toggle('hiddenAccount');
})


LogAcc.addEventListener('click', (event) => {
    if(event.target.classList.contains('logAccount')){
        LogAcc.classList.toggle('hiddenAccount')
    }
    console.log(event);
})

Reg.addEventListener('click', () => {
    Creat.classList.toggle('hiddenCreate')
})

// document.addEventListener('click', function(e) {
//     e.stopPropagation();
//     if ( e.target.classList != '.logAccount' && e.target.classList != '.loginButton') {
//     second.classList.toggle('hiddenAccount');
//     }});


const Button = document.querySelector('.burgerimg');
const burger = document.querySelector('.burgerFon');
const menuClose = document.querySelector('.krest');
const overlay = document.querySelector('.vesbod');

// const menu = (event) => {
//     if (Button.classList.contains('close'))
// }


/*==========================================SLIDE=====================================*/

let offset = 0;
const Slide= document.querySelector('.slide');
const Pag= document.querySelector('.activePag');
const span= document.querySelector('.spainPag');
const tok = document.querySelector('.tokyoPag');
const usa = document.querySelector('.usaPag');

document.querySelector('.spainPag').addEventListener('click', () => {
    offset = offset + 800;
    if (offset < 800); {
       offset = 800;
       span.style.color = 'background: #F2785C'
    }
    Slide.style.left = offset + 'px';
})
document.querySelector('.usaPag').addEventListener('click', () => {
    offset = offset - 800;
    if (offset > -800); {
        offset = -800
    }
    Slide.style.left = offset + 'px';
})
document.querySelector('.tokyoPag').addEventListener('click', () => {
    offset = 0;
    Slide.style.left = offset + 'px';
})

/* ===========================================Phone Burger============================ */
Button.addEventListener('click', () => {
    burger.classList.toggle('hidden')
})

menuClose.addEventListener('click', () => {
    burger.classList.toggle('hidden')
})


// ===============================================
// Button.addEventListener('click', function() {
//     burger.classList.add('active');
//     burger.classList.remove('close');
//     console.log(Button.classList);
// })

// menuClose.forEach(element=>element.addEventListener('click', function() {
//     burger.classList.remove('active');
//     burger.classList.add('close');
// }));

// document.addEventListener('click', function(el) {
//     if ( el.target.id != 'burger' && el.target.id != 'center__header') {
//     burger.classList.remove('active');
//     burger.classList.add('close');
// }}); 


console.log('100 balovv )))');