(function(app) {
	'use strict';
	app.component('viewAllLangBannersComponent', {
		templateUrl: 'resources/app/components/bannerComponents/viewAllLangBannersComponent/viewAllLangBannersComponent.html',
		controller: viewAllLangBannersComponentController,
		controllerAs: 'vm',
		bindings: {
        	banners: '<'
		}        
	});

	viewAllLangBannersComponentController.$inject = ['$localStorage', 'commonDataService'];

	function viewAllLangBannersComponentController($localStorage, commonDataService) {
		var vm = this;

		vm.$onInit = function(){
        	getnSetLanguages();
		};
        
		function getnSetLanguages() {
        	commonDataService.fetchLanguages().then((langs) => {
        		langs = _.keyBy(langs, 'id');
        		_.each(vm.banners, (banner) => {
        			banner.langaugeObj = langs[banner.lang];
        		});

				//to remove banners of other langs that use english banner.
				var enBanner = _.find(vm.banners, {lang: 'en'});
				_.remove(vm.banners, (banner) => {
					return banner.bannerURL == enBanner.bannerURL;
				});
				vm.banners.unshift(enBanner);
        	});
		}
	}
})(angular.module('selfcare'));