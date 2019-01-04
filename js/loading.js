var number,arr,b;
var num=0,num1=0,num2=0;
$(document).ready(function(){
    var url=decodeURI(window.location.search).slice(1); 
        b= url.substr(url.indexOf("=")+1);
        var arr = b.split(',');
        number=arr[arr.length-1];
        
    for(var i=1;i<=number;i++){
        var p=[i]+'号';
        var n='请查看'+[i]+'号身份';
        var text='<li class="loading"><p class="background" id="background'+i+'"></p><p class="death" id="death'+i+'"></p><p class="two" id="role'+i+'"></p><p class="loadingThree" id="loadingThree'+i+'"></p><button class="see" id="click'+i+'" onclick="see(id);"></button><button class="die" id="die'+i+'" onclick="judge(id)">存活</button></li>';
        $(".main").append(text);
        var a = document.getElementById('loadingThree'+i+'');
        a.innerHTML =p;
        var button = document.getElementById('click'+i+'');
        button.innerHTML =n; 
        var background=document.getElementById('background'+i+'');
        background.style.backgroundImage="url('../img/2.png')";  
        var death=document.getElementById('death'+i+'');
        death.style.backgroundColor="#ccc";   
    } 
    var list = document.getElementsByClassName('two');
    start();
    function start(){
        for (var i = 0; i < number; i++) {
            list[i].innerHTML =arr[i];
        }
    }
    cum();
function cum(){
    for (var i = 0; i < number; i++) {
    if(arr[i]=="平民"||arr[i]=="白痴"){
        num+=1;
    }else if(arr[i]=="狼人"){
        num1+=1;
    }else if(arr[i]=="预言家"||arr[i]=="女巫"||arr[i]=="猎人"||arr[i]=="守卫")	{
        num2+=1;
    }else{
        continue;
    }
}
}
    $(".death").hide(); 
})	
function see(id){
    var i = id.substr(id.indexOf("k")+1);
    var button= document.getElementById('click'+i+'');
    var p='请查看'+[i]+'号身份';
    $("#background"+i).toggle(); 
    if(button.innerHTML==p){
        button.innerHTML=[i]+'号身份';
    }else{
        button.innerHTML=p;
    }
}
var i,n;
function judge(id){
     i = id.substr(id.indexOf("e")+1);
     n =document.getElementById('death'+i+'');
if(n.innerHTML==""){
    die();
}else{
    $.alert({
        title:'上帝提示',
        content:[i]+'号玩家已经死亡',
        type:'red',
    })
}
}
function die(){
    var list = document.getElementsByClassName('two');
    var die=document.getElementById('die'+i+'');
    var button = document.getElementById('click'+i+'');
    var r=[i]+"号死亡状态";							
    $.confirm({
        title:'上帝提示',
        content:'请确定'+[i]+'号玩家是否死亡？',
        type:'red',
        buttons:{
            ok:{
                text:'确定',
                btnClass:'btn-primary',
                action:function(){
                    n.innerHTML =list[i-1].innerHTML; 
                    $("#death"+i).show(); 	
                    die.style.backgroundColor="#ccc"; 
                    die.innerHTML="死亡";
                    die.style.color="#fff";	  			
                    button.style.backgroundColor="#ccc";   
                    button.innerHTML=r;	
                    button.style.color="#fff";
                    win();	
                    end();
                }
              },
           cancel: {
               text:'取消',
                 action:function(){					 
               }
           }
    }	
})
}
function win(){
    var w=document.getElementById('role'+i+'');
    if( w.style.backgroundColor="#ccc"&&(w.innerHTML=="平民"||w.innerHTML=="白痴")){
         num-=1;   
         return num;           
    }else if(w.style.backgroundColor="#ccc"&&w.innerHTML=="狼人"){
        num1-=1;
        return num1;
    }else if(w.style.backgroundColor="#ccc"&&(w.innerHTML=="预言家"||w.innerHTML=="女巫"||w.innerHTML=="猎人"||w.innerHTML=="守卫")){
        num2-=1;
        return num2;
    }
}
function end(){
    if(num==0||num2==0){
        $.alert({
            title:'上帝提示',
            content:'游戏结束-狼人获胜',
            type:'red',
        })
    }else if(num1==0){
        $.alert({
            title:'上帝提示',
            content:'游戏结束-狼人失败',
            type:'red',
        })
    }
}