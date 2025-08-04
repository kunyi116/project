var li=document.querySelectorAll('.title-list li')
var div=document.querySelectorAll('.lists div')
var btn=document.querySelector('.right-title')
li.forEach((item, index) =>{
            item.addEventListener('click', function() {
                if (index == 1) { 
                    btn.style.display = 'none';
                } else {
                    btn.style.display = 'flex';
                }
            });
        });
for(i=0; i<li.length; i++){
    li[i].onclick=function(){
        for(var j=0; j<div.length; j++){
            div[j].classList.add('hide')
            li[j].classList.remove('active')
        }
        div[this.dataset.index].classList.remove('hide')
        li[this.dataset.index].classList.add('active')
        
    }
}
    
    var bol=true
    function change(){
    var currentContent = document.querySelector('.box:not(.hide')
        a+=180
        var img=document.querySelector('.right-title img')
        img.style.transform=`rotate(${a}deg)`
        var ul1 = currentContent.querySelector('.list-one')
        var ul2 = currentContent.querySelector('.list-two')
    if(bol){
        ul1.classList.add('hide')
        ul2.classList.remove('hide')
    }
    else{
        ul1.classList.remove('hide')
        ul2.classList.add('hide')
    }
    bol=!bol
}

