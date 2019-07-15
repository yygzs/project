// JavaScript Document
/*
	登陆即时验证开始
*/
function checkLandName(){
	document.getElementById("landuserName").innerHTML="";
	var landuser=document.getElementById("landuserName").value;
	var landfirstChar=landuser.charAt(0);
	if(landuser==""){
		alert("请输入用户名");
		document.getElementById("landuserName").focus();
		return false;
		}else if(landfirstChar>=0&&landfirstChar<=9){
		alert("用户名输入不正确");
		document.getElementById("landuserName").value="";
		document.getElementById("landuserName").focus();
		return false;
		}else{
			return true;
			}
	}

function checkLandPass(){
	document.getElementById("landuserPass").innerHTML="";
	var landpass=document.getElementById("landuserPass").value;
	if(landpass==""){
		alert("请输入密码");
		document.getElementById("landuserPass").focus();
		return false;
		}else if(landpass.length<6){
			alert("密码输入错误");
			document.getElementById("landuserPass").value="";
			document.getElementById("landuserPass").focus();
			return false;
			}else{
				return true;
				}
	}

function checkLandAll() {
    var name = document.getElementById("landuserName").value;
    var pwd =document.getElementById("landuserPass").value;
   // alert(name);
	if(checkLandName()==false){
		return false;
		}else if(checkLandPass()==false){
				 return false;
		} else {
		    $.post("login.ashx", { "landuserName": name, "landuserPass": pwd }, function (data) {
		        //alert(data);
		        //var b = data;
		        //var o = true;
		        if (data == "True") {
		            alert("登录成功！");
		          //document.getElementById("tongguoLand").href = "../index.html";
		            window.location.href = "../index.html";
		            return true;
		        } else {
		            alert("账号或密码错误!");
		            return false;
		        }
		    });

				//alert("7898745");
				//
				
				}
	}
function checkLandAll3() {
    
	if(checkLandName()==false){
		return false;
		}else if(checkLandPass()==false){
				 return false;
		} else {
		    
			//	alert("登陆成功");
		    //document.getElementById("tongguoLand3").href="index.html";
		    var name = document.getElementById("fName").value;
		    var pwd = document.getElementById("fPass").value;
		    alert(name);
		    $.post("html/login.ashx", { "landuserName": name, "landuserPass": pwd }, function (data) {
		        //alert(data);
		        //var b = data;
		        //var o = true;
		        if (data == "True") {
		            alert("登录");
		            //document.getElementById("tongguoLand").href = "../index.html";
		            window.location.href = "../index.html";
		            return true;
		        } else {
		            alert("账号或密码错误!");
		            return false;
		        }
		    });
				return true;
				}
	}	
	
function checkLandTelephone(){
	document.getElementById("landuserTelephone").innerHTML="";
	var landuser=document.getElementById("landuserTelephone").value;
	if(landuser==""){
		alert("请输入手机号码");
		document.getElementById("landuserTelephone").focus();
		return false;
		}else if(landuser.length!=11){
			alert("手机号码输入不正确");
			document.getElementById("landuserTelephone").value="";
			document.getElementById("landuserTelephone").focus();
			return false;
			}else{
				return true;
				}
	}
	
function landcheckYanzheng(){
	document.getElementById("landuserYanzheng").innerHTML="";
	var langyz=document.getElementById("landuserYanzheng").value;
	if(langyz==""){
		alert("请输入验证码");
		document.getElementById("landuserYanzheng").focus();
	    return false;
	}else if(langyz.length!=6){
		alert("验证码输入不正确");
		document.getElementById("landuserYanzheng").value="";
		document.getElementById("landuserYanzheng").focus();
		return false;
		}else{
			return true;
			}
	}
function checkLandAll2(){
	var check2=document.getElementById("landtiaokuan").checked;
	if(checkLandTelephone()==false){
		return false;
		}else if(landcheckYanzheng()==false){
				 return false;
			}else if(check2==false){
				alert("请同意服务条款");
				return false;
				}else{
					alert("登陆成功");
					document.getElementById("tonguoland2").href="index.html";		
					return true;
					}
	}	
function checkLandAll4(){
	var check2=document.getElementById("landtiaokuan").checked;
	if(checkLandTelephone()==false){
		return false;
		}else if(landcheckYanzheng()==false){
				 return false;
			}else if(check2==false){
				alert("请同意服务条款");
				return false;
				}else{
					alert("登陆成功");
					document.getElementById("tonguoland4").href="../index.html";		
					return true;
					}
	}
	
function refasong2(){
	if(checkLandTelephone()==false){
		document.getElementById("landuserTelephone").value="";
		document.getElementById("landuserTelephone").focus();
		return false;
		}
	document.getElementById("land_fasong").value="重新发送";
	document.getElementById("landuserYanzheng").focus();
	return true;
	}

/*
	登陆即时验证结束
*/

/*
	注册即时验证开始
*/
function checkName(){
	document.getElementById("img_tongguouser").style.display="none";
	document.getElementById("ErrorName").innerHTML="";
	var user=document.regForm.userName.value;
	var firstChar=user.charAt(0);
	if(user==""){
		document.getElementById("img_gantanuser").style.display="block";
		document.getElementById("ErrorName").innerHTML="用户名不能为空";
		return false;
		}
	if(firstChar>=0&&firstChar<=9){
		document.getElementById("img_gantanuser").style.display="block";
		document.getElementById("ErrorName").innerHTML="首字符不能位数字";
		document.regForm.userName.value="";
		return false;
		}
		document.getElementById("img_gantanuser").style.display="none";
		document.getElementById("img_tongguouser").style.display="block";
	return true;
	}
	
function checkPass(){
	document.getElementById("img_tongguopass").style.display="none";
	document.getElementById("ErrorPass").innerHTML="";
	var pass=document.regForm.userPass.value;
	if(pass==""){
	 document.getElementById("img_gantanpass").style.display="block";
	 document.getElementById("ErrorPass").innerHTML="密码不能为空";
	 //alert("密码不能为空");
	  return false;
	}
	if(pass.length<6){
	document.getElementById("img_gantanpass").style.display="block";
	document.getElementById("ErrorPass").innerHTML="密码长度不能小于6";
	 //alert("密码长度不能小于6");
	 document.regForm.userPass.value="";
	  return false;
	}
	document.getElementById("img_gantanpass").style.display="none";
	document.getElementById("img_tongguopass").style.display="block";
	return true;
	}


function checkRePass(){
	document.getElementById("img_tongguorepass").style.display="none";
	document.getElementById("ErrorRePass").innerHTML="";
	var pass=document.regForm.userPass.value;
	var repass=document.regForm.userRePass.value;
	if(pass!=repass){
	document.getElementById("img_gantanrepass").style.display="block";
	document.getElementById("ErrorRePass").innerHTML="两次密码输入不一致";
	 //alert("两次密码输入不一致");
	 document.regForm.userRePass.value="";
	  return false;
	}else if(pass==""){
		document.getElementById("img_gantanrepass").style.display="block";
		document.getElementById("ErrorRePass").innerHTML="两次密码输入不一致";
		//alert("两次密码输入不一致");
		document.regForm.userRePass.value="";
		return false;
		}else{
			document.getElementById("img_gantanrepass").style.display="none";
			document.getElementById("img_tongguorepass").style.display="block";
			}
	return true;
	}
	

function checkEmail(){
	document.getElementById("img_tongguoemail").style.display="none";
	document.getElementById("ErrorEmail").innerHTML="";
	var email=document.regForm.Email.value;
	if(email==""){
	document.getElementById("img_gantanemail").style.display="block";
	document.getElementById("ErrorEmail").innerHTML="电子邮箱不能为空";
	 //alert("电子邮箱不能为空");
	  return false;
	}
	if(email.indexOf("@",0)==-1){
		document.getElementById("img_gantanemail").style.display="block";
		document.getElementById("ErrorEmail").innerHTML="电子邮箱缺少@";
	 //alert("没有@");
	 document.regForm.Email.value="";
	 return false;
	}
	if(email.indexOf(".",0)==-1){
	 document.getElementById("img_gantanemail").style.display="block";
	 document.getElementById("ErrorEmail").innerHTML="电子邮箱缺少.";
	 //alert("没有.");
	 document.regForm.Email.value="";
	 return false;
	}
	document.getElementById("img_gantanemail").style.display="none";
	document.getElementById("img_tongguoemail").style.display="block";
	return true;
	}
	
	
function checkTelephone(){
	document.getElementById("img_tongguotelephone").style.display="none";
	//alert("测试");
	document.getElementById("ErrorTelephone").innerHTML="";
	var pass=document.regForm.Telephone.value;
	if(pass==""){
	document.getElementById("img_gantantelephone").style.display="block";
	document.getElementById("ErrorTelephone").innerHTML="手机号码不能为空";
	 //alert("手机号码不能为空");
	  return false;
	}else if(pass.length!=11){
		document.getElementById("img_gantantelephone").style.display="block";
		document.getElementById("ErrorTelephone").innerHTML="手机号码输入不正确";
		//alert("手机号码输入不正确");
		document.regForm.Telephone.value="";
		return false;
		}else{
			document.getElementById("img_gantantelephone").style.display="none";
			document.getElementById("img_tongguotelephone").style.display="block";
			}
	return true;
	}


function checkYanzheng(){
	document.getElementById("img_tongguoyanzheng").style.display="none";
	document.getElementById("ErrorYanzheng").innerHTML="";
	var pass=document.regForm.Yanzheng.value;
	if(pass==""){
	document.getElementById("img_gantanyanzheng").style.display="block";
	document.getElementById("ErrorYanzheng").innerHTML="验证码不能为空";
	 //alert("验证码不能为空");
	 document.regForm.Yanzheng.value="";
	  return false;
	}else if(pass.length!=6){
		document.getElementById("img_gantanyanzheng").style.display="block";
		document.getElementById("ErrorYanzheng").innerHTML="验证码输入不正确";
		//alert("验证码输入不正确");
		document.regForm.Yanzheng.value="";
		return false;
		}else{
			document.getElementById("img_gantanyanzheng").style.display="none";
			document.getElementById("img_tongguoyanzheng").style.display="block";
			}
	return true;
	}


function refasong(){
	if(checkTelephone()==false){
		document.getElementById("ErrorTelephone").innerHTML="手机号码输入不正确";
		//alert("手机号码输入不正确");
		document.regForm.Telephone.value="";
		return false;
		}
	document.getElementById("fasong").value="重新获取";
	return true;
}
function checkAll() {

    //alert(phone);
    var check = document.getElementById("checkbox").checked;
    if (checkName() && checkPass() && checkRePass() && checkEmail() && checkTelephone() && checkYanzheng() && check) {
        alert("注册成功");
        document.getElementById("tongguoYanzheng").href = "land.html";
        return true;
    } else {
        if (checkName() == false) {
            alert("请输入用户名");
            document.regForm.userName.focus();
            return false;
        } else if (checkPass() == false) {
            alert("请输入密码");
            document.regForm.userPass.focus();
            return false;
        }
        else if (checkRePass() == false) {
            alert("请输入确认密码");
            document.regForm.userRePass.focus();
            return false;
        }
        else if (checkEmail() == false) {
            alert("请输入Email");
            document.regForm.Email.focus();
            return false;
        }
        else if (checkTelephone() == false) {
            alert("请输入手机号码");
            document.regForm.Telephone.focus();
            return false;
        } else if (checkYanzheng() == false) {
            alert("请输入验证码");
            document.regForm.Yanzheng.focus();
            return false;
        } else if (check == false) {
            alert("请同意服务条款");
            return false;
        }
        else {
            return true;
        }
    }
}
/*
	注册即时验证结束
*/