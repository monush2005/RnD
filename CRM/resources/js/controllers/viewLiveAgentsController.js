	crm.controller('viewLiveAgentsController',function($scope,$location,$mdDialog,$http,$rootScope,viewCceDetailsFactory,viewCceDetailsFactory) {
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
				
				
				$scope.liveAgentsRequestPojo={};
				$scope.liveAgentsResponsePojo={};
				$scope.liveAgents=function(obj){
					$scope.srNo=0;
					  var d = new Date(obj.startDate);
			        	var date1=d.getDate()
			        	
			        	var month=d.getMonth()+1;
			        	if(month<=9){
			        		month=0+''+month;
			        	}
			        	if(date1<=9){
			        		date1=0+''+date1;
			        	}
			          	var year=d.getFullYear();
			          	$scope.finalStrt=date1+'/'+month+'/'+year;
			          	
			          	var d = new Date( obj.endDate);
				        	var date1=d.getDate()
				        	
				        	var month=d.getMonth()+1;
				        	if(month<=9){
				        		month=0+''+month;
				        	}
				        	if(date1<=9){
				        		date1=0+''+date1;
				        	}
				          	var year=d.getFullYear();
				          	$scope.finalend=date1+'/'+month+'/'+year;
					
					$scope.liveAgentsRequestPojo.agentId=obj.agentId;
					$scope.liveAgentsRequestPojo.mobileNum=obj.mobileNum;
					$scope.liveAgentsRequestPojo.startDate=$scope.finalStrt;
					$scope.liveAgentsRequestPojo.endDate=$scope.finalend
					viewCceDetailsFactory.LiveAgentsReq($scope.liveAgentsRequestPojo).success(function(data){
						hideLoader();
						 $scope.liveAgentsResponsePojo=data;
						 console.log($scope.liveAgentsResponsePojo);
						 if($scope.liveAgentsResponsePojo.status===true){
							$scope.preAgtHistory= $scope.liveAgentsResponsePojo.objList;	
							for(var j=0;j<$scope.history.length;j++){
		
								$scope.history[j].message=	convertUnicodeToChar1($scope.history[j].message);
							}
						}
						 else{
							 $scope.preAgtHistory="";
							 $rootScope.commomErrorPopUp($scope.liveAgentsResponsePojo.message);
						 }
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				}
				
			$scope.viewLiveAgentsRequestPojo={};
				$scope.viewLiveAgentsResponsePojo={};
				$scope.viewLiveAgentsReq=function(obj,mobNo){
					  var d = new Date(obj.startDate);
			        	var date1=d.getDate()
			        	
			        	var month=d.getMonth()+1;
			        	if(month<=9){
			        		month=0+''+month;
			        	}
			        	if(date1<=9){
			        		date1=0+''+date1;
			        	}
			          	var year=d.getFullYear();
			          	$scope.finalStrt=date1+'/'+month+'/'+year;
			          	
			          	var d = new Date( obj.endDate);
				        	var date1=d.getDate()
				        	
				        	var month=d.getMonth()+1;
				        	if(month<=9){
				        		month=0+''+month;
				        	}
				        	if(date1<=9){
				        		date1=0+''+date1;
				        	}
				          	var year=d.getFullYear();
				          	$scope.finalend=date1+'/'+month+'/'+year;
					$scope.viewLiveAgentsRequestPojo.agentId=obj.agentId;
					$scope.viewLiveAgentsRequestPojo.mobileNum=mobNo.substr(mobNo.length - 3);
					$scope.viewLiveAgentsRequestPojo.startDate=$scope.finalStrt;
					$scope.viewLiveAgentsRequestPojo.endDate=$scope.finalend
					viewCceDetailsFactory.ViewLiveAgentsReq($scope.viewLiveAgentsRequestPojo).success(function(data){
						hideLoader();
						var chatListContainer = null;
						chatListContainer = $("#chat_window_1").find(".user-chat-ul1");
								chatListContainer = $("#chat_window_1").find(".user-chat-ul1");
						var agentHistort_part1 = "<li class='message left appeared'>"
							+ "<div class='avatar'><img alt='sent-msg' src='resources/images/user-img.png'></div>"
							+"<div class='text_wrapper speech'>"
							+ "<div class='text'>"
						var userHistort_part1 = "<li class='message right appeared'>"
							+"<div class='text_wrapper'>"
							+ "<div class='text'>"
						 $scope.viewLiveAgentsResponsePojo=data;
						 console.log($scope.viewLiveAgentsResponsePojo);
						 if($scope.viewLiveAgentsResponsePojo.status===true){
								$mdDialog.show({
									contentElement : '#chatHisPopUp',
									parent : angular.element(document.body),
									targetEvent : null,
									clickOutsideToClose : false
								});
							$scope.history= $scope.viewLiveAgentsResponsePojo.objList;	
							$('.messages').find('li').remove();
							for(var j=0;j<$scope.history.length;j++){
								$scope.history[j].message=	convertUnicodeToChar1($scope.history[j].message);
								if($scope.history[j].type=='agent'){
							fm=agentHistort_part1+ "<p>" +$scope.history[j].message+ "</p></div></div><p class='chatTime'>"+$scope.history[j].date+"</p></li>" ;
								$(chatListContainer).append(fm);
								}
								else{
									fm=userHistort_part1+ "<p>" +$scope.history[j].message+ "</p></div></div><p class='chatTime'>"+$scope.history[j].date+"</p></li>" ;
									$(chatListContainer).append(fm);	
								}
							}
						}
						 else{
							 alert("===");
							 $rootScope.commomErrorPopUp($scope.viewLiveAgentsResponsePojo.message);
						 }
					
					}).error(function(error){
						hideLoader();
						$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
					})
				}
				$scope.FetchCceDetailsRequestPojo={};	
				$scope.FetchCceDetailsResponsePojo={};	
				   $scope.viewCceDetails=function(){
				    	$scope.FetchCceDetailsRequestPojo.lang="en";
						$scope.FetchCceDetailsRequestPojo.cceid="";
						showLoader();
						viewCceDetailsFactory.viewCceDetails($scope.FetchCceDetailsRequestPojo).success(function(data){
							hideLoader();
							 $scope.FetchCceDetailsResponsePojo=data;
							 console.log($scope.FetchCceDetailsResponsePojo);
								$scope.fetchCceDetails=$scope.FetchCceDetailsResponsePojo.pd.cceDetails;
						}).error(function(error){
							hideLoader();
							$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
						})
					 }
				   $scope.viewCceDetails();
				
					$scope.cancel = function() {
						$mdDialog.cancel();
					};
	});	
	function convertUnicodeToChar1(strUnicode){
		  // var strUnicode="091509410932092d09420937092300200915094809380947002009390948";

		   		var  strReturnValue = "", strSubUnicode = "";

		   			var intLength = strUnicode.length;
		   			if (strUnicode.length % 4 != 0) {
		   				return "";
		   			}

		   			while (intLength > 0) {
		   				strSubUnicode = strUnicode.substring(0, 4);
		   			//	alert(String.fromCharCode(parseInt(strSubUnicode, 16)));
		   				strUnicode = strUnicode.substring(4);
		   			//	strReturnValue += (char) Integer.parseInt(strSubUnicode, 16) + "";
		   			    strReturnValue += String.fromCharCode(parseInt(strSubUnicode, 16))+ "";
		   				intLength -= 4;
		   			}
		   			//alert(strReturnValue);
		   			return strReturnValue;

			}
