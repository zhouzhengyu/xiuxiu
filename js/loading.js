var number,arr,b;
$(document).ready(function(){
    var url=decodeURI(window.location.search).slice(1); 
        b= url.substr(url.indexOf("=")+1);
        var arr = b.split(',');
        number=arr[arr.length-1];
        
    for(var i=1;i<=number;i++){
        var p=[i]+'号';
        var n='请查看'+[i]+'号身份';
        var text='<li class="loading"><p class="background" id="background'+i+'"></p><p class="death" id="death'+i+'"></p><p class="two"></p><p class="loadingThree" id="loadingThree'+i+'"></p><button class="see" id="click'+i+'" onclick="see(id);"></button><button class="die" id="die'+i+'" onclick="judge(id)">存活</button></li>';
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
    $(".death").hide(); 
})	
function see(id){
    $('#myModal').modal();
    var i = id.substr(id.indexOf("k")+1);
    $("#background"+i).toggle(); 
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
        content:' 玩家已经死亡',
        type:'red',
    })
}
}
function die(){
    var list = document.getElementsByClassName('two');
    var die=document.getElementById('die'+i+'');
    var button = document.getElementById('click'+i+'');
    $.confirm({
        title:'上帝提示',
        content:'请确定玩家是否死亡？',
        type:'red',
        buttons:{
            ok:{
                text:'确定',
                btnClass:'btn-primary',
                action:function(){
                    n.innerHTML =list[i].innerHTML; 
                    $("#death"+i).show(); 	
                    die.style.backgroundColor="#ccc"; 
                    die.innerHTML="死亡";
                    die.style.color="#fff";	  			
                    button.style.backgroundColor="#ccc";   
                    button.innerHTML="死亡状态";	
                    button.style.color="#fff";	  									
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
