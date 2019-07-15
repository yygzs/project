// JavaScript Document	



window.onload = function (){
	fixed_buy();
	Calculator();
    //getposition();
	//getposition();
	
}

function tanchuang(){
	setTimeout("tanchuang2()",1000);
}
function tanchuang2(){
	alert("优玩旅游网已收到您提交的旅行需求，我们的策划师将在12小时内联系您。");
	}

var t=5;
function yuding_success(){
		document.getElementById("show_success").style.display="block";
		setTimeout("yuding_success()",1000); 
 		document.getElementById('time_10').innerHTML=t;
 		t--;
		if(t==-1){ 
 		location.href="../index.html";
 	}
} 

function Calculator(){
	var people=document.getElementById("select").value;
	var child=document.getElementById("select2").value;
	var m1=document.getElementById("checkbox").checked;
	var m2=document.getElementById("checkbox3").checked;
	var m3=document.getElementById("checkbox4").checked;
	var m4=document.getElementById("checkbox2").checked;
	var chengren=(document.getElementById("xianshi5_1").innerHTML)*people;
	var ertong=(document.getElementById("xianshi6_2").innerHTML)*child;
	var sum1=document.getElementById("buy_sum1").innerHTML=chengren+ertong;
	var money01;
	var money02;
	var money03;
	var money04;
	var baoxian_sum;
	if(m1==true){
		document.getElementById("xianshi3").style.display="block";
		document.getElementById("xianshi4").style.display="block";
		money01=10;
		}else{
			document.getElementById("xianshi3").style.display="none";
			document.getElementById("xianshi4").style.display="none";
			money01=0;
			}
	if(m2==true){
		money02=25;
		}else{
			money02=0;
			}
	if(m3==true){
		money03=8;
		}else{
			money03=0;
			}
	if(m4==true){
		document.getElementById("xianshi").style.display="block";
		document.getElementById("xianshi2").style.display="block";
		money04=5;
		}else{
			document.getElementById("xianshi").style.display="none";
			document.getElementById("xianshi2").style.display="none";
			money04=0;
			}
		baoxian_sum=money01+money02+money03+money04;
		document.getElementById("baoxian_display").innerHTML=baoxian_sum;
		document.getElementById("xianshi5").innerHTML=people;
		document.getElementById("xianshi6").innerHTML=child;
		document.getElementById("sum").innerHTML=sum1+baoxian_sum;
	setTimeout("Calculator()",0);
	}

function fixed_buy(){
	var num3=document.getElementById("fixed_buy").offsetTop;
	var num4=window.pageYOffset;
	if(num4>=num3){
		document.getElementById("fixed_buy").className="fixed_buy";
		}
	if(num4<121 && num3==0){
			document.getElementById("fixed_buy").className="buy_right";
			}
	setTimeout("fixed_buy()",1);
	}


function fixed_second() {

	var num0=document.getElementById("yincang_right").offsetTop;
	var num1=document.getElementById("fixed_second").offsetTop;
	var num2=window.pageYOffset;
	if(num2>800 && num2<5250){
		document.getElementById("second_gotop").style.display="block";
		}else{
			document.getElementById("second_gotop").style.display="none";
			}
	if(num2>=num1){
		document.getElementById("fixed_second").className="fixed_num";
		}
	if(num2<689 && num1==40){
			document.getElementById("fixed_second").className="right";
			}
	if(num2>=num0){
		document.getElementById("fixed_second").style.display="none";
		}else{
			document.getElementById("fixed_second").style.display="block";
			}
	setTimeout("fixed_second()",0);
	}
function fixed_second2(){
	var fixed_num2=window.pageYOffset;
	if(fixed_num2>800){
		document.getElementById("second_gotop2").style.display="block";
		}else{
			document.getElementById("second_gotop2").style.display="none";
			}
	setTimeout("fixed_second2()",1);
}
function login() {
   // alert("fd");
    var name = document.getElementById("fName").value;
    var pwd = document.getElementById("fPass").value;
   // alert(name);
    $.post("html/login.ashx", { "landuserName": name, "landuserPass": pwd }, function (data) {
        //alert(data);
        //var b = data;
        //var o = true;
        if (data == "True"){
            alert("登录成功！");
            //document.getElementById("tongguoLand").href = "../index.html";
            window.location.href = "../index.html";
            return true;
        } else {
            alert("账号或密码错误!");
            return false;
        }
    });
}
function zhuxiao() {
    //alert("注销");
    $.post("html/login.ashx", { "name": "zhuxiao" }, function (data) {
       // alert(data);
        document.getElementById("zhuye").innerHTML = "<a href='html/land.html'>请登陆</a> | <a href='html/register.html'>免费注册</a>";


    });
}
function zhuxiao1() {
    //alert("注销");
    $.post("login.ashx", { "name": "zhuxiao" }, function (data) {
        // alert(data);
        document.getElementById("zhuye").innerHTML = "<a href='land.html'>请登陆</a> | <a href='register.html'>免费注册</a>";


    });
}
function position() {
    $.post("html/login.ashx", { "name": "name" }, function (data) {
        //alert(data);
        //alert(data);
        //var b = data;
        //var o = true;
        if (data == "") {
            
            document.getElementById("zhuye").innerHTML = "<a href='html/land.html'>请登陆</a> | <a href='html/register.html'>免费注册</a>";

        }
        else {
            document.getElementById("zhuye").innerHTML = "用户名：<a href='#'>" + data + "</a> | <a href='#' onclick='zhuxiao()'>注销</a>";
        }

    });
   // alert("fdsf");
}
function position2() {
    alert("fdsf");
}
function position1() {
    //alert("fdsf");
    $.post("login.ashx", { "name": "name" }, function (data) {
        //alert(data);
        if (data == "") {

            document.getElementById("zhuye").innerHTML = "<a href='land.html'>请登陆</a> | <a href='register.html'>免费注册</a>";

        }
        else {
            document.getElementById("zhuye").innerHTML = "用户名：<a href='#'>" + data + "</a> | <a href='#' onclick='zhuxiao1()'>注销</a>";
        }

    });
  

}

function getposition() {
   
	var po_01=document.getElementById("top").offsetTop;
	var po_02=document.getElementById("part1").offsetTop;
	var po_03=document.getElementById("po03").offsetTop;
	var po_04=document.getElementById("po04").offsetTop;
	var po_05=document.getElementById("po05").offsetTop;
	var po_06=document.getElementById("po06").offsetTop;
	var po_07=document.getElementById("po07").offsetTop;
	var getscrollpo=window.pageYOffset+100;
	if(getscrollpo>=po_01 && getscrollpo<=po_02){
		document.getElementById("gotop").style.display="none";
		}else{
			document.getElementById("gotop").style.display="block";
			}
	if(getscrollpo>=po_02 && getscrollpo<=po_03){
		document.getElementById("changeColor02").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor02").style.backgroundColor="#333";
			}
	if(getscrollpo>=po_03 && getscrollpo<=po_04){
		document.getElementById("changeColor03").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor03").style.backgroundColor="#333";
			}
	if(getscrollpo>=po_04 && getscrollpo<=po_05){
		document.getElementById("changeColor04").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor04").style.backgroundColor="#333";
			}
	if(getscrollpo>=po_05 && getscrollpo<=po_06){
		document.getElementById("changeColor05").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor05").style.backgroundColor="#333";
			}
	if(getscrollpo>=po_06 && getscrollpo<=po_07){
		document.getElementById("changeColor06").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor06").style.backgroundColor="#333";
			}
	if(getscrollpo>=po_07){
		document.getElementById("changeColor07").style.backgroundColor="#FFF";
		}else{
			document.getElementById("changeColor07").style.backgroundColor="#333";
			}
	setTimeout("getposition()", 100);
	}

 function showdiv(s){
  if(s=="1"){
  document.getElementById("content1").className="content contentfirst";//显示标题1的内容 下面代码类似不在添加注释
  document.getElementById("content2").className="contentfirst";//隐藏标题2的内容 下面代码类似不在添加注释
  document.getElementById("content3").className="contentfirst";//隐藏标题3的内容 下面代码类似不在添加
  document.getElementById("content4").className="contentfirst";
  
  document.getElementById("li1").className="hover";//使标题一与正文内容相连接  下面代码类似 不在加注释添
  document.getElementById("li2").className=null;//使标题2与正文内容相离  下面代码类似 不在添加注释
  document.getElementById("li3").className=null;//使标题3与正文内容相离  下面代码类似 不在添加注释
  document.getElementById("li4").className=null;//使标题3与正文内容相离  下面代码类似 不在添加注释
  }else if(s=="2"){
  document.getElementById("content1").className="contentfirst";
  document.getElementById("content2").className="content contentfirst";
  document.getElementById("content3").className="contentfirst";
  document.getElementById("content4").className="contentfirst";
  
  document.getElementById("li1").className=null;
  document.getElementById("li2").className="hover";
  document.getElementById("li3").className=null;
  document.getElementById("li4").className=null;
  }else if(s=="3"){
  document.getElementById("content1").className="contentfirst";
  document.getElementById("content2").className="contentfirst";
  document.getElementById("content3").className="content contentfirst";
  document.getElementById("content4").className="contentfirst";
  
  document.getElementById("li1").className=null;
  document.getElementById("li2").className=null;
  document.getElementById("li3").className="hover";
  document.getElementById("li4").className=null;
  }
  else{
  document.getElementById("content1").className="contentfirst";
  document.getElementById("content2").className="contentfirst";
  document.getElementById("content3").className="contentfirst";
  document.getElementById("content4").className="content contentfirst";
  
  document.getElementById("li1").className=null;
  document.getElementById("li2").className=null;
  document.getElementById("li3").className=null;
  document.getElementById("li4").className="hover";
  }
 }

  function showpart(s){
  if(s=="1"){
  document.getElementById("title_content1").className="title_content title_contentfirst";
  document.getElementById("title_content2").className="title_contentfirst";
  document.getElementById("title_content3").className="title_contentfirst";
  document.getElementById("title_content4").className="title_contentfirst";
  
  document.getElementById("li01").className="title_hover";
  document.getElementById("li02").className=null;
  document.getElementById("li03").className=null;
  document.getElementById("li04").className=null;
  }else  if(s=="2"){
  document.getElementById("title_content1").className="title_contentfirst";
  document.getElementById("title_content2").className="title_content title_contentfirst";
  document.getElementById("title_content3").className="title_contentfirst";
  document.getElementById("title_content4").className="title_contentfirst";
  
  document.getElementById("li01").className=null;
  document.getElementById("li02").className="title_hover";
  document.getElementById("li03").className=null;
  document.getElementById("li04").className=null;
  }else  if(s=="3"){
  document.getElementById("title_content1").className="title_contentfirst";
  document.getElementById("title_content2").className="title_contentfirst";
  document.getElementById("title_content3").className="title_content title_contentfirst";
  document.getElementById("title_content4").className="title_contentfirst";
  
  document.getElementById("li01").className=null;
  document.getElementById("li02").className=null;
  document.getElementById("li03").className="title_hover";
  document.getElementById("li04").className=null;
  }else if(s=="4"){
  document.getElementById("title_content1").className="title_contentfirst";
  document.getElementById("title_content2").className="title_contentfirst";
  document.getElementById("title_content3").className="title_contentfirst";
  document.getElementById("title_content4").className="title_content title_contentfirst";
  
  document.getElementById("li01").className=null;
  document.getElementById("li02").className=null;
  document.getElementById("li03").className=null;
  document.getElementById("li04").className="title_hover";
  
  }else if(s=="5"){
  document.getElementById("title_content5").className="title_content title_contentfirst";
  document.getElementById("title_content6").className="title_contentfirst";
  document.getElementById("title_content7").className="title_contentfirst";
  document.getElementById("title_content8").className="title_contentfirst";
  
  document.getElementById("li05").className="title_hover";
  document.getElementById("li06").className=null;
  document.getElementById("li07").className=null;
  document.getElementById("li08").className=null;
  
  }else  if(s=="6"){
  document.getElementById("title_content5").className="title_contentfirst";
  document.getElementById("title_content6").className="title_content title_contentfirst";
  document.getElementById("title_content7").className="title_contentfirst";
  document.getElementById("title_content8").className="title_contentfirst";
  
  document.getElementById("li05").className=null;
  document.getElementById("li06").className="title_hover";
  document.getElementById("li07").className=null;
  document.getElementById("li08").className=null;
  }else  if(s=="7"){
  document.getElementById("title_content5").className="title_contentfirst";
  document.getElementById("title_content6").className="title_contentfirst";
  document.getElementById("title_content7").className="title_content title_contentfirst";
  document.getElementById("title_content8").className="title_contentfirst";
  
  document.getElementById("li05").className=null;
  document.getElementById("li06").className=null;
  document.getElementById("li07").className="title_hover";
  document.getElementById("li08").className=null;
  }else if(s=="8"){
  document.getElementById("title_content5").className="title_contentfirst";
  document.getElementById("title_content6").className="title_contentfirst";
  document.getElementById("title_content7").className="title_contentfirst";
  document.getElementById("title_content8").className="title_content title_contentfirst";
  
  document.getElementById("li05").className=null;
  document.getElementById("li06").className=null;
  document.getElementById("li07").className=null;
  document.getElementById("li08").className="title_hover";
  }
  else if(s=="9"){
  document.getElementById("title_content9").className="title_content title_contentfirst";
  document.getElementById("title_content10").className="title_contentfirst";
  document.getElementById("title_content11").className="title_contentfirst";
  document.getElementById("title_content12").className="title_contentfirst";
  
  document.getElementById("li09").className="title_hover";
  document.getElementById("li10").className=null;
  document.getElementById("li11").className=null;
  document.getElementById("li12").className=null;
  
  }else  if(s=="10"){
  document.getElementById("title_content9").className="title_contentfirst";
  document.getElementById("title_content10").className="title_content title_contentfirst";
  document.getElementById("title_content11").className="title_contentfirst";
  document.getElementById("title_content12").className="title_contentfirst";
  
  document.getElementById("li09").className=null;
  document.getElementById("li10").className="title_hover";
  document.getElementById("li11").className=null;
  document.getElementById("li12").className=null;
  }else  if(s=="11"){
  document.getElementById("title_content9").className="title_contentfirst";
  document.getElementById("title_content10").className="title_contentfirst";
  document.getElementById("title_content11").className="title_content title_contentfirst";
  document.getElementById("title_content12").className="title_contentfirst";
  
  document.getElementById("li09").className=null;
  document.getElementById("li10").className=null;
  document.getElementById("li11").className="title_hover";
  document.getElementById("li12").className=null;
  }else if(s=="12"){
  document.getElementById("title_content9").className="title_contentfirst";
  document.getElementById("title_content10").className="title_contentfirst";
  document.getElementById("title_content11").className="title_contentfirst";
  document.getElementById("title_content12").className="title_content title_contentfirst";
  
  document.getElementById("li09").className=null;
  document.getElementById("li10").className=null;
  document.getElementById("li11").className=null;
  document.getElementById("li12").className="title_hover";
  }else if(s=="13"){
  document.getElementById("title_content13").className="title_contentjd title_contentfirstjd";
  document.getElementById("title_content14").className="title_contentfirstjd";
  document.getElementById("title_content15").className="title_contentfirstjd";
  document.getElementById("title_content16").className="title_contentfirstjd";
  
  document.getElementById("li13").className="title_hover";
  document.getElementById("li14").className=null;
  document.getElementById("li15").className=null;
  document.getElementById("li15").className=null;
  
  }else  if(s=="14"){
  document.getElementById("title_content13").className="title_contentfirstjd";
  document.getElementById("title_content14").className="title_contentjd title_contentfirstjd";
  document.getElementById("title_content15").className="title_contentfirstjd";
  document.getElementById("title_content16").className="title_contentfirstjd";
  
  document.getElementById("li13").className=null;
  document.getElementById("li14").className="title_hover";
  document.getElementById("li15").className=null;
  document.getElementById("li16").className=null;
  }else  if(s=="15"){
  document.getElementById("title_content13").className="title_contentfirstjd";
  document.getElementById("title_content14").className="title_contentfirstjd";
  document.getElementById("title_content15").className="title_contentjd title_contentfirstjd";
  document.getElementById("title_content16").className="title_contentfirstjd";
  
  document.getElementById("li13").className=null;
  document.getElementById("li14").className=null;
  document.getElementById("li15").className="title_hover";
  document.getElementById("li16").className=null;
  }else if(s=="16"){
  document.getElementById("title_content13").className="title_contentfirstjd";
  document.getElementById("title_content14").className="title_contentfirstjd";
  document.getElementById("title_content15").className="title_contentfirstjd";
  document.getElementById("title_content16").className="title_contentjd title_contentfirstjd";
  
  document.getElementById("li13").className=null;
  document.getElementById("li14").className=null;
  document.getElementById("li15").className=null;
  document.getElementById("li16").className="title_hover";
  }else if(s=="17"){
  document.getElementById("title_content17").className="title_contentgl title_contentfirstgl";
  document.getElementById("title_content18").className="title_contentfirstgl";
  document.getElementById("title_content19").className="title_contentfirstgl";
  document.getElementById("title_content20").className="title_contentfirstgl";
  
  document.getElementById("li17").className="title_hover";
  document.getElementById("li18").className=null;
  document.getElementById("li19").className=null;
  document.getElementById("li20").className=null;
  
  }else  if(s=="18"){
  document.getElementById("title_content17").className="title_contentfirstgl";
  document.getElementById("title_content18").className="title_contentgl title_contentfirstgl";
  document.getElementById("title_content19").className="title_contentfirstgl";
  document.getElementById("title_content20").className="title_contentfirstgl";
  
  document.getElementById("li17").className=null;
  document.getElementById("li18").className="title_hover";
  document.getElementById("li19").className=null;
  document.getElementById("li20").className=null;
  }else  if(s=="19"){
  document.getElementById("title_content17").className="title_contentfirstgl";
  document.getElementById("title_content18").className="title_contentfirstgl";
  document.getElementById("title_content19").className="title_contentgl title_contentfirstgl";
  document.getElementById("title_content20").className="title_contentfirstgl";
  
  document.getElementById("li17").className=null;
  document.getElementById("li18").className=null;
  document.getElementById("li19").className="title_hover";
  document.getElementById("li20").className=null;
  }else if(s=="20"){
  document.getElementById("title_content17").className="title_contentfirstgl";
  document.getElementById("title_content18").className="title_contentfirstgl";
  document.getElementById("title_content19").className="title_contentfirstgl";
  document.getElementById("title_content20").className="title_contentgl title_contentfirstgl";
  
  document.getElementById("li17").className=null;
  document.getElementById("li18").className=null;
  document.getElementById("li19").className=null;
  document.getElementById("li20").className="title_hover";
  }
 }
 /*
 登陆js代码
 */
 function landshowdiv(s){
  if(s=="1"){
  document.getElementById("land_content1").className="land_content land_contentfirst";//显示标题1的内容 下面代码类似不在添加注释
  document.getElementById("land_content2").className="land_contentfirst";//隐藏标题2的内容 下面代码类似不在添加注释

  document.getElementById("land01").className="land_hover";//使标题一与正文内容相连接  下面代码类似 不在加注释添
  document.getElementById("land02").className=null;//使标题2与正文内容相离  下面代码类似 不在添加注释
  }else{
  document.getElementById("land_content1").className="land_contentfirst";
  document.getElementById("land_content2").className="land_content land_contentfirst";
  
  document.getElementById("land01").className=null;
  document.getElementById("land02").className="land_hover";
  }
 }
function showland(){
	document.getElementById("incontent").className="showlanddiv";
	document.getElementById("xunfu01").mouseover();
	}
function hideland(){
	document.getElementById("incontent").className="hidelanddiv";
	}
	
function close_right(){
	document.getElementById("fixed_right").style.display="none";
	document.getElementById("kaiguan").style.display="block";
	}
function showright(){
	document.getElementById("fixed_right").style.display="block";
	document.getElementById("kaiguan").style.display="none";
	}
function close_bottomAd(){
	document.getElementById("bottom_advertisement").style.display="none";
	//document.getElementById("kaiguan").style.display="block";
	}
setTimeout(botton_Ad,5000);
        
   function botton_Ad() {
    document.getElementById("bottom_advertisement").style.display="block";
   }
