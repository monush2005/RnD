(function(app) {
    'use strict';
    app.service('messagingService', messagingServiceFn);
    messagingServiceFn.$inject = ['httpService', '$localStorage'];

    function messagingServiceFn(httpService, $localStorage) {
        var messagingService = this;
        messagingService.broadcastMessage = broadcastMessage;
        messagingService.fetchBroadcastInbox = fetchBroadcastInbox;
        messagingService.fetchBroadcastOutbox = fetchBroadcastOutbox;
        messagingService.fetchDirectMsgInbox = fetchDirectMsgInbox;
        messagingService.fetchDirectMsgOutbox = fetchDirectMsgOutbox;
        messagingService.directMsgSend = directMsgSend;
        messagingService.directMsgReply = directMsgReply;

        function broadcastMessage(data) {
            let payload = {
                userId: data.users && _(data.users).map('userId').join(','),
                appId: data.apps && _(data.apps).map('appid').join(','),
                cgId: data.categories && _(data.categories).map('categoryId').join(','),
                msg: data.message,
                subUsers: data.toSubusers
            }
            return httpService.post('messaging/broadcast', payload);
        }

        function fetchBroadcastInbox(page, size) {
            return httpService.post('messaging/broadcastInbox', { page, size }).then((response) => {
                return {
                    messages: response.msg,
                    count: response.pages
                }
            });
        }

        function fetchBroadcastOutbox(page, size) {
            return httpService.post('messaging/broadcastOutbox', { page, size }).then((response) => {
                return {
                    messages: response.msg,
                    count: response.pages
                }
            });
        }

        function fetchDirectMsgInbox(page, size) {
            return httpService.post('messaging/dmInbox', { page, size }).then((response) => {
                response.msg = _.map(response.msg, (msg) => {
                    msg.isOriginal = parseInt(msg.isOriginal);
                    if (msg.responseDate) {
                        msg.message = {
                            text: msg.requestMsg,
                            date: msg.requestDate
                        }
                        msg.replyTo = {
                            text: msg.responseMsg,
                            date: msg.responseDate
                        }
                        if(!msg.isOriginal){
                            _.swap(msg, 'message', 'replyTo');
                        }
                    } else {
                        msg.message = {
                            text: msg.requestMsg,
                            date: msg.requestDate
                        }
                    }
                    return msg;
                })
                return {
                    messages: response.msg,
                    count: response.pages
                }
            });
        }

        function fetchDirectMsgOutbox(page, size) {
            return httpService.post('messaging/dmOutbox', { page, size }).then((response) => {
                response.msg = _.map(response.msg, (msg) => {
                    if (msg.responseDate) {
                        msg.message = {
                            text: msg.responseMsg,
                            date: msg.responseDate
                        }
                        msg.replyTo = {
                            text: msg.requestMsg,
                            date: msg.requestDate
                        }
                    } else {
                        msg.message = {
                            text: msg.requestMsg,
                            date: msg.requestDate
                        }
                    }
                    return msg;
                })
                return {
                    messages: response.msg,
                    count: response.pages
                }
            });
        }

        function directMsgSend(to, msg) {
            var payload = {
                to,
                msg
            }

            return httpService.post('messaging/dmSend', payload);
        }

        function directMsgReply(uniqueId, msg) {
            var payload = {
                uniqueId,
                msg
            }

            return httpService.post('messaging/dmReply', payload);
        }
    }
})(angular.module('selfcare'));