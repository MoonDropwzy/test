function play(){
    document.getElementById('music1').pause()
    document.getElementById('music1').currentTime=0
    document.getElementById('music').volume=0.4
    document.getElementById('music').play()
}
function play1(){
    document.getElementById('music').pause()
    document.getElementById('music').currentTime=0
    document.getElementById('music1').play()
}
function clos(){ 
    document.getElementById('music').pause()
    document.getElementById('music').currentTime=0
} 
function clos1(){    
    document.getElementById('music1').pause()
    document.getElementById('music1').currentTime=0
} 
function close(){
    document.getElementById('baidu').style.display='none';
}
function stop(){
    document.getElementById('music1').pause()
    document.getElementById('music1').currentTime=0
    document.getElementById('music').pause()
    document.getElementById('music').currentTime=0
}