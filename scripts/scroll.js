// document.querySelector('.header-menu__logo').style.border = '1px solid red'; - разогрев
// console.dir(document.querySelector('.header-menu__logo'));

const scrollFunc = ()=>{
// const link = document.querySelector('.header-menu__item a');
const links = document.querySelectorAll('.header-menu__item a');
const detalLink = document.querySelector('.card-details__link-characteristics');

const newArray = [...links, detalLink]
//seamless.polyfill();
// detalLink.forEach((el)=>{
//     el.addEventListener('click', (event)=>{
//         event.preventDefault();

//         const id = el.getAttribute('href').substring(1);
//     const section = document.getElementById(id);

//     if (section){
//         seamless.elementScrollIntoView(section,{
//             behavior:'smooth',                                                           //Твой вариант реализации
//             block: 'start'
//         });
//     }else{
//         seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
//         behavior: "smooth",
//         block: "center",
//         inline: "center",
//     });
//     }
//    })
// })

// const array = [1,2,3,4,5,6];

// console.log(link);
// console.log(links);

// // for (let i =0; i<=array.length; i++){
// //     console.log(array[i]);
// // }

// array.forEach((i)=>{
//     console.log(i);
// })

newArray.forEach((elem)=>{
   elem.addEventListener('click', (event)=>{
   event.preventDefault();   
   
    const id = elem.getAttribute('href').substring(1);
    const section = document.getElementById(id);
   
    // if (id !=="#"){
    //     const section = document.querySelector(id); //Вариант 1
    //     console.log(section);
    // }else{
    //     console.log('У меня просто нет #');
    // }
    if (section){
        seamless.elementScrollIntoView(section,{
            behavior:'smooth',
            block: 'start'
        });
    }else{
        seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
   })
})
}
scrollFunc();

