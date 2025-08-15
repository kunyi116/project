const ul1=document.querySelector('.left-tab')
const ul2=document.querySelector('.right-content')
let pages1=1
const Tab=(id='3873',attrs='0',page='1')=>{
    axios.get(`https://i.qtfm.cn/capi/neo-channel-filter?category=${id}&attrs=0&curpage=${page}`).then(res=>{
        console.log(res)
        res.data.data.categories.forEach(item=>{
            ul1.innerHTML+=`
            <li data-id="${item.id}" onclick="changeTab()">${item.name}</li>
        `
        ul1.firstElementChild.classList.add('active')
        })
    }).catch(err=>{
        console.log(err)
    })
}
const getContent=(id='3873',attrs='0',page=1)=>{
   axios.get(`https://i.qtfm.cn/capi/neo-channel-filter?category=${id}&attrs=${attrs}&curpage=${page}`).then(res=>{
    console.log(res)
    ul2.innerHTML=''
     res.data.data.channels.forEach(items=>{
            ul2.innerHTML+=`
                <li class="list">
                <div class="up-box">
                    <img src="${items.cover}" alt="">
                    <div class="${items.id}">
                        
                    </div>
                </div>
                <p class="title"><span class="sort">专辑</span><span class="shuming">${items.title}</span></p>
                <p class="intro">
                    ${items.description}
                </p>
                <div class="down-box">
                    <img src="./img/fire.svg" alt="">
                    <p>${items.clout}</p>
                </div>
            </li>
            `
            star(`.${items.id}`,items.score/2)
        })
   })
}
Tab()
getContent()
let nowId='3873'
const changeTab=()=>{
    ul2.innerHTML=''
    const lis=document.querySelectorAll('.left-tab li')
    lis.forEach(item=>{
        item.classList.remove('active')
    })
    event.target.classList.add('active')
    getContent(event.target.dataset.id,0,1)
    nowId=event.target.dataset.id
    pages1=1
    newContent()
    return nowId
}
const newContent=()=>{
layui.use(function(){
var laypage=layui.laypage
  laypage.render({
  elem: 'demo-laypage-hash',
  count: 750, // 数据总数，从后端得到
  curr:pages1,
  theme:'#E13430',
  jump: function(obj, first){
    console.log(obj.curr); // 得到当前页，以便向服务端请求对应页的数据。
    pages1=obj.curr
    getContent(nowId,0,pages1)
    if(!first){
      // do something
    }
  }
 
});
});
}
newContent()
const star=(x,y)=>{
   
layui.use(function(){
  var rate = layui.rate;
  // 渲染
  rate.render({ // eg1
    elem: x,
    value: y, // 初始值
    half: true ,// 开启半星
     readonly: true
  });
});

}