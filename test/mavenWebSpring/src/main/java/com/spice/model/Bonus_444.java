package com.spice.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity @IdClass(BonusId.class)
@Table(name = "444_bonus_config")
public class Bonus_444  implements Serializable{
	private static final long serialVersionUID = 1L;
	 @Id String  circle;
	    @Id int rank_order;
	String  offer_name,offer_desc,bonus_name,alco_flag,dr_event_id,cr_event_id,activation_mode,pack_type,exp_date ,System_Creation_Date ,effective_date
	   ,MDM_ID,Status;
	   
	   public String getCircle() {
		return circle;
	}

	public void setCircle(String circle) {
		this.circle = circle;
	}

	public String getOffer_name() {
		return offer_name;
	}

	public void setOffer_name(String offer_name) {
		this.offer_name = offer_name;
	}

	public String getOffer_desc() {
		return offer_desc;
	}

	public void setOffer_desc(String offer_desc) {
		this.offer_desc = offer_desc;
	}

	public String getBonus_name() {
		return bonus_name;
	}

	public void setBonus_name(String bonus_name) {
		this.bonus_name = bonus_name;
	}

	public String getAlco_flag() {
		return alco_flag;
	}

	public void setAlco_flag(String alco_flag) {
		this.alco_flag = alco_flag;
	}

	public String getDr_event_id() {
		return dr_event_id;
	}

	public void setDr_event_id(String dr_event_id) {
		this.dr_event_id = dr_event_id;
	}

	public String getCr_event_id() {
		return cr_event_id;
	}

	public void setCr_event_id(String cr_event_id) {
		this.cr_event_id = cr_event_id;
	}

	public String getActivation_mode() {
		return activation_mode;
	}

	public void setActivation_mode(String activation_mode) {
		this.activation_mode = activation_mode;
	}

	public String getPack_type() {
		return pack_type;
	}

	public void setPack_type(String pack_type) {
		this.pack_type = pack_type;
	}

	public String getExp_date() {
		return exp_date;
	}

	public void setExp_date(String exp_date) {
		this.exp_date = exp_date;
	}

	public String getSystem_Creation_Date() {
		return System_Creation_Date;
	}

	public void setSystem_Creation_Date(String system_Creation_Date) {
		System_Creation_Date = system_Creation_Date;
	}

	public String getEffective_date() {
		return effective_date;
	}

	public void setEffective_date(String effective_date) {
		this.effective_date = effective_date;
	}

	public String getMDM_ID() {
		return MDM_ID;
	}

	public void setMDM_ID(String mDM_ID) {
		MDM_ID = mDM_ID;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public int getRank_order() {
		return rank_order;
	}

	public void setRank_order(int rank_order) {
		this.rank_order = rank_order;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getThershold() {
		return thershold;
	}

	public void setThershold(int thershold) {
		this.thershold = thershold;
	}

	public int getValidity() {
		return validity;
	}

	public void setValidity(int validity) {
		this.validity = validity;
	}

	public int getAppend_flag() {
		return append_flag;
	}

	public void setAppend_flag(int append_flag) {
		this.append_flag = append_flag;
	}

	public int getLow_bal_flag() {
		return low_bal_flag;
	}

	public void setLow_bal_flag(int low_bal_flag) {
		this.low_bal_flag = low_bal_flag;
	}

	public int getDays_before() {
		return days_before;
	}

	public void setDays_before(int days_before) {
		this.days_before = days_before;
	}

	public int getDays_after() {
		return days_after;
	}

	public void setDays_after(int days_after) {
		this.days_after = days_after;
	}

	public int getInterface_val() {
		return interface_val;
	}

	public void setInterface_val(int interface_val) {
		this.interface_val = interface_val;
	}

	int value,amount,thershold,validity ,append_flag,low_bal_flag,days_before ,days_after ,interface_val;
}
