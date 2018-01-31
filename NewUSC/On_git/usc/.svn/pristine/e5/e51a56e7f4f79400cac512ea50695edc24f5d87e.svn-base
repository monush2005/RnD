(function(app) {
    'use strict';
    app.component('keywordAccordionComponent', {
        templateUrl: 'resources/app/components/_commonComponents/keywordAccordionComponent/keywordAccordionComponent.html',
        controller: keywordAccordionComponentController,
        controllerAs: 'vm',
        bindings: {
            service: '<',
            app: '<',
            selectedLanguage: '<',
            preopen: '<'
        }
    })

    keywordAccordionComponentController.$inject = ['$scope', '$mdDialog', 'keywordsService'];
    var openAccordionObj = {};

    function keywordAccordionComponentController($scope, $mdDialog, keywordsService) {
        var vm = this;

        vm.$onInit = function() {
            vm.loaders = {};
            vm.appId = vm.app && vm.app.appid;
            vm.serviceId = vm.service && vm.service.serviceid;
            vm.displayName = vm.app ? vm.app.appname : vm.service.servicename;
            vm.accordionId = $scope.$id;
            vm.openAccordion = openAccordion;
            vm.openAccordionObj = openAccordionObj;
            vm.searchType = vm.appId ? 'application' : 'service';
            vm.isNewlyAdded = isNewlyAdded;
            vm.keywords = [];
            vm.deleteConfirm = deleteConfirm;
            vm.addKeywords = addKeywords;
            vm.fetchKeywords = fetchKeywords;
            vm.addKeywordFromAppKeywords = addKeywordFromAppKeywords;

            if (vm.preopen)
                vm.openAccordion();
        }

        vm.$onChanges = function(changes) {
            if (!changes.selectedLanguage.isFirstChange()) {
                if (vm.openAccordionObj.id == vm.accordionId) {
                    vm.fetchKeywords();
                }
            }
        }

        function addKeywordFromAppKeywords(keyword) {
            var payload = {
                lang: vm.selectedLanguage.id,
                keyword: keyword,
                srch_type: 'service',
                dept_id: vm.serviceId,
                action_type: "update"
            }

            vm.spinning = keyword;
            keywordsService.updateKeywords(payload).then(function(data) {
                vm.spinning = '';
                vm.keywords.push(keyword);
                vm.keywords = _.sortBy(vm.keywords, _.toLower);
                vm.newlyAdded = [keyword];
                _.pull(vm.keywordsOfApp, keyword);
                // _.remove(vm.keywordsOfApp, _.isEqual.bind(null,keyword));
            })
        }

        function openAccordion() {
            if (vm.openAccordionObj.id == vm.accordionId)
                delete vm.openAccordionObj.id;
            else {
                vm.openAccordionObj.id = vm.accordionId;
                vm.newlyAdded = [];
                vm.fetchKeywords();
            }
        }

        function deleteConfirm(deleteRequest) {
            var confirmDeletion = $mdDialog.confirm({
                title: 'Confirmation',
                textContent: 'Are you sure you want to delete "' + deleteRequest + '" keyword?',
                ok: 'Yes',
                cancel: 'No',
                targetEvent: null,
                clickOutsideToClose: false
            });

            $mdDialog
                .show(confirmDeletion).then(function() {
                    vm.spinning = deleteRequest;
                    var payload = {
                        "dept_id": vm.appId || vm.serviceId,
                        "lang": vm.selectedLanguage.id,
                        "srch_type": vm.searchType,
                        "keyword": deleteRequest,
                        "action_type": "delete",
                        "trkr": null
                    }
                    return keywordsService.updateKeywords(payload);
                })
                .then(function() {
                    _.pull(vm.keywords, deleteRequest);
                    // _.remove(vm.keywords, _.isEqual.bind(null, deleteRequest));
                    if (vm.serviceId && vm.keywordsOfApp) //push removed keyword in available keyword of app if open accordion is for service
                        vm.keywordsOfApp.push(deleteRequest);
                    vm.keywordsOfApp = _.sortBy(vm.keywordsOfApp, _.toLower);
                    vm.spinning = '';
                });
        }


        function addKeywords() {
            var newKeywords = vm.newKeywords.split('\n');
            newKeywords = _.map(newKeywords, _.trim);
            _.remove(newKeywords, _.isEmpty);


            var payload = {
                lang: vm.selectedLanguage.id,
                keyword: newKeywords.join(','),
                srch_type: vm.searchType,
                dept_id: vm.appId || vm.serviceId,
                action_type: "update"
            }

            vm.loaders.adding = true;
            keywordsService.updateKeywords(payload).then((data) => {
                vm.newKeywords = '';
                vm.newlyAdded = newKeywords;
                vm.keywords = _(newKeywords).concat(vm.keywords).sortBy(_.toLower).value();
                vm.keywordForm.$setUntouched();
                vm.keywordForm.$setPristine();
            }).finally(() => {
                vm.loaders.adding = true;
            })
        }

        function isNewlyAdded(keyword) {
            return _.indexOf(vm.newlyAdded, keyword) > -1;
        }

        function fetchKeywordsofApp(appId) {
            var payload = {
                deptId: appId,
                lang: vm.selectedLanguage.id,
                searchType: 'application',
            }
            vm.keywordsOfApp = [];
            vm.isloadingKeywords = true;
            keywordsService.fetchKeywords(payload).then(function(data) {
                vm.isloadingKeywords = false;
                var fetchKeywordResponse = data[0];

                if (fetchKeywordResponse && fetchKeywordResponse.keywords) {
                    vm.keywordsOfApp = _(fetchKeywordResponse.keywords.split(",")).map(_.trim).uniq().value();
                    _.remove(vm.keywordsOfApp, _.isEmpty);
                }

                vm.keywordsOfAppBackup = _.cloneDeep(vm.keywordsOfApp);
                vm.keywordsOfApp = _(vm.keywordsOfApp).difference(vm.keywords).sortBy(_.toLower).value();
            })
        }

        function fetchKeywords() {
            var payload = {
                deptId: vm.appId || vm.serviceId,
                lang: vm.selectedLanguage.id,
                searchType: vm.searchType,
            }
            vm.keywords = [];
            vm.isloadingKeywords = true;
            keywordsService.fetchKeywords(payload).then(function(data) {
                vm.isloadingKeywords = false;
                var fetchKeywordResponse = data[0];

                if (fetchKeywordResponse && fetchKeywordResponse.keywords) {
                    vm.keywords = _(fetchKeywordResponse.keywords.split(",")).map(_.trim).uniq().value();
                    _.remove(vm.keywords, _.isEmpty);
                    vm.keywords = _.sortBy(vm.keywords, _.toLower);
                }

                if (vm.service) //fetching keywords of app if accordion is for open for service
                    fetchKeywordsofApp(vm.service.appid);
            })

        }
    }
})(angular.module('selfcare'));
