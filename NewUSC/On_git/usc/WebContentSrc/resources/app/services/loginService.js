(function(app) {
    'use strict';
    app.service('loginService', loginServiceFn);
    loginServiceFn.$inject = ['httpService', 'categoriesService', '$q', 'gaHttpService'];

    function loginServiceFn(httpService, categoriesService, $q, gaHttpService) {
        var loginService = this;

        loginService.loginUser = loginUser;
        loginService.logout = logout;

        function loginUser(data) {
        	
            httpService.clearCache();

            var payload = {
                userId: data.userid.toLowerCase(),
                pwd: sha256(data.password)
            }

            return httpService.post('auth/lg', payload).then((data) => {
            	//console.log("....................."+JSON.stringify(data));
                return mapAppWithCategory(data);
            }).then((data) => {
                mapAppsAndServices(data);
                data.apps = _.keyBy(data.apps, 'appid');
                data.services = _.keyBy(data.services, 'serviceid');
                data.rights = _.map(data.rights, (right) => {
                    right.rightId = right.rightid;
                    right.rightName = right.rightname;
                    delete right.rightid;
                    delete right.rightname;
                    return right;
                })

                if (data.roles.length) {
                    data.roles[0].logicalName = data.roles[0].logicalName || "";
                }

                if (data.roles.length && data.roles[0].logicalName.toLowerCase() != 'guest') {
                    //condition for all users except GUEST users
                    //There are few features that do not have a defined right in system
                    // and are available to all users except GUEST users.
                    // 
                    // Here we are pushing fake rights at the time of login for all users except GUEST.
                    // While using rights from localstorage for Roles, filter the all temp.
                    data.rights.push({
                        rightName: "dashboard",
                        temp: true
                    })

                   /* data.rights.push({
                        rightName: "ratingsApp",
                        temp: true
                    })

                    data.rights.push({
                        rightName: "ratingsDept",
                        temp: true
                    })*/
                }
                return data;
            })
        }

        function logout() {
            httpService.clearCache();
            gaHttpService.clearCache();
            return httpService.post('auth/lgout', {});
        }

        function mapAppsAndServices(data) {
            var appsBackup = _.cloneDeep(data.apps)
            _.each(data.apps, (app) => {
                app.services = _(data.services).filter({ appid: app.appid }).cloneDeep();
            });
            _.each(data.services, (service) => {
                service.app = _.find(appsBackup, { appid: service.appid });
            });
        }

        function mapAppWithCategory(data) {
            if (!data.apps.length) {
                return $q.resolve(data);
            }
            return categoriesService.fetchCategories().then((categories) => {
                _.each(data.apps, (app) => {
                    app.categories = [];
                    _.each(categories, (category) => {
                        if (_.exists(category.appIds.split(','), app.appid))
                            app.categories.push({
                                categoryName: category.categoryName,
                                categoryId: category.categoryId
                            })
                    })
                })
                return data;
            })
        }
    }
})(angular.module('selfcare'));