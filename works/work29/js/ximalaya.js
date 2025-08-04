var divTop=document.querySelector('.bottom-line')
var lisTop=document.querySelectorAll('.sort li')
var imgTop=document.querySelector('.imgafter')
var topUl=document.querySelector('.sortTop')
function changedown(){
        if(event.target.dataset.index==0){
            divTop.style.left='-55px'
            console.log('-55','left')
           
        }else if(event.target.dataset.index==1){
            divTop.style.left='19px'
            console.log('19px','center')
            imgTop.style.transform='rotate(180deg)'
            topUl.style.top='0px'


        }else if(event.target.dataset.index==2){
            divTop.style.left='84px'
            console.log('84','right')
        }else if(event.target.dataset.index==3){
            topUl.style.top='0px'
            imgTop.style.transform='rotate(180deg)'
        } 
}
function defualt(){
    divTop.style.left='19px'
    if(event.target.dataset.index==1){
        imgTop.style.transform='rotate(0deg)'
        console.log(222)
        topUl.style.top='-163px'
    }else if(event.target.dataset.index==3){
        topUl.style.top='-163px'
        imgTop.style.transform='rotate(0deg)'
    }
}
const categories = [
  "音乐",
  "个人成长",
  "有声书",
  "广播剧",
  "娱乐",
  "有声图书",
  "外语",
  "人文国学",
  "儿童",
  "热点",
  "商业财经",
  "生活",
  "历史",
  "悬疑",
  "相声评书",
  "健康",
  "汽车"
];
var topUl=document.querySelector('.sortTop')
categories.forEach(function(item){
    topUl.innerHTML+=`
    <li><span>${item}</span></li>`
})
var topSerachUl=document.querySelector('.searchTop')
fetch("https://www.ximalaya.com/revision/search/hotWord?size=5").then(res=> res.json()).then(res2=>{
    res2.data.hots.forEach(function(item){
        topSerachUl.innerHTML+=`
            <li>${item}</li>
        `
    })
})
function topSearch(){
    topSerachUl.style.top='-8px'
    topSerachUl.style.opacity='1'
    topSerachUl.style.zIndex='100'
}
function leaveSearch(){
    topSerachUl.style.top='-5px'
    topSerachUl.style.opacity='0'
    topSerachUl.style.zIndex='-1'
}
var bannerUl=document.querySelector('.banner')
categories.forEach(function(item){
    bannerUl.innerHTML+=`
    <li><span>${item}</span></li>`
})
var ulContent=document.querySelector('.book-list')
fetch("https://www.ximalaya.com/revision/category/v2/albums?pageNum=1&pageSize=56&sort=1").then(res=> res.json()).then(res1=>{
    res1.data.albums.forEach(function(item){
        ulContent.innerHTML+=`
                <li>
                    <div class="up-box">
                        <img class="bigimg" src="https://imagev2.xmcdn.com/${item.albumCoverPath}" alt="">
                        ${item.albumSubscript<0?'':`<img class="vip" src="${item.subscriptInfo.url}" alt="">`}
                        <div class="bottom-black">
                            ${item.albumPlayCount>100000000?`<img src="./img/Headset-2.png" alt=""><span>${(item.albumPlayCount/100000000).toFixed(2)}亿</span>`:`<img src="./img/Headset-2.png" alt=""><span>${(item.albumPlayCount/10000).toFixed(1)}万</span>`}
                           
                        </div>
                        <div class="black"></div>
                        <div class="play">
                            <img src="./img/play.svg" alt="">
                        </div>
                    </div>
                    ${item.isFinished==2?`<p class="down-title"><span class="overBook">完本</span><span class="intro">${item.albumTitle}</span></p>`:`<p class="down-title"><span class="intro">${item.albumTitle}</span></p>`}
                    
                    <p class="author">${item.albumUserNickName}</p>
                </li>
    `
    })
})
