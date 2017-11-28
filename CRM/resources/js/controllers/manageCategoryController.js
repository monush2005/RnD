
crm.controller('manageCategoryController',function($scope,$location,$http,$rootScope,loginFactory,createTicketFactory,manageCategoryFactory,$mdDialog) {
		$rootScope.flagHideDrawer=true;	
		hideLoader();
		
				$rootScope.flexFlag = localStorage.getItem("flexFlag");
				$rootScope.flagAdmin=localStorage.getItem("flagAdmin");
				$rootScope.flagViewer=localStorage.getItem("flagViewer");
				$rootScope.flagAgent=localStorage.getItem("flagAgent");
				$rootScope.flagTL=localStorage.getItem("flagTL");
				$rootScope.ctrlPanl=localStorage.getItem("ctrlPanl");
				
				$rootScope.chatFlag=localStorage.getItem("chatFlag");
				$rootScope.ivrFlag=localStorage.getItem("ivrFlag");
				$rootScope.smsFlag=localStorage.getItem("smsFlag");
			
		
		
		
     if(localStorage.getItem("Cceid")==null || localStorage.getItem("Cceid")=="" || localStorage.getItem("Cceid")==undefined){
				$location.path("/");
	  }
	     
	     
			$scope.commomSuccessPopUp = function(obj) {
				$scope.successMsg = obj;
				$mdDialog.show({
					contentElement : '#commonSuccess',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$scope.commomErrorPopUp = function(obj1) {
				$scope.errorMsg = obj1;
				$mdDialog.show({
					contentElement : '#commonError',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
	     
			$rootScope.FetchCategoriesRequestPojo = {};
			$rootScope.fetchCategoriesResponsePojo = {};
			$rootScope.fetchCategories = function() {
				$rootScope.FetchCategoriesRequestPojo.lang = "en";
				$rootScope.FetchCategoriesRequestPojo.trkr = "";
				createTicketFactory
						.fetchCategories($rootScope.FetchCategoriesRequestPojo)
						.success(
								function(data) {
									$rootScope.fetchCategoriesResponsePojo = data;
									console
											.log($rootScope.fetchCategoriesResponsePojo);
									if ($rootScope.fetchCategoriesResponsePojo.rs == 'S') {

									}

								}).error(function(error) {
									hideLoader();
									$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
			}
			$rootScope.fetchCategories();
			
		$scope.subCatFlag=false;
		$scope.flagCat=false;
		   $scope.addCategoryRequestPojo={};
		   $scope.addCategoryResponsePojo={};
		    $scope.addCategory=function(catObj){
		    	
				    	  var strtDate= catObj.startdate; //11021999
				    	  var endDate= catObj.enddate;
				        	var d = new Date(strtDate);
				        	var date1=d.getDate()
				        	
				        	var month=d.getMonth()+1;
				        	if(month<=9){
				        		month=0+''+month;
				        	}
				        	if(date1<=9){
				        		date1=0+''+date1;
				        	}
				          	var year=d.getFullYear();
				          	$scope.finalStrt=year+'-'+month+'-'+date1;
				          	
				            var d = new Date(endDate);
					        	var date1=d.getDate()
					        	
					        	var month=d.getMonth()+1;
					        	if(month<=9){
					        		month=0+''+month;
					        	}
					        	if(date1<=9){
					        		date1=0+''+date1;
					        	}
					          	var year=d.getFullYear();
					          	$scope.finalend=year+'-'+month+'-'+date1;
				          	
				    $scope.addCategoryRequestPojo.cgid="";
				    $scope.addCategoryRequestPojo.cceid=localStorage.getItem("Cceid");
				    $scope.addCategoryRequestPojo.category=catObj.category;
				    $scope.addCategoryRequestPojo.subcategory="";
				    $scope.addCategoryRequestPojo.l1tat="";
				    $scope.addCategoryRequestPojo.l2tat="";
				    $scope.addCategoryRequestPojo.l3tat="";
				    $scope.addCategoryRequestPojo.type="category";
				    $scope.addCategoryRequestPojo.lang="";
				    $scope.addCategoryRequestPojo.startdate=$scope.finalStrt;
				    $scope.addCategoryRequestPojo.enddate=$scope.finalend;
					  showLoader();
					  manageCategoryFactory.addCategory($scope.addCategoryRequestPojo).success(function(data){
							hideLoader();
							 $scope.addCategoryResponsePojo=data;
							 console.log($scope.addCategoryResponsePojo);
							if($scope.addCategoryResponsePojo.rs=="S"){
								$scope.commomSuccessPopUp($scope.addCategoryResponsePojo.rd);
							}
							else{
								$scope.commomErrorPopUp($scope.addCategoryResponsePojo.rd);
							}
							
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
		    		

		   }
		    $scope.showAddCatpopUp=function(){
/*					   $mdDialog.show({
						      contentElement: '#addCatPopUp',
						      parent: angular.element(document.body),
						      targetEvent: null,
						      clickOutsideToClose: true
						    });*/
				$scope.subCatFlag=false;
				$scope.flagCat=true;
				$scope.delCat=false;
				$scope.delSubCat=false;
					   }
		    
		    $scope.showSubCat=function(){
				$scope.subCatFlag=true;
				$scope.flagCat=false;
				$scope.delCat=false;
				$scope.delSubCat=false;
		    }
		    
		    $scope.delCategory=function(){
		    	$scope.subCatFlag=false;
				$scope.flagCat=false;
		    	$scope.delCat=true;
		    	$scope.delSubCat=false;
		    }
		    $scope.delSubCategory=function(){
				$scope.subCatFlag=false;
				$scope.flagCat=false;
		    	$scope.delCat=false;
		    	$scope.delSubCat=true;
		    }
		    
		   
			$scope.FetchSubCategoriesRequestPojo={};
			$scope.fetchSubCategoriesResponsePojo={};
			$scope.fetchSubCategories=function(obj){
				showLoader();
				$scope.FetchSubCategoriesRequestPojo.catid=obj.catId;
				manageCategoryFactory.setCatId($scope.FetchSubCategoriesRequestPojo.catid);
				$scope.FetchSubCategoriesRequestPojo.lang="en";
				$scope.fetchSubCategoriesResponsePojo.trkr="";
				createTicketFactory.fetchSubCategories($scope.FetchSubCategoriesRequestPojo).success(function(data){
					hideLoader();
					 $scope.fetchSubCategoriesResponsePojo=data;
					 console.log($scope.fetchSubCategoriesResponsePojo);
				
				}).error(function(error){
					hideLoader();
					$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
				})
			}
			
			$scope.selectCatName=function(catId){
				manageCategoryFactory.setCatId(catId);	
			}
			$scope.DeleteCategoriesRequestPojo={};
			$scope.DeleteCategoriesResponsePojo={};
			$scope.delCategoryReq=function(catId){
						$scope.DeleteCategoriesRequestPojo.lang="en";
						$scope.DeleteCategoriesRequestPojo.type="category";
						$scope.DeleteCategoriesRequestPojo.cceid=localStorage.getItem("Cceid");
						$scope.DeleteCategoriesRequestPojo.cgid=manageCategoryFactory.getCatId();	
						$scope.DeleteCategoriesRequestPojo.subcgid="";
						manageCategoryFactory.delCatReq($scope.DeleteCategoriesRequestPojo).success(function(data){
							 $scope.DeleteCategoriesResponsePojo=data;
							 console.log($scope.DeleteCategoriesResponsePojo);
							 if($scope.DeleteCategoriesResponsePojo.rs=="S"){
								 $rootScope.fetchCategories();
									$scope.commomSuccessPopUp($scope.DeleteCategoriesResponsePojo.rd);
								}
								else{
									$scope.commomErrorPopUp($scope.DeleteCategoriesResponsePojo.rd);
								}
						
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
					}
			
			$scope.DelSubCatRequestPojo={};
			$scope.DelSubCatResponsePojo={};
			$scope.delSubCatReq=function(obj){
				
						$scope.DelSubCatRequestPojo.lang="en";
						$scope.DelSubCatRequestPojo.type="sub category";
						$scope.DelSubCatRequestPojo.cceid=localStorage.getItem("Cceid");
						$scope.DelSubCatRequestPojo.cgid=manageCategoryFactory.getCatId();	
						$scope.DelSubCatRequestPojo.subcgid=obj.subCatId;
						manageCategoryFactory.delCatReq($scope.DelSubCatRequestPojo).success(function(data){
							 $scope.DelSubCatResponsePojo=data;
							 console.log($scope.DelSubCatResponsePojo);
							 if($scope.DelSubCatResponsePojo.rs=="S"){
								$scope.commomSuccessPopUp($scope.DelSubCatResponsePojo.rd);
								}
								else{
									$scope.commomErrorPopUp($scope.DelSubCatResponsePojo.rd);
								}
						
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
					

			}
			
			
			
			
			  $scope.subAddCategory=function(catObj){
			    	/*  var strtDate= catObj.startdate; //11021999
			    	  var endDate= catObj.enddate;
			        	var d = new Date(strtDate);
			        	var date1=d.getDate()
			        	
			        	var month=d.getMonth()+1;
			        	if(month<=9){
			        		month=0+''+month;
			        	}
			        	if(date1<=9){
			        		date1=0+''+date1;
			        	}
			          	var year=d.getFullYear();
			          	$scope.finalStrt=year+'-'+month+'-'+date1;
			          	
			            var d = new Date(endDate);
				        	var date1=d.getDate()
				        	
				        	var month=d.getMonth()+1;
				        	if(month<=9){
				        		month=0+''+month;
				        	}
				        	if(date1<=9){
				        		date1=0+''+date1;
				        	}
				          	var year=d.getFullYear();
				          	$scope.finalend=year+'-'+month+'-'+date1;*/
				  crmFactory.getAgentId().success(function(data){
						$scope.cceidVal=data;
						if($scope.cceidVal!=null){
						    $scope.addCategoryRequestPojo.cgid=catObj.catId;
						    $scope.addCategoryRequestPojo.cceid=localStorage.getItem("Cceid");
						    $scope.addCategoryRequestPojo.category="";
						    $scope.addCategoryRequestPojo.subcategory=catObj.subCategory;
						    $scope.addCategoryRequestPojo.l1tat=catObj.level1; 
						    $scope.addCategoryRequestPojo.l2tat=catObj.level2; 
						    $scope.addCategoryRequestPojo.l3tat=catObj.level3; 
						    $scope.addCategoryRequestPojo.type="sub category";
						    $scope.addCategoryRequestPojo.lang="";
						    $scope.addCategoryRequestPojo.startdate="";
						    $scope.addCategoryRequestPojo.enddate="";
							  showLoader();
							  manageCategoryFactory.addCategory($scope.addCategoryRequestPojo).success(function(data){
									hideLoader();
									 $scope.addCategoryResponsePojo=data;
									 console.log($scope.addCategoryResponsePojo);
									if($scope.addCategoryResponsePojo.rs=="S"){
										$scope.commomSuccessPopUp($scope.addCategoryResponsePojo.rd);
									}
									else{
										$scope.commomErrorPopUp($scope.addCategoryResponsePojo.rd);
									}
									
								}).error(function(error){
									hideLoader();
									$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})
						}
						else{
							
						}
						console.log("==========");
					}).error(function(error){
						
					})      	

			   }
			
			    $scope.reset = function() { 
		        	$scope.addcat={};
		        	console.log("$scope.addCatForm"+$scope.addCatForm);
		 	       $scope.addCatForm.$setPristine();
		 	           $scope.addCatForm.$setUntouched();
		 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
		 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
		 	         };	
		 	        $scope.resetDelSubCat=function(){
		 	        	$scope.obj={};
				 	       $scope.delSubCatForm.$setPristine();
			 	           $scope.delSubCatForm.$setUntouched();
			 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
			 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
			 	         
		 	        }        
		 	         
		 	         
		 	        
		 	       $scope.resetSubCat = function() { 
		 	    	   $scope.subCat={};
		 	    	$scope.subCatForm.$setPristine();
			 	           $scope.subCatForm.$setUntouched();
			 	           angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
			 	           angular.element(document.getElementsByTagName('md-input-container')).focus(false); 
			 	         };	  
			 	        $scope.resetDelCat = function() { 
				        $scope.catId='';
				        console.log("$scope.delCatForm"+$scope.delCatForm);
					 	 $scope.delCatForm.$setPristine();
					 	  $scope.delCatForm.$setUntouched();
					 	  angular.element(document.getElementsByTagName('md-input-container')).removeClass('md-input-focused md-input-invalid');
				        angular.element(document.getElementsByTagName('md-input-container')).focus(false); 	 	           
				 	         };     
	});