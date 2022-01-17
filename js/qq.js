function check(){
    var G= document.getElementById('lt').value;
    var g= document.getElementById('st').value;
    if (g !=""){
        document.getElementById('sts').innerHTML="<font color='green' size='2px'>✔</font>";
    }
    else{
        document.getElementById('sts').innerHTML="<font color='red' size='2px'>✘账号不为空</font>";
    }

    var f= document.getElementById('sp').value;
    var d= document.getElementById('sp1').value;
    var F= document.getElementById('lp').value;
    if (F==''){
        document.getElementById('lps').innerHTML="<font color='red' size='2px'>✘密码不为空</font>";
    }
    if (f ==""){
        document.getElementById('sps').innerHTML="<font color='red' size='2px'>✘密码不为空</font>";
    }
    if (d==''){
        document.getElementById('sps1').innerHTML="<font color='red ' size='2px'>✘密码不为空</font>";
    }
    if(G!=''&F!=''&F!=d){
        document.getElementById('lps').innerHTML="<font color='red' size='2px'>✘密码错误!</font>";
    }

}
function lcheck(){
    var G= document.getElementById('lt').value;
    if (G==''){
        document.getElementById('lts').innerHTML="<font color='red' size='2px'>✘账号不为空</font>";
    }
    else{
        document.getElementById('lts').innerHTML="<font color='red' size='2px'></font>";
    }
    var d= document.getElementById('sp1').value;
    var F= document.getElementById('lp').value;
    if (F==''){
        document.getElementById('lps').innerHTML="<font color='red' size='2px'>✘密码不为空</font>";
    }
    if(G!=''&F!=''&F!=d){
        document.getElementById('lps').innerHTML="<font color='red' size='2px'>✘密码错误!</font>";
    }
    if (F!=''&F==d){
        document.getElementById('lps').innerHTML="<font color='green' size='2px'></font>";
        setTimeout("alert('登录成功!')",0)
        document.getElementById('ma').style.display="none";
        document.getElementById('after').style.display="block";
    }
    
}
function scheck(){
    var f= document.getElementById('sp').value;
    var d= document.getElementById('sp1').value;
    if (f !=''&d!=''&f==d){
        document.getElementById('sps').innerHTML="<font color='green' size='2px'>✔</font>";
        document.getElementById('sps1').innerHTML="<font color='green' size='2px'>✔</font>";
        setTimeout("alert('注册成功!')",0)
    }
    if (f !=""&d!=''&f!=d){
        document.getElementById('sps').innerHTML="<font color='red' size='2px'>✘密码不一致</font>";
        document.getElementById('sps1').innerHTML="<font color='red' size='2px'>✘密码不一致</font>";
    }
}
function codelogn(){
    document.getElementById('mmlogn').style.display='none';
    document.getElementById('mmlogn1').style.display='none';
    document.getElementById('mmlogn2').style.display='none';
    document.getElementById('lb').style.display='none';
    document.getElementById('code').style.display='none';
    document.getElementById('codeimg').style.display='block';
    document.getElementById('back').style.display='block';
}
function back(){
    document.getElementById('mmlogn').style.display='block';
    document.getElementById('mmlogn1').style.display='block';
    document.getElementById('mmlogn2').style.display='block';
    document.getElementById('sb').style.display='none';
    document.getElementById('lb').style.display='block';
    document.getElementById('gsb').style.display='block';
    document.getElementById('code').style.display='block';
    document.getElementById('codeimg').style.display='none';
    document.getElementById('back').style.display='none';
    document.getElementById('go').style.display='none';
}
function sign(){
    document.getElementById('mmlogn') .style.display='none';
    document.getElementById('mmlogn1').style.display='none';
    document.getElementById('mmlogn2').style.display='none';
    document.getElementById('mmsign3').style.display='block';
    document.getElementById('mmsign1').style.display='block';
    document.getElementById('mmsign2').style.display='block';
    document.getElementById('sb')     .style.display='block';
    document.getElementById('lb')     .style.display='none';
    document.getElementById('gsb')    .style.display='none';
    document.getElementById('code')   .style.display='none';
    document.getElementById('codeimg').style.display='none';
    document.getElementById('back')   .style.display='none';
    document.getElementById('go')     .style.display='block';
    document.getElementById('re')     .style.display='block';
}
function gosign(){
    document.getElementById('mmlogn').style.display='block';
    document.getElementById('mmlogn1').style.display='block';
    document.getElementById('mmlogn2').style.display='block';
    document.getElementById('mmsign3').style.display='none';
    document.getElementById('mmsign1').style.display='none';
    document.getElementById('mmsign2').style.display='none';
    document.getElementById('sb').style.display='none';
    document.getElementById('lb').style.display='block';
    document.getElementById('gsb').style.display='block';
    document.getElementById('code').style.display='block';
    document.getElementById('codeimg').style.display='none';
    document.getElementById('back').style.display='none';
    document.getElementById('go').style.display='none';
}
