(function(app) {
    'use strict';
    app.run(runFn);

    runFn.$inject = ['$rootScope', '$window', 'customToastService', 'ngProgressService', 'ngProgressFactory', 'commonDataService', '$mdDialog'];

    function runFn($rootScope, $window, customToastService, ngProgressService, ngProgressFactory, commonDataService, $mdDialog) {
        ngProgressService.setInstance(ngProgressFactory.createInstance());

        $window.addEventListener("offline", function() {
            $rootScope.$apply(function() {
                customToastService.noConnection(5000);
            });
            document.getElementById("selfcare-main-view").style.filter = 'grayscale(1)';
        }, false);

        $window.addEventListener("online", function() {
            $rootScope.$apply(function() {
                customToastService.backOnline();
            });
            document.getElementById("selfcare-main-view").style.filter = '';
        }, false);

        if (!navigator.onLine) {
            customToastService.noConnection(5000);
            document.getElementById("selfcare-main-view").style.filter = 'grayscale(100)';
        }

        if ('serviceWorker' in navigator && !envVars.debugInfo) {
            navigator.serviceWorker.register('sw.js', { scope: envVars.base + '/' }).then((selfcare) => {
                if (typeof selfcare.update == 'function') {
                    selfcare.update();
                }
                selfcare.onupdatefound = () => {
                    let installingWorker = selfcare.installing;

                    installingWorker.onstatechange = () => {
                        if (installingWorker.state == 'installed' && navigator.serviceWorker.controller) {
                            $mdDialog.show($mdDialog.confirm({
                                title: 'New Update Available!',
                                textContent: `A new version of UMANG SelfCare is available. Do you want to reload?`,
                                ok: 'Yes',
                                cancel: 'No',
                                clickOutsideToClose: false
                            })).then(() => {
                                window.location.reload();
                            });
                        }
                    }
                }
                console.log('Service Worker registered successfully.');
            }).catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        }
    }
})(angular.module('selfcare'));