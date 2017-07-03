package com.spice.model.dao;

import java.util.List;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.spice.model.User;

public interface UserDaoInf   extends Repository<User, Long> {
	List<User> findByUsername(String username);
	List<User> findByCircle(String circle);
	//where p.forename = :forename and p.surname = :surname
	
	@Query("select u from User u where  u.username = :username  and u.password = :password"	)
		public List<User> findUserByUsernameAndpassword(
		    @Param("username") String username, 
		    @Param("password") String password
		);
	
//	List<User> findByCircle_id(String username);
//	//where p.forename = :forename and p.surname = :surname
//	
//	@Query("select u from User u where  u.username = :username  and u.password = :password"	)
//		public List<User> findUserByUsernameAndpassword(
//		    @Param("username") String username, 
//		    @Param("password") String password
//		);
////User (String name);
}


