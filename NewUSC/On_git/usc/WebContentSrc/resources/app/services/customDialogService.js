(function(app) {
    'use strict';
    app.service('customDialogService', customDialogServiceFn);
    customDialogServiceFn.$inject = ['$mdDialog'];

    function customDialogServiceFn($mdDialog) {
        var customDialogService = this;
        customDialogService.confirm = confirm;
        customDialogService.showComponent = showComponent;
        customDialogService.requestSuccessful = requestSuccessful;

        function confirm(confirmationText = 'cancel', html = false) {
            var confirmDeletion = $mdDialog.confirm({
                title: 'Confirmation',
                textContent: !html && `Are you sure you want to ${confirmationText}?`,
                htmlContent: html && `Are you sure you want to ${confirmationText}?`,
                ok: 'Yes',
                cancel: 'No',
                clickOutsideToClose: false
            });
            return $mdDialog.show(confirmDeletion);
        }

        function requestSuccessful(name) {
            return $mdDialog.show($mdDialog.alert()
                .title('Request Submitted Successfully')
                .textContent(`Your request has been successfully submitted and will be reflected in few days.`)
                .ok('Okay!')
            )
        }

        function showComponent(params) {
            return $mdDialog.show({
                template: createComponentTemplate(params),
                locals: params.bindings,
                controllerAs: 'vm',
                autoWrap: false,
                clickOutsideToClose: params.hasOwnProperty('clickOutsideToClose') ? params.clickOutsideToClose : true,
                bindToController: true,
                focusOnOpen: params.hasOwnProperty('focusOnOpen') ? params.focusOnOpen : false,
                controller: function() {
                    this.$mdDialog = $mdDialog;
                }
            });
        }

        function createComponentTemplate(params) {
            var htmlBindings = ' ';
            _.each(params.bindings, (value, key) => {
                htmlBindings += `${_.kebabCase(key)}=vm.${key} `
            })
            if (params.closeButton) {
                var actionsTemplate = `<md-dialog-actions layout="row" layout-align="center center">
                    <md-button class="md-raised" ng-click="vm.$mdDialog.cancel()">Close</md-button>
                    </md-dialog-actions>`
            } else {
                var actionsTemplate = '';
            }

            if ((params.hasOwnProperty('padding') && params.padding) || !params.hasOwnProperty('padding')) {
                var paddingClass = "md-dialog-content";
            } else {
                var paddingClass = "";
            }

            return `<md-dialog class="component-dialog"><md-dialog-content><div class="${paddingClass}">
            <${_.kebabCase(params.component)} ${htmlBindings}></${_.kebabCase(params.component)}>
            </div></md-dialog-content>${actionsTemplate}</md-dialog>`
        }
    }
})(angular.module('selfcare'));
