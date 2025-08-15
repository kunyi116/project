function Col(){
    event.target.parentNode.style.border='1px solid #3964fe'
    // event.target.nextElementSibling.style.display='block'
}
function noCol(){
    event.target.parentNode.style.border='1px solid #e0e0e0'
    // event.target.nextElementSibling.style.display='none'
}
var ipts=document.querySelectorAll('.ipt input')
var bol1=false
function catchValue1(){
    var valueone=document.querySelector('.yonghu input').value
    var reg1=/^(?=.*_)[A-Za-z][0-9A-Za-z_]{3,11}$/
    var p1=document.querySelector('.p1')
        if(reg1.test(valueone)==true){
            
            p1.innerHTML='符合要求'
            p1.style.display='block'
            p1.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
        }else{
            event.target.parentNode.style.border='1px solid red'
            p1.innerHTML='请按要求输入'
            p1.style.display='block'
            p1.style.color='red'
            return bol1=false
        }     
}
var valuetwo
function catchValue2(){
     valuetwo=document.querySelector('.mima input').value
    reg2=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/
    var p2=document.querySelector('.p2')
    if(reg2.test(valuetwo)==true){
       
         p2.innerHTML='符合要求'
            p2.style.display='block'
            p2.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
    }else{
      
        event.target.parentNode.style.border='1px solid red'
            p2.innerHTML='请按要求输入'
            p2.style.display='block'
            p2.style.color='red'
            return bol1=false
    }
}
function catchValue3(){
    var valuethree=document.querySelector('.queren input').value
    reg3=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/
    console.log(bol1)
    var p3=document.querySelector('.p3')
    if(reg3.test(valuethree)==true && valuethree==valuetwo){
       
         p3.innerHTML='确认成功'
            p3.style.display='block'
            p3.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
    }else{
        
        event.target.parentNode.style.border='1px solid red'
            p3.innerHTML='检查密码一致性'
            p3.style.display='block'
            p3.style.color='red'
            return bol1=false
    }
}
function catchValue4(){
    var valuefour=document.querySelector('.youxiang input').value
    var reg4=/^(?:[a-z0-9]+(?:[._-][a-z0-9]+)*@(?:qq|163|sina)\.com)$/i
    var p4=document.querySelector('.p4')
    if(reg4.test(valuefour)==true){
       
         p4.innerHTML='符合要求'
            p4.style.display='block'
            p4.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
    }else{
        
        event.target.parentNode.style.border='1px solid red'
            p4.innerHTML='请按要求输入'
            p4.style.display='block'
            p4.style.color='red'
            return bol1=false
    }
}
function catchValue5(){
    var valuefive=document.querySelector('.phone input').value
     var reg5=/^1[0-9]{10}/
      var p5=document.querySelector('.p5')
      if(reg5.test(valuefive)==true){
       
         p5.innerHTML='符合要求'
            p5.style.display='block'
            p5.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
    }else{
        event.target.parentNode.style.border='1px solid red'
            p5.innerHTML='请按要求输入'
            p5.style.display='block'
            p5.style.color='red'
            return bol1=false
    }
}
function catchValue6(){
    var valuesix=document.querySelector('.shenfen input').value
     var reg6=/^4[0-9]{17}/
     var p6=document.querySelector('.p6')
      if(reg6.test(valuesix)==true){
       
         p6.innerHTML='符合要求'
            p6.style.display='block'
            p6.style.color='green'
            event.target.parentNode.style.border='1px solid green'
            return bol1=true
    }else{
        event.target.parentNode.style.border='1px solid red'
            p6.innerHTML='请按要求输入'
            p6.style.display='block'
            p6.style.color='red'
            return bol1=false
    }
}
var values=[]
function getValue(){
    values=[]
    ipts.forEach(function(item){
        values.push(item.value)
        values=values.filter(Boolean)
        
        return values
    })
    if(bol1==true && values.length==6){
        alert('注册成功')
        window.location.href='https://www.immomo.com/'
    }else{
        ipts.forEach(function(items){
            items.parentNode.style.border='1px solid red'
            items.nextElementSibling.style.display='block'
            items.nextElementSibling.innerHTML='请输入内容'
            items.nextElementSibling.style.color='red'
            items.parentNode.style.transform=translate
            items.value=''
            console.log(items.nextElementSibling)
        })
        
        alert('注册失败 请重新输入信息')

    }
    console.log(values)
}