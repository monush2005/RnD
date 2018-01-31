(function(app) {
    'use strict';
    app.service('rolesRightsService', rolesRightsServiceFn);
    rolesRightsServiceFn.$inject = ['httpService', '$timeout'];
    var rights;
    var roleids;
    function rolesRightsServiceFn(httpService, $timeout) {
        var rolesRightsService = this;
        rolesRightsService.getMyRoles = getMyRoles;
        rolesRightsService.createRole = createRole;
        rolesRightsService.getRoleDetails = getRoleDetails;
        rolesRightsService.saveRole = saveRole;
        rolesRightsService.ids=ids;
        rolesRightsService.getIds=getIds;
        rolesRightsService.setroleIdsaveAs=setroleIdsaveAs;
        rolesRightsService.getroleids=getroleids;
        rolesRightsService.getRolesByCateogry=getRolesByCateogry;
        function setroleIdsaveAs(roleId){
        	roleids=roleId;
        }
        function getroleids(){
        	return  roleids;
        }
        
        function ids(a){
        	rights = a;
        }
        function getIds(){
        	return rights;
        }
        function getMyRoles() {
            return httpService.post('mng/fetchRole', {});
        }

        function createRole(data){
        	
            var payload = {
                status: 'add',
                rights: _.map(data.rights, 'rightId').join(','),
                rolename: data.roleName
            }
            return httpService.post('mng/addRole', payload);
        }

        function saveRole(data){
        	console.log("service..............................."+ _.map(data.rights, 'rightId').join(','));
            var payload = {
                roleId: data.roleId,
                roleName: data.roleName,
                rights: _.map(data.rights, 'rightId').join(',')
            }
            return httpService.post('mng/saveRole', payload);
        }

        function getRoleDetails(roleId){
            var payload = {
                roleId: roleId
            }
            return httpService.post('mng/fthRghtForRole', payload);
        }
        function getRolesByCateogry()
        {
        	  var payload = {
                       lang: "en",
                     token: ""
                   }
        	return httpService.post('slfFetchCategoryWiseRts', payload);    	
        }

    }
})(angular.module('selfcare'));
