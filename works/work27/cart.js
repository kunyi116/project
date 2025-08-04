var carts = [
    {
        PhoneName: 'Xiaomi 14 16GB+512GB 白色',
        price: 1000,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png?thumb=1&w=100&h=100&f=webp&q=90',
        bol:false,
    },
    {
        PhoneName: 'Redmi Note 13 Pro 8GB+256GB 蓝色',
        price: 899,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202507091728_3ad696cb411dd5fa99a9283d9c324649.png?thumb=1&w=100&h=100&f=webp&q=90',
        bol:false,
    },
    {
        PhoneName: 'Xiaomi 13 Ultra 12GB+512GB 黑色',
        price: 1299,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504231730_5ed659adaedf3b33ed141930314e8bd1.png?thumb=1&w=100&h=100&f=webp&q=90',
        bol:false,
    },
    {
        PhoneName: 'Redmi K70 12GB+256GB 银色',
        price: 799,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202507091728_3ad696cb411dd5fa99a9283d9c324649.png?thumb=1&w=100&h=100&f=webp&q=90',
        bol:false,
    },
    {
        PhoneName: 'Xiaomi Mix Fold 3 16GB+1TB 金色',
        price: 1599,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504231730_5ed659adaedf3b33ed141930314e8bd1.png?thumb=1&w=100&h=100&f=webp&q=90',
        bol:false,
    },
]
var ul=document.querySelector('.list')
function addList(){
    carts.forEach(function(item,index){
    ul.innerHTML+=`
            <li data-index="${index}">
                <div class="checkone">
                    <input type="checkbox" oninput="oneSelect(${index})">
                </div>
                <div class="img-box">
                    <img src="${item.img}" alt="">
                </div>
                <p class="ph-name">${item.PhoneName}
                </p>
                <p class="ph-price">${item.price}元</p>
                <div class="calc">
                    <p><button class="deduce">-</button><span>${item.mount}</span><button class="increase">+</button></p>
                </div>
                <p class="xiaoji">${item.price*item.mount}元</p>
                <p class="shanchu" onclick="del()">删除</p>
            </li>`
})
}
addList()
var money=0
var totalNumber=0
var selectAllbox=document.querySelector('.checkAll input')
var allCheckbox=document.querySelectorAll('.list input')
var selectNow=document.querySelector('.selectNow span')
var allPrice=document.querySelector('.total-money span')
function selectAll(){
    allCheckbox.forEach(function(item,index){
        if(selectAllbox.checked){
            carts[index].bol=true
            item.checked=true
        }else{
            carts[index].bol=false
            item.checked=false
        }
    })
}
function oneSelect(i){
     allCheckbox.forEach(function(item,index){
        if(event.target.checked==false){
            selectAllbox.checked=false
        }else{
            event.target.checked=true
        }
    })
}
function del(){
    const index = event.target.parentNode.dataset.index;
    event.target.parentNode.remove()
    carts.splice(index,1)
    console.log(carts)
     const checkbox = event.target.parentNode.querySelector('.checkone input');
    updateTotalPrice()
    

}
function updateTotalPrice() {
    money = 0;
    const checkboxes = document.querySelectorAll('.list input');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked && carts[index]) {
            money += carts[index].price * carts[index].mount;
        }
    });
    document.querySelector('.total-money span').innerHTML = money;
}
