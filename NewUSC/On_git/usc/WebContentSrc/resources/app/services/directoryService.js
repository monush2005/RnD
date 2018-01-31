(function(app) {
    'use strict';
    app.service('directoryService', directoryServiceFn);
    directoryServiceFn.$inject = ['httpService', '$timeout'];

    function directoryServiceFn(httpService, $timeout) {
        var directoryService = this;
        var deptCache = null;
        directoryService.fetchAllDept = fetchAllDept;
        directoryService.addNewDept = addNewDept;
        directoryService.updateDept = updateDept;
        directoryService.deleteDept = deleteDept;

        function fetchAllDept() {
            return httpService.post('directory/fetch', {}).then((response) => {
                return _(response).map((dept) => {
                    return {
                        deptId: dept.srid,
                        deptName: dept.sname,
                        deptDescription: dept.desc,
                        address: dept.address,
                        latitude: dept.lat,
                        longitude: dept.lon,
                        website: dept.website,
                        email: dept.email,
                        helpline: dept.contact,
                        workingHours: dept.workingHours,
                        androidAppName: dept.appName,
                        androidAppUrl: dept.appUrl,
                        iOSAppName: dept.iosName,
                        iOSAppUrl: dept.iosUrl,
                        wpAppName: dept.webName,
                        wpAppUrl: dept.webUrl,
                        onUmang: parseInt(dept.isAvailable)
                    }
                }).filter({ onUmang: 0 }).value();
            })
        }

        function addNewDept(dept) {
            var payload = {
                sname: dept.deptName,
                address: dept.address,
                website: dept.website,
                desc: dept.deptDescription,
                email: dept.email,
                contact: dept.helpline,
                workingHours: dept.workingHours,
                lat: dept.latitude,
                lon: dept.longitude,
                appName: dept.androidAppName,
                appUrl: dept.androidAppUrl,
                iosName: dept.iOSAppName,
                iosUrl: dept.iOSAppUrl,
                webName: dept.wpAppName,
                webUrl: dept.wpAppUrl
            }
            return httpService.post('directory/add', payload);
        }

        function updateDept(dept) {
            var payload = {
                srid: dept.deptId,
                sname: dept.deptName,
                address: dept.address,
                website: dept.website,
                desc: dept.deptDescription,
                email: dept.email,
                contact: dept.helpline,
                workingHours: dept.workingHours,
                lat: dept.latitude,
                lon: dept.longitude,
                appName: dept.androidAppName,
                appUrl: dept.androidAppUrl,
                iosName: dept.iOSAppName,
                iosUrl: dept.iOSAppUrl,
                webName: dept.wpAppName,
                webUrl: dept.wpAppUrl
            }
            return httpService.post('directory/update', payload);
        }

        function deleteDept(deptId) {
            return httpService.post('directory/delete', { srid: deptId });
        }

    }
})(angular.module('selfcare'));