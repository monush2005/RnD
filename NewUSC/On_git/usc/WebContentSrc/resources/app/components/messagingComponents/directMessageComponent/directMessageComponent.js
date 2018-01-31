(function(app) {
    'use strict';
    app.component('directMessageComponent', {
        templateUrl: 'resources/app/components/messagingComponents/directMessageComponent/directMessageComponent.html',
        controller: directMessageComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    directMessageComponentController.$inject = ['$localStorage', 'messagingService', 'customToastService', 'customDialogService', 'usersService'];

    function directMessageComponentController($localStorage, messagingService, customToastService, customDialogService, usersService) {
        var vm = this;
        vm.getInbox = getInbox;
        vm.getOutbox = getOutbox;
        vm.composeDirectMsg = composeDirectMsg;
        vm.reply = reply;

        vm.$onInit = function() {
        	sortApps();
        }
        
        

        function getInbox(page, size) {
            vm.inboxMessages = [];
            vm.inboxPromise = messagingService.fetchDirectMsgInbox(page, size);
            return vm.inboxPromise.then((directMsgs) => {
                vm.inboxMessages = directMsgs.messages;
                return directMsgs.count;
            })
        }

        function getOutbox(page, size) {
            vm.outboxMessages = [];
            vm.outboxPromise = messagingService.fetchDirectMsgOutbox(page, size);
            return vm.outboxPromise.then((directMsgs) => {
                vm.outboxMessages = directMsgs.messages;
                return directMsgs.count;
            })
        }
        function sortApps() { 
        	
        	if(!vm.sortType)
        		vm.sortType='latestFirst';
        	
            switch (vm.sortType) {
          
            case 'latestFirst':
            	vm.inboxMessages = _(vm.inboxMessages).orderBy((item)=> moment(item.message.date ,'DD/MM/YYYY hh:mm').valueOf(), ['desc']).value();
                break;
            case 'oldestFirst':
            	vm.inboxMessages = _(vm.inboxMessages).orderBy((item)=> moment(item.message.date,'DD/MM/YYYY hh:mm').valueOf(), ['asc']).value();
                break;
               
            }
        }

        function composeDirectMsg() {
            vm.composePromise = usersService.getSubUsers().then((subUsers) => {
                let user = {
                    userId: $localStorage.userInfo.puserId,
                    isAdmin: true
                }
                if (user.userId) {
                    subUsers.unshift(user);
                }
                customDialogService.showComponent({
                    component: 'composeDirectMsgComponent',
                    bindings: {
                        subUsers
                    }
                }).then(() => {
                    vm.outboxPaginator.goToPage(1);
                    customToastService.freeText('You message has been successfully sent.');
                })
            })
        }

        function reply(messageObj) {
            customDialogService.showComponent({
                component: 'promptComponent',
                bindings: {
                    title: 'Reply',
                    ok: 'Send',
                    cancel: 'Cancel',
                    initialValue: $localStorage.userInfo.signature?('\n\n'+$localStorage.userInfo.signature):'',
                    name: 'Message',
                    multiline: true,
                    required: true,
                    maxLength: 400,
                    onSubmit: (responseText) => {
                        return messagingService.directMsgReply(messageObj.uniqueId, responseText).then(() => {
                            messageObj.replyTo = {
                                text: responseText
                            }
                            vm.outboxPaginator.goToPage(1);
                            customToastService.freeText('You message has been successfully sent.');
                        });
                    }
                }
            })
        }
    }
})(angular.module('selfcare'));