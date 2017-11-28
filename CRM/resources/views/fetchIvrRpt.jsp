    <md-content>
<md-card>
      <div layout="row" layout-xs="column" layout-padding layout-margin layout-align="space-between center">
        	<md-input-container flex="70"  flex-xs="100" layout="column">
            <label for="testInput">Search </label>
            <input type="text" id="searchedValue"
                   ng-model="searchedValue" no-special-directive md-autofocus maxlength="30"> 
                   
          </md-input-container>
          
          
                  	<md-input-container flex="10"  flex-xs="100" layout="column">
<md-button class="md-raised custom-green" ng-click="exportToExcel('#tableToExport')">Export to excel</md-button> 
                   
          </md-input-container>
         

       </div>
      
      
     <div class="tab_scroll action-btn" id="tableToExport">
     
      <table width="100%" border="0" class="table crm_table crm-table-scroll" cellspacing="0" cellpadding="0">
<!--          <span ng-if="fetchChatRptResponsePojo.rs=='S'">Total Records Found :<strong>{{(fetchChatRptResponsePojo.pd.cceDetails | filter:searchedValue).length}}</strong></span>
        <div ng-switch="(fetchChatRptResponsePojo.pd.cceDetails| filter:searchedValue).length">
            <span ng-switch-when="0" style="color:red;">NO MATCH FOUND</span>  -->
 
 </div>
 
        <tbody>
             <tr>
                <th>Agent Id</th>
                <th>Average duration call</th>
                <th>Calls unanswered</th>
                <th>No. of multilingual calls handled</th>
				<th>Average snapshot filling time</th>
				<th>Total duration calls</th>
				<th>Average hold calls</th>
				<th>Average handling calls</th>
				<th>Total handling calls</th>
				<th>Average wrap up calls</th>
				<th>Blank calls</th>
				<th>Calls handled</th>
              </tr>
                 <!--  |filter:searchedValue  -->
              <tr ng-repeat="x in fetchIvrRptResponsePojo.pd|filter:searchedValue| offset: currentPage*itemsPerPage | limitTo: itemsPerPage">
                <td>{{x.cceid}}</td>
                <td >{{x.average_Duration_Calls}}</td>
                <td>{{x.calls_Unanswered}}</td>
                <td>{{x.multilingual_calls_handled}}</td>
                <td>{{x.average_snapshot_filling_time}}</td>
                <td>{{x.total_Duration_Calls}}</td>
                <td>{{x.average_Hold_Calls}}</td>
                <td>{{x.average_Handling_Calls}}</td>
                <td>{{x.total_Handling_Calls}}</td>
                <td>{{x.average_Wrap_up_Calls}}</td>
                <td>{{x.blank_Calls}}</td>
                <td>{{x.calls_handled}}</td>
                                                                              
              </tr >
<!--                  <tfoot ng-if="fetchChatRptResponsePojo.rs=='S'">
						<td colspan="10" style="text-align:center;">
							<div class="pagination" align="center">
								<ul>
									<li ng-class="prevPageDisabled()"><a href
										ng-click="prevPage()">Prev</a></li>
									<li ng-repeat="n in range()"
										ng-class="{active: n == currentPage}" ng-click="setPage(n)">
										<a style="cursor: pointer;">{{n+1}}</a>
									</li>
									<li ng-class="nextPageDisabled()"><a href
										ng-click="nextPage()">Next</a></li>
								</ul>
							</div>
						</td>
					</tfoot> -->
	</tbody>
      </table>
    </div>
</md-card>
    </md-content>     
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
