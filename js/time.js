window.onload=function(){
    window.requestAnimationFrame(getDate)
}
function getDate(){
    window.setTimeout(function(){
    window.requestAnimationFrame(getDate)
    },1000/2)
    var d=new Date();   
    var year=d.getFullYear()
    var month=d.getMonth()+1;
    var day=d.getDay()
    var days=d.getDate()
    var hour=d.getHours()
    var minute=d.getMinutes()
    var second=d.getSeconds()
    if(month<10) month="0"+month
    if(days<10) days="0"+days
    if(hour<10) hour="0"+hour
    if(minute<10) minute="0"+minute
    if(second<10) second="0"+second
    var week=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六")
    var Tools=document.getElementById("Main")
    var da=year+"年"+month+"月"+days+"日 "+week[day]+" "+hour+":"+minute+":"+second
    Tools.innerHTML=da
}
