(function(app) {
    'use strict';
    app.component('appCategoryComponent', {
        templateUrl: 'resources/app/components/appCategoryComponent/appCategoryComponent.html',
        controller: appCategoryComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<'
        }
    });

    appCategoryComponentController.$inject = ['$localStorage', 'categoriesService', 'customDialogService'];

    function appCategoryComponentController($localStorage, categoriesService, customDialogService) {
        var vm = this;
        vm.unlinkCategory = unlinkCategory;
        vm.linkCategory = linkCategory;

        vm.$onInit = function() {
            vm.app = $localStorage.userApps[vm.appid];
            getAllCategories();
        };

        function unlinkCategory(category) {
            customDialogService.confirm(`unlink <b>${category.categoryName}</b> with <b>${vm.app.appname}</b>`, true).then(() => {
                category.spinning = true;
                categoriesService.unlinkCategory(vm.appid, category.categoryId).then(() => {
                    _.pull(vm.linkedCategories, category);
                    _.insertSortedBy(vm.unlinkedCategories, category, 'categoryName');
                }).finally(() => {
                    category.spinning = false;
                });
            });
        }

        function linkCategory(category) {
            customDialogService.confirm(`link <b>${category.categoryName}</b> to <b>${vm.app.appname}</b>`, true).then(() => {
                category.spinning = true;
                categoriesService.linkCategory(vm.appid, category.categoryId).then(() => {
                    _.pull(vm.unlinkedCategories, category);
                    _.insertSortedBy(vm.linkedCategories, category, 'categoryName');
                }).finally(() => {
                    category.spinning = false;
                });
            });
        }

        function getAllCategories() {
            vm.getCatgoriesPromise = categoriesService.fetchCategories().then((categories) => {
                categories = _.map(categories, (category) => {
                    category.appIds = category.appIds.split(',');
                    return category;
                });
                vm.linkedCategories = _(categories)
                    .filter((category) => {
                        return _.exists(category.appIds, vm.appid);
                    })
                    .sortBy((category) => {
                        return category.categoryName.toLowerCase();
                    })
                    .value();
                vm.unlinkedCategories = _(categories).filter((category) => {
                        return !_.exists(category.appIds, vm.appid);
                    }).sortBy((category) => {
                        return category.categoryName.toLowerCase();
                    })
                    .value();
            });
        }

    }
})(angular.module('selfcare'));