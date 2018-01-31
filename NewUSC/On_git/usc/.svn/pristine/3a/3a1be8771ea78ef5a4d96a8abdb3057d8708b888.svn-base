(function(app) {
    'use strict';
    app.component('paginationComponent', {
        templateUrl: 'resources/app/components/_commonComponents/paginationComponent/paginationComponent.html',
        controller: paginationComponentController,
        controllerAs: 'vm',
        bindings: {
            onFetch: '&',
            api: '=?',
            fetchOnInit: '<',
            defaultPageSize: '<',
            hidePageSize: '<',
            hidePageNum: '<'
        }
    })

    paginationComponentController.$inject = ['$localStorage'];

    function paginationComponentController() {
        var vm = this;

        vm.$onInit = function() {
            vm.changePage = changePage;
            vm.pageSizeChange = pageSizeChange;
            vm.availablePageSizes = [5, 10, 20, 30, 40];
            vm.pageSize = vm.defaultPageSize || vm.availablePageSizes[1];
            if(vm.fetchOnInit)
                vm.pageSizeChange();
            vm.api = {
                goToPage: changePage,
                getCurrentPage: ()=>vm.page,
                reloadPage: changePage
            }
        }

        function changePage(page) {
            if (page)
                vm.page = page;
            vm.disableButtons = true;
             vm.onFetch()(vm.page, vm.pageSize).then((count)=>{
                vm.count = parseInt(count);
                calculatePages();
            }).finally(() => {delete vm.disableButtons;});;
        }

        function pageSizeChange() {
            vm.page = 1;
            calculatePages();
            vm.changePage();
        }

        function calculatePages() {
            if (vm.count) {
                var totalPages = Math.ceil(vm.count / vm.pageSize);
                vm.pageNumbers = _.map(new Array(totalPages), function(value, index) {
                    return index + 1;
                })
            }
        }
    }
})(angular.module('selfcare'));