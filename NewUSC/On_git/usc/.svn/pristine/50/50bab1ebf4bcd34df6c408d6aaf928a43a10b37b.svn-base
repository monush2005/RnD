(function(app) {
    'use strict';
    app.service('campaignsService', campaignsServiceFn);
    campaignsServiceFn.$inject = ['httpService', '$mdDialog'];

    function campaignsServiceFn(httpService, $mdDialog) {

        var campaignsService = this;

        campaignsService.scheduleCampaign = function(data) {
            return httpService.postFile("campMang/campaignSchedule", data);
        }

        campaignsService.deleteCampaign = function(data) {
            return httpService.post("campaignDelete", data);
        }

        campaignsService.stopCampaign = function(data) {
            return httpService.post("campMang/stopCampaign", data);
        }

        campaignsService.fetchCampaign = function(data) {
            return httpService.post("campMang/fetchCampaign", data);
        }

        campaignsService.downloadFile = function(campaignId) {
            return httpService.post('campMang/downloadFile', { campaignid: campaignId });
        }

        campaignsService.mapCampaignToModel = function(campaign) {
            campaign = _.cloneDeep(campaign);
            campaign.os = campaign.os.split(',');
            var a = campaign.deptusage;
            campaign.gender = campaign.gender.split(',');
            campaign.age = _.map(campaign.age && campaign.age.split(','), _.parseInteger);
            campaign.state = _.map(campaign.state && campaign.state.split(','), function(stateid) {
                return { stateid: stateid }
            });
            campaign.qual = _.map(campaign.qual && campaign.qual.split(','), function(qualId) {
                return { qualId: qualId.trim() }
            });
            campaign.occup = _.map(campaign.occup && campaign.occup.split(','), function(occuId) {
                return { occuId: occuId.trim() }
            });
            campaign.serviceid = _.map(campaign.serviceid && campaign.serviceid.split(','), function(appId) {
                return { appid: appId.trim() };
            })

            var temp = {}
            temp.campaignTitle = campaign.title;
            temp.campaignSubTitle = campaign.message;
            temp.imageURL = campaign.image;

            temp.oses = _.map(campaignsService.createOSData(), function(os) {
                if (_.indexOf(campaign.os, os.value) < 0)
                    os.selected = false;
                return os;
            });

            temp.genders = _.map(campaignsService.createGenderData(), function(gender) {
                if (_.indexOf(campaign.gender, gender.value) < 0)
                    gender.selected = false;
                return gender;
            });

            temp.campaignDate = moment(campaign.scheduletime).toDate();
            temp.age = campaign.age;
            temp.deptusage = campaign.deptusage;
            temp.selectedStates = campaign.state;
            temp.lastLoginDate = moment(campaign.lastlogin).format('DD MMMM YYYY');
            temp.extractType = campaign.basetype;
            temp.notificationType = campaign.type;
            temp.webViewTitle = campaign.webviewtitle;
            temp.redirectUrl = campaign.redirecturl;
            temp.longDescription = campaign.longdesc;
            temp.selectedQualifications = campaign.qual;
            temp.selectedOccupations = campaign.occup;
            temp.favApps = campaign.serviceid;
            temp.failurecount = campaign.failurecount;
            temp.successcount = campaign.successcount;
            temp.redirectApp = campaign.redirectserviceid;
            return temp;
        }

        campaignsService.createOSData = function() {
            return [{
                name: 'Android',
                value: 'and',
                selected: true
            }, {
                name: 'iOS',
                value: 'ios',
                selected: true
            }, {
                name: 'Web',
                value: 'web',
                selected: true
            }, {
                name: 'Windows Phone',
                value: 'wp',
                selected: true
            }];
        }

        campaignsService.createGenderData = function() {
            return [{
                name: 'Male',
                value: 'm',
                selected: false
            }, {
                name: 'Female',
                value: 'f',
                selected: false
            }, {
                name: 'Other',
                value: 'o',
                selected: false
            }, {
                name: 'Unspecified',
                value: 'u',
                selected: false
            }]
        }

        campaignsService.createNotiFicationTypeData = function() {
            return [{
                    value: 'openApp',
                    name: 'Open UMANG'
                }, {
                    value: 'openAppWithDialog',
                    name: 'Open Dialog in UMANG'
                }, {
                    value: 'browser',
                    name: 'Rediect to Browser'
                }, {
                    value: 'webview',
                    name: 'Redirect to WebView'
                }, {
                    value: 'service',
                    name: 'Redirect to App'
                }, {
                    value: 'rating',
                    name: 'Redirect to UMANG Rating Page'
                }
                // {
                //     value: 'share',
                //     name: 'Redirect to UMANG Share Page'
                // }
            ]

        }
    }
})(angular.module('selfcare'));