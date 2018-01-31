(function(app) {
    'use strict';
    app.service('ngProgressService', ngProgressServiceFn);
    ngProgressServiceFn.$inject = ['$document', '$timeout'];

    function ngProgressServiceFn($document, $timeout) {
        var ngProgressService = this;
        var ngProgressInstance = null;
        var didInstanceEverStarted = false;
        ngProgressService.setInstance = setInstance;
        ngProgressService.startAuto = startAuto;
        ngProgressService.blockView = blockView;

        function setInstance(instance) {
            ngProgressInstance = instance;
            ngProgressInstance.startCount = 0;

            ngProgressInstance.startAuto = function(promise) {
                let timeoutPromise = $timeout(() => {
                    this.startCount++;
                    if (this.status() < 40)
                        this.set(40);
                    this.start();
                    promise.then(() => {
                        this.startCount--;
                        $timeout(() => {
                            if (!this.startCount)
                                this.complete();
                        })
                    }).catch(() => {
                        this.startCount = 0;
                        this.reset();
                    })
                }, 200)
                // to show progressbar only if process is taking more than 200 ms to complete.
                promise.finally(() => {
                    $timeout.cancel(timeoutPromise);
                })
            }
        }

        function startAuto(promise) {
            if (didInstanceEverStarted)
                ngProgressInstance.startAuto(promise);
            else {
                ngProgressInstance.setHeight('3px');
                ngProgressInstance.setColor('white');
                didInstanceEverStarted = true;
                ngProgressInstance.startAuto(promise);
            }
        }

        function blockView(promise) {
            var body = document.getElementById('mainContent');
            body = body || $document.find('body')[0];
            var blocker = angular.element('<div class="block-view"></div>')[0];
            body.appendChild(blocker);

            promise.finally(() => {
                body.removeChild(blocker);
            })
        }
    }
})(angular.module('selfcare'));