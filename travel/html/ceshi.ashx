<%@ WebHandler Language="C#" Class="ceshi" %>

using System;
using System.Web;

public class ceshi : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        var s = context.Request["name"];
        context.Response.Write(s);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}