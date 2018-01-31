(function(app) {
    'use strict';
    app.component('viewEditCategoryComponent', {
        templateUrl: 'resources/app/components/createCategoryComponent/viewEditCategoryComponent/viewEditCategoryComponent.html',
        controller: viewEditCategoryComponentController,
        controllerAs: 'vm',
        bindings: {
            category: '<'
        }
    })

    viewEditCategoryComponentController.$inject = ['$localStorage', 'categoriesService', 'customDialogService'];

    function viewEditCategoryComponentController($localStorage, categoriesService, customDialogService) {
        var vm = this;
        vm.unlinkApp = unlinkApp;
        vm.linkApp = linkApp;


        vm.$onInit = function() {
            separateApps();
        }

        function unlinkApp(app) {
            customDialogService.confirm(`unlink <b>${vm.category.categoryName}</b> from <b>${app.appname}</b>`, true).then(() => {
                app.spinning = true;
                categoriesService.unlinkCategory(app.appid, vm.category.categoryId).then(() => {
                    _.pull(vm.linkedApps, app);
                    _.insertSortedBy(vm.unlinkedApps, app, 'appname');
                    vm.newlyAdded = app;
                    vm.category.appIds = _.map(vm.linkedApps, 'appid').join(',');
                }).finally(() => {
                    app.spinning = false;
                })
            })
        }

        function linkApp(app) {
            customDialogService.confirm(`link <b>${vm.category.categoryName}</b> to <b>${app.appname}</b>`, true).then(() => {
                app.spinning = true;
                categoriesService.linkCategory(app.appid, vm.category.categoryId).then(() => {
                    _.pull(vm.unlinkedApps, app);
                    _.insertSortedBy(vm.linkedApps, app, 'appname');
                    vm.newlyAdded = app;
                    vm.category.appIds = _.map(vm.linkedApps, 'appid').join(',');
                }).finally(() => {
                    app.spinning = false;
                })
            })
        }

        function separateApps() {
            vm.category.appIdObjs = _.map(vm.category.appIds.split(','), (id) => { return { appid: id } });
            vm.linkedApps = _($localStorage.userApps)
                .map()
                .intersectionBy(vm.category.appIdObjs, 'appid')
                .sortBy(app => app.appname.toLowerCase())
                .value();
            vm.unlinkedApps = _($localStorage.userApps)
                .map()
                .differenceBy(vm.category.appIdObjs, 'appid')
                .sortBy(app => app.appname.toLowerCase())
                .value();
        }
    }
})(angular.module('selfcare'));