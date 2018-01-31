(function(app) {
    'use strict';
    app.service('userQueryService', userQueryServiceFn);
    userQueryServiceFn.$inject = ['httpService', '$timeout'];

    function userQueryServiceFn(httpService, $timeout) {
        var userQueryService = this;
        userQueryService.fetchDeptQuery = fetchDeptQuery;
        userQueryService.getQueryStatuses = getQueryStatuses;
        userQueryService.saveQueryStatus = saveQueryStatus;
        userQueryService.getDeptQueryCount = getDeptQueryCount;
        userQueryService.getServiceQueryCount = getServiceQueryCount;
        userQueryService.getStatusClass = getStatusClass;
        userQueryService.getStatusDisplay = getStatusDisplay;
    

        function fetchDeptQuery(data) {
            return httpService.post("app/getDeptQuery", data).then((data) => {
            	console.log("email data======"+JSON.stringify(data.emails));
                data.emails = _.map(data.emails, (email) => {
                    email.ticket_id = email.ticketd;
                    email.user_name = email.efrom;
                    email.query = email.subject;
                    email.attachment = email.attachment;
                    email.icon = 'email';
                    email.lmode = 'email';
                    console.log("email ======Attachment======"+email.attachment);
                    console.log("email ======subject======"+email.subject);
                    return email;
                  
                })
                data.queries = _.map(data.queries, (query) => {
                    switch (query.lmode) {
                        case 'query':
                            query.icon = 'announcement';
                            break;
                        case 'chat':
                            query.icon = 'question_answer';
                            break;
                        case 'ivr':
                            query.icon = 'phone_forwarded';
                            break;
                    }
                    return query;
                })
                return { count: data.count, queries: _.concat(data.emails, data.queries) };
            })
        }

        function getQueryStatuses(includeAll) {

            var statuses = [
                { displayName: 'Unresolved', value: 'forward_to_department' },
                { displayName: 'In Progress', value: 'in_progress' },
                { displayName: 'Resolved', value: 'resolved' }
            ]

            if (includeAll)
                statuses.unshift({ displayName: 'All', value: 'all' });

            return statuses;
        }

        function getStatusDisplay(status) {
            switch (status) {
                case 'forward_to_department':
                    return 'Unresolved';
                case 'in_progress':
                    return 'In Progress';
                case 'resolved':
                    return 'Resolved';
            }
        }

        function getStatusClass(status) {
            switch (status) {
                case 'forward_to_department':
                    return 'red';
                case 'in_progress':
                    return 'yellow';
                case 'resolved':
                    return 'green';
            }
        }

        function saveQueryStatus(data) {
            return httpService.post('app/logQueryStatus', data);
            
        }

        function getDeptQueryCount(data) {
            var payload = {
                appId: data.appid,
                sdate: data.startDate,
                edate: data.endDate
            }
            return httpService.post('app/fetchDeptQueryCount', payload).then((data) => {
                data = data[0];
                _.each(data, (value, key) => {
                    data[key] = _.parseInteger(value);
                })
                return data;
            })
        }
        

        function getServiceQueryCount(data) {
            var payload = {
                serviceId: data.serviceid,
                sdate: data.startDate,
                edate: data.endDate
            }
            return httpService.post('service/fetchServiceQueryCount', payload).then((data) => {
                data = data[0];
                _.each(data, (value, key) => {
                    data[key] = _.parseInteger(value);
                })
                return data;
            })
        }
    }
})(angular.module('selfcare'));
