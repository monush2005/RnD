(function(app) {
    'use strict';
    app.service('helperService', helperServiceFn);
    helperServiceFn.$inject = ['$q'];

    function helperServiceFn($q) {
        var helperService = this;
        var loadedScripts = {};
        helperService.checkImageDimensionsAsync = checkImageDimensionsAsync;
        helperService.checkImageDimensionsRangeAsync = checkImageDimensionsRangeAsync;
        helperService.checkFileExtentions = checkFileExtentions;
        helperService.downloadFile = downloadFile;
        helperService.downloadFileFromURL = downloadFileFromURL;
        helperService.loadScript = loadScript;

        function checkFileExtentions(file, extns) {
            if (!_.isArray(extns))
                extns = [extns];

            if (!file)
                return false;

            let fileExtn = file.name.split('.').pop().toLowerCase();
            let isValid = false;
            _.each(extns, (extn) => {
                isValid = (isValid || fileExtn == extn.toLowerCase());
            })
            return isValid;
        }

        function checkImageDimensionsAsync(file, height, width) {
            let def = $q.defer();
            let img = new Image();
            img.onload = function() {
                let isValid = (this.height == height && this.width == width);
                def.resolve(isValid);
            }
            img.onerror = function() {
                def.reject(false);
            }
            img.src = window.URL.createObjectURL(file);
            return def.promise;
        }

        function checkImageDimensionsRangeAsync(file, values) {
            let def = $q.defer();
            let img = new Image();
            img.onload = function() {
                let isValid = (this.height >= values.minHeight && this.height <= values.maxHeight);
                isValid = (isValid && this.width >= values.minWidth && this.width <= values.maxWidth);
                def.resolve(isValid);
            }
            img.onerror = function() {
                def.reject(false);
            }
            img.src = window.URL.createObjectURL(file);
            return def.promise;
        }

        function downloadFileFromURL(fileUrl) {
            let def = $q.defer();
            var filename = fileUrl.split('/').pop();
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function() {
                saveAs(xhr.response, filename);
                def.resolve();
            };
            xhr.open('GET', fileUrl);
            xhr.send();
            return def.promise;
        }

        function downloadFile(fileContent, name) {
            var blob = new Blob([fileContent], {
                type: "text/plain;charset=utf-8"
            });

            saveAs(blob, name);
        }

        function loadScript(url) {
            let def = $q.defer();

            if (loadedScripts[url])
                def.resolve();
            else {
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.onload = function() {
                    loadedScripts[url] = true;
                    def.resolve();
                };
                script.onerror = function() {
                    def.reject();
                };
                document.body.appendChild(script);
            }
            return def.promise;
        }
    }
})(angular.module('selfcare'));