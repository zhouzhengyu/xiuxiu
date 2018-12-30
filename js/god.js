var number,arr;
$(document).ready(function(){
    var url=window.location.search;
    if(url.indexOf("?")!=-1){
        number = url.substr(url.indexOf("=")+1);
    }else{
        return number;
    }

   
    for(var i=1;i<=number;i++){
        var p=[i];
        var n='请查看'+[i]+'号身份';
        var m='隐藏并传递给'+[i+1]+'号';
        var text='<li class="loading" id="loading'+i+'"><p class="luck" id="luck'+i+'"></p><span class="cover" id="cover'+i+'"><p class="loadingThree1" id="loadingThree1'+i+'"></p><p class="background" id="background'+i+'"></p></span><p class="two"></p><p class="loadingThree" id="loadingThree'+i+'"></p><button class="see" id="click'+i+'" onclick="see(id);"></button><button class="pass" id="deliver'+i+'" onclick="pass(id);"></button></li>';
        $(".main").append(text);
        var a = document.getElementById('loadingThree'+i+'');
        a.innerHTML =p;
        var loadingThree1 = document.getElementById('loadingThree1'+i+'');
        loadingThree1.innerHTML =p;
        var button = document.getElementById('click'+i+'');
        button.innerHTML =n; 
        var luck=document.getElementById('luck'+i+'');
        luck.style.backgroundImage="url('../img/3.png')";  
        var background=document.getElementById('background'+i+'');
        background.style.backgroundImage="url('../img/2.png')";  
        var deliver=document.getElementById('deliver'+i+'');
        deliver.innerHTML =m;  

    } 
    
    var list = document.getElementsByClassName('two');
    if(number==9){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民'];
        start();
    }else if(number==10){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','平民'];
        start();
    }else if(number==11){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','守卫','平民'];
        start();
    }else if(number==12){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','守卫','平民','白痴'];
        start();
    }
   
    function start(){
        shuffle(arr);
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML =arr[i];
        }
    }
    function shuffle(arr) {
        var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
    }
    $(".loading").hide();
    $(".pass").hide();
    $("#loading1").show();
    $(".death").hide(); 
})	

function see(id){
    var i=parseInt(id.substr(id.indexOf("k")+1));
    var math = document.getElementsByClassName('loading');
    var s=math.length;
    var deliver=document.getElementById('deliver'+s+'');
    if(i!=s){
        $("#cover"+i).hide();
        $("#background"+i).hide(); 
        $("#click"+i).hide(); 
        $("#deliver"+i).show(); 
    }else{
        $("#cover"+i).hide();
        $("#background"+i).hide(); 
        $("#click"+i).hide(); 
        $("#deliver"+i).show(); 
        deliver.innerHTML ="进入法官页面";  
    }
}
function pass(id){
    var i = id.substr(id.indexOf("r")+1);
    var j=parseInt(i)+1;
        var math = document.getElementsByClassName('loading');
        var s=math.length;
        if(i!=s){
            $("#loading"+i).hide();
            $("#loading"+j).show();
        }else{
            arr[i]=number;
            var getval =arr;
            window.location.href="loading.html?valus="+getval;   
        }
}