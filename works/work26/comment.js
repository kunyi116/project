var names = [
  "Emma Johnson",
  "Liam Smith",
  "Olivia Williams",
  "Noah Brown",
  "Ava Jones",
  "William Garcia",
  "Sophia Miller",
  "James Davis",
  "Isabella Rodriguez",
  "Benjamin Martinez",
  "Mia Hernandez",
  "Lucas Lopez",
  "Charlotte Gonzalez",
  "Henry Wilson",
  "Amelia Anderson",
  "Alexander Thomas",
  "Harper Taylor",
  "Michael Moore",
  "Evelyn Jackson",
  "Daniel Martin"
]
var imgs = [
  "https://api.dicebear.com/7.x/adventurer/svg?seed=1",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=2",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=3",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=4",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=5",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=6",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=7",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=8",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=9",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=10",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=11",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=12",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=13",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=14",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=15",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=16",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=17",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=18",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=19",
  "https://api.dicebear.com/7.x/adventurer/svg?seed=20"
]
var city = [
  "北京", 
  "上海",
  "广州",
  "深圳",
  "杭州",
  "成都",
  "重庆",
  "西安",
  "南京",
  "武汉",
  "纽约",
  "伦敦",
  "巴黎",
  "东京",
  "悉尼",
  "新加坡",
  "柏林",
  "莫斯科",
  "迪拜",
  "罗马"
]
var ul=document.querySelector('.content')
var text=document.querySelector('textarea') 
function add() {
    var name=names[Math.floor(Math.random()*names.length)]
    var head=imgs[Math.floor(Math.random()*imgs.length)]
    var district=city[Math.floor(Math.random()*city.length)]
    var time=new Date().toLocaleDateString()
    var value=document.querySelector('textarea').value
    var revalue=value.trim()
    if(value=='' || revalue.length <= 0){
            alert('请输入内容')
            text.value=''
        }else{
            ul.innerHTML=`
        <li>
            <img src="${head}" alt="">
            <div class="text">
                <p class="name">${name}</p>
                <p class="txt">${value}</p>
                <span class="hide">展开</span>
                <div class="bottom">
                    <div class="left">
                        <span class="time">${time}</span>
                        <span class="position">${district}</span>
                        <span class="del" onclick="del()">删除</span>
                    </div>
                    <p class="like" onclick="calc(this)">点赞<span class="count">0</span></p>
                </div>
            </div>
        </li>
        `
        +ul.innerHTML
        text.value=''
        }
}
function calc(btn) {
    var countElement = btn.querySelector('.count');
    var currentCount = parseInt(countElement.textContent);
    countElement.textContent = currentCount + 1;
    
}
function del() {
const result = confirm('确定要删除此评论吗？');
if (result) { event.target.parentNode.parentNode.parentNode.parentNode.remove()}
}
// var p=document.querySelector('.txt')
// var span=document.querySelector('.txt span')
// function checkwidth(){
//     var currentWidth= p.scrollWidth > p.clientWidth;
//     if(currentWidth){
//         span.classList.remove('hide')
//     }
// }




