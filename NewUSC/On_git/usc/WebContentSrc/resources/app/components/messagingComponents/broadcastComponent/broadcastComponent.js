(function(app) {
    'use strict';
    app.component('broadcastComponent', {
        templateUrl: 'resources/app/components/messagingComponents/broadcastComponent/broadcastComponent.html',
        controller: broadcastComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    broadcastComponentController.$inject = ['$localStorage', 'messagingService', 'usersService', '$mdDialog', 'customDialogService', 'customToastService'];

    function broadcastComponentController($localStorage, messagingService, usersService, $mdDialog, customDialogService, customToastService) {
        var vm = this;

        vm.getBroadcastInbox = getBroadcastInbox;
        vm.getBroadcastOutbox = getBroadcastOutbox;
        vm.composeBroadcast = composeBroadcast;
        vm.sortApps=sortApps;
        sortApps();
        function getBroadcastInbox(page, size) {
            vm.inboxBroadcasts = [];
            vm.inboxPromise = messagingService.fetchBroadcastInbox(page, size);
            return vm.inboxPromise.then((broadcasts) => {
                vm.inboxBroadcasts = broadcasts.messages;
                return broadcasts.count;
            })
        }

        function getBroadcastOutbox(page, size) {
            vm.outboxBroadcasts = [];
            vm.outboxPromise = messagingService.fetchBroadcastOutbox(page, size);
            return vm.outboxPromise.then((broadcasts) => {
                _.each(broadcasts.messages, (item) => {
                    item.to = item.to && item.to.split(',');
                    item.toSplitted = item.to && item.to.join(', ');
                })
                vm.outboxBroadcasts = broadcasts.messages;
                return broadcasts.count;
            })
        }
      function sortApps() { 
    	 
        	if(!vm.sortType)
        		vm.sortType='latestFirst';
        	
            switch (vm.sortType) {
          
            case 'latestFirst':
            	vm.outboxBroadcasts = _(vm.outboxBroadcasts).orderBy((item)=> moment(item.date ,'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value();
                break;
            case 'oldestFirst':
            	vm.outboxBroadcasts = _(vm.outboxBroadcasts).orderBy((item)=> moment(item.date,'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value();
                break;
               
            }
        }
        

        function composeBroadcast() {
            vm.composePromise = usersService.getSubUsers().then((subUsers) => {
                if (subUsers.length) {
                    customDialogService.showComponent({
                        component: 'composeBroadcastComponent',
                        bindings: {
                            subUsers
                        }
                    }).then(() => {
                        vm.outboxPaginator.goToPage(1);
                        customToastService.freeText('You message has been successfully sent.');
                    })
                } else {
                    $mdDialog.show($mdDialog.alert()
                        .title('No Subusers found!')
                        .textContent('You cannot broadcast a message as you have no users under you.')
                        .ok('Ok')
                    )
                }
            })
        }
    }
})(angular.module('selfcare'));