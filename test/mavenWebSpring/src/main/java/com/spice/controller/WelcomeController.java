package com.spice.controller;


import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.*;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
 import com.spice.model.dao.*;
import com.spice.service.LoginService;
import com.spice.model.*;
@Controller
public class WelcomeController {
	@Autowired
	LoginService loginService;
	@RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
		System.out.println("---- dffsf  ");
        return "login";
    }
	@RequestMapping(value="/test",method = RequestMethod.POST)
    public String homepage1(HttpServletRequest request,          HttpServletResponse response){
		
		List<User> abc=new ArrayList();
		String json = request.getParameter("str");
		HttpSession sesion=request.getSession();
		System.out.println("---- post 1  " +json);
		try{
			response.getWriter().write("aaaaaaaaaaaaaaaaaaaa");
		JSONObject jsonObj = new JSONObject(json);
		 String username = jsonObj.getString("uname");
	        String password = jsonObj.getString("pwd");
		System.out.println("---- post  " +json);
	abc=	loginService.getLogin(username,password);
//	if(result)
//		return "dashboard_html";
	
		//return "test";
	}
		
		catch(Exception e)
		{e.printStackTrace();}
		return "test1";
    }
} 