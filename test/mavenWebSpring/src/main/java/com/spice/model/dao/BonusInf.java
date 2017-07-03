package com.spice.model.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.spice.model.Bonus_444;


public interface BonusInf extends Repository<Bonus_444, Long> {


		List<Bonus_444> findByCircle(String circle);
		//where p.forename = :forename and p.surname = :surname
		
//		@Query("select u from Bonus_444 u where  u.circle_id = :circle_id  ")
//			public List<Bonus_444> findUserByUsernameAndpassword(
//			    @Param("circle_id") String circle_id
//			);
	//User (String name);
	}




