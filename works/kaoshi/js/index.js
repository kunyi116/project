var div=document.querySelector('.lists-box')
fetch('https://m.lrts.me/ajax/getHomePage').then(res=>res.json()).then(res1=>{
    console.log(res1)
    
    res1.data.indexModuleList.forEach(function(item){
        var lis=''
        item.list.forEach(function(items){
            lis+=`
                 <li onclick="jump('${items.baseEntityId}')">
                    <img src="${items.cover}" alt="">
                    <p>${items.desc}</p>
                </li>
            `
        })
        div.innerHTML+=`
        <div class="lists">
            <div class="lists-title-box">
                <p class="list-title">${item.name}</p>
                <p class="more">更多</p>
            </div>
            <ul class="bookList">
               ${lis}
            </ul>
        </div>
        `
    })

})
function jump(id){
    window.location.href='detail.html?/book/'+id
}