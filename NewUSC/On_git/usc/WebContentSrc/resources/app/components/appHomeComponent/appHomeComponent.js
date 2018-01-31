(function(app) {
    'use strict';
    app.component('appHomeComponent', {
        templateUrl: 'resources/app/components/appHomeComponent/appHomeComponent.html',
        controller: appHomeComponentController,
        controllerAs: 'vm',
        bindings: {
            appid: '<'
        }
    })

    appHomeComponentController.$inject = [];

    function appHomeComponentController() {
        var vm = this;

        vm.tiles = [{
            state: 'selfcare.dashboard.app.appProfile',
            imageUrl: 'resources/assets/images/app-service-profile.png',
            text: 'App Profile',
            right: '',
            hide: false
        },{
            state: 'selfcare.dashboard.app.reportCard',
            imageUrl: 'resources/assets/images/report-card.png',
            text: 'Report Card',
            right: '',
            hide: false
        },{
            state: '',
            imageUrl: 'resources/assets/images/reporting.png',
            text: 'Reporting',
            right: '',
            hide: true
        },{
            state: 'selfcare.dashboard.app.keywords',
            imageUrl: 'resources/assets/images/service-keywords.png',
            text: 'App Keywords',
            right: 'viewAppKeywords,editAppKeywords',
            hide: false
        },{
            state: 'selfcare.dashboard.app.categories',
            imageUrl: 'resources/assets/images/service-cat-management.png',
            text: 'App Category',
            right: 'viewAppCategory,editAppCategory',
            hide: false
        },{
            state: 'selfcare.dashboard.app.faq',
            imageUrl: 'resources/assets/images/service-faq.png',
            text: 'App FAQ',
            right: 'manageAppFAQ',
            hide: true
        },{
            state: 'selfcare.dashboard.app.ratings',
            imageUrl: 'resources/assets/images/rating.png',
            text: 'Rating & Feedback',
            right: '',
            hide: false
        },{
            state: 'selfcare.dashboard.app.queries',
            imageUrl: 'resources/assets/images/user-query.png',
            text: 'User Complaints',
            right: 'viewQuery,takeQueryAction',
            hide: false
        },{
            state: 'selfcare.dashboard.app.onOff',
            imageUrl: 'resources/assets/images/onoff.png',
            text: 'Activate/Deactivate',
            right: 'onOffApp',
            hide: false
        }]

        vm.$onInit = function() {

        }
    }
})(angular.module('selfcare'));
