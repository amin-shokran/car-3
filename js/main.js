var Close=document.getElementById('close')
var boxcon = document.getElementById('boxcon')
var imgs= Array.from(document.querySelectorAll('.item img'))
var sp = document.querySelector(".sp")
var boxitem = document.getElementById('boxitem')
var next = document.getElementById('next')
var pref = document.getElementById('pref')
var icon =document.getElementById('icon')
var boxcount =document.getElementById('boxcount')
var bb = document.getElementById('bb')
var body = document.getElementById('body')


bb.addEventListener('click',function(){
if(body.classList[0]=='darrk'){

body.classList='body'

}else{
    body.classList='darrk'
    body.classList='darrk a'  
}

})




icon.addEventListener('click',function(){
window.alert("Excessive speed is one of the most prominent causes of traffic accidents that not only cause material damage to vehicles, but may also lead to the death of drivers and pedestrians, the term excessive speed refers to exceeding the speed limit through traffic signs scattered on the roads, which greatly enhances the risk")

}
    )
    

    




window.addEventListener('scroll',function(){
var x = window.scrollY;
if(x>790){
    sp.style.opacity=1;
}else{
    sp.style.opacity=0;
}
})



Close.addEventListener("click",function(){
    boxcon.style.display="none"

})
var imgindex=0


for (i=0;i<imgs.length; i++){
    imgs[i].addEventListener('click',function(e){


    imgindex=imgs.indexOf(e.target)
    boxitem.style.backgroundImage=`url(${e.target.src})`
    boxcon.style.display="flex"
})
    
}

next.addEventListener("click",nextit)
function nextit(){
    imgindex++
  if(imgindex==imgs.length){
    imgindex=0
  } 
  boxitem.style.backgroundImage=`url(${ imgs[imgindex].src})`
 
    
  
}



pref.addEventListener("click",prefimg)
function prefimg(){
    imgindex--
    if( imgindex<0){
        imgindex=imgs.length-1
    }
    boxitem.style.backgroundImage=`url(${ imgs[imgindex].src})`
 
}

 document.addEventListener('keyup',function(e){
if(e.key=="ArrowRight"){
    nextit()
}else if(e.key=="ArrowLeft"){
       prefimg()
}else if(e.key=="Escape"){
    boxcon.style.display="none"
}
 

 })