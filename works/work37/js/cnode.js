const lis=document.querySelectorAll('.Tab li')
const ul=document.querySelector('.list')
const ul2=document.querySelector('.page')
let nowContent='all'
const Tab=()=>{
    ul.innerHTML=''
    lis.forEach(item=>{
        item.classList.remove('active')  
    })
    event.target.classList.add('active')
    resetAll(event.target.dataset.tab,'1')
    
    nowContent=event.target.dataset.tab
}

const resetAll=(e='all',p='1')=>{
    const timeNow=new Date().getTime()
    fetch(`https://cnodejs.org/api/v1/topics?tab=${e}&limit=10&page=${p}`).then(res=>res.json()).then(res1=>{
    console.log(res1)
        ul2.innerHTML=`
            
            <li data-index="1">1</li>
            <li data-index="2">2</li>
            <li data-index="3">3</li>
            <li data-index="4">4</li>
            <li data-index="5">5</li>
        `
    res1.data.forEach(item=>{
        let timePast=new Date(item.last_reply_at).getTime()
        let timeAll=timeNow-timePast
        ul.innerHTML+=`
        <li>
                <div class="left">
                    <img src="${item.author.avatar_url}" alt="">
                    <div class="num-box">
                        <p class="num-content">
                            <span class="big-num">
                            ${item.reply_count}
                        </span>
                        <span class="gang">/</span>
                        <span class="little-num">
                            ${item.visit_count}
                        </span>
                        </p>
                    </div>

                    ${item.top==true?'<p class="top">置顶</p>':item.good==true?'<p class="top">精华</p>':item.tab=='share'?'<p class="sort">分享</p>':'<p class="sort">问答</p>'}
                    
                    <p class="intro">${item.title}
                    </p>
                </div>
                <div class="right">
                    ${item.reply_count==0?'':`<img src="${item.author.avatar_url}" alt="">`}
                    ${timeAll/1000/60/60/24/30/12>1?`<p class="time">${Math.floor(timeAll/1000/60/60/24/30/12)} 年前</p>`:timeAll/1000/60/60/24/30>1?`<p class="time">${Math.floor(timeAll/1000/60/60/24/30)} 月前</p>`:timeAll/1000/60/60/24>1?`<p class="time">${Math.floor(timeAll/1000/60/60/24)} 天前</p>`:timeAll/1000/60/60>1?`<p class="time">${Math.floor(timeAll/1000/60/60)} 小时前</p>`:`<p class="time">${Math.floor(timeAll/1000/60)} 分钟前</p>`}
                </div>
            </li>
    `
    })
    
}).catch(err=>{
    console.log(err)
})
}
resetAll()

const changePage=()=>{
    ul.innerHTML=''
    resetAll(nowContent,event.target.dataset.index)
   
    
}