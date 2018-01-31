(function(app) {
    'use strict';
    app.service('usersService', usersServiceFn);
    usersServiceFn.$inject = ['httpService', '$timeout', '$localStorage'];

    function usersServiceFn(httpService, $timeout, $localStorage) {
        var usersService = this;
        usersService.createUser = createUser;
        usersService.mobOtpInitiate = mobOtpInitiate;
        usersService.emailOtpInitiate = emailOtpInitiate;
        usersService.updateSign = updateSign;
        usersService.getSubUsers = getSubUsers;
        usersService.getSubmittedUsers = getSubmittedUsers;
        usersService.getSubUserDetails = getSubUserDetails;
        usersService.saveUserApps = saveUserApps;
        usersService.saveUserStatus = saveUserStatus;
        usersService.saveUserRole = saveUserRole;
        usersService.changePasswordByOTP = changePasswordByOTP;
        usersService.changePassword = changePassword;
        usersService.saveUserMobile = saveUserMobile;
        usersService.fetchdeptbasedstate = fetchdeptbasedstate;
        usersService.changeUserRole = changeUserRole;
        function fetchdeptbasedstate(state,catid) {
            var payload = {
            		 states: state,
            		 category:catid,
            		 lang:"en"
               
            }
           
            return httpService.post('mng/FetchDeptBasedState', payload);
        }
        

        function createUser(userData) {
            var payload = {
                userId: userData.email.toLowerCase(),
                emailId: userData.email.toLowerCase(),
                mno: userData.mobile,
                roleId: userData.role.roleId,
                state: userData.state,
                appId: _.map(userData.selectedApps, 'appid').join(',')
            }
            return httpService.post('mng/crtUsr', payload);
        }

        function getSubUsers(filters = {}) {
            let payload = {
                appIds: filters.appIds,
                roleIds: filters.roleIds,
                categoryIds: filters.categoryIds,
                status: filters.status,
                startDate: filters.startDate,
                endDate: filters.endDate,
                state: filters.state
            }
            return httpService.post('mng/getSubUsers', payload);
        }

        function getSubUserDetails(userId) {
        	
            return httpService.post('mng/getSubUserDetails', { userId: userId }).then((user) => {
            	console.log("user service=="+JSON.stringify(user));
               var appids = _.map(user, 'appId');
               var catIds = _.map(user, 'categoryId');
                user.appids = appids;
                user.catIds = catIds;
               user[0].roleLogicalName = user.roleLogicalName || '';
                return user;
            });
        }

        function getSubmittedUsers(){
            return httpService.post('ques/getUserQues', {});
        }

        function saveUserApps(data) {
        
            var payload = {
                app: data.selectedApps,
                userid: data.userId.toLowerCase()
            }
           
            return httpService.post('mng/updateUserAccount', payload);
        }

        function saveUserRole(data) {
        	
        	
            //to change user role if user is guest user
            //new addition was also made to change state. integrated in same api.
            var payload = {
                roleId: data.roleId,
                userId: data.userId.toLowerCase(),
                state: data.state
            }
            return httpService.post('mng/saveUserRole', payload);
        }
        
        function changeUserRole(data) {
        	
            //to change user role if user is guest user
            //new addition was also made to change state. integrated in same api.
            var payload = {
                roleId: data.roleId,
                userId: data.userId.toLowerCase(),
                lang: "en"
            }
            return httpService.post('mng/changeUserRole', payload);
        }

        function saveUserStatus(data) {
            var payload = {
                status: data.status,
                userid: data.userId.toLowerCase()
            }
            return httpService.post('mng/updateUserStatus', payload);
        }

        function updateSign(sign) {
            var payload = { signature: sign };
            return httpService.post('acc/updateAccount', payload);
        }

        function changePassword(oldPassword, newPassword) {
            var payload = {
                oldpwd: sha256(oldPassword),
                newpwd: sha256(newPassword)
            }

            return httpService.post('acc/passwdChange', payload);
        }

        function changePasswordByOTP(data) {
            var payload = {
                newpwd: sha256(data.newPassword),
                otp: data.otp,
                userId: data.userId.toLowerCase()
            }

            return httpService.post('auth/passwdReset', payload);
        }

        function saveUserMobile(mobile, otp) {
            var payload = {
                mno: mobile,
                otp: otp
            }
            return httpService.post('acc/updateAccount', payload);
        }

        function mobOtpInitiate(mobile,type) {
            var payload = {
                mno: mobile,
                ort: 'slfmob',
                type:type
            }
            return httpService.post('auth/initOtp', payload);
        }

        function emailOtpInitiate(email,type) {
            var payload = {
                peml: email.toLowerCase(),
                ort: 'slfemail',
                type:type
            }
            return httpService.post('auth/initOtp', payload);
        }
    }
})(angular.module('selfcare'));