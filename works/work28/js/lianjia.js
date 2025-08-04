var selectList = [
    {
        roomName: '悦湖会1楼带院适合低楼层客户，小院有20平方左右',
        roomStyle: '一室',
        roomTowards: '朝东',
        roomFloor: '低楼层',
        totalPrice: 8380,
        unitPrice: 17794,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_k5psqXvOm.jpg.296x216.jpg',
        area:100,
    },
    {
        roomName: '阳光花园3楼采光好，视野开阔',
        roomStyle: '二室',
        roomTowards: '朝南',
        roomFloor: '中楼层',
        totalPrice: 12500,
        unitPrice: 21500,
        image: 'http://image1.ljcdn.com/110000-inspection/pc1_VwLIWB8AY_1.jpg.296x216.jpg',
        area:130,
    },
    {
        roomName: '湖畔雅居8楼安静舒适，适合家庭居住',
        roomStyle: '三室',
        roomTowards: '朝西',
        roomFloor: '高楼层',
        totalPrice: 18500,
        unitPrice: 24500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_L6J7Tfm8c_1.jpg.296x216.jpg',
        area:110,
    },
    {
        roomName: '城市花园2楼带阳台，交通便利',
        roomStyle: '一室',
        roomTowards: '朝北',
        roomFloor: '低楼层',
        totalPrice: 9200,
        unitPrice: 19500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_lXGgsYyNY_1.jpg.296x216.jpg',
        area:106,
    },
    {
        roomName: '绿洲公寓5楼精装修，拎包入住',
        roomStyle: '二室',
        roomTowards: '朝东',
        roomFloor: '中楼层',
        totalPrice: 13800,
        unitPrice: 22500,
        image: 'http://image1.ljcdn.com/110000-inspection/pc1_VwLIWB8AY_1.jpg.296x216.jpg',
        area:170,
    },
    {
        roomName: '金域华府12楼全景落地窗，视野极佳',
        roomStyle: '三室',
        roomTowards: '朝南',
        roomFloor: '高楼层',
        totalPrice: 21000,
        unitPrice: 26500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_L6J7Tfm8c_1.jpg.296x216.jpg',
        area:90,
    },
    {
        roomName: '温馨家园1楼带小院，适合老人小孩',
        roomStyle: '一室',
        roomTowards: '朝西',
        roomFloor: '低楼层',
        totalPrice: 8800,
        unitPrice: 18500,
        image: 'http://image1.ljcdn.com/110000-inspection/pc1_VwLIWB8AY_1.jpg.296x216.jpg',
        area:108,
    },
    {
        roomName: '中央公馆7楼南北通透，通风良好',
        roomStyle: '二室',
        roomTowards: '朝北',
        roomFloor: '中楼层',
        totalPrice: 14500,
        unitPrice: 23500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_L6J7Tfm8c_1.jpg.296x216.jpg',
        area:70,
    },
    {
        roomName: '星河湾15楼豪华装修，高端社区',
        roomStyle: '三室',
        roomTowards: '朝东',
        roomFloor: '高楼层',
        totalPrice: 22500,
        unitPrice: 28500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_k5psqXvOm.jpg.296x216.jpg',
        area:97,
    },
    {
        roomName: '幸福里4楼简约风格，生活便利',
        roomStyle: '一室',
        roomTowards: '朝南',
        roomFloor: '中楼层',
        totalPrice: 9500,
        unitPrice: 20500,
        image: 'https://image1.ljcdn.com/110000-inspection/pc1_L6J7Tfm8c_1.jpg.296x216.jpg',
        area:160,
    }
];
var titleList=[
    '默认排序','房屋总价','房屋单价','房屋面积'
]
const filterOptions = [
  {
    category: 'fangxing',
    title: '房型',
    options: [
      { value: '一室', label: '一室' },
      { value: '二室', label: '二室' },
      { value: '三室', label: '三室' }
    ]
  },
  {
    category: 'chaoxiang',
    title: '朝向',
    options: [
      { value: '朝南', label: '朝南' },
      { value: '朝东', label: '朝东' },
      { value: '朝北', label: '朝北' },
      { value: '朝西', label: '朝西' }
    ]
  },
  {
    category: 'louceng',
    title: '楼层',
    options: [
      { value: '低楼层', label: '低楼层' },
      { value: '中楼层', label: '中楼层' },
      { value: '高楼层', label: '高楼层' }
    ]
  }
];
function renderFilterBox() {
  const selectBox = document.querySelector('.select-box');
  selectBox.innerHTML = '';
  
  filterOptions.forEach(filter => {
    const filterGroup = document.createElement('div');
    filterGroup.className = filter.category;
    
    const title = document.createElement('p');
    title.textContent = filter.title;
    filterGroup.appendChild(title);
    
    filter.options.forEach(option => {
      const label = document.createElement('label');
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = option.value;
      
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(option.label));
      
      filterGroup.appendChild(label);
    });
    
    selectBox.appendChild(filterGroup);
  });
  
  // 添加事件监听器
  setupFilterEventListeners();
}

// 初始化渲染
document.addEventListener('DOMContentLoaded', renderFilterBox);
var titleBox=document.querySelector('.titles')
function addTitle(){
    titleList.forEach(function(item,index){
    titleBox.innerHTML+=`
    <li data-index="${index}" onclick="changeList()">${item}
    <img data-index=${index} src="./img/paixu.svg" alt="" onclick="changearr()">
    </li>
    `
})
}
addTitle()
var a=0
var uls=document.querySelectorAll('.content-box ul')
var li=document.querySelectorAll('.titles li')
var imgs=document.querySelectorAll('.titles li img')
imgs[0].style.display="none"
li[0].classList.add('active')
function changeList(){
    uls.forEach(function(items){
        items.classList.add('hide')
    })
    uls[event.target.dataset.index].classList.remove('hide')
    li.forEach(function(item,index){
        item.classList.remove('active')
    })
    li[event.target.dataset.index].classList.add('active')
}

var ul=document.querySelector('.homelist')
function addContent(){
    selectList.forEach(function(item,index){
        ul.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })
}
addContent()

var ul1=document.querySelector('.listone')
var arr1=selectList.sort(function(a,b){
    return a.totalPrice-b.totalPrice
})
arr1.forEach(function(item,index){
        ul1.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })

var ul2=document.querySelector('.listtwo')
var arr2=selectList.sort(function(a,b){
    return a.unitPrice-b.unitPrice
})
arr2.forEach(function(item,index){
        ul2.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })

var ul3=document.querySelector('.listthree')
var arr3=selectList.sort(function(a,b){
    return a.area-b.area
})
arr3.forEach(function(item,index){
        ul3.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })
var bol=true
function changearr(){
    ul1.innerHTML=``
    a+=180
    imgs[event.target.dataset.index].style.transform=`rotate(${a}deg)`
    if(event.target.dataset.index==1 && bol==true){
        arr1=arr1.sort(function(a,b){
        return b.totalPrice-a.totalPrice
})
        arr1.forEach(function(item,index){
        ul1.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })
    bol=!bol
    }else{
        arr1=arr1.sort(function(a,b){
        return a.totalPrice-b.totalPrice
})
        arr1.forEach(function(item,index){
        ul1.innerHTML+=`
            <li>
                <img src="${item.image}" alt="">
                <div class="right">
                    <p class="intro">${item.roomName}</p>
                    <p class="leixing"><span>${item.roomStyle}</span><span>|</span><span>${item.roomTowards}</span><span>|</span><span>${item.roomFloor}</span><span>|</span><span>${item.area}平米</span></p>
                    <p class="zongjia">${item.totalPrice} <span>万</span></p>
                    <p class="danjia">${item.unitPrice} <span>元/平</span></p>
                </div>
            </li>
    `
    })
    bol=!bol
    }   
}