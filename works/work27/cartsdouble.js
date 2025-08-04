var carts = [
    {
        PhoneName: 'Xiaomi 14 16GB+512GB 白色',
        price: 1000,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png?thumb=1&w=100&h=100&f=webp&q=90',
        checked: false
    },
    {
        PhoneName: 'Redmi Note 13 Pro 8GB+256GB 蓝色',
        price: 899,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202507091728_3ad696cb411dd5fa99a9283d9c324649.png?thumb=1&w=100&h=100&f=webp&q=90',
        checked: false
    },
    {
        PhoneName: 'Xiaomi 13 Ultra 12GB+512GB 黑色',
        price: 1299,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504231730_5ed659adaedf3b33ed141930314e8bd1.png?thumb=1&w=100&h=100&f=webp&q=90',
        checked: false
    },
    {
        PhoneName: 'Redmi K70 12GB+256GB 银色',
        price: 799,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202507091728_3ad696cb411dd5fa99a9283d9c324649.png?thumb=1&w=100&h=100&f=webp&q=90',
        checked: false
    },
    {
        PhoneName: 'Xiaomi Mix Fold 3 16GB+1TB 金色',
        price: 1599,
        mount: 1,
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504231730_5ed659adaedf3b33ed141930314e8bd1.png?thumb=1&w=100&h=100&f=webp&q=90',
        checked: false
    }
];
var ul = document.querySelector('.list');
var selectAllCheckbox = document.querySelector('.checkAll input');
var totalMoneyElement = document.querySelector('.total-money span');
var selectedCountElement = document.querySelector('.selectNow span');
function renderCart() {
    ul.innerHTML = '';
    carts.forEach(function(item, index) {
        ul.innerHTML += `
            <li data-index="${index}">
                <div class="checkone">
                    <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleCheckbox(${index})">
                </div>
                <div class="img-box">
                    <img src="${item.img}" alt="">
                </div>
                <p class="ph-name">${item.PhoneName}</p>
                <p class="ph-price">${item.price}元</p>
                <div class="calc">
                    <p><button class="deduce" onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.mount}</span>
                    <button class="increase" onclick="changeQuantity(${index}, 1)">+</button></p>
                </div>
                <p class="xiaoji">${item.price * item.mount}元</p>
                <p class="shanchu" onclick="deleteItem(${index})">删除</p>
            </li>`;
    });
    updateSummary();
}
function updateSummary() {
    let total = 0;
    let count = 0;
    carts.forEach(item => {
        if (item.checked) {
            total += item.price * item.mount;
            count++;
        }
    });
    totalMoneyElement.textContent = total;
    selectedCountElement.textContent = count;
    const allChecked = carts.length > 0 && carts.every(item => item.checked);
    selectAllCheckbox.checked = allChecked;
}
function toggleCheckbox(index) {
    carts[index].checked = !carts[index].checked;
    updateSummary();
}
function selectAll() {
    const isChecked = selectAllCheckbox.checked;
    carts.forEach(item => {
        item.checked = isChecked;
    });
    renderCart(); 
}
function changeQuantity(index, change) {
    const newQuantity = carts[index].mount + change;
    if (newQuantity < 1) return;
    carts[index].mount = newQuantity;
    const li = document.querySelector(`.list li[data-index="${index}"]`);
    if (li) {
        li.querySelector('.calc span').textContent = newQuantity;
        li.querySelector('.xiaoji').textContent = (carts[index].price * newQuantity) + '元';
    }
    updateSummary();
}
function deleteItem(index) {
    const wasChecked = carts[index].checked;
    carts.splice(index, 1);
    renderCart();
    if (wasChecked) {
        updateSummary();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    renderCart();
});