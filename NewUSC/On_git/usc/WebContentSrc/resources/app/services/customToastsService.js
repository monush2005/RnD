(function(app) {
    'use strict';
    app.service('customToastService', customToastServiceFn);
    customToastServiceFn.$inject = ['$mdToast', '$q'];

    function customToastServiceFn($mdToast, $q) {

        this.sessionTimeout = function() {
            return $mdToast.show(
                $mdToast.simple()
                .textContent("You are not logged in or your session expired!")
                .position('bottom right')
                .toastClass('toast-error')
                .hideDelay(4000)
                .action(' Ok ')
                .highlightAction(true)
            ).then(commonToastThen)

        }

        this.freeText = function(message, okText = ' Ok ', isError) {
            return $mdToast.show(
                $mdToast.simple()
                .textContent(message || "Something went Wrong, please try again!")
                .position('bottom right')
                .toastClass(isError?'toast-error':'toast-success')
                .hideDelay(4000)
                .action(okText)
                .highlightAction(true)
            ).then(commonToastThen)
        }

        // function errorMsg(message, okText = 'Okay!', isError) {
        //     return $mdToast.show({
        //         template: `<md-toast>
        //                         <div>
        //                             <span>{{vm.message}}</span>
        //                             <md-button ng-click="vm.report()"><md-icon>report_problem</md-icon> Report</md-button>
        //                             <md-button ng-click="vm.close()">{{vm.okText}}</md-button>
        //                         </div>
        //                     </md-toast>`,
        //         hideDelay: 4000000,
        //         position : 'bottom right',
        //         toastClass : 'toast-error ',
        //         locals: {
        //             message,
        //             okText,
        //             close : $mdToast.hide,
        //             report: report
        //         },
        //         controller: function(){},
        //         controllerAs: 'vm',
        //         bindToController: true
        //     }).then(commonToastThen)
        // }

        // function report() {
        //     console.log('reporting errors');
        // }

        // window.reportError = errorMsg;

        this.noConnection = function(timeout) {
            return $mdToast.show(
                $mdToast.simple()
                .textContent("No Internet Connection! Please check network settings.")
                .position('bottom right')
                .hideDelay(timeout || 4000)
                .toastClass('toast-error')
                .action(' Ok ')
                .highlightAction(true)
            ).then(commonToastThen)
        }

        this.backOnline = function(timeout) {
            return $mdToast.show(
                $mdToast.simple()
                .textContent("You are back online!")
                .position('bottom right')
                .hideDelay(timeout || 4000)
                .toastClass('toast-success')
                .action(' Ok ')
                .highlightAction(true)
            ).then(commonToastThen)
        }

        this.hideToasts = function(){
            $mdToast.hide();
        }

        function commonToastThen(value) {
            if (value == 'ok')
                return true
            else
                return false;
        }
    }

})(angular.module('selfcare'));
