(function(app) {
    'use strict';
    app.component('userQueryComponent', {
        templateUrl: 'resources/app/components/userQueryComponent/userQueryComponent.html',
        controller: userQueryComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<',
            serviceid: '<',
            startDate: '<',
            endDate: '<',
            type: '<'
        }
    })

    userQueryComponentController.$inject = ['$localStorage', 'userQueryService', 'customDialogService', '$sce'];

    function userQueryComponentController($localStorage, userQueryService, customDialogService, $sce) {
        var vm = this;

        vm.$onInit = function() {
            vm.forService = !!vm.serviceid;
            vm.searchQuery = searchQuery;
            vm.getSerivceName = getSerivceName;
            vm.serviceFilterChange = serviceFilterChange;
            vm.showExpandedView = showExpandedView;
            vm.getStatusClass = userQueryService.getStatusClass;
            vm.getStatusDisplay = userQueryService.getStatusDisplay;
            vm.showExpandedView1 = showExpandedView1;
            vm.filterOptions = [
                // { displayName: 'Issue/Query', value: 'query' },
                { displayName: 'IVR', value: 'ivr' },
                { displayName: 'Chat', value: 'chat' },
                { displayName: 'Email', value: 'email' }
            ];
            vm.selectedFilter = _.find(vm.filterOptions, {value: vm.type}) || _.first(vm.filterOptions);

            vm.statusOptions = userQueryService.getQueryStatuses(true);
            vm.selectedStatus = _.first(vm.statusOptions);

            if (vm.forService) {
                vm.service = $localStorage.userServices[vm.serviceid];
                vm.appid = vm.service.appid;
                vm.filterOptions.pop();
                vm.selectedService = {
                    type: 'serviceonly',
                    serviceid: vm.serviceid
                }
            } else {
                vm.app = $localStorage.userApps[vm.appid];
                populateServicesDropdown();
            }
        }

        function populateServicesDropdown() {
            var servicesOfApp = vm.app.services.map((item) => {
                return {
                    displayName: item.servicename,
                    value: {
                        type: 'serviceonly',
                        serviceid: item.serviceid
                    }
                }
            });
            vm.servicesFilters = [];
            vm.servicesFilters.push({ displayName: 'All', value: { type: 'all', serviceid: null } })
            vm.servicesFilters.push({ displayName: vm.app.appname + ' - Only', value: { type: 'apponly', serviceid: null } })
            vm.servicesFilters = _.concat(vm.servicesFilters, servicesOfApp);
            vm.selectedService = _.first(vm.servicesFilters).value;
        }

        function serviceFilterChange() {
            if (vm.selectedService.type == 'serviceonly') {
                if (vm.selectedFilter.value == 'email')
                    vm.selectedFilter = _.first(vm.filterOptions);
                vm.filterOptions.length = 2;
            } else {
                if (vm.filterOptions.length == 2 && vm.selectedService.type != 'serviceonly')
                    vm.filterOptions.push({ displayName: 'Email', value: 'email' });
            }
            vm.paginator.goToPage(1);
        }

        function getSerivceName(obj) {
            if ($localStorage.userServices[obj.services])
                obj.servicename = $localStorage.userServices[obj.services].servicename;
            else
                obj.servicename = vm.forService ? vm.service.app.appname : vm.app.appname;
        }

        function showExpandedView(item) {
            if (item.lmode == 'email') {
                if (!item.alreadyTrusted) {
                    item.alreadyTrusted = true;
                    item.body = $sce.trustAsHtml(item.body);
                }
                customDialogService.showComponent({
                    component: 'emailViewComponent',
                    bindings: {
                        emailData: item
                    },
                    padding: false
                }).then((data) => {
                    item.remarks = data.newRemark;
                    item.status = data.newStatus;
                })
            } else {
                customDialogService.showComponent({
                    component: 'queryViewComponent',
                    bindings: {
                        queryData: item
                    },
                    padding: false
                }).then((data) => {
                    item.remarks = data.newRemark;
                    item.status = data.newStatus;
                })
            }
        }
        function showExpandedView1(item) {
            customDialogService.showComponent({
                component: 'viewattachmentcomponent',
                bindings: {
                    emailData: item
                },
                padding: false
            })
        } 

        function searchQuery(page, pageSize) {
            var payload = {};
            payload.appid = vm.appid;
            payload.serviceid = vm.selectedService.serviceid;
            payload.type = vm.selectedService.type;
            payload.page = page;
            payload.size = pageSize;
            payload.sdate = vm.startDate;
            payload.edate = vm.endDate;
            payload.lang = "en";
            payload.action = vm.selectedFilter.value;
            payload.status = vm.selectedStatus.value;
            vm.queries = [];
            vm.emails = [];
            vm.isLoading = true;
            return userQueryService.fetchDeptQuery(payload).then(function(result) {
                vm.isLoading = false;
                vm.queries = _.orderBy(result.queries, (item)=>{return moment(item.log_time).valueOf();}, 'desc');
                return result.count;
            });
        }
       
    }
})(angular.module('selfcare'));
