
var div=document.querySelector('.box')
var stars=''
var ul1=document.querySelector('.book-detail-label ul')
var p1=document.querySelector('.intro p')
var ul2=document.querySelector('.mulu ul')
fetch('https://m.lrts.me/ajax/getBookDetail?bookId='+window.location.search.split("/")[2]).then(res=>res.json()).then(res1=>{
    if(res1.data.bookDetail.state==1){
        for(var i=0;i<5;i++){
        stars+=`
        <img src="./img/gerystar.svg" alt="">`
    }
    }else if(res1.data.bookDetail.state==2){
        for(var i=0;i<5;i++){
        stars+=`
        <img src="./img/star.svg" alt="">`
    }
    }
    
    console.log(res1)
    div.innerHTML=`
    <div class="book-detail">
        <div class="img-box">
            <img src="${res1.data.bookDetail.bestCover}" alt="">
        </div>
        <div class="right-text">
            <div class="up-box">
                <p class="title">${res1.data.bookDetail.name}</p>
                <p class="star">${stars}</p>
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
    res1.data.bookDetail.labels.forEach(function(item){
        ul1.innerHTML+=`
        <li>${item.name}</li>
        `
    })
    p1.innerHTML=`
    ${res1.data.bookDetail.desc}
    `
    res1.data.bookDetail
    ul2.innerHTML+=`
    
    `
})
console.log(window.location.search.split("/")[2])
function backMain(){
    window.history.back()
}
var line=document.querySelector('.bottom-line')
var lis=document.querySelectorAll('.select-box li')
var divs=document.querySelectorAll('.selectContent div')
console.log(divs)
function Tab(){
     if(event.target.dataset.index==0){
            line.style.left='7.35rem'
        }else if(event.target.dataset.index==1){
            line.style.left='10.5rem'
        }
   
    lis.forEach(function(item){
        item.classList.remove('active')
       
    })
    event.target.classList.add('active')
     divs.forEach(function(items){
        items.classList.add('cang')
    })
    divs[event.target.dataset.index].classList.remove('cang')
    
}
var p=document.querySelector('.intro p')
var bol=false
var btn=document.querySelector('.zhankai')
function zhankai(){
    p.classList.toggle('yincang')
    if(bol==false){
        btn.innerHTML='收起'
        bol=!bol
    }else{
         btn.innerHTML='展开'
        bol=!bol
    }
}