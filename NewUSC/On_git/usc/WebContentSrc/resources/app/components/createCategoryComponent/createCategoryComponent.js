(function(app) {
    'use strict';
    app.component('createCategoryComponent', {
        templateUrl: 'resources/app/components/createCategoryComponent/createCategoryComponent.html',
        controller: createCategoryComponentController,
        controllerAs: 'vm',
        bindings: {

        }        
    })

    createCategoryComponentController.$inject = ['$localStorage', 'categoriesService', 'customDialogService', 'appServiceProfileService'];

    function createCategoryComponentController($localStorage, categoriesService, customDialogService, appServiceProfileService) {
        var vm = this;
        vm.viewEditLinkedApps = viewEditLinkedApps;
        vm.requestNew = requestNew;

        vm.$onInit = function(){
            getAllCatgories();
        }

        function requestNew() {
            customDialogService.showComponent({
                component: 'requestComponent',
                clickOutsideToClose: false,
                bindings: {
                    name: 'Category',
                    initValue: '',
                    maxLength: 30,
                    Subject: `Request for addition of New App Category on UMANG`,
                    onRequest: (data) => {
                        return appServiceProfileService.requestChange(data);
                    }
                }
            }).then(customDialogService.requestSuccessful);
        }

        function getAllCatgories() {
            vm.fetchCategoriesPromise = categoriesService.fetchCategories().then((categories) => {
                vm.allCategories = _.sortBy(categories, (category) => {
                    return category.categoryName.toLowerCase();
                });
            })
        }

        function viewEditLinkedApps(category){
            customDialogService.showComponent({
                component: 'viewEditCategoryComponent',
                bindings: {
                    category
                },
                closeButton: true
            });
        }
    }
})(angular.module('selfcare'));