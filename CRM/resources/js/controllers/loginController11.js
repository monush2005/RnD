crm
		.controller(
				'loginController11',
				function($scope, $location, $http, $rootScope, $routeParams,
						loginFactory, $location, $mdDialog, $route) {
					angular.element(document).ready(
							function() {
						
								hideLoader();
								angular.element(
										document.querySelector("#viewId"))
										.removeClass("right-room");
								console.log('page loading completed');
							});

					$scope.LoginRequestPojo = {};
					$scope.errorMsg = "";

					$scope.login = function(obj)
					{
					
						showLoader();
						
						//
						$scope.LoginRequestPojo.lang = "en";
						$scope.LoginRequestPojo.ip = "";
						$scope.LoginRequestPojo.connectionid = "";
						loginFactory.setLoginReq($scope.LoginRequestPojo);
						loginFactory.data1()
								.success(
										function(data) {
											console.log(data);
											$scope.LoginResponsePojo = data;
											if ($scope.LoginResponsePojo.rs == "S")
											{
												
												$scope.LoginRequestPojo.uname = $scope.LoginResponsePojo.pd.jid;
												
												$scope.LoginRequestPojo.pwd = $scope.LoginResponsePojo.pd.accessId;
												loginFactory.setUname($scope.LoginRequestPojo.uname);
												$rootScope.loginDetails = $scope.LoginResponsePojo;
												localStorage
														.setItem(
																"userid",
																$scope.LoginRequestPojo.uname);
												localStorage
														.setItem(
																"pwd11",
																$scope.LoginRequestPojo.pwd);
												localStorage.setItem(
														"flexFlag", "100");
												localStorage.setItem(
														"flagAdmin", "false");
												localStorage.setItem(
														"flagViewer", "false");
												localStorage.setItem(
														"flagAgent", "false");
												localStorage.setItem("flagTL",
														"false");
												localStorage.setItem(
														"ctrlPanl", "false");
												$rootScope.flexFlag = localStorage
														.getItem("flexFlag");
												$rootScope.flagAdmin = localStorage
														.getItem("flagAdmin");
												$rootScope.flagViewer = localStorage
														.getItem("flagViewer");
												$rootScope.flagAgent = localStorage
														.getItem("flagAgent");
												$rootScope.flagTL = localStorage
														.getItem("flagTL");
												$rootScope.ctrlPanl = localStorage
														.getItem("ctrlPanl");

												localStorage.setItem(
														"chatFlag", "false");
												localStorage.setItem("ivrFlag",
														"false");
												localStorage.setItem("smsFlag",
														"false");
												localStorage.setItem(
														"emailFlag", "false");
												$rootScope.chatFlag = localStorage
														.getItem("chatFlag");
												$rootScope.ivrFlag = localStorage
														.getItem("ivrFlag");
												$rootScope.smsFlag = localStorage
														.getItem("smsFlag");
												$rootScope.emailFlag = localStorage
														.getItem("emailFlag");
												//loginFactory.setCceid($scope.loginDetails.pd.cceid);
												localStorage
														.setItem(
																"Cceid",
																$scope.loginDetails.pd.cceid);
												logout = false;
												localStorage
														.setItem(
																'loginRes',
																JSON
																		.stringify($scope.LoginResponsePojo));
												var userType = $scope.LoginResponsePojo.pd.userType;
												if (userType == 'agent') {
													var modeArr = $scope.LoginResponsePojo.pd.channel;
													var modeValues = modeArr
															.split(',');
													for (var i = 0; i < modeValues.length; i++) {

														if (modeValues[i]
																.toUpperCase() == "CHAT") {

															localStorage
																	.setItem(
																			"chatFlag",
																			"true");
															$rootScope.chatFlag = localStorage
																	.getItem("chatFlag");
														} else if (modeValues[i]
																.toUpperCase() == "IVR") {
															localStorage
																	.setItem(
																			"ivrFlag",
																			"true");
															$rootScope.ivrFlag = localStorage
																	.getItem("ivrFlag");
														} else if (modeValues[i]
																.toUpperCase() == "QUERY") {
															localStorage
																	.setItem(
																			"smsFlag",
																			"true");
															$rootScope.smsFlag = localStorage
																	.getItem("smsFlag");
															// $rootScope.smsFlag=true;
														} else if (modeValues[i]
																.toUpperCase() == "EMAIL") {

															localStorage
																	.setItem(
																			"emailFlag",
																			"true");
															$rootScope.emailFlag = localStorage
																	.getItem("emailFlag");
															// $rootScope.emailFlag=true;
														}
													}
												}

												loginFactory
														.setLoginDtls($scope.loginDetails);
												$rootScope.LoginResponse = "S";

												localStorage
														.setItem(
																"terminalId",
																$scope.loginDetails.pd.terminalID);
												loginFactory
														.setUserType($scope.loginDetails.pd.userType);
												getConnect($scope.LoginRequestPojo.uname, $scope.LoginRequestPojo.pwd);
												if ($scope.loginDetails.pd.userType
														.toLowerCase() == "admin") {
													localStorage
															.setItem(
																	"flagAdmin",
																	"true");
													localStorage.setItem(
															"ctrlPanl", "true");
													$rootScope.flagAdmin = localStorage
															.getItem("flagAdmin");
													$rootScope.ctrlPanl = localStorage
															.getItem("ctrlPanl");
													// $rootScope.flagViewer =
													// true;
												} else if ($scope.loginDetails.pd.userType
														.toLowerCase() == "agent") {
													localStorage.setItem(
															"flagAdmin",
															"false");
													localStorage.setItem(
															"flagTL", "false");
													localStorage.setItem(
															"flagViewer",
															"false");
													localStorage
															.setItem(
																	"flagAgent",
																	"true");
													$rootScope.flagAdmin = localStorage
															.getItem("flagAdmin");
													$rootScope.flagTL = localStorage
															.getItem("flagTL");
													$rootScope.flagViewer = localStorage
															.getItem("flagViewer");
													$rootScope.flagAgent = localStorage
															.getItem("flagAgent");
												} else if ($scope.loginDetails.pd.userType
														.toLowerCase() == "teamlead") {
													localStorage.setItem(
															"flagAdmin",
															"false");
													localStorage.setItem(
															"flagTL", "true");
													localStorage.setItem(
															"flagViewer",
															"false");
													localStorage.setItem(
															"flagAgent",
															"false");
													$rootScope.flagAdmin = localStorage
															.getItem("flagAdmin");
													$rootScope.flagTL = localStorage
															.getItem("flagTL");
													$rootScope.ctrlPanl = localStorage
															.getItem("flagViewer");
													$rootScope.flagViewer = localStorage
															.getItem("flagAgent");
												} else {
													localStorage.setItem(
															"flagAdmin",
															"false");
													localStorage.setItem(
															"flagTL", "false");
													localStorage.setItem(
															"flagViewer",
															"true");
													localStorage.setItem(
															"flagAgent",
															"false");
													$rootScope.flagAdmin = localStorage
															.getItem("flagAdmin");
													$rootScope.flagViewer = localStorage
															.getItem("flagTL");
													$rootScope.flagTL = localStorage
															.getItem("flagViewer");
													$rootScope.flagAgent = localStorage
															.getItem("flagAgent");
												}
												localStorage
														.setItem(
																"userType",
																$scope.loginDetails.pd.userType);
												$rootScope.userType = $scope.loginDetails.pd.userType;
												// $location.path("/crm");
												/*
												 * if
												 * ($scope.LoginResponsePojo.pd.flagExpiry ==
												 * "false") {
												 */
												if ($scope.loginDetails.pd.userType
														.toLowerCase() == "admin") {
													$location
															.path("/viewDetails");
												} else {
													$location.path("/crm");
												}
												/* } else { */
												/*
												 * $location.path("/resetPswd"); }
												 */
												 $rootScope.logoutStatus();
											}

											else {
												hideLoader();
												console
														.log("---------------------");
												$rootScope
														.commomErrorPopUp($scope.LoginResponsePojo.rd);

											}

										}).error(function(error) {
											hideLoader();
											$scope.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");								
								})
					}
					$scope.login();
					$scope.sendUserName = function() {
						$location.path("/forgotPswd");
					}

					$scope.resetPswd = function(obj) {
						loginFactory.setUname(obj.name);
						$location.path("/resetPswd");
					}

					$scope.user = {};
					$rootScope.cancel = function() {
						$rootScope.close();
					}

					$scope.reset = function() {
						$scope.user.pswd = '';
						$scope.user.name = '';
						$scope.loginForm.$setPristine();
						$scope.loginForm.$setUntouched();
						angular
								.element(
										document
												.getElementsByTagName('md-input-container'))
								.removeClass(
										'md-input-focused md-input-invalid');
						angular
								.element(
										document
												.getElementsByTagName('md-input-container'))
								.focus(false);
					};

				});