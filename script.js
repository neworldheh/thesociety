let uniteText = document.querySelector('.unite')
let uniteScale = 1
let uniteRight = 10
let lastscroll = 0

function scrollControl(){
    window.addEventListener('scroll', function() {
        console.log('Scroll Y:', window.scrollY);
        if (window.scrollY > lastscroll && lastscroll >= 0) {
            uniteScale += 0.01
            uniteRight -= 1
        }else if(uniteScale > 1){
            uniteScale -= 0.01
            uniteRight += 1
        }
        //     setTimeout(() => {

        //     }, 1000);
        uniteText.style.scale = `${uniteScale}`
        uniteText.style.right = `${uniteRight}vw`
        uniteText.style.filter = `blur(${uniteRight * -1}px)`
        lastscroll = window.scrollY
    });
}
scrollControl()
// scale not font
// let uniteText = document.querySelector('.unite')
// let uniteFont = 100
// let lastscroll = 0

// function scrollControl(){
//     window.addEventListener('scroll', function() {
//         console.log('Scroll Y:', window.scrollY);
//         if (window.scrollY > lastscroll && lastscroll >= 0) {
//             uniteFont += 1
//         }else{
//             uniteFont -= 1
//         }
//         //     setTimeout(() => {

//         //     }, 1000);
//         uniteText.style.fontSize = `${uniteFont}px`
//         lastscroll = window.scrollY
//     });
// }
// scrollControl()
// scale not font