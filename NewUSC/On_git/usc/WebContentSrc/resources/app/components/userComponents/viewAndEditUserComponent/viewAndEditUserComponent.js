(function(app) {
    'use strict';
    app.component('viewAndEditUserComponent', {
        templateUrl: 'resources/app/components/userComponents/viewAndEditUserComponent/viewAndEditUserComponent.html',
        controller: viewAndEditUserComponentController,
        controllerAs: 'vm',
        bindings: {
            user: '<',
            forDialog: '<'
        }
    })

    viewAndEditUserComponentController.$inject = ['$localStorage', '$mdDialog', 'usersService', 'rolesRightsService', '$q', 'commonDataService' ,'categoriesService'];

    function viewAndEditUserComponentController($localStorage, $mdDialog, usersService, rolesRightsService, $q, commonDataService ,categoriesService) {
        var vm = this;
        vm.saveUser = saveUser;
        vm.cancel = cancel;
        vm.fetchStates = fetchStates;
        vm.stateChange123 = stateChange123;
        vm.onAppsDDOpen1 = onAppsDDOpen1;
        vm.fetchStatewithcntrl = fetchStatewithcntrl;
        vm.fetchcatagory = fetchcatagory;
        vm.RoleChange = RoleChange;
        vm.getStates= getStates;
        vm.fetchcatagorynew=fetchcatagorynew;
        vm.catagoryChange=catagoryChange;
        var pervstate="";
        vm.beforeon=beforeon;
        vm.$onInit = function() {
        	//super user info
        	 vm.isSuperAdmin = $localStorage.userRole.logicalName.toLowerCase() == 'superadmin';
           /*  console.log("logicalname===="+$localStorage.userRole.logicalName.toLowerCase());
             
             console.log(JSON.stringify($localStorage.userInfo.statecentral));*/
             if($localStorage.userInfo.statecentral.length>3 && $localStorage.userInfo.statecentral.match(/99/g)){
             	vm.stateName1="All"
             				
             } else if($localStorage.userInfo.statecentral==99){
            	vm.stateName1="Center"
            		
            }else{
            	vm.stateName1="State"
            		
            					
            }
        	
            vm.state = vm.user[0].stateCentral;
            vm.catagory=vm.user.catIds;
            vm.selectedApps1="";
            
            //vm.selectedApps1=vm.user.appids;
           // alert("vm.selectedApps1====="+vm.selectedApps1);
           /*
			 * alert("states====="+vm.user.stateCentral);
			 * alert(vm.user.stateCentral.length);
			 * 
			 */
            if(vm.user[0].organizationName=="null" || vm.user[0].organizationName==undefined){
            	vm.user.organizationName="NA";
            }else{
            	vm.user.organizationName=vm.user[0].organizationName;
            }
          //  console.log("vm.user.organizationName"+vm.user.organizationName);
            if(vm.user[0].stateCentral.length>3 && vm.user[0].stateCentral.match(/99/g)){
            	vm.user.stateName="All"
            		vm.stateRadio='all'
            			
            }
            else if(vm.user[0].stateCentral==99){
            	vm.user.stateName="Center"
            		vm.stateRadio='central'
            }else{
            	vm.user.stateName="State"
            		vm.stateRadio='state'
            					
            }
             pervstate=vm.stateRadio;
           
            commonDataService.getStateName(vm.state).then((name) => {
               vm.user.stateName = name;
              // alert(name);
            	
            })

            if (vm.user[0].roleLogicalName.toLowerCase() == "guest") {
                vm.isRoleEditable = true;
                vm.stateRadio = vm.state == '99'?'central':'state';
                if(vm.stateRadio=='state')
                    fetchStates();
                getRoles();
            }
            getnSetRole();
            getnSetAllApps();
            fetchStates();
            fetchcatagory();
            beforeon();
        }
        function beforeon(){
        	
        	vm.Apps= $localStorage.detailedUser;
        	 let selectedapp = _.map(vm.Apps, (id)=>{
                 return {
                	 departmentId: id.departmentId
                 }
                 })
                 vm.selectedApps1 = _.intersectionBy(vm.Apps, selectedapp, 'departmentId');
        	
        	
        	
        }
        function fetchStates() {
           
            if(vm.allStates)
                return

            return commonDataService.fetchStates().then((states) => {
            	
               // vm.allStates = states;
                $localStorage.Allstates = states;
                
                vm.allStates = $localStorage.Allstates;
                
                let selectedStates = _.map(vm.state.split(','), (id)=>{
                   return {
                   stateid: id
                   
                   }
                   })
                   
                  
                   vm.state = _.intersectionBy(states, selectedStates, 'stateid');
                
              //  console.log(".................."+JSON.stringify($localStorage.Allstates));
               
            })
            
        }
        
        function getStates(){
        	
        vm.allStates = $localStorage.Allstates;                                                                               
        }
       function RoleChange(selectedRoles){
    	// alert(vm.user.roleName);
    	 var perv =  vm.user[0].roleId;
    	 
    	
    	   var dialog = confirm('Are you sure you want to change the role(s)? All the scheduled campaign/banner/notification will remain unaffected.');
           if(!dialog) {
        	   
        	   vm.selectedRoles = perv;
        	  
                   
                   getRoles().then(() => {
                 vm.selectedRoles = _.find(vm.roles, {roleId : vm.user[0].roleId});
                         
                   })
                  
           }
       }

        function fetchStatewithcntrl() {
        	
        	vm.allStates = [{"stateid":"all","statename":"All"}];
           /*
			 * return commonDataService.fetchStates().then((states) => { // var
			 * states=states.push({"stateid":"99","statename":"Center"});
			 *  })
			 */
        }
        var allStateId="32,23,4,29,3,9,5,13,30,18,10,20,8,33,34,28,25,21,22,2,24,16,7,11,1,12,31,37,27,19,36,14,35,15,26,99";
        function stateChange123() {
        	
        	 
      	   var dialog = confirm('Are you sure you want to change the nature? All the scheduled campaign/banner/notification will remain unaffected.');
             if(!dialog) {   
          	   
          	 vm.user.stateName=pervstate;
         		vm.stateRadio=pervstate;
         		
             }
        	
        	vm.catagory="";
        	vm.selectedApps1="";
        }
        
       function fetchcatagory(){
   
    	 
    	   vm.fetchCategoriesPromise = categoriesService.fetchCategories().then((categories) => {
    		   $localStorage.Allcategories = categories;
    		   vm.catagories = $localStorage.Allcategories;
    		   
    		   let selectedcatagory = _.map(vm.catagory, (id)=>{
                   return {
                   categoryId: id
                   }
                   })
                   vm.catagory = _.intersectionBy(categories, selectedcatagory, 'categoryId');
                
               
                   		   
              
           })
       }
       function catagoryChange(){
    	   onAppsDDOpen1();
    	   
       }
       function fetchcatagorynew(){
      	
      	
      	  
      		   vm.catagories = $localStorage.Allcategories;
      		 onAppsDDOpen1();
         }
          
      
        function saveUser() {
        	
        	var statearray=[];
           	var stateid;
           	angular.forEach(vm.state,function(value,key){
           		statearray.push(value.stateid)
         		
         		
         	})
         	stateid=statearray.toString();
           	if(vm.stateRadio=="all"){
         	   stateid=allStateId;
         	  
            }else if(vm.stateRadio=="central"){
         	   stateid="99";
            }
            else{
         	  
         	   stateid=stateid; 
            }
        		 
        	
                    	
            var payload = {
                userId: vm.user[0].userId,
                status: vm.user[0].status
            }
            vm.savingUserPromise = usersService.saveUserStatus(payload).then((data) => {
            	 
                var appsPayload = {
                    userId: vm.user[0].userId,
                    selectedApps: _.map(vm.selectedApps1, 'departmentId').toString()
                }
               
              
                return usersService.saveUserApps(appsPayload);
            })
            // for edit role of user
            .then(() => {
               /*
				 * if (!vm.isRoleEditable) return $q.resolve();
				 */

                var payload = {
                    userId: vm.user[0].userId,
                    roleId: vm.user[0].roleId,
                    state: stateid
                }
               
               
                return usersService.saveUserRole(payload);
            }).then(() => {
                $mdDialog.hide();
            })
            
            // for change role
            .then(() => {
                var payload = {
                    userId: vm.user[0].userId,
                    roleId:vm.selectedRoles.roleId,
                    lang: "en"
                }
                
                return usersService.changeUserRole(payload);
            }).then(() => {
                $mdDialog.hide();
            })
            
            
        }
        
        function onAppsDDOpen1(argument) {
        
        	 var catagoriarray = [];
           	var catid;
           
           	angular.forEach(vm.catagory,function(value,key){
         		catagoriarray.push(value.categoryId)
	
         	})
         	catid=catagoriarray.toString();
           	
           	var statearray=[];
           	var stateid;
           	angular.forEach(vm.state,function(value,key){
           		statearray.push(value.stateid)	
         	})
         	stateid=statearray.toString();
           	
           if(vm.stateRadio=="all"){
        	   stateid=allStateId;
        	  
           }else if(vm.stateRadio=="central"){
        	   stateid="99";
           }
           else{
        	  
        	   stateid=stateid; 
           }
           	
            vm.fetchdeptbasedstate = usersService.fetchdeptbasedstate(stateid,catid).then((data) => {
       		 vm.Apps=data;
       		
       		 if(!vm.state){
       			 vm.allApps = _($localStorage.userApps).filter({state : vm.state}).map(_.trimAppDetails).value();
                 vm.Apps = _.filter(vm.allApps, app => _.includes(vm.user.appids, app.appid))	 
       		 }
       		 let selectedapp = _.map(vm.Apps, (id)=>{
                 return {
                	 departmentId: id.departmentId
                 }
                 })
                 vm.selectedApps1 = _.intersectionBy(vm.Apps, selectedapp, 'departmentId');
       
       	 })
       	 
        }
        

        function getnSetAllApps() {
            vm.allApps = _($localStorage.userApps).filter({state : vm.state}).map(_.trimAppDetails).value();
           
            vm.selectedApps1 = _.filter(vm.allApps, app => _.includes(vm.user.appids, app.appid))
        }

        function getRoles(argument) {
            return  rolesRightsService.getMyRoles().then((roles) => {  vm.roles = roles;})
          }
          
          function getnSetRole() {
                
                getRoles().then(() => {
                       vm.selectedRoles = _.find(vm.roles, {roleId : vm.user[0].roleId});
                        
                })
            
            }



        function cancel() {
            $mdDialog.cancel();
        }
        
        function roleNamerole() {
            if (!vm.user[0].roleName)
                alert('G');
        }

    }
})(angular.module('selfcare'));
