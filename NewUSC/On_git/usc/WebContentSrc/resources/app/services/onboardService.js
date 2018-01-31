(function(app) {
    'use strict';
    app.service('onboardService', onboardServiceFn);
    onboardServiceFn.$inject = ['httpService'];

    function onboardServiceFn(httpService) {
        var onboardService = this;
        onboardService.submitOnboardForm = submitOnboardForm;
        onboardService.fetchOnboardingRequests = fetchOnboardingRequests;
        onboardService.approveRequest = approveRequest;
        onboardService.rejectRequest = rejectRequest;


        function submitOnboardForm(data) {
        	
            var payload = {
                name: data.reqName,
                mno: data.mno,
                email: data.email.toLowerCase(),
                organization: data.orgName,
                stateCentral: (data.state).toString(),
                emailOtp: data.emailOTP,
                mobileOtp: data.mnoOTP
            }
            return httpService.post('auth/onBoard', payload, {noToast : true});
        }

        function fetchOnboardingRequests(status) {
            return httpService.post('mng/fetchOnboard', { action: status }).then((response) => {
                let requests = _.map(response.requestDetails, (req) => {
                    req.userId = req.emailId;
                    req.organizationName = req.organization;
                    return req;
                })
                return requests;
            });
        }

        function approveRequest(requestId, comment) {
            var payload = {
                requestId: requestId,
                response: 'approved',
                comments: comment,
            }
            return httpService.post('mng/appRejStatus', payload);
        }

        function rejectRequest(requestId, comment) {
            var payload = {
                requestId: requestId,
                response: 'rejected',
                comments: comment,
            }
            return httpService.post('mng/appRejStatus', payload);
        }
    }
})(angular.module('selfcare'));
