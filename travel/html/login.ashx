<%@ WebHandler Language="C#" Class="login" %>

using System;
using System.Web;

public class login : IHttpHandler {
    static string user;
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";


        string name = context.Request["landuserName"];
        string pwd = context.Request["landuserPass"];
        string u = context.Request["name"];
       
         if (u == "zhuxiao")
        {
            user = "";
            context.Response.Write(user);
        }
        else if(u=="name")
        {
            context.Response.Write(user);

        }
         else
         {
             //sql k = new sql();
             //if (k.sqlchaxun(name, pwd))
             EFSQL ef = new EFSQL();
             if (ef.sqlchaxun(name, pwd))
             {
                 user = name;
                 context.Response.Write("True");
             }
         }
       
        
       
           
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}