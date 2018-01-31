(function(app) {
    'use strict';
    app.component('serviceHomeComponent', {
        templateUrl: 'resources/app/components/serviceHomeComponent/serviceHomeComponent.html',
        controller: serviceHomeComponentController,
        controllerAs: 'vm',
        bindings: {
            serviceid: '<'
        }        
    })

    serviceHomeComponentController.$inject = [];

    function serviceHomeComponentController() {
        var vm = this;

        vm.tiles = [{
            state: 'selfcare.dashboard.service.serviceProfile',
            imageUrl: 'resources/assets/images/app-service-profile.png',
            text: 'Service Profile',
            right: '',
            hide: false
        },{
            state: 'selfcare.dashboard.service.reportCard',
            imageUrl: 'resources/assets/images/report-card.png',
            text: 'Report Card',
            right: '',
            hide: false
        },{
            state: 'selfcare.dashboard.service.keywords',
            imageUrl: 'resources/assets/images/service-keywords.png',
            text: 'Service Keywords',
            right: 'viewServiceKeywords,editServiceKeywords',
            hide: false
        },{
            state: '',
            imageUrl: 'resources/assets/images/reporting.png',
            text: 'Reporting',
            right: '',
            hide: true
        },{
            state: '',
            imageUrl: 'resources/assets/images/service-faq.png',
            text: 'Service FAQ',
            right: 'manageServiceFAQ',
            hide: true
        },{
            state: 'selfcare.dashboard.service.ratings',
            imageUrl: 'resources/assets/images/rating.png',
            text: 'Rating & Feedback',
            right: '',
            hide: false
        },{
            state: 'selfcare.dashboard.service.queries',
            imageUrl: 'resources/assets/images/user-query.png',
            text: 'User Complaints',
            right: 'viewQuery,takeQueryAction',
            hide: false
        },{
            state: 'selfcare.dashboard.service.onOff',
            imageUrl: 'resources/assets/images/onoff.png',
            text: 'Activate/Deactivate',
            right: 'onOffApp,onOffService',
            hide: true
        },]

        vm.$onInit = function(){
            
        }
    }
})(angular.module('selfcare'));