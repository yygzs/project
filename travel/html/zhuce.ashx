<%@ WebHandler Language="C#" Class="zhuce" %>

using System;
using System.Web;

public class zhuce : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
       // context.Response.Write("Hello World");
        string name = context.Request["userName"];
        string pwd = context.Request["userPass"];
        string phone = context.Request["phone"];
        string email = context.Request["Email"];
        //sql k = new sql();
        //k.sqlcharu(name, pwd,phone,email);
        EFSQL EF = new EFSQL();
        EF.sqlinsert(name, pwd, phone, email);
        context.Response.Redirect("land.html", false); 
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}