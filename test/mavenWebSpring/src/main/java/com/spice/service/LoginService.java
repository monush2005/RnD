package com.spice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spice.model.User;
import com.spice.model.dao.*;
import java.util.*;

@Service
public class LoginService {
	@Autowired
	UserDaoInf userDao;
	public List<User>  getLogin(String username,String pssword){
		List<User> a=new ArrayList();
		//List<Bonus_444> a=new ArrayList();
		// a=	userDao.findByUsername("monika");
		a=	userDao.findUserByUsernameAndpassword(username, pssword);//("monika");
		userDao.findByCircle("0001");
		 for(User u:a){
			 //if(u.getUsername() .equals(username) && u.getPassword().equals(pssword))
				//return a; 
			 System.out.println("---- post  " +u.getPassword());
		 }
	//System.out.println("---- post  " +a.getPassword());
		return a;
	}
}
