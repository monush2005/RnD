(function(app) {
    'use strict';
    app.service('categoriesService', categoriesServiceFn);
    categoriesServiceFn.$inject = ['httpService', '$localStorage', '$http', 'commonDataService'];

    function categoriesServiceFn(httpService, $localStorage, $http, commonDataService) {
        var categoriesService = this;
        categoriesService.fetchCategories = fetchCategories;
        categoriesService.linkCategory = linkCategory;
        categoriesService.unlinkCategory = unlinkCategory;

        function fetchCategories() {
            return httpService.post('category/fetchAll', {}).then((response) => {
                return _.map(response.categories, (category) => {
                    return {
                        categoryName: category.cgname,
                        categoryId: category.cgid,
                        appIds: category.appid
                    }
                });
            })
        }

        function linkCategory(appId, categoryId) {
            let payload = {
                appId: appId,
                categoryId: categoryId
            }
            return httpService.post('category/link', payload).then((data) => {
                commonDataService.refreshServerCache();
                $localStorage.userApps[appId].categories.push({categoryId});
                _($localStorage.userServices).filter({appid: appId}).head().app.categories.push({categoryId});
                return data;
            });
        }

        function unlinkCategory(appId, categoryId) {
            let payload = {
                appId: appId,
                cgid: categoryId
            }
            return httpService.post('category/unlink', payload).then((data) => {
                commonDataService.refreshServerCache();
                _.pullAllBy($localStorage.userApps[appId].categories, [{categoryId: categoryId}], 'categoryId');
                let appOfServices = _($localStorage.userServices).filter({appid: appId}).head().app;
                _.pullAllBy(appOfServices.categories, [{categoryId: categoryId}], 'categoryId');
                return data;
            });

        }
    }
})(angular.module('selfcare'));