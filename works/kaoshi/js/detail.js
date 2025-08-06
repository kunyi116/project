
var div=document.querySelector('.box')
fetch('https://m.lrts.me/ajax/getBookDetail?bookId='+window.location.search.split("/")[2]).then(res=>res.json()).then(res1=>{
    console.log(res1)
    div.innerHTML=`
    <div class="book-detail">
        <div class="img-box">
            <img src="${res1.data.bookDetail.bestCover}" alt="">
        </div>
        <div class="right-text">
            <div class="up-box">
                <p class="title">${res1.data.bookDetail.name}</p>
                <p class="star"><img src="./img/star.svg" alt=""></p>
            </div>
            <div class="down-box">
                <p><span>${res1.data.bookDetail.type}</span> <span>|</span> <span>${res1.data.bookDetail.author}</span> <span>著</span>
                </p>
                <p>${res1.data.bookDetail.announcer} 播</p>
                <p><span>完结全276集</span><span>${Math.floor(res1.data.bookDetail.play/10000)}万次播放</span></p>
            </div>
        </div>
    </div>
    `
})
console.log(window.location.search.split("/")[2])
function backMain(){
    window.history.back()
}