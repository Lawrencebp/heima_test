// 轮播图

const imgSource = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg',
]
let index = 0
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
next.addEventListener('click',function (){
    if(index < imgSource.length - 1){
        index++
        const img = document.querySelector('.introduce img')
        img.src = imgSource[index]
        console.log(index)
    }
})
prev.addEventListener('click',function (){
    if(index >= 1){
        index--
        const img = document.querySelector('.introduce img')
        img.src = imgSource[index]
        console.log(index)
    }
})


// document.querySelector('#food').addEventListener('click',function (e){
//     console.log(this.offsetTop)
// })

