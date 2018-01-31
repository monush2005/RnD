(function(app) {
    'use strict';
    app.component('deptFeedbackComponent', {
        templateUrl: 'resources/app/components/ratingAndFeebacksComponent/deptFeedbackComponent/deptFeedbackComponent.html',
        controller: deptFeedbackComponentController,
        controllerAs: 'vm',
        bindings: {
            startDate: '<',
            endDate: '<'
        }
    })

    deptFeedbackComponentController.$inject = ['$localStorage', 'commonDataService', 'customDialogService', 'ratingsService', 'categoriesService', 'usersService'];

    function deptFeedbackComponentController($localStorage, commonDataService, customDialogService, ratingsService, categoriesService, usersService) {
        var vm = this;
        vm.clearFilters = clearFilters;
        vm.hasFilters = hasFilters;
        vm.refreshResults = refreshResults;
        vm.getResults = getResults;
        vm.filterDepartments = filterDepartments;
        vm.clearDepartmentsFilter = clearDepartmentsFilter;
        vm.showProfileInfo = showProfileInfo;
        vm.fetchCategories = fetchCategories;
        vm.onAppsDDOpen = onAppsDDOpen;
        vm.servicePost = servicePost;
      
        vm.stateChange = stateChange;
        vm.deptFeedbacksFilters = {};
        vm.serviceFeedbacksFilters = {};
        var pageNum;
        var pageSizeNum;

        vm.filterByList = [{
            name: 'Five Star',
            value: '5',
        }, {
            name: 'Four Star',
            value: '4',
        }, {
            name: 'Three Star',
            value: '3',
        }, {
            name: 'Two Star',
            value: '2',
        }, {
            name: 'One Star',
            value: '1',
        }, {
            name: 'Feedback without Rating',
            value: '0',
        }, {
            name: 'Rating Without Feedback',
            value: '11',
        }]

        vm.opSystemsList = [{
            name: 'Android',
            value: 'android'
        }, {
            name: 'iOS',
            value: 'ios'
        }, {
            name: 'Windows Phone',
            value: 'win'
        }, {
            name: 'Website',
            value: 'web'
        }, {
            name: 'Mobile Web',
            value: 'moweb'
        }]

        vm.$onInit = function() {
        	
        	
            getLanguges();
            sortAndSetApps($localStorage.userApps);

        }

        vm.$onChanges = function() {
            refreshResults();
        }
        
        
        function onAppsDDOpen(argument) {
        	
       	 var catagoriarray = [];
          	var catid;
          
          	angular.forEach(vm.catagory,function(value,key){
        		catagoriarray.push(value.categoryId)
	
        	})
        	catid=catagoriarray.toString();
          	
          	var statearray=[];
          	var stateid;
          	angular.forEach(vm.state,function(value,key){
          		statearray.push(value.stateid)	
        	})
        	stateid=statearray.toString();
          	
       
          if(vm.stateRadio=="all"){
       	   stateid="32,23,4,29,3,9,5,13,30,18,10,20,8,33,34,28,25,21,22,2,24,16,7,11,1,12,31,37,27,19,36,14,35,15,26,99";;
       	  
          }else if(vm.stateRadio=="central"){
       	   stateid="99";
          }
          else{
       	  
       	   stateid=stateid; 
       	   
          }
          	
           vm.fetchdeptbasedstate = usersService.fetchdeptbasedstate(stateid,catid).then((data) => {
		 	
        	  vm.allDept = data;        	   
      
      	 })
      	 
       }
        
    
        function stateChange(){
        	
        	 if(vm.allStates)
                 return

             return commonDataService.fetchStates().then((states) => {

                 $localStorage.Allstates = states;                 
                 vm.allStates = $localStorage.Allstates;  
                 
                 var stateCentral= $localStorage.stateCentral;
                 
                 let selectedStates = stateCentral[0].split(',');                 
             	
                 let selectedS = _.map(selectedStates, (id)=>{
                    return {
                    stateid: id                    
                    }
                    })                                                                              
                    vm.state = _.intersectionBy(states, selectedS,'stateid');                              
             })
            
       }
        
        function fetchCategories(){           		  
        		   
        		   vm.catagories = $localStorage.appCategory;
   
        		   console.log(vm.catagories);
   
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

        function getResults(page, size){

          if(!page)
            page="1";
          if(!size)
            size="10";
        	pageNum = page;
            pageSizeNum=size;
                    	
        	 if($localStorage.stateCentral.length>3 && $localStorage.stateCentral.match(/99/g)){             	
             		vm.stateRadio='all'             			
             }
             else if($localStorage.stateCentral==99){             	
             		vm.stateRadio='central'
             }else{             	
             		vm.stateRadio='state'             					
             }        	 
        	

          // Checking if service is selected and hitting Service API in this case.

            if(vm.deptFeedbacksFilters.services){
              // console.log("services :"+JSON.stringify(vm.deptFeedbacksFilters.services));
              return servicePost();
              
            }
        	 
        	var  sDate = getDateFormat(vm.startDate);
    		  var  eDate = getDateFormat(vm.endDate);
        	
            let filters = _.cloneDeep(vm.deptFeedbacksFilters);
            filters.startDate = sDate;
            filters.endDate = eDate;
            filters.page = page;
            filters.size = size;
            
            vm.getResultsPromise = ratingsService.getDeptFeedbacks(filters,vm.allApps).then((results) => {                
            	
            	 vm.feedbacks = results.details;
            	 return results.totalCount;            	
            	 
            })
            return vm.getResultsPromise;
        }
          
    
    function servicePost() {    	
    	var  sDate = getDateFormat(vm.startDate);
		var  eDate = getDateFormat(vm.endDate);
		
        let filters = _.cloneDeep(vm.deptFeedbacksFilters);
        filters.startDate = sDate;
        filters.endDate = eDate;
        filters.page = pageNum;
        filters.size = pageSizeNum;
        
        vm.AppFeedbackResults = ratingsService.getServiceFeedbacks(filters,vm.allServices).then((data) => {
    		   		 
   		 vm.feedbacks = data.details;
       return data.totalCount;

   	 })
        return vm.AppFeedbackResults;
    }

        function refreshResults(name) {
        	        	
        	if(name == 'os' || name == 'rating' || name == 'lang'|| name =='app')

            vm.deptFeedbacksFilters.services = "";
        	
        	
            if(vm.paginator)
               vm.paginator.goToPage(1);            
            
        }

        function clearFilters() {
        	
            vm.deptFeedbacksFilters = {};
            clearDepartmentsFilter();
            refreshResults();
        }

        function hasFilters() {
          
            return _.flatMap(vm.deptFeedbacksFilters, i => i.toString()).join('') != '';
        }

        function getLanguges() {
            commonDataService.fetchLanguages().then((langs) => {
                vm.langsList = langs;
            })
        }

        function filterDepartments() {
            customDialogService.showComponent({
                component: 'appsServicesFilterComponent',
                bindings:{
                    filters: _.cloneDeep(vm.filters)
                }
            }).then((obj) => {
                delete vm.deptFeedbacksFilters.apps;
                delete vm.serviceFeedbacksFilters.services;
                vm.filters = obj.filters;
                vm.hasDeptFilters = obj.hasFilters;
                sortAndSetApps(obj.apps);
                refreshResults();
            });
        }

        function clearDepartmentsFilter() {
            sortAndSetApps($localStorage.userApps);
            delete vm.filters;
            delete vm.category;
            delete vm.hasDeptFilters;
        }

        function sortAndSetApps(apps) {
            vm.allApps = _(apps).orderBy((app)=>_.toLower(app.appname), ['asc']).map(_.trimAppDetails).value();
            vm.allServices = _($localStorage.userServices).filter((service) => {
                return _.existsBy(apps, service.appid, 'appid');
            }).map(_.trimServiceDetails).value();
        }

        function showProfileInfo(feedback) {
        	if(!feedback.profileId)
        	{
        			console.log("feedback.profileId is ",feedback.profileId );
        			return false;
        		
        		}
            feedback.showProfilePromise = ratingsService.getProfileInfo(feedback.profileId).then((profile) => {
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