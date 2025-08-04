
const houseData = [
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
const filterOptions = [
    {
        category: 'fangxing',
        title: '房型',
        options: ['一室', '二室', '三室']
    },
    {
        category: 'chaoxiang',
        title: '朝向',
        options: ['朝南', '朝东', '朝北', '朝西']
    },
    {
        category: 'louceng',
        title: '楼层',
        options: ['低楼层', '中楼层', '高楼层']
    }
];

const sortOptions = ['默认排序', '房屋总价', '房屋单价', '房屋面积'];

const state = {
    filters: {
        fangxing: [],
        chaoxiang: [],
        louceng: []
    },
    sort: {
        type: 0, 
        ascending: true
    }
};
document.addEventListener('DOMContentLoaded', function() {
    renderFilterBox();
    renderSortTitles();
    renderHouseList();
    setupEventListeners();
});

function renderFilterBox() {
    const selectBox = document.querySelector('.select-box');
    selectBox.innerHTML = '';

    filterOptions.forEach(filter => {
        const group = document.createElement('div');
        group.className = filter.category;

        const title = document.createElement('p');
        title.textContent = filter.title;
        group.appendChild(title);

        filter.options.forEach(option => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = option;
            
           
            if (state.filters[filter.category].includes(option)) {
                checkbox.checked = true;
            }

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(option));
            group.appendChild(label);
        });

        selectBox.appendChild(group);
    });
}


function renderSortTitles() {
    const titleBox = document.querySelector('.titles');
    titleBox.innerHTML = '';

    sortOptions.forEach((title, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;
        li.textContent = title;
        
        
        if (index > 0) {
            const img = document.createElement('img');
            img.src = './img/paixu.svg';
            img.alt = '';
            img.className = 'sort-icon';
            li.appendChild(img);
        }

       
        if (index === 0) {
            li.classList.add('active');
        }

        titleBox.appendChild(li);
    });
}


function renderHouseList() {
    const filteredData = filterHouses();
    const sortedData = sortHouses(filteredData);
    const currentList = document.querySelector(`.content-box ul[data-index="${state.sort.type}"]`);

 
    document.querySelectorAll('.content-box ul').forEach(ul => {
        ul.innerHTML = '';
        ul.classList.add('hide');
    });

 
    currentList.classList.remove('hide');
    currentList.innerHTML = sortedData.map(house => `
        <li>
            <img src="${house.image}" alt="">
            <div class="right">
                <p class="intro">${house.roomName}</p>
                <p class="leixing">
                    <span>${house.roomStyle}</span><span>|</span>
                    <span>${house.roomTowards}</span><span>|</span>
                    <span>${house.roomFloor}</span><span>|</span>
                    <span>${house.area}平米</span>
                </p>
                <p class="zongjia">${house.totalPrice} <span>万</span></p>
                <p class="danjia">${house.unitPrice} <span>元/平</span></p>
            </div>
        </li>
    `).join('');
}


function filterHouses() {
    return houseData.filter(house => {
        return (state.filters.fangxing.length === 0 || state.filters.fangxing.includes(house.roomStyle)) &&
               (state.filters.chaoxiang.length === 0 || state.filters.chaoxiang.includes(house.roomTowards)) &&
               (state.filters.louceng.length === 0 || state.filters.louceng.includes(house.roomFloor));
    });
}


function sortHouses(data) {
    const sortedData = [...data];
    const { type, ascending } = state.sort;

    switch(type) {
        case 1: 
            sortedData.sort((a, b) => ascending ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice);
            break;
        case 2: 
            sortedData.sort((a, b) => ascending ? a.unitPrice - b.unitPrice : b.unitPrice - a.unitPrice);
            break;
        case 3: 
            sortedData.sort((a, b) => ascending ? a.area - b.area : b.area - a.area);
            break;
        default: 
            sortedData.sort((a, b) => a.totalPrice - b.totalPrice);
    }

    return sortedData;
}


function setupEventListeners() {
   
    filterOptions.forEach(filter => {
        document.querySelectorAll(`.${filter.category} input`).forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateFilterState(filter.category, this.value, this.checked);
                renderHouseList();
            });
        });
    });

   
    document.querySelectorAll('.titles li').forEach(li => {
        li.addEventListener('click', function(e) {
            const sortType = parseInt(this.dataset.index);
            const isIconClick = e.target.classList.contains('sort-icon');
            
            if (isIconClick) {
               
                state.sort.ascending = !state.sort.ascending;
                e.stopPropagation();
            } else {
                
                if (state.sort.type === sortType) {
                    state.sort.ascending = !state.sort.ascending;
                } else {
                    state.sort.type = sortType;
                    state.sort.ascending = true;
                }
            }
            
            updateSortUI();
            renderHouseList();
        });
    });
}


function updateFilterState(category, value, isChecked) {
    if (isChecked) {
        if (!state.filters[category].includes(value)) {
            state.filters[category].push(value);
        }
    } else {
        state.filters[category] = state.filters[category].filter(v => v !== value);
    }
}


function updateSortUI() {
    document.querySelectorAll('.titles li').forEach((li, index) => {
      
        li.classList.toggle('active', index === state.sort.type);
        
        
        const icon = li.querySelector('.sort-icon');
        if (icon) {
            if (index === state.sort.type) {
                icon.style.transform = state.sort.ascending ? 'rotate(0deg)' : 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });
}