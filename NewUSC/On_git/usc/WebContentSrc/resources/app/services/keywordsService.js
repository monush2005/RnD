(function(app) {
    'use strict';
    app.service('keywordsService', keywordsServiceFn);
    keywordsServiceFn.$inject = ['httpService', '$http', 'commonDataService'];

    function keywordsServiceFn(httpService, $http, commonDataService) {
        var keywordsService = this;

        keywordsService.updateKeywords = function(data) {
            return httpService.post("updateDepttKeyword", data).then((data) => {
                commonDataService.refreshServerCache();
                return data;
            });
        };

        keywordsService.fetchKeywords = function(data) {
            return httpService.post("fetchServiceKeys", data);
        };
    }
})(angular.module('selfcare'));
