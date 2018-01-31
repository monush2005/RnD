(function(app) {
    'use strict';
    app.component('sidenavComponent', {
        templateUrl: 'resources/app/components/sidenavComponent/sidenavComponent.html',
        controller: sidenavComponentController,
        controllerAs: 'vm',
        bindings: {

        }
    })

    sidenavComponentController.$inject = ['$state', '$transitions', '$mdMedia', '$mdSidenav','$rootScope'];

    function sidenavComponentController($state, $transitions, $mdMedia, $mdSidenav ,$rootScope) {
        var vm = this;
        vm.$mdMedia = $mdMedia;
        vm.$mdSidenav = $mdSidenav;
        $mdSidenav.uscSidebarLocked = true;
        vm.testLen="";
        $rootScope.$on('onboardCountUpdate', (event, count)=>
        {
        	vm.testLen=count;
            //vm.navigations[1].children[2].counthere  = $rootScope.tlen;
         })
              
        vm.$onInit = function() {
            vm.navigations = [];
            
            vm.navigations.push({
                name: 'Dashboard',
                state: 'selfcare.dashboard',
                icon: 'assessment',
                right: 'dashboard',
                children: [{
                    name: 'Apps',
                    state: 'selfcare.dashboard.apps',
                    icon: 'dashboard'
                }, {
                    name: 'Services',
                    state: 'selfcare.dashboard.services',
                    icon: 'apps'
                }]
            })

            vm.navigations.push({
                name: 'Manage Users',
                state: 'selfcare.users',
                icon: 'supervisor_account',
                right: 'createUser,onboardingRequests',
                children: [{
                    name: 'Create User',
                    state: 'selfcare.users.create',
                    icon: 'person_add'
                }, {
                    name: 'Edit Users',
                    state: 'selfcare.users.edit',
                    icon: 'edit'
                }, {
                    name: 'Onboarding Requests',
                    state: 'selfcare.users.requests',
                    icon: 'call_received',
                    right: 'onboardingRequests'
                }, {
                    name: 'User Tree',
                    state: 'selfcare.users.tree',
                    icon: 'device_hub'
                }]
            })

            vm.navigations.push({
                name: 'Manage Roles',
                state: 'selfcare.roles',
                icon: 'security',
                right: 'createUser',
                children: [{
                    name: 'Create Role',
                    state: 'selfcare.roles.create',
                    icon: 'group_add'
                }, {
                    name: 'Edit Roles',
                    state: 'selfcare.roles.edit',
                    icon: 'edit'
                }]
            })

            vm.navigations.push({
                name: 'Manage Notifications',
                state: 'selfcare.campaigns',
                icon: 'phonelink_ring',
                right: 'manageCampaigns',
                children: [{
                    name: 'Schedule',
                    state: 'selfcare.campaigns.schedule',
                    icon: 'schedule'
                }, {
                    name: 'View',
                    state: 'selfcare.campaigns.view',
                    icon: 'list'
                }]
            })

            vm.navigations.push({
                name: 'Manage Banners',
                state: 'selfcare.banners',
                icon: 'view_carousel',
                right: 'requestBanners,approveBanners',
                children: [{
                    name: 'Upload Banners',
                    state: 'selfcare.banners.upload',
                    icon: 'cloud_upload'
                }, {
                    name: 'View My Banners',
                    state: 'selfcare.banners.view',
                    icon: 'view_day'
                }, {
                    name: 'Approve Banners',
                    state: 'selfcare.banners.approve',
                    icon: 'verified_user',
                    right: 'approveBanners'
                }]
            })

            vm.navigations.push({
                name: 'Questionnaire',
                state: 'selfcare.questionnaire',
                icon: 'assignment',
                right: 'viewQuestionaire',
                children: [{
                    name: 'View Submissions',
                    state: 'selfcare.questionnaire.viewSubmissions',
                    icon: 'assignment_turned_in'
                }, {
                    name: 'Build & Edit',
                    state: 'selfcare.questionnaire.build',
                    icon: 'build'
                }, {
                    name: 'Preview',
                    state: 'selfcare.questionnaire.preview',
                    icon: 'visibility'
                }]
            })

            vm.navigations.push({
                name: 'Messaging & Broadcast',
                state: 'selfcare.messaging',
                icon: 'question_answer',
                children: [{
                    name: 'Broadcasts',
                    state: 'selfcare.messaging.broadcasts',
                    icon: 'rss_feed'
                }, {
                    name: 'Direct Message',
                    state: 'selfcare.messaging.directMessage',
                    icon: 'textsms'
                }]
            })

            vm.navigations.push({
                name: 'Attention Screens',
                state: 'selfcare.attention',
                icon: 'perm_device_information',
                right: 'attentionScreen',
                children: [{
                    name: 'View Screens',
                    state: 'selfcare.attention.view',
                    icon: 'playlist_play'
                }, {
                    name: 'Upload Screen',
                    state: 'selfcare.attention.upload',
                    icon: 'cloud_upload'
                }]
            }) 

            vm.navigations.push({
                name: 'Service Directory',
                state: 'selfcare.directory',
                icon: 'format_list_numbered',
                right: 'directoryService',
                children: [{
                    name: 'View Departments',
                    state: 'selfcare.directory.view',
                    icon: 'list'
                },{
                    name: 'Create New',
                    state: 'selfcare.directory.createNew',
                    icon: 'add_circle'
                }]
            }) 

             vm.navigations.push({
                name: 'Rating & Feedback',
                state: 'selfcare.ratingAndFeedback',
                icon: 'stars',
                right: 'ratingsApp,ratingsDept'
            })

            vm.navigations.push({
                name: 'App Categories',
                state: 'selfcare.createCategory',
                icon: 'bubble_chart',
                right: 'createCategory'
            })

            vm.navigations.push({
                name: 'UMANG Analytics',
                state: 'selfcare.analytics',
                icon: 'multiline_chart',
                right: 'analytics'
            })
            
            vm.navigations.push({
                name: 'Fill Questionnaire',
                state: 'selfcare.questionnaire.fill',
                icon: 'edit',
                right: 'fillQuestionaire'
            })
            vm.navigations.push({
                name: 'Design API',
                state: 'selfcare.designApi',
                icon: 'code',
                right: 'designApi'
            })
            vm.navigations.push({
                name: 'UMANG FAQ',
                state: 'selfcare.umangFaq',
                icon: 'live_help',
                right: 'manageAppFAQ'
            })
            vm.navigations.push({
                name: 'My Account',
                state: 'selfcare.myAccount',
                icon: 'account_circle'
            })

            $transitions.onSuccess({ to: 'selfcare.**' }, function() {
                _.each(vm.navigations, function(navigation) {
                    navigation.override = false;
                })
            })
        }

        vm.toggleAccordion = function(navigation) {
            if (!$state.includes(navigation.state))
                navigation.override = !navigation.override;

            if(!navigation.children)
                vm.$mdSidenav('mainSidenav').toggle();
        }
    }
})(angular.module('selfcare'));