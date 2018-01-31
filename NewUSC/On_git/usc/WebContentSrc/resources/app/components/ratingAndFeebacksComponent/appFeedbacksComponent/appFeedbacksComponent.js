(function(app) {
    'use strict';
    app.component('appFeedbacksComponent', {
        templateUrl: 'resources/app/components/ratingAndFeebacksComponent/appFeedbacksComponent/appFeedbacksComponent.html',
        controller: appFeedbacksComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    appFeedbacksComponentController.$inject = ['$localStorage', 'commonDataService', 'ratingsService', 'customDialogService'];

    function appFeedbacksComponentController($localStorage, commonDataService, ratingsService, customDialogService ) {
        var vm = this;      
        vm.clearFilters = clearFilters;
        vm.hasFilters = hasFilters;
        vm.getResults = getResults;
        vm.refreshResults = refreshResults;
        vm.sortApps = sortApps;      
        vm.showProfileInfo = showProfileInfo;
                
        
        vm.appFeedbacksFilters = {};
        vm.appAllFeedbacksFilters = {};

        vm.filterByList = [
           {
            name: 'Five Star',
            value: '5',
            star: true
        }, {
            name: 'Four Star',
            value: '4',
            star: true
        }, {
            name: 'Three Star',
            value: '3',
            star: true
        }, {
            name: 'Two Star',
            value: '2',
            star: true
        }, {
            name: 'One Star',
            value: '1',
            star: true
        }, {
            name: 'No rating',
            value: '6',
        }, {
            name: 'Rating Without Feedback',
            value: '7',
        }, {
            name: 'Other Feedback',
            value: '8',
        }, {
            name: 'App store (Apple)',
            value: '9',
        }, {
            name: 'Play store (Android)',
            value: '10',
        }, {
            name: 'Window store',
            value: '11',
        }
        ]

        vm.opSystemsList = [{
            name: 'All',
            value: ''
        },{
            name: 'Android',
            value: 'android'
        }, {
            name: 'iOS',
            value: 'ios'
        }, {
            name: 'Windows Phone',
            value: 'wp'
        }, {
            name: 'Website',
            value: 'web'
        }]

        vm.$onInit = function() {
            getLanguges();
            sortApps();
           
        }
        
      

        vm.$onChanges = function() {
            refreshResults();
        }

        function getLanguges() {
            commonDataService.fetchLanguages().then((langs) => {
                vm.langsList = langs;
            })
        }
        
        function setDateRange(){
            
        }

        function refreshArr() {
            //	alert("in refreshResults");
            	
            	                      
            }
        
        function refreshResults() {
                	
            if (vm.paginator)
                vm.paginator.goToPage(1);                      
        }
        
        function getDateFormat(date){
        	
        	var d = new Date(date);
        	
           	var date1 = d.getDate()
           	
           	var month = d.getMonth()+1;
           	if(month<=9){
           		
           	month=0+''+month;
           	
           	}
           	if(date1<=9){
           		
           	date1=0+''+date1;
           	
           	}
             	var year=d.getFullYear();
             	
             var dateFormat = year+'-'+month+'-'+date1;
             	return  dateFormat;
        	
        }
        
        function getResults(page, size) {

        		var  sDate = getDateFormat(vm.startDate);
        		var  eDate = getDateFormat(vm.endDate);

            let filters = _.cloneDeep(vm.appFeedbacksFilters);
            filters.startDate = sDate;
            filters.endDate = eDate;
            filters.page = page;
            filters.size = size;

            vm.getResultsPromise = ratingsService.getAppFeedbacks(filters).then((results) => {
            	
                vm.results = results;

                return results.totalUsers;
                }).then(() => {
            	
            	let filterFeedback = _.cloneDeep(vm.appFeedbacksFilters);
            	            	
            	filterFeedback.sdate = sDate;
            	filterFeedback.edate = eDate;
            	filterFeedback.page = page;
            	filterFeedback.pageSize = size;
            	
            
            	return ratingsService.getAllAppFeedbacks(filterFeedback).then((data) => {
            		
            		 console.log("details JSON is : "+JSON.stringify(data.details));
            		 
            		 vm.feedbacks = data.details;;
            		 return data.totalCount;

            		 
            	 })
            })

            return vm.getResultsPromise;
        }
        
        
        function sortApps() {
            switch (vm.sortType) {
                case 'latestFirst':
                	vm.feedbacks = _(vm.feedbacks).orderBy((app)=> moment(app.logdate).valueOf(), ['desc']).value();
                    break;
                case 'oldestFirst':
                	vm.feedbacks = _(vm.feedbacks).orderBy((app)=> moment(app.logdate).valueOf(), ['asc']).value();
                    break;
              
            }
        }
            
        function clearFilters() {
            vm.appFeedbacksFilters = {};
            refreshResults();
        }

        function hasFilters() {
            return _.flatMap(vm.appFeedbacksFilters, i => i.toString()).join('') != '';
        }
        
        

        function showProfileInfo(feedback) {
        	if(!feedback.mno){        		
        		console.log("feedback.mno is ",feedback.mno);
        		return false;
        	}
            feedback.showProfilePromise = ratingsService.getProfileInfo(feedback.mno).then((profile) => {
                customDialogService.showComponent({
                    component: 'userProfileComponent',
                    bindings: {
                        profile: profile,
                    }
                });
            })
        }
    }
})(angular.module('selfcare'));