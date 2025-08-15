var ul=document.querySelector('.list')
var p1=document.querySelector('.top-sort')
var div=document.querySelector('.bottom-box')
var logo=document.querySelector('.logo')
var t=null
var getValue= function(){
    logo.style.display='block'
     if(t) {
            clearTimeout(t)
       }
       t=setTimeout(function() {
        
    ul.innerHTML=''
    var value=document.querySelector('.iptbox input').value
    if(value==''){
        p1.style.display='none'
        div.style.display='none'
        logo.style.display='none'
    }else{
        fetch(`https://i.maoyan.com/apollo/ajax/search?kw=${value}&cityId=1&stype=-1&WuKongReady=h5`).then(res=>res.json()).then(res1=>{
            console.log(res1.movies.list)
        res1.movies.list.forEach(function(item){
             ul.innerHTML+=`
                <li>
                    <img src="${item.img}" alt="">
                    <div class="text">
                        <div class="type-box">
                            <p class="title">${item.nm}</p>
                            ${item.ver==''?'':item.ver=='IMAX 3D/中国巨幕3D'?'<span class="type3D"></span>':'<span class="type2D"></span>'}
                            
                        </div>
                        <p class="English-title">${item.enm}</p>
                        <p class="sort">${item.cat}</p>
                        <p class="time">${item.rt}</p>
                        ${item.sc==0?'<p class="norating">暂无评分<p class="norating">':`<p class="rating">${item.sc}<span>分</span></p>`}
                        ${item.showst==1?'<p class="look">想看</p>':item.showst==3||item.showst==4?'<p class="buy">购票</p>':''}
                        

                    </div>
                </li>
                `
        })
        p1.style.display='block' 
        div.style.display='block'
        
        div.innerHTML=`
            <p class="total">查看全部<span>${res1.movies.total}</span>部影视剧</p>
        `
    })
    }
    
    
},500)
   
}