(function(app) {
    'use strict';
    app.service('appServiceProfileService', appServiceProfileServiceFn);
    appServiceProfileServiceFn.$inject = ['httpService', 'commonDataService', '$http', '$localStorage'];

    function appServiceProfileServiceFn(httpService, commonDataService, $http, $localStorage) {
        var appServiceProfileService = this;
        appServiceProfileService.saveWorkingHours = saveWorkingHours;
        appServiceProfileService.requestChange = requestChange;
        appServiceProfileService.saveAppDetails = saveAppDetails;
        appServiceProfileService.saveAppLogo = saveAppLogo;
        appServiceProfileService.convertWorkingHours = convertWorkingHours;
        appServiceProfileService.onOffApp = onOffApp;
        appServiceProfileService.onOffService = onOffService;

        function saveWorkingHours(appid, data) {
            return convertWorkingHours(data.startTime, data.endTime, data.startDay, data.endDay).then((result) => {
                var payload = {
                    workingHours: _.map(result, (item, key) => {
                        return {
                            language: key,
                            appId: appid,
                            workingHours: item
                        }
                    }),
                }
                return httpService.post('app/workHour', payload).then((resp) => {
                    return result.en;
                });
            });
        }

        function onOffApp(params) {
            let newStatus = params.status == 'deactive' ? 'active' : 'deactive';
            let payload = {
                status: newStatus,
                type: 'application',
                app: params.appId
            }

            return httpService.post('app/appServiceOnOff', payload).then(() => {
                $localStorage.userApps[params.appId].status = newStatus;
                _.each($localStorage.userApps[params.appId].services, service => service.status = newStatus);
                _($localStorage.userServices).filter({ appid: params.appId }).each((service) => {
                    service.status = newStatus
                    service.app.status = newStatus;
                })
                commonDataService.refreshServerCache();
                return newStatus;
            });
        }

        function onOffService(params) {
            let newStatus = params.status == 'deactive' ? 'active' : 'deactive';
            let payload = {
                status: newStatus,
                type: 'service',
                service: params.serviceId
            }

            return httpService.post('app/appServiceOnOff', payload).then(() => {
                $localStorage.userServices[params.serviceId].status = newStatus;
                let appid = $localStorage.userServices[params.serviceId].appid;
                let service = _.find($localStorage.userApps[appid].services, {serviceid: params.serviceId});
                service.status = newStatus;
                commonDataService.refreshServerCache();
                return newStatus;
            });
        }

        function saveAppLogo(appid, logoFile) {
            var payload = {
                appid: appid,
                file: logoFile
            }

            return httpService.postFile('app/editAppLogo', payload);
        }

        function saveAppDetails(appId, data, type) {
            var payload = {
                appid: appId
            };

            switch (type) {
                case 'helpline':
                    payload.contact = data;
                    break;
                case 'email':
                    payload.contactemail = data;
                    break;
                case 'website':
                    payload.website = data;
                    break;
                case 'latlong':
                    payload.lat = data.lat;
                    payload.lon = data.long;
                    break;
            }

            return httpService.post('app/editApp', payload);
        }

        function requestChange(data) {
            var payload = {
                subject: '[UMANG - SelfCare] ' + data.subject,
                body: generateRequestBody(data.name, data.newValue, data.comment, data.subject)
            }
            return httpService.post('app/reqChange', payload);
        }


        function generateRequestBody(name, value, comment, subject) {
            return `<br>
            This request has been made using UMANG SelfCare Portal for <b>${subject}</b>.
            <br>
            <br>
            New <b>${name}</b> requested:
            <br>
            <b>${value}</b>
            <br>
            <br>
            User Comment:
            <br>
            ${comment||'--NA--'}
            <br>
            <br>
            Requested By:
            <br>
            ${($localStorage.userInfo.signature?($localStorage.userInfo.signature+'<br>'):'')||''}
            ${$localStorage.userInfo.userId}
            <br>
            ${$localStorage.userInfo.mno}`
        }


        function convertWorkingHours(startTime, endTime, startDay, endDay) {
            return commonDataService.fetchLanguages().then((langs) => {
                var result = {};
                _.each(langs, (languageObj) => {
                    var lang = commonDataService.getWorkingHoursMultiLang(languageObj);
                    var startTimeAP = moment(startTime).hours() >= 12 ? lang.pm : lang.am;
                    var endTimeAP = moment(endTime).hours() >= 12 ? lang.pm : lang.am;
                    result[languageObj.id] = `${lang.weekday[startDay]} ${lang.to} ${lang.weekday[endDay]} (${moment(startTime).format('hh:mm')} ${startTimeAP} - ${moment(endTime).format('hh:mm')} ${endTimeAP})`;
                })
                return result;
            })
        }

    }
})(angular.module('selfcare'));