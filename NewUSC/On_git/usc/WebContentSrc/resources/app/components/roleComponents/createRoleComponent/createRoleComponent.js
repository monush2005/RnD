(function(app) {
    'use strict';
    app.component('createRoleComponent', {
        templateUrl: 'resources/app/components/roleComponents/createRoleComponent/createRoleComponent.html',
        controller: createRoleComponentController,
        controllerAs: 'vm',
        bindings: {
            role: '<',
            dialogMode: '<'
        }
    })
        var suballRightCategoryWise;
    createRoleComponentController.$inject = ['$scope','$localStorage', 'rolesRightsService', '$mdDialog', '$state', 'customToastService' ,'customDialogService'];

    function createRoleComponentController($scope,$localStorage, rolesRightsService, $mdDialog, $state, customToastService ,customDialogService) {
        var vm = this;
        vm.cancel = cancel;
        vm.createRole = createRole;
        vm.saveEditedRole = saveEditedRole;
        vm.selectUnselectAll = selectUnselectAll;
        vm.sortApps = sortApps;
        vm.saveas1111=saveas1111;
        vm.saveAs=saveAs;
        vm.setid=setid;
        vm.setroleId=setroleId;
        var obj={};
        var roleIdsaveas={};
        var  allRightCategoryWise=[];
        var previousrightlength;
        var a;
      var roleback;
      var arr=[];
        vm.$onInit = function() {
            vm.allRights = _($localStorage.userRights).filter(right => !right.temp).value();
           
            vm.allRights = _.cloneDeep(vm.allRights);
            
            $("#NewlyAdded").hide();
            $("#Revoke").hide();
            $("#all").hide();
            $("#saveAsbtn").hide();
            
            rolesRightsService.getRolesByCateogry().then((response) => {
        	 vm.categoryWiseRole=response;
        	 var  mergedArray = [];
              _.forEach(vm.allRights, function(rightId){
               var val = vm.categoryWiseRole.find(function (obj) {
            	  
            	   return obj.rightName === rightId.rightName; 
            	   });
               
               if (angular.isDefined(val)) {
                     var temp={};
                      temp.roleArray=rightId;
                      temp.rolename=val.name;
                      mergedArray.push(temp);
                     }
          });  
         var temparray={}
          _.forEach(mergedArray, function(rights){
          	temparray={}
          	temparray.rolerights=[];
          	temparray.roleheader="";
          var flag=false;
          _.forEach(allRightCategoryWise,function(i){
          	if(i.roleheader==rights.rolename)
          	{
          	i.rolerights.push(rights.roleArray);
          	   flag=true;
          	return false;
          	}
            });
                       if(!flag){
          	temparray.roleheader=rights.rolename;
          	temparray.rolerights.push(rights.roleArray);
             allRightCategoryWise.push(temparray);
            
            
                }
                     });
         
         $localStorage.suballRightCategoryWise = allRightCategoryWise;
         vm.allRightCategoryWise=$localStorage.suballRightCategoryWise;
         console.log(vm.allRightCategoryWise);
         
         vm.allRightCategoryWise.map(function(o) { return o.rolerights; }).reduce((a,b) => {
         b.reduce((c,d) => {
         arr.push(d.displayRightName);
         },{})
        
         return arr.length;
         },{})
         
         sortApps();
         if (vm.role) {
             fillForm(vm.role);
         } 
         
        // vm.allRightCategoryWise=$localStorage.suballRightCategoryWise; 
       });  
        }
        
  
        function sortApps() {
        	
        	
            switch (vm.sortType) {
                
                case 'aToZ':
                	vm.allRightCategoryWise =_.each(vm.allRightCategoryWise, (item)=>{
                		item.rolerights = _.orderBy(item.rolerights, 'displayRightName', ['asc'])
                	})
                    break;
                case 'zToA':
                	vm.allRightCategoryWise = _.each(vm.allRightCategoryWise, (item)=>{
                		item.rolerights = _.orderBy(item.rolerights, 'displayRightName', ['desc'])
                	})
                    break;
            }
        }
       function saveAs(name){
    	  // $("#saveAsbtn").show();
    	  
    	   obj=_(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}).value()
    	 
    	   
            if(obj.length === previousrightlength){
            	$("#saveAsbtn").hide();	
            }else{
            	$("#saveAsbtn").show();
            }   	  
    	   
    	
    	   roleIdsaveas=vm.role.roleId;
    	   setid();
    	   setroleId();
    	   
       }
       function setroleId(){
      	
     	 rolesRightsService.setroleIdsaveAs(roleIdsaveas);
      }
        function saveas1111(){
       
            
                 customDialogService.showComponent({
                     component: 'createRoleComponentSaveAs',
                     clickOutsideToClose: true,
                     bindings: {
                         
                         dialogMode: true
                     }
                 })
        }

        function cancel() {
           // let canExit = false;
           /* if (isFormDirty())
                canExit = confirm("Are you sure you want to exit without saving?");
            else
                canExit = true;*/

          //  if (canExit)
                $mdDialog.cancel();
        }

        function createRole() {
        	 a = _(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}).value()
            if (!areRightsValid())
                return;
              
            vm.createRolePromise = rolesRightsService.createRole({
                roleName: vm.roleName,
                rights: _.filter(a, 'selected')
                
            }).then((data) => {
                var confirmDialog = $mdDialog.confirm()
                    .title('Role Created')
                    .htmlContent(`<b>${vm.roleName}</b> role has been created. What would you like to do next?`)
                    .ok('Create New User')
                    .cancel('Create another Role')

                $mdDialog.show(confirmDialog)
                    .then(() => {
                        $state.go('selfcare.users.create');
                    }).catch(() => {
                        $state.reload('selfcare.roles.create');
                    })
            })
            
            
        }

        function saveEditedRole() {
        	
        	var a = _(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}).value()
        	
        	//console.log("----------------------------------------"+_(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}));
        	//console.log(".........."+JSON.stringify(roleback,_.difference(_(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}))));
            if (!areRightsValid())
                return;

            vm.saveRolePromise = rolesRightsService.saveRole({
                roleId: vm.role.roleId,
                roleName: vm.roleName,
                rights: _.filter(a, 'selected')
            }).then(() => {
                return $mdDialog.hide(vm.roleName);
            })
           
           
           
        }
        function setid(){
        	
       	 rolesRightsService.ids(obj);
        }
        function fillForm(role) {
        	//console.log("role============"+JSON.stringify(role));
        	roleback=role.rights.rolerights;
        	  var previousRights=_.uniq(role.rights.previousRolerights);
            var previousRightsMap = _.uniq(_.map(previousRights,'rightId'));
          	var newRights=role.rights.rolerights;
            var newRightsMap = _.uniq(_.map(newRights,'rightId'));
                    // vm.Newlyadded = _.intersectionBy(newRights,arr,'rightId');
                  var newPreviousDiff = _.difference(newRightsMap,previousRightsMap);
                   var newPreviousDiffArr = _.map(newPreviousDiff, (right) => {
                        return {

                            rightId : right

                        }            

                    })
                    
                      vm.Newlyadded = _.intersectionBy(newRights,newPreviousDiffArr,'rightId');
                  var prviousNewDiff = _.difference(previousRightsMap,newRightsMap);
                  var prviousNewDiffArr = _.map(prviousNewDiff, (right) => {
                        return {

                            rightId : right

                        }            

                    })

                      vm.Revokeunique = _.intersectionBy(previousRights,prviousNewDiffArr,'rightId');
            previousrightlength=role.rights.rolerights.length;
            if(vm.Newlyadded)
            {
              if( vm.Newlyadded.length > 0)
              {                             
                  $("#NewlyAdded").show();
                 
                  $("#all").show();
              }
            }  
            if(vm.Revokeunique)
            {
              if( vm.Revokeunique.length > 0)
              {    
                                                                 
                  $("#Revoke").show();                  
                  $("#all").show();            
              }
            }
          
        	vm.roleName = vm.role.roleName;
        	var x;
           	_.forEach(vm.allRightCategoryWise,function(i){
             x = _.markSelectedBy(i.rolerights, _.map(role.rights.rolerights, 'rightId'), 'rightId');
              
           	});
  
        }
        

        function isFormDirty() {
            let originalRights = _.map(vm.role.rights, 'rightId');
            let selectedRights = _(vm.allRights).filter('selected').map('rightId').value();

            return (_.difference(originalRights, selectedRights).length || _.difference(selectedRights, originalRights).length || vm.roleName != vm.role.roleName)
        }

        function areRightsValid() {
        	var a = _(vm.allRightCategoryWise).map('rolerights').flatten().filter({selected: true}).value()
            var numberOfSelectedRights = _.filter(a, 'selected').length
            if (!a.length) {
                customToastService.freeText('Please select atleast one Right', undefined, true)
                return false;
            }
            if (arr.length == a.length) {
                customToastService.freeText('You cannot select all rights, please select atleast one less right.', undefined, true)
                return false;
            }
            
            else {
                return true;
            }
        }

        function selectUnselectAll(toSelect) {
            _.each(a, (right) => {
                right.selected = toSelect;
            });
        }
    }
})(angular.module('selfcare'));