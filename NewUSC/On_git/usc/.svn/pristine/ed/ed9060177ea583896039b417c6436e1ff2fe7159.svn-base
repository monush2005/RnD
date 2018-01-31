(function(app) {
    'use strict';
    app.service('breadCrumbService', breadCrumbServiceFn);
    breadCrumbServiceFn.$inject = [];

    function breadCrumbServiceFn() {
    	var breadCrumbService = this;
    	
    	breadCrumbService.breadCrumbs = [];

    	breadCrumbService.push = function(crumb){
    		this.breadCrumbs.push(crumb);
    	}

    	breadCrumbService.pop = function(){
    		this.breadCrumbs.pop();
    	}

        breadCrumbService.reset = function(){
            this.breadCrumbs = [];
        }
    }
})(angular.module('selfcare'));
