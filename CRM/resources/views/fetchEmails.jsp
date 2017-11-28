<md-content flex class="overflow-hidden">
<md-card class="_md">
<div class="flex email-section" flex="">
                
    <md-tabs md-dynamic-height md-border-bottom>
      <md-tab label="INBOX">
          <div class="overflow-auto" flex="" layout="row" layout-xs="column">
            <md-content flex="50" flex-xs="100">

        <md-list class="inbox-list md-cyan-theme" role="list">
            <div>
                <div class="md-primary md-subheader email-day">  

                 </div>

                <md-list-item role="listitem" tabindex="-1" ng-repeat="y in FetchEmailResponsePojo.pd.emails">
                <div class="md-button md-no-style emailbtn" ng-click="viewEmail(y)">
                <div class="md-list-item-inner">
                    <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
                    <div class="md-list-item-text layout-column" layout="column">
                        <h3 class="email-sender"><span class="md-caption email-time">{{y.logTime}}</span>{{y.efrom}}</h3>
                        <h4 class="email-subject"><b>Subject:</b>{{y.subject}}</h4>
                        <!-- <p class="email-text" ng-bind-html="y.body"></p> -->
<!--                         <div class="emaillink"><b>Reference ID: {{y.referenceId}}</b></div>
                        <div class="emaillink"><b>TAT : {{y.tat}}</b></div> -->
                        <div class="emaillink"><a class="pull-left" ><b>Reference ID: {{y.referenceId}}</b></a> <a class="emaillink pull-right" >TAT : {{y.tat}}</a> </div>
                        
                    </div>
                    <md-divider></md-divider>
                </div>
                <div class="md-secondary-container"></div>
                </div>
                </md-list-item>
             </div>     
        </md-list>
    </md-content>
            <div  flex="50" flex-xs="100">
        <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width">
            <div style="display:none;" flex="" class="inbox-no-email-selected" layout="column" layout-align="center">
                <h2 hide-xs="" translate="" class="hide-xs">No email selected</h2>
            </div>
            
            
            
            
            <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width"><md-content class="md-padding full-width md-cyan-theme">
    <md-card class="md-cyan-theme">
    <form name="rplyForm">
        <md-card-header>
            <md-card-avatar>
                <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
            </md-card-avatar>
            <md-card-header-text>
               <md-card-header-text> <span class="md-title"><span>From:</span>{{viewEmailRequestPojo.efrom}}</br><span>TO:</span>{{viewEmailRequestPojo.to}}</br><span>CC:</span>{{viewEmailRequestPojo.cc}}</br><span>Subject:</span>{{viewEmailRequestPojo.subject}}
               <!--  <span class="md-subhead">{{viewEmailRequestPojo.subject}}</span> -->
            </md-card-header-text>
            <md-card-icon-actions>
<!--                 <button class="md-icon-button md-button md-cyan-theme md-ink-ripple" type="button" aria-label="close" ng-click="vm.closeEmail()">
                    <md-icon md-font-icon="zmdi zmdi-close" class="md-cyan-theme md-font material-icons zmdi zmdi-close" aria-hidden="true">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>
                    </md-icon>
                </button> -->
            </md-card-icon-actions>
        </md-card-header>
        <md-divider class="md-cyan-theme"></md-divider>
        <md-card-content>
            <p ng-bind-html="viewEmailRequestPojo.body"></p>
        </md-card-content>
        <md-divider class="md-cyan-theme"></md-divider>
        <div class="custom-padding">
        <md-input-container class="md-block">
          <label class="custom-padding">Reply Text</label>
          <textarea ng-model="viewEmailRequestPojo.response" id="rply" name="rply"  rows="5" md-select-on-focus ng-required="true" ></textarea>
                 <div ng-messages="rplyForm.rply.$error" role="alert">
          <div ng-message="required">
           Response is required.
          </div>
          
        </div>
        </md-input-container>
        </div>
        <md-divider class="md-cyan-theme"></md-divider>
        <md-card-actions layout="row" layout-align="end center" class="layout-align-end-center layout-row">
            <button class="md-icon-button md-button md-ink-ripple" type="button" aria-label="Reply" ng-click="emailWrapUpPopUp(viewEmailRequestPojo,'forward')" ng-disabled="!(viewEmailRequestPojo.response)">
			  <md-tooltip md-direction="bottom">Reply</md-tooltip>
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#7f7f7f" d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" /></svg>
          </button> 
<!--           <button class="md-icon-button md-button md-ink-ripple" type="button"  ng-click="updateTicketToForward(viewEmailRequestPojo,'assign')" aria-label="Reply All">
           
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M13,9V5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12L7,8Z" /></svg>
          </button> -->
           <button class="md-icon-button md-button md-ink-ripple" type="button" aria-label="Forward" id="frwdToAgenTId" ng-show="showAssignBtn==true" ng-click="frwdToAgent1(viewEmailRequestPojo)" >
            <md-tooltip md-direction="bottom">Assign to Agent</md-tooltip>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
             <path fill="#7f7f7f" d="M12,8V4L20,12L12,20V16H4V8H12Z" /></svg>
            </button>
            <button class="md-icon-button md-button md-ink-ripple" type="button" aria-label="Delete" ng-disabled="!(viewEmailRequestPojo.response)" ng-click="respondEmail(viewEmailRequestPojo,'spam')" >
               <md-tooltip md-direction="bottom">Delete</md-tooltip>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#7f7f7f" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>            
            </button>
        </md-card-actions>
        </form>
    </md-card>
</md-content>
</div>
            
            
            
        </div>
    </div>
    
</div>

      </md-tab>
      <md-tab label="ANSWERED MAILS" ng-click="anseredMails()">
          <div class="overflow-auto" flex="" layout="row" layout-xs="column">
            <md-content flex="50" flex-xs="100">

        <md-list class="inbox-list md-cyan-theme" role="list">
            <div>
                <div class="md-primary md-subheader email-day">  
<!--                    <div class="md-subheader-inner">    
                     <div class="md-subheader-content"><span>Today</span></div>  
                   </div> -->
                 </div>

                <md-list-item role="listitem" tabindex="-1" ng-repeat="z in FetchEmailHisResponsePojo.pd.emails">
                <div class="md-button md-no-style emailbtn" ng-click="viewEmail1(z)">
                <div class="md-list-item-inner">
                    <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
                    <div class="md-list-item-text layout-column" layout="column">
                        <h3 class="email-sender"><span class="md-caption email-time">{{z.logTime}}</span>{{z.efrom}}</h3>
                        <h4 class="email-subject"><b>Subject:</b>{{z.subject}}</h4>
                       <div class="emaillink"><a class="pull-left" ><b>Reference ID: {{z.referenceId}}</b></a>  </div>
                        
                        <!-- <p class="email-text">{{z.body}}</p> -->
<!--                         <div class="emaillink"><a class="pull-left" >{{}}</a><a class="emaillink pull-right" >Registered</a></div>
 -->                    </div>
                    <md-divider></md-divider>
                </div>
                <div class="md-secondary-container"></div>
                </div>
                </md-list-item>
             </div>     
        </md-list>
    </md-content>
            <div  flex="50" flex-xs="100">
        <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width">
            <div style="display:none;" flex="" class="inbox-no-email-selected" layout="column" layout-align="center">
                <h2 hide-xs="" translate="" class="hide-xs">No email selected</h2>
            </div>
            
            
            
            
            <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width"><md-content class="md-padding full-width md-cyan-theme">
    <md-card class="md-cyan-theme">
        <md-card-header>
            <md-card-avatar>
                <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
            </md-card-avatar>
            <md-card-header-text>
                <span class="md-title">{{viewEmailHisRequestPojo.efrom}}</span>{{viewEmailHisRequestPojo.subject}}
               <!--  <span class="md-subhead">{{viewEmailHisRequestPojo.subject}}</span> -->
            </md-card-header-text>
            <md-card-icon-actions>
                <button class="md-icon-button md-button md-cyan-theme md-ink-ripple" type="button" aria-label="close" ng-click="vm.closeEmail()">
                    <md-icon md-font-icon="zmdi zmdi-close" class="md-cyan-theme md-font material-icons zmdi zmdi-close" aria-hidden="true">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>
                    </md-icon>
                </button>
            </md-card-icon-actions>
        </md-card-header>
        <md-divider class="md-cyan-theme"></md-divider>
        <md-card-content>
            <p ng-bind-html="viewEmailHisRequestPojo.body"></p>
        </md-card-content>
        <md-divider class="md-cyan-theme"></md-divider>
        <div class="custom-padding">

        </div>

    </md-card>
</md-content>
</div>
            
            
            
        </div>
    </div>
    
</div>
      </md-tab>
      <md-tab label="SPAM MAILS" ng-click="spamMails()">
          <div class="overflow-auto" flex="" layout="row" layout-xs="column">
            <md-content flex="50" flex-xs="100">

        <md-list class="inbox-list md-cyan-theme" role="list">
            <div>
                <div class="md-primary md-subheader email-day">  
<!--                    <div class="md-subheader-inner">    
                     <div class="md-subheader-content"><span>Today</span></div>  
                   </div> -->
                 </div>

                <md-list-item role="listitem" tabindex="-1" ng-repeat="a in FetchEmailHisSpamResponsePojo.pd.emails">
                <div class="md-button md-no-style emailbtn" ng-click="viewEmail2(a)">
                <div class="md-list-item-inner">
                    <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
                    <div class="md-list-item-text layout-column" layout="column">
                        <h3 class="email-sender"><span class="md-caption email-time">{{a.logTime}}</span>{{a.efrom}}</h3>
                        <h4 class="email-subject"><b>Subject:</b>{{a.subject}}</h4>
                        <div class="emaillink"><a class="pull-left" ><b>Reference ID: {{a.referenceId}}</b></a>  </div>
                   <!--      <p class="email-text">{{a.body}}</p> -->
<!--                         <div class="emaillink"><a class="pull-left" href="www.google.com">TAT Timer</a><a class="emaillink pull-right" href="www.youtube.com">Registered</a></div>
 -->                    </div>
                    <md-divider></md-divider>
                </div>
                <div class="md-secondary-container"></div>
                </div>
                </md-list-item>
             </div>     
        </md-list>
    </md-content>
            <div  flex="50" flex-xs="100">
        <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width">
            <div style="display:none;" flex="" class="inbox-no-email-selected" layout="column" layout-align="center">
                <h2 hide-xs="" translate="" class="hide-xs">No email selected</h2>
            </div>
            
            
            
            
            <div flex="" id="ui-admin-email" layout="column" layout-align="start center" class="overflow-auto full-width"><md-content class="md-padding full-width md-cyan-theme">
    <md-card class="md-cyan-theme">
        <md-card-header>
            <md-card-avatar>
                <svg class="md-avatar" style="width:40px;height:40px" viewBox="0 0 24 24">
    <path fill="#26c7db" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
</svg>
            </md-card-avatar>
            <md-card-header-text>
                <span class="md-title">{{viewEmailHisSpamRequestPojo.efrom}}</span>{{viewEmailHisSpamRequestPojo.subject}}
               <!--  <span class="md-subhead">{{viewEmailHisRequestPojo.subject}}</span> -->
            </md-card-header-text>
            <md-card-icon-actions>
                <button class="md-icon-button md-button md-cyan-theme md-ink-ripple" type="button" aria-label="close" ng-click="vm.closeEmail()">
                    <md-icon md-font-icon="zmdi zmdi-close" class="md-cyan-theme md-font material-icons zmdi zmdi-close" aria-hidden="true">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>
                    </md-icon>
                </button>
            </md-card-icon-actions>
        </md-card-header>
        <md-divider class="md-cyan-theme"></md-divider>
        <md-card-content>
            <p ng-bind-html="viewEmailHisSpamRequestPojo.body"></p>
        </md-card-content>
        <md-divider class="md-cyan-theme"></md-divider>
        <div class="custom-padding">

        </div>

    </md-card>
</md-content>
</div>
            
            
            
        </div>
    </div>
    
</div>
      </md-tab>
    </md-tabs>
                
              <div flex></div>
              <md-divider></md-divider>
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

				
				
				
				
				
				
				    <md-sidenav class="md-sidenav-right md-whiteframe-4dp" md-component-id="right">

      <md-toolbar class="md-theme-light">
        <h1 class="md-toolbar-tools">Assign To</h1>
      </md-toolbar>
      <md-content  layout-padding>
        <form name="projectForm">
          <md-input-container>
            <label for="testInput">Search Member</label>
            <input type="text" id="testInput" ng-model="searchCce"
                 maxlength="30"   characters-only-directive  no-special-directive>
          </md-input-container>
          <md-input-container>
          <label>Select Member</label>
         <!--  allocateAgent(allocateAgnt); ng-disabled="flag10==true" allocateAgent1(allocateAgnt)-->
          <md-select ng-model="allocateAgnt"   ng-change="updateTicketToForward(allocateAgnt)" >
                   <!-- <md-select ng-model="allocateAgnt"   ng-change="forwardToAgent(allocateAgnt);allocateAgent1(allocateAgnt)" > -->

			<md-option ng-repeat="x in fetchCceDetails |filter:searchCce " value="{{x.cceid}} , {{x.name}}">{{x.name}}({{x.mode}}-{{x.ccelang}}) </md-option> 
          </md-select>
        </md-input-container>
        </form>
        
      </md-content>

    </md-sidenav>
    

        
        
        
        
       <div style="display: none">
 	<md-card layout-padding>
   
 		<div class="md-dialog-container" id="createTicketPopUp">
 		<md-dialog class="crm-dialog-height" style="min-width: 600px;">
		<md-content>
            <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">WrapUp</h4></div>
            </md-list>
            <form name="createTicketForm">            
							<div layout="row">
								<md-input-container flex="50" class="plus_91">
								<strong style="width:50%;text-align:center;float: left;font-size:15px;">Aadhaar status</strong>
								<span style="padding-left:0px;">{{userinfo.adhaarStatus}}</span>
								
								</md-input-container>
								<md-input-container flex="50">
								 <strong style="width:50%;text-align:center;float: left;font-size:15px;">State</strong>
								 <span style="padding-left:0px;">{{userinfo.state}}</span>
								 </md-input-container>
							</div>

								<div layout="row">
								<md-input-container flex="50" class="plus_91">
								<strong style="width:50%;text-align:center;float: left;font-size:15px;">Email authentication</strong>
								<span style="padding-left:0px;">{{userinfo.emailAuth}}</span>
								
							</div>
            
            <div layout="row">
                <md-input-container flex="50">
              <label>Category</label>
              <md-icon>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="#5f5f5f" d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z" />
			</svg>
			</md-icon>
                  <md-select name="category" ng-model="user.category" ng-required="true" ng-change="fetchSubCategories(user.category)">
            <md-option ng-repeat="x in fetchCategoriesResponsePojo.pd" value="{{x.catid}}">{{x.catnam}}</md-option>
            
          </md-select>
           <div ng-messages="createTicketForm.category.$error" role="alert">
          <div ng-message="required">
            Category is required.
          </div>
        </div>
            </md-input-container>

            </div>
        
            <div layout="row">
                <md-input-container flex="50" >
              <label>Department Name </label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M12.6,2.86C15.27,4.1 18,5.39 20.66,6.63C20.81,6.7 21,6.75 21,6.95C21,7.15 20.81,7.19 20.66,7.26C18,8.5 15.3,9.77 12.62,11C12.21,11.21 11.79,11.21 11.38,11C8.69,9.76 6,8.5 3.32,7.25C3.18,7.19 3,7.14 3,6.94C3,6.76 3.18,6.71 3.31,6.65C6,5.39 8.74,4.1 11.44,2.85C11.73,2.72 12.3,2.73 12.6,2.86M12,21.15C11.8,21.15 11.66,21.07 11.38,20.97C8.69,19.73 6,18.47 3.33,17.22C3.19,17.15 3,17.11 3,16.9C3,16.7 3.19,16.66 3.34,16.59C3.78,16.38 4.23,16.17 4.67,15.96C5.12,15.76 5.56,15.76 6,15.97C7.79,16.8 9.57,17.63 11.35,18.46C11.79,18.67 12.23,18.66 12.67,18.46C14.45,17.62 16.23,16.79 18,15.96C18.44,15.76 18.87,15.75 19.29,15.95C19.77,16.16 20.24,16.39 20.71,16.61C20.78,16.64 20.85,16.68 20.91,16.73C21.04,16.83 21.04,17 20.91,17.08C20.83,17.14 20.74,17.19 20.65,17.23C18,18.5 15.33,19.72 12.66,20.95C12.46,21.05 12.19,21.15 12,21.15M12,16.17C11.9,16.17 11.55,16.07 11.36,16C8.68,14.74 6,13.5 3.34,12.24C3.2,12.18 3,12.13 3,11.93C3,11.72 3.2,11.68 3.35,11.61C3.8,11.39 4.25,11.18 4.7,10.97C5.13,10.78 5.56,10.78 6,11C7.78,11.82 9.58,12.66 11.38,13.5C11.79,13.69 12.21,13.69 12.63,13.5C14.43,12.65 16.23,11.81 18.04,10.97C18.45,10.78 18.87,10.78 19.29,10.97C19.76,11.19 20.24,11.41 20.71,11.63C20.77,11.66 20.84,11.69 20.9,11.74C21.04,11.85 21.04,12 20.89,12.12C20.84,12.16 20.77,12.19 20.71,12.22C18,13.5 15.31,14.75 12.61,16C12.42,16.09 12.08,16.17 12,16.17Z" />
</svg>
              </md-icon>
              <md-select ng-model="user.department" ng-change="selectDeptService(user.department)">
                <md-option value="{{x.srid}}" ng-repeat="x in fetchServicesResponsePojo.pd">{{x.name}}</md-option>
             </md-select>
            </md-input-container>
                <md-input-container flex="50">
              <label>Services</label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
</svg>
              </md-icon>
              <md-select name="type" ng-model="user.service" >
                <md-option value="{{y.srid}}" ng-repeat="y in fetchDeptServicesResponsePojo.pd">{{y.name}}</md-option>
              </md-select>
            </md-input-container>
           </div>
	
	
	                         <md-input-container class="md-block" ng-show="disFlag==false"> <label>Remarks</label> <textarea
								maxlength="600" name="rmks" id="rmks" rows="5"
								ng-required="true" ng-model="user.rmks"></textarea>
							<div ng-messages="createTicketForm1.rmks.$error" role="alert">
								<div ng-message="required">Remarks is required.</div>
							</div>
							</md-input-container>
	
                <md-input-container class="md-block">
                  <label>Query</label>
                           <textarea   maxlength="600" name="query" id="query" rows="5" ng-required="true"   ng-model="user.query"></textarea>
       	<div ng-messages="createTicketForm.query.$error" role="alert">
          <div ng-message="required">
            Query is required.
          </div>
        </div>
                </md-input-container>
                
            <div layout="row">
           <md-input-container flex="50">
          <label>Query type</label>
           <md-select name="qtype" ng-model="user.qtype" ng-required="true">
            <md-option value="General">General</md-option>
            <md-option value="Bug">Bug</md-option>
           <md-option value="Feedback">Feedback</md-option>
            </md-input-container>
          <md-input-container flex="50">
          <label>Status</label>
           <md-select name="status" ng-model="user.status" ng-required="true" ng-hide="isStatus==true">
            <md-option value="close">Close</md-option>
            <md-option value="assign">Assign</md-option>
            </md-input-container>
            </div>       
                	
            
       
        <div class="custom_button_box1" align="center" layout-margin>
            <md-button class="md-raised custom-green" ng-click="emailWrapUpRequest1(user)" ng-disabled="!((user.query  && user.status  && user.category && user.qtype) || (user.query   && user.category && user.qtype && user.department))">Submit</md-button>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="reset()">Refresh</md-button>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="cancel()">Cancel</md-button>
           </div>
       
        </form>
        </md-content>
        </md-dialog>
        </div>
        </div>
 
      
        
        
        
        
        
           <div style="visibility: hidden">
    <div class="md-dialog-container crm-ticket" id="ResponseDialog" style="height:auto;">
    <form name="createTicketForm">
    	<md-dialog class="umang-dialog crm-tckt-popup" style="min-width:600px;">
		<div class="" align="left">
		<md-card class="_md" layout-padding>
            <md-list role="list">
              <div class="star-rating"><h4 style="margin:0;">Response</h4></div>
            </md-list>
            
             <div layout="row">
                <md-input-container  flex="50" class="plus_91" >
                <label>Mobile Number</label>
                <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="#7f7f7f" d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z" />
                        </svg></md-icon>
        <input type="tel" name="mobNo" autocomplete="off" id="mobNo" value="{{userObj.msisdn}}" ng-model="userObj.msisdn" mobile-length-directive maxlength="10" ng-required="true" no-special-directive ng-pattern="/^[7-9][0-9]{9}$/"/>
        <div ng-messages="createTicketForm.mobNo.$error" role="alert">
          <div ng-message="required">
            Mobile Number is Required.
          </div>
          <div ng-message="pattern">
            Mobile Number must be 10 digit number and start with 7,8 or 9 only.
          </div>
        </div>
                </md-input-container>
                <md-input-container  flex="50">
                <label>User Name</label>
                <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#7f7f7f" d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z" />
                </svg></md-icon>
                     <input ng-required="true" type="text" name="fatherName"  id="fatherName" ng-model="userObj.father_name" maxlength="50" characters-only-directive no-special-directive/>

                </md-input-container>
            </div>
            
            <div layout="row">
                <md-input-container flex="50">
              <label>Category</label>
              <md-icon>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="#5f5f5f" d="M4,2C2.89,2 2,2.89 2,4V14H4V4H14V2H4M8,6C6.89,6 6,6.89 6,8V18H8V8H18V6H8M12,10C10.89,10 10,10.89 10,12V20C10,21.11 10.89,22 12,22H20C21.11,22 22,21.11 22,20V12C22,10.89 21.11,10 20,10H12Z" />
			</svg>
			</md-icon>
                  <md-select name="category" ng-model="userObj.category" ng-required="true" ng-change="fetchSubCategories(userObj.category)">
            <md-option ng-repeat="a in fetchCategoriesResponsePojo.pd" value="{{a.catid}}">{{a.catnam}}</md-option>
            
          </md-select>
           <div ng-messages="createTicketForm.category.$error" role="alert">
          <div ng-message="required">
            Category is Required.
          </div>
        </div>
            </md-input-container>
<!--                 <md-input-container flex="50">
              <label>Sub Category</label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
</svg>
              </md-icon>
             <md-select name="subCategory" ng-model="userObj.subCategory" ng-required="true">
            <md-option value="{{z.subcid}}" ng-repeat="z in fetchSubCategoriesResponsePojo.pd">{{z.subcnam}}</md-option>


          </md-select>
          <div ng-messages="createTicketForm.subCategory.$error" role="alert">
          <div ng-message="required">
            Sub Category is Required.
          </div>
        </div>
            </md-input-container> -->
            </div>
          
            <div layout="row">
                <md-input-container flex="50">
              <label>Department Name </label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M12.6,2.86C15.27,4.1 18,5.39 20.66,6.63C20.81,6.7 21,6.75 21,6.95C21,7.15 20.81,7.19 20.66,7.26C18,8.5 15.3,9.77 12.62,11C12.21,11.21 11.79,11.21 11.38,11C8.69,9.76 6,8.5 3.32,7.25C3.18,7.19 3,7.14 3,6.94C3,6.76 3.18,6.71 3.31,6.65C6,5.39 8.74,4.1 11.44,2.85C11.73,2.72 12.3,2.73 12.6,2.86M12,21.15C11.8,21.15 11.66,21.07 11.38,20.97C8.69,19.73 6,18.47 3.33,17.22C3.19,17.15 3,17.11 3,16.9C3,16.7 3.19,16.66 3.34,16.59C3.78,16.38 4.23,16.17 4.67,15.96C5.12,15.76 5.56,15.76 6,15.97C7.79,16.8 9.57,17.63 11.35,18.46C11.79,18.67 12.23,18.66 12.67,18.46C14.45,17.62 16.23,16.79 18,15.96C18.44,15.76 18.87,15.75 19.29,15.95C19.77,16.16 20.24,16.39 20.71,16.61C20.78,16.64 20.85,16.68 20.91,16.73C21.04,16.83 21.04,17 20.91,17.08C20.83,17.14 20.74,17.19 20.65,17.23C18,18.5 15.33,19.72 12.66,20.95C12.46,21.05 12.19,21.15 12,21.15M12,16.17C11.9,16.17 11.55,16.07 11.36,16C8.68,14.74 6,13.5 3.34,12.24C3.2,12.18 3,12.13 3,11.93C3,11.72 3.2,11.68 3.35,11.61C3.8,11.39 4.25,11.18 4.7,10.97C5.13,10.78 5.56,10.78 6,11C7.78,11.82 9.58,12.66 11.38,13.5C11.79,13.69 12.21,13.69 12.63,13.5C14.43,12.65 16.23,11.81 18.04,10.97C18.45,10.78 18.87,10.78 19.29,10.97C19.76,11.19 20.24,11.41 20.71,11.63C20.77,11.66 20.84,11.69 20.9,11.74C21.04,11.85 21.04,12 20.89,12.12C20.84,12.16 20.77,12.19 20.71,12.22C18,13.5 15.31,14.75 12.61,16C12.42,16.09 12.08,16.17 12,16.17Z" />
</svg>
              </md-icon>
              <md-select   ng-model="userObj.departmentid" ng-change="selectDeptService(userObj.departmentid)">
                <md-option value="{{x.srid}}" ng-repeat="x in fetchServicesResponsePojo.pd">{{x.name}}</md-option>
             </md-select>
            </md-input-container>
                <md-input-container flex="50">
              <label>Services</label>
              <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
</svg></md-icon>
              <md-select name="type" ng-model="userObj.service" >
                <md-option value="{{y.srid}}" ng-repeat="y in fetchDeptServicesResponsePojo.pd">{{y.name}}</md-option>
              </md-select>
            </md-input-container>
           </div>

           
            

            
                <md-input-container class="md-block">
              <label>Query</label>
              <md-icon>
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
</svg>
			</md-icon>
              <input type="text" ng-model="userObj.query" maxlength="200"  value="{{userObj.query}}" />
            </md-input-container>
                        <md-input-container flex="100">
              <label>Status</label>
              <md-icon><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
</svg></md-icon>
              <md-select  ng-model="userObj.ticketSts"  >
                <md-option value="{{m.id}}" ng-repeat="m in ticketStatus1" ng-selected="{{userObj.ticketSts==m.id}}" >{{m.status}}</md-option>
      
              </md-select>
            </md-input-container>
            
                            <md-input-container class="md-block">
              <label>Response</label>
              <md-icon>
              	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#7f7f7f" d="M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z" />
</svg>
              </md-icon>
              <textarea ng-model="userObj.response" maxlength="200" rows="1" value="{{userObj.response}}" md-select-on-focus ></textarea>
            </md-input-container>
                         
            	  <div layout="row" ng-hide="userObj.attachment==''">
                       		<a href="{{userObj.attachment}}">
        			<md-icon>
        				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#5f5f5f" d="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z" />
</svg>
        			</md-icon>
        		 View attachment</a></div>
        </md-card>
       
        <div class="custom_button_box1" align="center" layout-margin>
            <md-button class="md-raised custom-green" ng-click="updateTicketResponse(userObj)" ng-disabled="!(userObj.msisdn && userObj.category && userObj.ticketSts && userObj.response)">Submit</md-button>
            <md-button class="md-raised md-primary md-hue-2 md-primary" ng-click="close()">Cancel</md-button></div>
        </div>
		</md-dialog>
		</form>  	
    </div>
  </div>
