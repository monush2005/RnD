crm
		.controller(
				'viewCceDetailsController',
				function($scope, $location, Excel, $timeout, $http, crmFactory,
						$rootScope, fetchChatReportFactory,
						fetchIvrReportFactory, loginFactory, $mdDialog,
						viewCceDetailsFactory, logoutFactory) {
					hideLoader();
					$rootScope.flagHideDrawer = true;
					$scope.Paging = {};
					$scope.successMsg = {};
					$scope.errormsg = {};
					$rootScope.chatFlag1 = false;
					$rootScope.ivrFlag1 = false;
					$rootScope.smsFlag1 = false;
					$rootScope.emailFlag1 = false;

					$rootScope.flexFlag = localStorage.getItem("flexFlag");
					$rootScope.flagAdmin = localStorage.getItem("flagAdmin");
					$rootScope.flagViewer = localStorage.getItem("flagViewer");
					$rootScope.flagAgent = localStorage.getItem("flagAgent");
					$rootScope.flagTL = localStorage.getItem("flagTL");
					$rootScope.ctrlPanl = localStorage.getItem("ctrlPanl");
					$rootScope.chatFlag = localStorage.getItem("chatFlag");
					$rootScope.ivrFlag = localStorage.getItem("ivrFlag");
					$rootScope.smsFlag = localStorage.getItem("smsFlag");

					if (localStorage.getItem("Cceid") == null
							|| localStorage.getItem("Cceid") == ""
							|| localStorage.getItem("Cceid") == undefined) {
						$location.path("/");
					}

					$scope.exportToExcelIvr = function(tableId) { // ex:
																	// '#my-table'
						var exportHref = Excel.tableToExcel(tableId,
								'Report of IVR agents');
						$timeout(function() {
							location.href = exportHref;
						}, 100); // trigger download
					}
					$scope.exportToExcelChat = function(tableId) { // ex:
																	// '#my-table'
						var exportHref = Excel.tableToExcel(tableId,
								'Report of chat agents');
						$timeout(function() {
							location.href = exportHref;
						}, 100); // trigger download
					}
					$scope.exportToExcelEmail = function(tableId) { // ex:
																	// '#my-table'
						var exportHref = Excel.tableToExcel(tableId,
								'Report of email agents');
						$timeout(function() {
							location.href = exportHref;
						}, 100); // trigger download
					}
					$scope.exportToExcelQuery = function(tableId) { // ex:
																	// '#my-table'
						var exportHref = Excel.tableToExcel(tableId,
								'Report of query agents');
						$timeout(function() {
							location.href = exportHref;
						}, 100); // trigger download
					}
					$scope.exportToExcelAll = function(tableId) { // ex:
																	// '#my-table'
						var exportHref = Excel.tableToExcel(tableId, 'Report');
						$timeout(function() {
							location.href = exportHref;
						}, 100); // trigger download
					}
					$scope.showRatingDialog = function(a) {
						$rootScope.chatFlag1 = false;
						$rootScope.ivrFlag1 = false;
						$rootScope.smsFlag1 = false;
						$rootScope.emailFlag1 = false;
						var modeArr = a.mode;
						var modeValues = modeArr.split(',');
						for (var i = 0; i < modeValues.length; i++) {
							if (modeValues[i] == "chat") {
								$rootScope.chatFlag1 = true;
							} else if (modeValues[i] == "ivr") {
								$rootScope.ivrFlag1 = true;
							} else if (modeValues[i] == "sms") {
								$rootScope.smsFlag1 = true;
							} else if (modeValues[i] == "Email") {
								$rootScope.emailFlag1 = true;
							} else if (modeValues[i] == "query") {
								$rootScope.queryFlag1 = true;
							}
						}
						viewCceDetailsFactory.setAgentDetails(a);
						$mdDialog.show({
							contentElement : '#ratingPopUp',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.countEmailRate = function(rating) {
						$scope.emailRate = rating;
					}
					$scope.countChatRate = function(rating) {
						$scope.chatRate = rating;
					}
					$scope.countCallRate = function(rating) {
						$scope.callRate = rating;
					}
					$scope.countSmsRate = function(rating) {
						$scope.smsRate = rating;
					}
					$scope.AgentRatingRequestPojo = {};
					$scope.AgentRatingResponsePojo = {};
					$scope.rateAgent = function() {
						$scope.AgentRatingRequestPojo.cceid = viewCceDetailsFactory
								.getAgentDetails().cceid;
						$scope.AgentRatingRequestPojo.lang = "en";
						$scope.AgentRatingRequestPojo.emailrating = $scope.emailRate;
						$scope.AgentRatingRequestPojo.chatrating = $scope.chatRate
						$scope.AgentRatingRequestPojo.ivrrating = $scope.callRate
						$scope.AgentRatingRequestPojo.smsrating = $scope.smsRate;
						$scope.AgentRatingRequestPojo.remarks = $scope.ratingRemarks;
						showLoader();
						viewCceDetailsFactory
								.agentRating($scope.AgentRatingRequestPojo)
								.success(
										function(data) {
											hideLoader();
											$scope.AgentRatingResponsePojo = data;
											console
													.log($scope.AgentRatingResponsePojo);
											if ($scope.AgentRatingResponsePojo.rs == "S") {
												$scope
														.commomSuccessPopUp($scope.AgentRatingResponsePojo.rd);
											} else {
												$scope
														.commomErrorPopUp($scope.AgentRatingResponsePojo.rd);
											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})
					}

					$scope.showPerformanceChkPopUp = function() {
						hideLoader();
						$mdDialog.show({
							contentElement : '#agentReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.showEmailPerformanceChkPopUp = function() {
						hideLoader();
						$mdDialog.show({
							contentElement : '#emailAgentReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.fetchCcePerformanceRequestPojo = {};
					$scope.fetchCcePerformanceResponsePojo = {};
					$scope.fetchCcePerformance = function(obj3) {
						if (obj3.mode == 'ivr' || obj3.mode == 'chat') {
							$scope.FetchCceDetailsRequestPojo.lang = "en";
							$scope.FetchCceDetailsRequestPojo.cceid = obj3.cceid;
							$scope.FetchCceDetailsRequestPojo.mode = obj3.mode;
							$scope.FetchCceDetailsRequestPojo.sdate = "";
							$scope.FetchCceDetailsRequestPojo.edate = "";
							console.log($scope.FetchCceDetailsRequestPojo);
							showLoader();
							viewCceDetailsFactory
									.fetchCcePerformance(
											$scope.FetchCceDetailsRequestPojo)
									.success(
											function(data) {
												hideLoader();
												$scope.fetchCcePerformanceResponsePojo = data;
												console
														.log($scope.fetchCcePerformanceResponsePojo);
												if ($scope.fetchCcePerformanceResponsePojo.rs == "S") {
													$scope.fetchCcePerformanceDetails = $scope.fetchCcePerformanceResponsePojo.pd.reports[0];
													console.log("====");
													console
															.log($scope.fetchCcePerformanceDetails);
													console.log("====");
													$scope
															.showPerformanceChkPopUp();

												} else {
													$scope.errorMsg = $scope.fetchCcePerformanceResponsePojo.rd;
													$scope
															.commomErrorPopUp($scope.errorMsg);
												}

											}).error(function(error) {
												hideLoader();
												$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
									})
						} else if (obj3.mode.toLowerCase() == 'email') {
							$scope.FetchCceDetailsRequestPojo.lang = "en";
							$scope.FetchCceDetailsRequestPojo.cceid = obj3.cceid;
							viewCceDetailsFactory
									.fetchEmailCcePerformance(
											$scope.FetchCceDetailsRequestPojo)
									.success(
											function(data) {
												hideLoader();
												$scope.fetchCcePerformanceResponsePojo = data;
												console
														.log($scope.fetchCcePerformanceResponsePojo);
												if ($scope.fetchCcePerformanceResponsePojo.rs == "S") {
													$scope.fetchCcePerformanceDetails = $scope.fetchCcePerformanceResponsePojo.pd.reports[0];
													console.log("====");
													console
															.log($scope.fetchCcePerformanceDetails);
													console.log("====");
													$scope
															.showEmailPerformanceChkPopUp();

												} else {
													$scope.errorMsg = $scope.fetchCcePerformanceResponsePojo.rd;
													$scope
															.commomErrorPopUp($scope.errorMsg);
												}

											}).error(function(error) {
												hideLoader();
												$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
									})
						}
					}

					$scope.FetchCceDetailsRequestPojo = {};
					$scope.FetchCceDetailsResponsePojo = {};
					$scope.viewCceDetails = function() {
						$scope.FetchCceDetailsRequestPojo.lang = "en";
						$scope.FetchCceDetailsRequestPojo.cceid = "";
						showLoader();
						viewCceDetailsFactory
								.viewCceDetails(
										$scope.FetchCceDetailsRequestPojo)
								.success(
										function(data) {
											hideLoader();
											$scope.FetchCceDetailsResponsePojo = data;
											console
													.log($scope.FetchCceDetailsResponsePojo);
											if ($scope.FetchCceDetailsResponsePojo.rs == "S") {
												$scope.fetchCceDetails = $scope.FetchCceDetailsResponsePojo.pd.cceDetails;
												console
														.log("---------fetch cce details---------");
												console
														.log($scope.fetchCceDetails);
												console
														.log("---------fetch cce details---------");
												$scope.Paging = $scope.fetchCceDetails;
											} else {
												$rootScope
														.commomErrorPopUp($scope.FetchCceDetailsResponsePojo.rd);
											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})
					}
					$scope.viewCceDetails();
					$scope.blockCceRequestPojo = {};
					$scope.blockCceResponsePojo = {};
					$scope.blockCce = function(obj1) {
						viewCceDetailsFactory.setAgentDetails(obj1);
						$mdDialog.show({
							contentElement : '#blockAgent',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});

					}

					$scope.DeleteCceRequestPojo = {};
					$scope.DeleteCceResponsePojo = {};
					$scope.deleteCce = function(obj3) {
						window.scrollTo(0, 0);
						viewCceDetailsFactory.setAgentDetails(obj3);
						$mdDialog.show({
							contentElement : '#deleteAgent',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.logoutCce = function(obj3) {
						window.scrollTo(0, 0);
						viewCceDetailsFactory.setAgentDetails(obj3);
						$mdDialog.show({
							contentElement : '#logoutAgent',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}
					$scope.LogoutRequestPojo = {};
					$scope.LogoutResponsePojo = {};
					$scope.logOutCce = function() {
						$scope.LogoutRequestPojo.cceid = viewCceDetailsFactory
								.getAgentDetails().cceid;
						$scope.LogoutRequestPojo.lang = "en";
						$scope.LogoutRequestPojo.ip = "";
						$scope.LogoutRequestPojo.connectionid = "";
						$scope.LogoutRequestPojo.channel = viewCceDetailsFactory
								.getAgentDetails().mode;
						$scope.LogoutRequestPojo.language = viewCceDetailsFactory
								.getAgentDetails().ccelang;
						$scope.LogoutRequestPojo.requestID = "12345";
						$scope.LogoutRequestPojo.terminalID = viewCceDetailsFactory
								.getAgentDetails().terminalid;
						$scope.LogoutRequestPojo.type = "admin_logout";
						// showLoader();
						logoutFactory
								.logout($scope.LogoutRequestPojo)
								.success(
										function(data) {
											$scope.LogoutResponsePojo = data;
											if ($scope.LogoutResponsePojo.rs == "S") {
												$scope.LoginResponse = "";
												var cceid = viewCceDetailsFactory
														.getAgentDetails().cceid;

												$scope
														.commomSuccessPopUp($scope.LogoutResponsePojo.rd);
											} else {
												$scope
														.commomErrorPopUp($scope.LogoutResponsePojo.rd);
											}
											console.log(data);

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

					}

					$scope.ResetPswd = function(obj) {
						viewCceDetailsFactory.setAgentDetails(obj);
						$location.path("/forgotPswd");
					}
					$scope.addAgent = function() {
						$location.path("/addAgent");
					}
					$scope.EditAgentDetails = function(obj) {
						viewCceDetailsFactory.setAgentDetails(obj);
						$location.path("/editAgentDetails");
					}

					$scope.confirmBlockAgent = function() {
						$scope.blockCceRequestPojo.lang = "en";
						$scope.blockCceRequestPojo.cceid = viewCceDetailsFactory
								.getAgentDetails().cceid;
						$scope.blockCceRequestPojo.status = "block";
						showLoader();
						viewCceDetailsFactory
								.blockCce($scope.blockCceRequestPojo)
								.success(
										function(data) {
											hideLoader();
											$scope.blockCceResponsePojo = data;
											console
													.log($scope.blockCceResponsePojo);
											if ($scope.blockCceResponsePojo.rs == "S") {
												$scope
														.commomSuccessPopUp($scope.blockCceResponsePojo.rd);

											} else {
												$scope
														.commomErrorPopUp($scope.blockCceResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})
					}

					$scope.confirmDeleteAgent = function() {
						var loginRes = localStorage.getItem('loginRes');
						loginRes = JSON.parse(loginRes);
						$scope.loginRes = loginFactory.getLoginDtls();
						$scope.DeleteCceRequestPojo.lang = "en";
						$scope.DeleteCceRequestPojo.cceid = localStorage
								.getItem("Cceid")
						$scope.DeleteCceRequestPojo.deletecceid = viewCceDetailsFactory
								.getAgentDetails().cceid;
						$scope.DeleteCceRequestPojo.requestID = loginRes.pd.requestID;
						$scope.DeleteCceRequestPojo.action = "DELETE";
						$scope.DeleteCceRequestPojo.username = viewCceDetailsFactory
								.getAgentDetails().uname;
						$scope.DeleteCceRequestPojo.password = viewCceDetailsFactory
								.getAgentDetails().pwd;
						$scope.DeleteCceRequestPojo.type = viewCceDetailsFactory
								.getAgentDetails().mode;
						showLoader();
						viewCceDetailsFactory
								.deleteCce($scope.DeleteCceRequestPojo)
								.success(
										function(data) {
											hideLoader();
											$scope.DeleteCceResponsePojo = data;
											console
													.log($scope.DeleteCceResponsePojo);
											if ($scope.DeleteCceResponsePojo.rs == "S") {

												$scope
														.commomSuccessPopUp($scope.DeleteCceResponsePojo.rd);
												$scope.viewCceDetails();
											} else {
												$scope
														.commomErrorPopUp($scope.DeleteCceResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

					}

					$scope.fetchIvrRpt = function() {
						/* $location.path("/fetchIvrRpt"); */
						showLoader();
						$scope.fetchIvrRptRequestPojo = {};
						$scope.fetchIvrRptResponsePojo = {};
						$scope.fetchIvrRptRequestPojo.trkr = "";
						$scope.fetchIvrRptRequestPojo.lang = "en";
						$scope.fetchIvrRptRequestPojo.type = "all";
						$scope.fetchIvrRptRequestPojo.cceid = localStorage
								.getItem("Cceid");
						fetchIvrReportFactory
								.fetchIvrReport($scope.fetchIvrRptRequestPojo)
								.success(
										function(data) {
											$scope.fetchIvrRptResponsePojo = data;
											console
													.log($scope.fetchIvrRptResponsePojo);
											hideLoader();
											if ($scope.fetchIvrRptResponsePojo.rs == "S") {
												$scope.IvrVals = $scope.fetchIvrRptResponsePojo.pd[0];
											} else {
												$scope
														.commomErrorPopUp($scope.fetchIvrRptResponsePojo.rd);
											}
										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

						$mdDialog.show({
							contentElement : '#ivrReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.fetchChatRpt = function() {
						/* $location.path("/fetchChatRpt"); */
						$scope.fetchChatRptRequestPojo = {};
						$scope.fetchChatRptResponsePojo = {};
						$scope.fetchChatRptRequestPojo.trkr = "";
						$scope.fetchChatRptRequestPojo.lang = "en";
						$scope.fetchChatRptRequestPojo.cceid = localStorage
								.getItem("Cceid");
						$scope.fetchChatRptRequestPojo.type = "all";
						fetchChatReportFactory
								.fetchChatReport($scope.fetchChatRptRequestPojo)
								.success(
										function(data) {
											$scope.fetchChatRptResponsePojo = data;
											console
													.log($scope.fetchChatRptResponsePojo);
											if ($scope.fetchChatRptResponsePojo.rs == "S") {
												$scope.chatReportCard = $scope.fetchChatRptResponsePojo.pd[0];
											} else {
												$scope
														.commomErrorPopUp($scope.fetchChatRptResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

						$mdDialog.show({
							contentElement : '#chatReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.fetchEmailRpt = function() {
						/* $location.path("/fetchChatRpt"); */
						$scope.fetchEmailRptRequestPojo = {};
						$scope.fetchEmailRptResponsePojo = {};
						$scope.fetchEmailRptRequestPojo.lang = "en";
						$scope.fetchEmailRptRequestPojo.cceid = localStorage
								.getItem("Cceid");
						viewCceDetailsFactory
								.fetchEmailReport(
										$scope.fetchEmailRptRequestPojo)
								.success(
										function(data) {
											$scope.fetchEmailRptResponsePojo = data;
											console
													.log($scope.fetchEmailRptResponsePojo);
											if ($scope.fetchEmailRptResponsePojo.rs == "S") {
												$scope.emailReportCard = $scope.fetchEmailRptResponsePojo.pd.reports[0];
												console.log("------------");
												console
														.log($scope.emailReportCard);
											} else {
												$scope
														.commomErrorPopUp($scope.fetchEmailRptResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

						$mdDialog.show({
							contentElement : '#emailReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.fetchQueryRpt = function() {
						/* $location.path("/fetchChatRpt"); */
						$scope.fetchQueryRptRequestPojo = {};
						$scope.fetchQueryRptResponsePojo = {};
						$scope.fetchQueryRptRequestPojo.lang = "en";
						$scope.fetchQueryRptRequestPojo.cceid = localStorage
								.getItem("Cceid");
						viewCceDetailsFactory
								.fetchQueryRpt($scope.fetchQueryRptRequestPojo)
								.success(
										function(data) {
											$scope.fetchQueryRptResponsePojo = data;
											console
													.log($scope.fetchQueryRptResponsePojo);
											if ($scope.fetchQueryRptResponsePojo.rs == "S") {
												$scope.queryReportCard = $scope.fetchQueryRptResponsePojo.pd.reports[0];
											} else {
												$scope
														.commomErrorPopUp($scope.fetchQueryRptResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

						$mdDialog.show({
							contentElement : '#queryReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.forceLogoutAllAgents = function(obj) {
						$scope.successMsg = obj;
						$mdDialog.show({
							contentElement : '#forceLogoutAll',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
					}

					$scope.forceLogoutRequestPojo = {};
					$scope.forceLogoutResponsePojo = {};
					$scope.logout1 = function() {
						$scope.forceLogoutRequestPojo.cceid = localStorage
								.getItem("Cceid");
						$scope.forceLogoutRequestPojo.language = "en";
						$scope.forceLogoutRequestPojo.ip = "";
						$scope.forceLogoutRequestPojo.channel = "";
						$scope.forceLogoutRequestPojo.category = "";
						$scope.forceLogoutRequestPojo.terminalID = "";
						$scope.forceLogoutRequestPojo.requestID = "";
						$scope.forceLogoutRequestPojo.type = "all";

						logoutFactory
								.logout($scope.forceLogoutRequestPojo)
								.success(
										function(data) {
											$scope.forceLogoutResponsePojo = data;
											console
													.log($scope.forceLogoutResponsePojo);
											if ($scope.forceLogoutResponsePojo.rs == "S") {
												$scope
														.commomSuccessPopUp("All agents are successfully forced logout.");
											} else {
												$scope
														.commomErrorPopUp($scope.forceLogoutResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})
					}

					$scope.fetchAllRpt = function() {
						/* $location.path("/fetchChatRpt"); */
						$scope.fetchAllRptRequestPojo = {};
						$scope.fetchAllRptResponsePojo = {};
						$scope.fetchAllRptRequestPojo.lang = "en";
						$scope.fetchAllRptRequestPojo.trkr = "";
						$scope.fetchAllRptRequestPojo.cceid = localStorage
								.getItem("Cceid");
						viewCceDetailsFactory
								.fetchAllRpt($scope.fetchAllRptRequestPojo)
								.success(
										function(data) {
											$scope.fetchAllRptResponsePojo = data;
											console
													.log($scope.fetchAllRptResponsePojo);
											if ($scope.fetchAllRptResponsePojo.rs == "S") {
												$scope.allReportCard = $scope.fetchAllRptResponsePojo.pd[0];
												console.log("=======");
												console
														.log($scope.allReportCard);
											} else {
												$scope
														.commomErrorPopUp($scope.fetchAllRptResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

						$mdDialog.show({
							contentElement : '#allReportCard',
							parent : angular.element(document.body),
							targetEvent : null,
							clickOutsideToClose : true
						});
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

					$scope.manageCat = function() {
						$location.path("/manageCat");
					}

					$scope.itemsPerPage = 10;
					$scope.currentPage = 0;

					$scope.range = function() {
						var rangeSize = 5;
						var ret = [];

						var start;

						start = $scope.currentPage;
						if (start > $scope.pageCount() - rangeSize) {
							start = $scope.pageCount() - rangeSize + 1;
						}

						for (var i = start; i < start + rangeSize; i++) {
							if (i < 0)
								continue;
							ret.push(i);

						}
						return ret;
					};

					$scope.prevPage = function() {
						if ($scope.currentPage > 0) {
							$scope.currentPage--;
						}
					};

					$scope.prevPageDisabled = function() {
						return $scope.currentPage === 0 ? "disabled" : "";
					};

					$scope.pageCount = function() {
						return Math.ceil($scope.Paging.length
								/ $scope.itemsPerPage) - 1;
					};
					$scope.nextPage = function() {
						if ($scope.currentPage < $scope.pageCount()) {
							$scope.currentPage++;
						}
					};

					$scope.nextPageDisabled = function() {
						return $scope.currentPage === $scope.pageCount() ? "disabled"
								: "";
					};
					$scope.setPage = function(n) {
						$scope.currentPage = n;
					};

				});
String.prototype.replaceAll = function(s, r) {
	return this.split(s).join(r)
}

crm.filter('offset', function() {
	return function(input, start) {
		if (!input || !input.length) {
			return;
		}
		start = +start; // parse to int
		return input.slice(start);
	}

});