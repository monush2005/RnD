(function(app) {
    'use strict';
    app.component('editUsersComponent', {
        templateUrl: 'resources/app/components/userComponents/editUsersComponent/editUsersComponent.html',
        controller: editUsersComponentController,
        controllerAs: 'vm',
        bindings: {
            forTree: '<'
        }
    })

    editUsersComponentController.$inject = ['$localStorage', 'userTreeService', 'usersService', 'customDialogService', 'customToastService'];

    function editUsersComponentController($localStorage, userTreeService, usersService, customDialogService, customToastService) {
        var vm = this;
        var isNewRedirect = true;
        vm.editUser = editUser;
        vm.filterUsers = filterUsers;
        vm.clearFilters = clearFilters;
        vm.viewTree = viewTree;
        vm.sortApps=sortApps;

        vm.$onInit = function() {
            getSubUsers();
            $("#table").show();
        }
  function sortApps() { 
	       if(!vm.sortType)
	    	   vm.sortType="latestFirst";
            switch (vm.sortType) {
            case 'latestFirst':
            	vm.subUsers = (_(vm.subUsers).orderBy((user)=> moment(user.creationDate, 'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value());
                break;
            case 'oldestFirst':
            	vm.subUsers = (_(vm.subUsers).orderBy((user)=> moment(user.creationDate, 'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value());
                break;
                case 'aToZ':
                	vm.subUsers = _(vm.subUsers).orderBy((user)=>_.toLower(user.applicationName), ['asc']).value();
                    break;
                case 'zToA':
                	vm.subUsers = _(vm.subUsers).orderBy((user)=>_.toLower(user.applicationName), ['desc']).value();
                    break;
                case 'zToA':
                	 vm.subUsers = _(vm.subUsers).orderBy((user)=>_.toLower(user.userid), ['desc']).value();
                    break;
                case 'aToZ':
               	 vm.subUsers = _(vm.subUsers).orderBy((user)=>_.toLower(user.userid), ['asc']).value();
                   break;
            }
        }

        function getSubUsers() {
            vm.getSubUsersPromise = usersService.getSubUsers(vm.filters && vm.filters.payload).then((subUsers) => {
            	
                vm.subUsers = subUsers;
               if(vm.subUsers<=0){
            	   $("#table").hide();
               }
               
                if(vm.forTree)
                	
                    vm.subUsers.unshift({userId:$localStorage.userInfo.userId,creationDate:$localStorage.userInfo.cdate,applicationName:"NA"});
            }).then(() => {
            	sortApps();
            })
        }

        function clearFilters() {
            delete vm.filters;
            getSubUsers();
        }
        
      

        function editUser(user) {
        	
            user.getUserPromise = usersService.getSubUserDetails(user.userId).then((detailedUser) => {
            	 $localStorage.detailedUser = detailedUser;
            	 
                customDialogService.showComponent({
                    component: 'viewAndEditUserComponent',
                    bindings: {
                        user: detailedUser,
                        forDialog: true
                    },
                    clickOutsideToClose: false
                }).then(() => {
                    customToastService.freeText('User Details have been successfully updated.');
                })
            })
        }

        function filterUsers() {
            customDialogService.showComponent({
                component: 'filterUsersComponent',
                bindings: {
                    filters: _.cloneDeep(vm.filters)
                },
                clickOutsideToClose: true
            }).then((newFilters) => {
                vm.filters = newFilters;
                getSubUsers();
            })
        }

        function viewTree(user) {
            user.getTreePromise = userTreeService.fetchUserTree(user.userId, isNewRedirect).then((tree) => {
            	 
                isNewRedirect = false;
                customDialogService.showComponent({
                    component: 'userTreeComponent',
                    bindings: {
                        tree: tree
                    },
                    closeButton: true
                })
            });
        }
    }
})(angular.module('selfcare'));