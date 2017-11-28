var crm = angular.module('CRM', [ 'ngRoute', 'ngMaterial', 'ngMessages',
		'ngSanitize' ]);
crm.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'resources/views/login.html',
		controller : 'loginController11'
	}).when('/crm', {
		templateUrl : 'resources/views/crm.html',
		controller : 'crmController'
	}).when('/picUpload', {
		templateUrl : 'resources/views/picUpload.html',
		controller : 'picUploadController'
	}).when('/forgotPswd', {
		templateUrl : 'resources/views/forgotPswd.html',
		controller : 'ForgotPasswordController'
	}).when('/ticketHistory', {
		templateUrl : 'resources/views/ticketHistory.html',
		controller : 'ticketHistoryController'
	}).when('/fetchServicess', {
		templateUrl : 'resources/views/fetchServices.html',
		controller : 'fetchServicesController'
	}).when('/createTicket', {
		templateUrl : 'resources/views/createTicket.html',
		controller : 'createTicketController'
	}).when('/viewAgents', {
		templateUrl : 'resources/views/viewCceDetails.html',
		controller : 'viewCceDetailsController'
	}).when('/addAgent', {
		templateUrl : 'resources/views/addAgent.html',
		controller : 'addAgentController'
	}).when('/resetPswd', {
		templateUrl : 'resources/views/resetPassword.html',
		controller : 'resetPasswordController'
	}).when('/editAgentDetails', {
		templateUrl : 'resources/views/editAgentDetails.html',
		controller : 'editAgentDetailsController'
	}).when('/viewDetails', {
		templateUrl : 'resources/views/viewDetails.html',
		controller : 'viewDetailsController'
	}).when('/viewPending', {
		templateUrl : 'resources/views/viewCcePendingHistory.html',
		controller : 'viewCcePendingHistoryController'
	}).when('/manageCat', {
		templateUrl : 'resources/views/manageCategory.html',
		controller : 'manageCategoryController'
	}).when('/agent', {
		templateUrl : 'resources/views/agent.jsp',
		controller : 'agentChatHistoryController11'
	}).when('/wrapUp', {
		templateUrl : 'resources/views/wrapUp.jsp',
		controller : 'wrapUpController'
	}).when('/other1', {
		templateUrl : 'resources/views/other.jsp',
		controller : 'otherController'
	}).when('/vFeedback', {
		templateUrl : 'resources/views/feedBack.jsp',
		controller : 'feedBackController'
	}).when('/fetchMails', {
		templateUrl : 'resources/views/fetchEmails.jsp',
		controller : 'FetchEmailsController'
	}).when('/emailHis', {
		templateUrl : 'resources/views/emailHistory.jsp',
		controller : 'emailHisController'
	}).when('/fetchIvrRpt', {
		templateUrl : 'resources/views/fetchIvrRpt.jsp',
		controller : 'fetchIvrRptController'
	}).when('/fetchChatRpt', {
		templateUrl : 'resources/views/fetchChatRpt.jsp',
		controller : 'fetchChatRptController'
	}).when('/viewLiveAgents', {
		templateUrl : 'resources/views/ViewLiveAgents.html',
		controller : 'viewLiveAgentsController'
	}).when('/breakTime', {
		templateUrl : 'resources/views/break.html',
		controller : 'breakController'
	}).when('/ivrKpiRpt', {
		templateUrl : 'resources/views/ivrKpiRpt.html',
		controller : 'ivrKpiRptController'
	}).when('/crmColRpt', {
		templateUrl : 'resources/views/crmcollectiveRpt.html',
		controller : 'crmCollectiveRptController'
	}).when('/chtKpiRpt', {
		templateUrl : 'resources/views/chatkpiRpt.html',
		controller : 'chatKpiReportController'
	}).when('/ivrDtlsRpt', {
		templateUrl : 'resources/views/ivrDtlsRpt.html',
		controller : 'ivrDetailRptController'
	}).when('/chtDtlRpt', {
		templateUrl : 'resources/views/chatDtlsRpt.html',
		controller : 'chatDtlsRptController'
	}).when('/slaRpt', {
		templateUrl : 'resources/views/slaRpt.html',
		controller : 'slaReportController'
	}).when('/ivrHrWise', {
		templateUrl : 'resources/views/ivrHourWiseRpt.html',
		controller : 'ivrHourWiseRptController'
	}).when('/emailRpt', {
		templateUrl : 'resources/views/emailDtlRpt.html',
		controller : 'emailDtlRptController'
	}).when('/agentPerfRpt', {
		templateUrl : 'resources/views/agentperformanceRpt.html',
		controller : 'agentPerformanceRptController'
	}).when('/fetchPenWrapup', {
		templateUrl : 'resources/views/fetchPenWrapup.html',
		controller : 'fetchPendingWrapupController'
	})
});

crm
		.run(function($rootScope, $location, $mdDialog, loginFactory,
				logoutFactory, createTicketFactory, fetchServicesFactory,
				addAgentFactory, wrapUpFactory, sendSmsFactory, breakFactory) {
			$rootScope.baseUrl = "/CRM";
			$rootScope.flagHideDrawer = true;
			$rootScope.categoryFlag = false;
			$rootScope.intervalId = -1;
			var mobNumber3;
			$rootScope.deptFlag = false;
			$rootScope.disFlag = true;
			$rootScope.languages = [ {
				"id" : "en",
				"language" : "English"
			}, {
				"id" : "hi",
				"language" : "Hindi"
			}, {
				"id" : "bn",
				"language" : "Bengali"
			}, {
				"id" : "gu",
				"language" : "Gujrati"
			}, {
				"id" : "ml",
				"language" : "Malaylam"
			}, {
				"id" : "mr",
				"language" : "Marathi"
			}, {
				"id" : "ta",
				"language" : "Tamil"
			}, {
				"id" : "te",
				"language" : "Telugu"
			}, {
				"id" : "or",
				"language" : "Oriya"
			}, {
				"id" : "ur",
				"language" : "Urdu"
			}, {
				"id" : "pa",
				"language" : "Punjabi"
			}, {
				"id" : "as",
				"language" : "Assamese"
			}, {
				"id" : "kn",
				"language" : "Kannada"
			} ];

			$rootScope.commomSuccessPopUp = function(obj) {
				$rootScope.successMsg = obj;
				$mdDialog.show({
					contentElement : '#commonSuccess',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$rootScope.commomErrorPopUp = function(obj1) {
				$rootScope.errorMsg = obj1;
				$mdDialog.show({
					contentElement : '#commonError',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$rootScope.close = function() {
				$mdDialog.cancel();
			};

			$rootScope.LogoutRequestPojo = {};
			$rootScope.logout = function() {

				logoutFactory.newLogout().success(function(data) {

					if (data.rs == "S") {
						clearInterval($rootScope.intervalId);
						logout = true;
						try {
							connection.disconnect();

						} catch (error) {

						}
						localStorage.clear();
						window.onbeforeunload = null;
						location.href = '/CRM'
					}
					console.log(data);

				}).error(function(error) {

				})
			}

			$rootScope.LogoutRequestPojo = {};
			$rootScope.logout1 = function() {
				$rootScope.LogoutRequestPojo.cceid = localStorage
						.getItem("Cceid");
				$rootScope.LogoutRequestPojo.lang = "en";
				$rootScope.LogoutRequestPojo.ip = "";
				$rootScope.LogoutRequestPojo.channel = "";
				$rootScope.LogoutRequestPojo.category = "";
				$rootScope.LogoutRequestPojo.terminalID = "";
				$rootScope.LogoutRequestPojo.requestID = "";
				$rootScope.LogoutRequestPojo.type = "all";
				// showLoader();
				logoutFactory.logout($rootScope.LogoutRequestPojo).success(
						function(data) {
							$rootScope.LogoutResponsePojo = data;
							if ($rootScope.LogoutResponsePojo.rs == "S") {

								$location.path("/");
							}
							console.log(data);

						}).error(function(error) {

				})
			}

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

						})
			}
			/*
			 * document.addEventListener('contextmenu', function(e) {
			 * e.preventDefault(); }); document.onkeypress = function (event) {
			 * event = (event || window.event); if (event.keyCode == 123) {
			 * //alert('No F-12'); return false; } }; document.onmousedown =
			 * function (event) { event = (event || window.event); if
			 * (event.keyCode == 123) { //alert('No F-keys'); return false; } };
			 * document.onkeydown = function (event) { event = (event ||
			 * window.event); if (event.keyCode == 123) { //alert('No F-keys');
			 * return false; } };
			 */
			$rootScope.FetchSubCategoriesRequestPojo = {};
			$rootScope.fetchSubCategoriesResponsePojo = {};
			$rootScope.fetchSubCategories = function(x) {
				showLoader();
				if (x == "3") {
					$rootScope.user.department = "";
					$rootScope.user.service = "";
					$rootScope.disFlag = false;

				} else {
					$rootScope.disFlag = true;
				}
				$rootScope.FetchSubCategoriesRequestPojo.catid = x;
				$rootScope.FetchSubCategoriesRequestPojo.lang = "en";
				$rootScope.fetchSubCategoriesResponsePojo.trkr = "";
				createTicketFactory
						.fetchSubCategories(
								$rootScope.FetchSubCategoriesRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.fetchSubCategoriesResponsePojo = data;
									if ($rootScope.fetchSubCategoriesResponsePojo.pd.length > 0) {
										$rootScope.categoryFlag = true;
									}
									console
											.log($rootScope.fetchSubCategoriesResponsePojo);

								}).error(function(error) {

						})
			}

			$rootScope.EmailRequetReqPojo = {};
			$rootScope.EmailRequetResPojo = {};
			$rootScope.EmailRequetReqPojo.body = {};
			$rootScope.sendEmail = function(agentParams, agentID) {
				var d = new Date();
				/*
				 * $rootScope.EmailRequetReqPojo.to =
				 * "guriya.kumari@bharatbpo.in";
				 */
				$rootScope.EmailRequetReqPojo.to = "Manpreet.kaur@spicedigital.in"
				$rootScope.EmailRequetReqPojo.cc = "";
				$rootScope.EmailRequetReqPojo.bcc = "";
				$rootScope.EmailRequetReqPojo.senderid = "UMANG <donotreply@umang.gov.in>";
				$rootScope.EmailRequetReqPojo.subject = "Testing";
				$rootScope.EmailRequetReqPojo.lang = "en";
				$rootScope.EmailRequetReqPojo.tag = "trans";
				$rootScope.EmailRequetReqPojo.vmtype = "CRM";
				$rootScope.EmailRequetReqPojo.appname = "CRM";
				$rootScope.EmailRequetReqPojo.vmname = "crm.uname.vm";
				$rootScope.EmailRequetReqPojo.trkr = d.getTime();
				$rootScope.EmailRequetReqPojo.body.uname = agentParams.uname;
				$rootScope.EmailRequetReqPojo.body.mno = "";
				$rootScope.EmailRequetReqPojo.body.otp = "";
				$rootScope.EmailRequetReqPojo.body.vldtime = "";
				$rootScope.EmailRequetReqPojo.body.agentMno = agentParams.mno;
				$rootScope.EmailRequetReqPojo.body.agentName = agentParams.name;
				$rootScope.EmailRequetReqPojo.body.agentId = agentID.cceid;
				console.log($rootScope.EmailRequetReqPojo.body);
				showLoader();
				addAgentFactory.emailHandling($rootScope.EmailRequetReqPojo)
						.success(function(data) {
							hideLoader();
							$rootScope.EmailRequetResPojo = data;
							console.log("---------------");
							console.log($rootScope.EmailRequetResPojo);
							console.log("----------------------");
							if ($rootScope.EmailRequetResPojo.rs == "SU") {
							}

						}).error(function(error) {

						})
			}

			$rootScope.userDtlsRequestPojo = {};
			$rootScope.userDtlsResponsePojo = {};
			$rootScope.user = {};
			$rootScope.LoginRequestPojo = {};
			$rootScope.errorMsg = "";
			$rootScope.userinfo={};
			$rootScope.fetchCategories();
			$rootScope.wrapUpReqPopUp = function(obj, obj1, obj2) {
				$rootScope.userDtlsRequestPojo.lang = "en";
				$rootScope.userDtlsRequestPojo.referenceId = obj;
				$rootScope.datajid = obj1;
				$rootScope.sessionId = obj;
				$rootScope.eventID = obj2;
				console.log($rootScope.userDtlsRequestPojo);
				showLoader();
				wrapUpFactory
						.fetchUsrDtlsReq1($rootScope.userDtlsRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.userDtlsResponsePojo = data;
									console
											.log($rootScope.userDtlsResponsePojo);
									if ($rootScope.userDtlsResponsePojo.rs == "S") {
										$rootScope.user.user_mno = $rootScope.userDtlsResponsePojo.pd.details[0].mno;
										$rootScope.userinfo.adhaarStatus =$rootScope.userDtlsResponsePojo.pd.details[0].adhaarStatus;
										$rootScope.userinfo.state = $rootScope.userDtlsResponsePojo.pd.details[0].state;
										$rootScope.userinfo.emailAuth = $rootScope.userDtlsResponsePojo.pd.details[0].emailAuth;
										mobNumber3 = $rootScope.user.user_mno;
										var encodeMno3 = mobNumber3.substring(
												1, mobNumber3.length - 2);
										var a3 = mobNumber3.replace(encodeMno3,
												"XXXXXXX");
										$rootScope.user.user_mno = a3;
										$rootScope.user.ufathers_name = $rootScope.userDtlsResponsePojo.pd.details[0].name;
										$mdDialog
												.show({
													contentElement : '#createTicketPopUp',
													parent : angular
															.element(document.body),
													targetEvent : null,
													clickOutsideToClose : false
												});
										console.log("=====================");
										console.log(data);
										console.log("=====================");
									} else {
										$rootScope
												.commomErrorPopUp($rootScope.userDtlsResponsePojo.rd);
									}

								}).error(function(error) {

						})

			}

			$rootScope.wrapUpRequestPojo = {};
			$rootScope.wrapUpResponsePojo = {};
			$rootScope.wrapUpReq = function(obj) {
				$rootScope.wrapUpRequestPojo.lang = "en";
				$rootScope.wrapUpRequestPojo.trkr = "832382";
				$rootScope.wrapUpRequestPojo.user_mno = $rootScope.userDtlsResponsePojo.pd.details[0].mno;
				$rootScope.wrapUpRequestPojo.cceid = localStorage
						.getItem("Cceid");
				$rootScope.wrapUpRequestPojo.ufathers_name = $rootScope.userDtlsResponsePojo.pd.details[0].name;
				$rootScope.wrapUpRequestPojo.category = obj.category;
				$rootScope.wrapUpRequestPojo.sub_category = obj.subCategory;
				$rootScope.wrapUpRequestPojo.query = obj.query;
				$rootScope.wrapUpRequestPojo.assign_cce = "";
				$rootScope.wrapUpRequestPojo.severity_level = "";
				$rootScope.wrapUpRequestPojo.attachment = "";
				$rootScope.wrapUpRequestPojo.lmode = "chat";
				$rootScope.wrapUpRequestPojo.department = obj.department;
				$rootScope.wrapUpRequestPojo.service = obj.service;
				$rootScope.wrapUpRequestPojo.status = obj.status;
				$rootScope.wrapUpRequestPojo.qtype = obj.qtype;
				if (obj.rmks != undefined && obj.rmks != "" && obj.rmks != null) {
					$rootScope.wrapUpRequestPojo.remarks = obj.rmks;
				} else {
					$rootScope.wrapUpRequestPojo.remarks = "";
				}
				$rootScope.wrapUpRequestPojo.referenceId = $rootScope.userDtlsRequestPojo.referenceId;
				$rootScope.wrapUpRequestPojo.language = obj.language1;
				$rootScope.wrapUpRequestPojo.astatus = $rootScope.userinfo.adhaarStatus;
				$rootScope.wrapUpRequestPojo.email = $rootScope.userinfo.emailAuth;
				$rootScope.wrapUpRequestPojo.state = $rootScope.userinfo.state;
				showLoader();
				wrapUpFactory
						.wrapUpReq($rootScope.wrapUpRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.wrapUpResponsePojo = data;
									console.log($rootScope.wrapUpResponsePojo);
									if ($rootScope.wrapUpResponsePojo.rs == "S") {
										$rootScope.reset();
										console.log("-----**-------");
										console.log(usrList);
										console.log("-----**-------");
										chatid = $rootScope.datajid;
										$("#" + $rootScope.eventID).remove();
										usrList = jQuery.grep(usrList,
												function(value) {
													return value != chatid;
												});

										console.log("=====================");
										console.log(data);
										console.log("=====================");
										if ($rootScope.wrapUpRequestPojo.status == "assign") {
											$rootScope
													.sendSms(
															$rootScope.wrapUpRequestPojo.user_mno,
															$rootScope.wrapUpResponsePojo.pd.ticketID);
											$rootScope
													.commomSuccessPopUp($rootScope.wrapUpResponsePojo.rd
															+ " .The generated ticket ID is "
															+ $rootScope.wrapUpResponsePojo.pd.ticketID);
										} else {
											$rootScope
													.commomSuccessPopUp($rootScope.wrapUpResponsePojo.rd);
										}
									} else {
										$rootScope
												.commomErrorPopUp($rootScope.wrapUpResponsePojo.rd);
									}

								})
						.error(
								function(error) {
									hideLoader();
									$rootScope
											.commomErrorPopUp("Your request cannot be processed right now. Please try after sometime.");
								})

			}

			$rootScope.cancel = function() {
				$rootScope.close();
			}

			$rootScope.ticketCreatePopUp = function() {
				$mdDialog.show({
					contentElement : '#createTicketPopUp',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : false
				});
			};

			$rootScope.fetchServicesRequestPojo = {};
			$rootScope.fetchServicesResponsePojo = {};
			$rootScope.fetchServices = function() {
				$rootScope.fetchServicesRequestPojo.lang = "en";
				$rootScope.fetchServicesRequestPojo.srid = "";
				showLoader();
				fetchServicesFactory
						.fetchServices($rootScope.fetchServicesRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.fetchServicesResponsePojo = data;
									console
											.log($rootScope.fetchServicesResponsePojo);
									if ($rootScope.fetchServicesResponsePojo.rs == "SU") {
										hideLoader();
									}

								}).error(function(error) {

						})
			}

			$rootScope.fetchServices();

			$rootScope.fetchDeptServicesRequestPojo = {};
			$rootScope.fetchDeptServicesResponsePojo = {};
			$rootScope.selectDeptService = function(obj) {
				$rootScope.fetchDeptServicesResponsePojo = {};
				$rootScope.fetchDeptServicesRequestPojo.lang = "en";
				$rootScope.fetchDeptServicesRequestPojo.srid = obj;
				showLoader();
				createTicketFactory
						.fetchDeptServices(
								$rootScope.fetchDeptServicesRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.fetchDeptServicesResponsePojo = data;
									console
											.log($rootScope.fetchDeptServicesResponsePojo);
									if ($rootScope.fetchServicesResponsePojo.rs == "SU") {
										hideLoader();
										if ($rootScope.fetchServicesResponsePojo.pd.length > 0) {
											$rootScope.deptFlag = true;
										}
									}

								}).error(function(error) {
							hideLoader();
						});
			};
			$rootScope.preWrapUpsRequestPojo = {};
			$rootScope.preWrapUpsResponsePojo = {};
			$rootScope.fetchchatDtls = function(obj2) {
				$rootScope.preWrapUpsRequestPojo.lang = "en";
				$rootScope.preWrapUpsRequestPojo.requestid = obj2;
				showLoader();
				wrapUpFactory
						.preWrapUpsReq($rootScope.preWrapUpsRequestPojo)
						.success(
								function(data) {
									hideLoader();
									$rootScope.preWrapUpsResponsePojo = data;
									console
											.log($rootScope.preWrapUpsResponsePojo);
									if ($rootScope.preWrapUpsResponsePojo.rs == "S") {
										console.log("=====================");
										console.log(data);
										console.log("=====================");
										$mdDialog.show({
											contentElement : '#wrapups',
											parent : angular
													.element(document.body),
											targetEvent : null,
											clickOutsideToClose : true
										});
									} else {
										$rootScope
												.commomErrorPopUp($rootScope.preWrapUpsResponsePojo.rd);
									}

								}).error(function(error) {

						})

			}

			$rootScope.SendSmsRequestPojo = {};
			$rootScope.sendSms = function(user_mobno, ticktId) {
				$rootScope.SendSmsRequestPojo.lang = "en";
				$rootScope.SendSmsRequestPojo.mno = user_mobno;
				$rootScope.SendSmsRequestPojo.msg = "Dear User, Your ticket has been logged successfully. Your ticket ID is "
						+ ticktId;
				$rootScope.SendSmsRequestPojo.msgtype = "PM";
				$rootScope.SendSmsRequestPojo.appname = "umang";
				sendSmsFactory.sendSms($rootScope.SendSmsRequestPojo).success(
						function(data) {
							$rootScope.SendSmsResponsePojo = data;
							console.log($rootScope.SendSmsResponsePojo)
						}).error(function(error) {

				})
			}

			$rootScope.reset = function() {
				$rootScope.user.mobNo = '';
				$rootScope.user.fatherName = '';
				$rootScope.user.category = '';
				$rootScope.user.subCategory = '';
				$rootScope.user.severity_level = '';
				$rootScope.user.query = '';
				$rootScope.user.department = '';
				$rootScope.user.service = '';
				$rootScope.user.lmode = '';
				$rootScope.user.status = '';
				$rootScope.user.qtype = '';
				$rootScope.user.language1 = '';
				/*
				 * $rootScope.createTicketForm1.$setPristine();
				 * $rootScope.createTicketForm1.$setUntouched();
				 */
				angular.element(
						document.getElementsByTagName('md-input-container'))
						.removeClass('md-input-focused md-input-invalid');
				angular.element(
						document.getElementsByTagName('md-input-container'))
						.focus(false);
			};

			$rootScope.fetchCallRequestPojo = {};
			$rootScope.fetchCallResponsePojo = {};
			$rootScope.fetchCallDtls = function() {
				$rootScope.fetchCallRequestPojo.trkr = "7898";
				$rootScope.fetchCallRequestPojo.lang = "en";
				$rootScope.fetchCallRequestPojo.cceid = localStorage
						.getItem("Cceid")
				showLoader();
				wrapUpFactory
						.fetchCallDtls($rootScope.fetchCallRequestPojo)
						.success(
								function(data) {
									hideLoader();
									if ($rootScope.fetchCallResponsePojo.rs == "S") {
										$rootScope.wrapUpflag = true;
										$rootScope.fetchCallResponsePojo = data;
										/*
										 * $rootScope.callDtls=$rootScope.fetchCallResponsePojo.pd.calls;
										 * mobNumber = $rootScope.usrDtls.mno;
										 * var encodeMno=mobNumber.substring(1,
										 * mobNumber.length-2); var
										 * a=mobNumber.replace(encodeMno,"XXXXXXX");
										 * $rootScope.usrDtls.mno=a;
										 * console.log($rootScope.fetchCallResponsePojo);
										 * console.log("=====================");
										 * console.log(data);
										 * console.log("=====================");
										 * $rootScope.user.mobNo=$rootScope.usrDtls.mno;
										 * $rootScope.user.fatherName=$rootScope.usrDtls.name;
										 * $rootScope.referenceId=$rootScope.usrDtls.referenceId;
										 */
									} else {
										$rootScope
												.commomErrorPopUp($rootScope.fetchUserDtlsResponsePojo.rd);
									}

								}).error(function(error) {

						})

			}

			$rootScope.commomSuccessPopUp = function(obj) {
				$rootScope.successMsg = obj;
				$mdDialog.show({
					contentElement : '#commonSuccess11',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$rootScope.commomErrorPopUp = function(obj1) {
				$rootScope.errorMsg = obj1;
				$mdDialog.show({
					contentElement : '#commonError11',
					parent : angular.element(document.body),
					targetEvent : null,
					clickOutsideToClose : true
				});
			}
			$rootScope.cancel = function() {
				$mdDialog.cancel();
			};

			$rootScope.$on("$routeChangeStart", function(event, next, current) {
				console.log(next.originalPath);
				console.log();
				if (next.originalPath == "/") {
					$rootScope.flagHideDrawer = false;
					console.log("$rootScope.flagHideDrawe"
							+ $rootScope.flagHideDrawer);
				}
			});
			$rootScope.logoutStatus = function() {

				try {
					if (typeof $rootScope.intervalId != "undefined")
						clearInterval($rootScope.intervalId);
					$rootScope.intervalId = setInterval(function() {
						checkLoginStatus($location, $rootScope);
					}, 60 * 1000);

				} catch (error) {

					console.log(error);
					console.log(error.lineNumber);
				}

			}
		});
function checkLoginStatus(location, rootScope) {
	$.ajax({
		// timeout:1000,
		// type: "GET",
		url : "https://stgreport.umang.gov.in/CRM/isLogin",
		success : function(response) {
			if (response == false) {

				clearInterval(rootScope.intervalId);
				logout = true;
				try {
					connection.disconnect();

				} catch (error) {

				}
				window.onbeforeunload = null;
				localStorage.clear();
				// alert("testinggg"+rootScope.intervalId);
				alert("You are forced logout");

				window.location.href = '/CRM'

				return false;

			}
		},
		error : function(response) {
			console.log("res error " + response);
		}
	});
}
function hideLoader() {
	document.getElementById("loaderId").style.display = "none";
}
function showLoader() {
	document.getElementById("loaderId").style.display = "block";
}
function hideLoaderText() {
	document.getElementById("loaderText").style.display = "none";
}
function showLoaderText() {
	document.getElementById("loaderText").style.display = "block";
}
