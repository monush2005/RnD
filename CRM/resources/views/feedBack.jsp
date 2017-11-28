<md-card>
 <div class="tab_scroll">
<!--  <div layout="row" layout-align="space-around center" layout-padding>
<form name="cceForm">
  <md-datepicker ng-model="obj.strtDate" md-placeholder="Start Date" id="strtDt" name="strtDt"></md-datepicker>
  	 <div ng-messages="cceForm.strtDt.$error">
          	  		<div ng-message="valid">Please enter valid date.</div>
    </div> 
  <md-datepicker ng-model="obj.endDate" md-placeholder="End Date" id="endDt" name="endDt"  ng-required="true"></md-datepicker>
     	 <div ng-messages="cceForm.endDt.$error">
     	 <div  ng-message="valid">Please enter valid date.</div>
          	  		<div  ng-message="valid">Please enter valid date.</div>
    </div> 


                	<div><md-button class="md-raised md-primary custom-green" ng-click="feedbackReq(obj)" ng-disabled="!(obj.strtDate && obj.endDate)">Submit</md-button></div>
</form>
                </div> -->
                
             <form name="cceForm">   
             <div layout="row" layout-align="start start" layout-align-xs="" layout-xs="column" class="cust_padding">
                   <md-input-container flex="50" flex-xs="100" class="no-margin">
       <md-datepicker flex="100" flex-xs="100" ng-model="obj.strtDate"  md-placeholder="Start Date" id="strtDt" name="strtDt" ng-required="true"></md-datepicker>
         	 <div ng-messages="cceForm.strtDt.$error">
         <!-- 	 <div ng-message="required">Start date is required.</div> -->
          	  		<div ng-message="valid">Please enter valid date.</div>
    			</div> 
                     </md-input-container>
                   <md-input-container flex="50" flex-xs="100" class="no-margin">
       <md-datepicker flex="100" flex-xs="100" ng-model="obj.endDate" md-placeholder="End Date" id="endDt" name="endDt"  ng-required="true"></md-datepicker>
                         	 <div ng-messages="cceForm.endDt.$error">
                         	<!--   <div ng-message="required">End date is required.</div> -->
     	 <div  ng-message="valid">Please enter valid date.</div>
          	  		
    </div> 
                    
                     </md-input-container>
                     <md-button class="md-raised custom-green" ng-click="feedbackReq(obj)" ng-disabled="!(obj.strtDate && obj.endDate)">Submit</md-button>
                  </div>   
                  </form>        
                  <div layout="row" class="layout-row">
   <md-input-container style="min-width:100px;" flex="50">
                  <label>Search</label>
                  <input  name="clientName" ng-model="searchedValue" no-special-directive maxlength="30">
                </md-input-container>
                </div>
<table width="100%" border="0" class="table crm_table table-bordered" style="text-align:center">
  
        	<tr>
			<th style="text-align: center">Mobile No.</th>
			<th  style="text-align:center">Feedback Category</th>
            	<th  style="text-align:center">Feedback</th>
                <!-- <th style="text-align:center">Email</th> -->

            </tr>
            <tr ng-repeat="x in feedBack |filter :searchedValue">


            
            	<td>{{x.mno}}</td>
            	<td>{{x.fcategory}}</td>
            	<td>{{x.feedback}}</td>
              <!--   <td>{{x.email}}</td> -->

            </tr>
   


</table>
        </div>
   </md-card>     
   
   
   
     				<div style="display: none">
					<md-card layout-padding>
					<div class="md-dialog-container" id="commonSuccess">
						<md-dialog class="crm-dialog-height">
						<div class="popup-svg" align="center">
							<span><svg style="width: 24px; height: 24px"
									viewBox="0 0 24 24">
    <path fill="#008000"
										d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10.08L23,10M1,21H5V9H1V21Z" />
</svg></span>
							<p>{{successMsg}}</p>
							<div class="custom_button_box custom-green">
								<md-button class="md-raised custom-green" ng-click="cancel()">OK</md-button>
							</div>
						</div>
						</md-dialog>
					</div>
					 </md-card>
				</div>



				<div style="display: none">
					<md-card layout-padding>
					<div class="md-dialog-container" id="commonError">
						<md-dialog style="overflow:hidden; height:auto !important;">
						<div class="popup-svg" align="center">
							<span><svg style="width: 35px; height: 35px"
									viewBox="0 0 24 24">
    <path fill="#ff0000"
										d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg></span>
							<p>{{errorMsg}}</p>
							<div class="custom_button_box custom-green">
								<md-button class="md-raised custom-green" ng-click="cancel()">OK</md-button>
							</div>
						</div>
						</md-dialog>
					</div>

					</md-card>
				</div>