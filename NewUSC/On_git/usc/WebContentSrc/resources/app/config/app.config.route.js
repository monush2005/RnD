(function(app) {
    'use strict';
    app.config(configFn);

    configFn.$inject = ['$stateProvider'];

    function configFn($stateProvider) {
        var popCrumbOnce = ['breadCrumbService', breadCrumbService => breadCrumbService.pop()];
        var popCrumbTwice = ['breadCrumbService', breadCrumbService => {
            breadCrumbService.pop();
            breadCrumbService.pop();
        }];
        var popCrumbThrice = ['breadCrumbService', breadCrumbService => {
            breadCrumbService.pop();
            breadCrumbService.pop();
            breadCrumbService.pop();
        }];

        var allStates = {
            'login': {
                url: '/login',
                component: 'loginComponent',
                onEnter: ['breadCrumbService', breadCrumbService => breadCrumbService.reset()]
            },
            'selfcare': {
                component: 'selfCareComponent',
                abstract: true,
                subStates: {
                    'selfcare.dashboard': {
                        url: '/dashboard',
                        redirectTo: 'selfcare.dashboard.apps',
                        subStates: {
                            'selfcare.dashboard.apps': {
                                url: '/apps',
                                component: 'dashboardAppsComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.dashboard.apps', name: 'Dashboard' });
                                }],
                                onExit: popCrumbOnce,
                                subStates: {
                                    'selfcare.dashboard.apps.performance': {
                                        url: '/performance/:appid',
                                        component: 'reportingComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', 'appid', (breadCrumbService, $localStorage, appid) => {
                                            var app = $localStorage.userApps && $localStorage.userApps[appid];
                                            if (!app)
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.apps.performance', name: `${app.appname} Performance` });
                                        }],
                                        onExit: popCrumbOnce,
                                        resolve: {
                                            appid: ['$transition$', $transition$ => $transition$.params().appid],
                                            startDate: () => moment().subtract(1, 'month').toDate(),
                                            endDate: () => moment().subtract(1, 'day').toDate()
                                        }
                                    }
                                }
                            },
                            'selfcare.dashboard.services': {
                                url: '/services',
                                component: 'dashboardServicesComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.dashboard.services', name: 'Dashboard' });
                                }],
                                onExit: popCrumbOnce,
                                subStates: {
                                    'selfcare.dashboard.services.performance': {
                                        url: '/performance/:serviceid',
                                        component: 'reportingComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', 'serviceid', (breadCrumbService, $localStorage, serviceid) => {
                                            var service = $localStorage.userServices && $localStorage.userServices[serviceid];
                                            if (!service)
                                                return false;
                                            breadCrumbService.push({ state: `selfcare.dashboard.apps.performance({appid:${service.appid}})`, name: service.app.appname });
                                            breadCrumbService.push({ state: 'selfcare.dashboard.services.performance', name: `${service.servicename} Performance` });
                                        }],
                                        onExit: popCrumbTwice,
                                        resolve: {
                                            serviceid: ['$transition$', $transition$ => $transition$.params().serviceid],
                                            startDate: () => moment().subtract(1, 'month').toDate(),
                                            endDate: () => moment().subtract(1, 'day').toDate()
                                        }
                                    }
                                }
                            },
                            'selfcare.dashboard.app': {
                                url: '/app/:appid',
                                redirectTo: 'selfcare.dashboard.app.home',
                                onEnter: ['breadCrumbService', '$localStorage', 'appid', (breadCrumbService, $localStorage, appid) => {
                                    var app = $localStorage.userApps && $localStorage.userApps[appid];
                                    if (!app)
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.dashboard.apps', name: 'Dashboard' });
                                    breadCrumbService.push({ state: 'selfcare.dashboard.app.home', name: app.appname });
                                }],
                                onExit: popCrumbTwice,
                                resolve: {
                                    appid: ['$transition$', $transition$ => $transition$.params().appid]
                                },
                                subStates: {
                                    'selfcare.dashboard.app.home': {
                                        url: '/home',
                                        component: 'appHomeComponent'
                                    },
                                    'selfcare.dashboard.app.keywords': {
                                        url: '/keywords',
                                        component: 'appKeywordComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'viewAppKeywords,editAppKeywords'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.keywords', name: 'Keywords' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.queries': {
                                        url: '/queries',
                                        component: 'userQueryComponent',
                                        params: {
                                            startDate: undefined,
                                            endDate: undefined,
                                            type: undefined
                                        },
                                        resolve: {
                                            startDate: ['$transition$', ($transition$) => $transition$.params().startDate],
                                            endDate: ['$transition$', ($transition$) => $transition$.params().endDate],
                                            type: ['$transition$', ($transition$) => $transition$.params().type]
                                        },
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'viewQuery,takeQueryAction'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.queries', name: 'User Complaints' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.categories': {
                                        url: '/categories',
                                        component: 'appCategoryComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'viewAppCategory,editAppCategory'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.categories', name: 'Category' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.ratings': {
                                        url: '/ratings',
                                        component: 'ratingsComponent',
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.ratings', name: 'Ratings & Feedbacks' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.onOff': {
                                        url: '/onOff',
                                        component: 'appServiceOnOffComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'onOffApp'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.onOff', name: 'Activate/Deactivate' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.reportCard': {
                                        url: '/reportCard',
                                        component: 'reportCardComponent',
                                        params: {
                                            startDate: () => moment().subtract(1, 'month').toDate(),
                                            endDate: () => moment().subtract(1, 'day').toDate(),
                                            selectedCard: undefined,
                                            dateRange: 'month'
                                        },
                                        resolve: {
                                            startDate: ['$transition$', ($transition$) => $transition$.params().startDate],
                                            endDate: ['$transition$', ($transition$) => $transition$.params().endDate],
                                            selectedCard: ['$transition$', ($transition$) => $transition$.params().selectedCard],
                                            dateRange: ['$transition$', ($transition$) => $transition$.params().dateRange]
                                        },
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.reportCard', name: 'Report Card' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.app.appProfile': {
                                        url: '/appProfile',
                                        component: 'appProfileComponent',
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.app.appProfile', name: 'Profile' });
                                        }],
                                        onExit: popCrumbOnce
                                    }
                                }
                            },
                            'selfcare.dashboard.service': {
                                url: '/service/:serviceid',
                                redirectTo: 'selfcare.dashboard.service.home',
                                onEnter: ['breadCrumbService', '$localStorage', 'serviceid', (breadCrumbService, $localStorage, serviceid) => {
                                    var service = $localStorage.userServices && $localStorage.userServices[serviceid];
                                    if (!service)
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.dashboard.services', name: 'Dashboard' });
                                    breadCrumbService.push({ state: `selfcare.dashboard.app({appid:${service.appid}})`, name: service.app.appname });
                                    breadCrumbService.push({ state: 'selfcare.dashboard.service.home', name: service.servicename });
                                }],
                                onExit: popCrumbThrice,
                                resolve: {
                                    serviceid: ['$transition$', $transition$ => $transition$.params().serviceid]
                                },
                                subStates: {
                                    'selfcare.dashboard.service.home': {
                                        url: '/home',
                                        component: 'serviceHomeComponent'
                                    },
                                    'selfcare.dashboard.service.keywords': {
                                        url: '/keywords',
                                        component: 'serviceKeywordComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'viewServiceKeywords,editServiceKeywords'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.keywords', name: 'Keywords' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.service.reportCard': {
                                        url: '/reportCard',
                                        component: 'reportCardComponent',
                                        params: {
                                            startDate: () => moment().subtract(1, 'month').toDate(),
                                            endDate: () => moment().subtract(1, 'day').toDate(),
                                            selectedCard: undefined,
                                            dateRange: 'month'
                                        },
                                        resolve: {
                                            startDate: ['$transition$', ($transition$) => $transition$.params().startDate],
                                            endDate: ['$transition$', ($transition$) => $transition$.params().endDate],
                                            selectedCard: ['$transition$', ($transition$) => $transition$.params().selectedCard],
                                            dateRange: ['$transition$', ($transition$) => $transition$.params().dateRange]
                                        },
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.reportCard', name: 'Report Card' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.service.queries': {
                                        url: '/queries',
                                        component: 'userQueryComponent',
                                        params: {
                                            startDate: undefined,
                                            endDate: undefined,
                                            type: undefined
                                        },
                                        resolve: {
                                            startDate: ['$transition$', ($transition$) => $transition$.params().startDate],
                                            endDate: ['$transition$', ($transition$) => $transition$.params().endDate],
                                            type: ['$transition$', ($transition$) => $transition$.params().type]
                                        },
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            if (!hasRight($localStorage, 'viewQuery,takeQueryAction'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.queries', name: 'User Complaints' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.service.ratings': {
                                        url: '/ratings',
                                        component: 'ratingsComponent',
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.ratings', name: 'Ratings & Feedbacks' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.service.onOff': {
                                        url: '/onOff',
                                        component: 'appServiceOnOffComponent',
                                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                            return false;

                                            if (!hasRight($localStorage, 'onOffApp,onOffService'))
                                                return false;
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.onOff', name: 'Activate/Deactivate' });
                                        }],
                                        onExit: popCrumbOnce
                                    },
                                    'selfcare.dashboard.service.serviceProfile': {
                                        url: '/serviceProfile',
                                        component: 'serviceProfileComponent',
                                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                                            breadCrumbService.push({ state: 'selfcare.dashboard.service.ratings', name: 'Profile' });
                                        }],
                                        onExit: popCrumbOnce
                                    }
                                }
                            }
                        }
                    },
                    'selfcare.campaigns': {
                        url: '/campaigns',
                        redirectTo: 'selfcare.campaigns.schedule',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'manageCampaigns'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.campaigns', name: 'Campaigns' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.campaigns.schedule': {
                                url: '/schedule',
                                component: 'scheduleCampaignComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.campaigns.schedule', name: 'Schedule' });
                                }],
                                onExit: popCrumbOnce,
                            },
                            'selfcare.campaigns.view': {
                                url: '/view/:status',
                                params: { status: { value: 'scheduled', dynamic: true } },
                                component: 'viewCampaignsComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.campaigns.view', name: 'View' });
                                }],
                                onExit: popCrumbOnce,
                                resolve: {
                                    status: ['$transition$', $transition$ => $transition$.params().status]
                                }
                            }
                        }
                    },
                    'selfcare.roles': {
                        url: '/roles',
                        redirectTo: 'selfcare.roles.create',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'createUser'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.roles', name: 'Roles' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.roles.create': {
                                url: '/create',
                                component: 'createRoleComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.roles.create', name: 'Create' });
                                }],
                                onExit: popCrumbOnce,
                            },
                            'selfcare.roles.edit': {
                                url: '/edit',
                                component: 'editRoleComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.roles.edit', name: 'Edit' });
                                }],
                                onExit: popCrumbOnce
                            }
                        }
                    },
                    'selfcare.banners': {
                        url: '/banners',
                        redirectTo: 'selfcare.banners.upload',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'requestBanners,approveBanners'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.banners', name: 'Banners' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.banners.upload': {
                                url: '/upload',
                                component: 'uploadBannerComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.banners.upload', name: 'Upload' });
                                }],
                                onExit: popCrumbOnce,
                            },
                            'selfcare.banners.view': {
                                url: '/view',
                                component: 'viewMyBannersComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.banners.view', name: 'View' });
                                }],
                                onExit: popCrumbOnce
                            },
                            'selfcare.banners.approve': {
                                url: '/approve',
                                component: 'approveBannersComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'approveBanners'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.banners.approve', name: 'Approve' });
                                }],
                                onExit: popCrumbOnce
                            }
                        }
                    },
                    'selfcare.users': {
                        url: '/users',
                        redirectTo: 'selfcare.users.create',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'createUser,onboardingRequests'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.users', name: 'Manage Users' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.users.create': {
                                url: '/create',
                                component: 'createUserComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.users.create', name: 'Create' });
                                }],
                                onExit: popCrumbOnce,
                            },
                            'selfcare.users.edit': {
                                url: '/edit',
                                component: 'editUsersComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.users.edit', name: 'Edit' });
                                }],
                                onExit: popCrumbOnce
                            },
                            'selfcare.users.tree': {
                                url: '/tree',
                                component: 'editUsersComponent',
                                resolve: {
                                    forTree: _.stubTrue
                                },
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.users.tree', name: 'Tree' });
                                }],
                                onExit: popCrumbOnce
                            },
                            'selfcare.users.requests': {
                                url: '/requests/:status',
                                component: 'manageRequestsComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'onboardingRequests'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.users.requests', name: 'Onboarding Requests' });
                                }],
                                onExit: popCrumbOnce,
                                params: { status: { value: 'pending', dynamic: true } },
                                resolve: {
                                    status: ['$transition$', $transition$ => $transition$.params().status]
                                }
                            }
                        }
                    },
                    'selfcare.myAccount': {
                        url: '/myAccount',
                        component: 'profileDetailsComponent',
                        onEnter: ['breadCrumbService', (breadCrumbService) => {
                            breadCrumbService.push({ state: 'selfcare.myAccount', name: 'My Account' });
                        }],
                        onExit: popCrumbOnce,
                    },
                    'selfcare.createCategory': {
                        url: '/appCategories',
                        component: 'createCategoryComponent',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'createCategory'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.createCategory', name: 'App Categories' });
                        }],
                        onExit: popCrumbOnce,
                    },
                    'selfcare.ratingAndFeedback': {
                        url: '/ratingAndFeedback',
                        component: 'ratingAndFeebacksComponent',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'ratingsApp,ratingsDept'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.ratingAndFeedback', name: 'Rating & Feedback' });
                        }],
                        onExit: popCrumbOnce,
                    },
                    'selfcare.designApi': {
                        url: '/designApi',
                        component: 'designApiComponent',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'designApi'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.designApi', name: 'Design API' });
                        }],
                        onExit: popCrumbOnce,
                    },
                    'selfcare.umangFaq': {
                        url: '/umangFaq',
                        component: 'umangFaqComponent',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'manageAppFAQ'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.umangFaq', name: 'UMANG FAQ' });
                        }],
                        onExit: popCrumbOnce,
                    },
                    'selfcare.attention': {
                        url: '/attentionScreen',
                        redirectTo: 'selfcare.attention.view',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'attentionScreen'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.attention', name: 'Attention Screen' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.attention.view': {
                                url: '/view',
                                component: 'viewAttScreensComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.attention.view', name: 'View' });
                                }],
                                onExit: popCrumbOnce
                            },
                            'selfcare.attention.upload': {
                                url: '/upload',
                                component: 'uploadAttScreenComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.attention.upload', name: 'Upload' });
                                }],
                                onExit: popCrumbOnce
                            }
                        }
                    },
                    'selfcare.directory': {
                        url: '/directory',
                        redirectTo: 'selfcare.directory.view',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'directoryService'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.directory', name: 'Directory Service' });
                        }],
                        onExit: popCrumbOnce,
                        subStates: {
                            'selfcare.directory.view': {
                                url: '/view',
                                component: 'viewDirectoryComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.directory.view', name: 'View' });
                                }],
                                onExit: popCrumbOnce
                            },
                            'selfcare.directory.createNew': {
                                url: '/createNew',
                                component: 'deptEditorComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.directory.createNew', name: 'Create New Department' });
                                }],
                                onExit: popCrumbOnce
                            }
                        }
                    },
                    'selfcare.analytics': {
                        url: '/analytics/:currentComponent?startDate&endDate',
                        component: 'analyticsParentComponent',
                        onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                            if (!hasRight($localStorage, 'analytics'))
                                return false;
                            breadCrumbService.push({ state: 'selfcare.analytics', name: 'Analytics' });
                        }],
                        params: {
                            startDate: {
                                dynamic: true
                            },
                            endDate: {
                                dynamic: true
                            },
                            currentComponent : {
                                value: 'dashboard',
                                dynamic: true
                            },
                            status: {
                                value: undefined
                            }
                        },
                        resolve: {
                            startDate: ['$transition$', ($transition$) => $transition$.params().startDate&&moment($transition$.params().startDate, 'DD-MM-YYYY').toDate()],
                            endDate: ['$transition$', ($transition$) => $transition$.params().endDate&&moment($transition$.params().endDate, 'DD-MM-YYYY').toDate()],
                            currentComponent: ['$transition$', ($transition$) => $transition$.params().currentComponent],
                            status: ['$transition$', ($transition$) => $transition$.params().status]
                        },
                        onExit: popCrumbOnce
                    },
                    'selfcare.questionnaire': {
                        url: '/questionnaire',
                        redirectTo: 'selfcare.questionnaire.viewSubmissions',
                        subStates: {
                            'selfcare.questionnaire.fill': {
                                url: '/fill',
                                component: 'fillQuestionnaireComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'fillQuestionaire'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.questionnaire.fill', name: 'Questionnaire' });
                                    breadCrumbService.push({ state: 'selfcare.questionnaire.fill', name: 'Fill' });
                                }],
                                onExit: popCrumbTwice,
                            },
                            'selfcare.questionnaire.build': {
                                url: '/build',
                                component: 'buildQuestionnaireComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'viewQuestionaire'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.questionnaire', name: 'Questionnaire' });
                                    breadCrumbService.push({ state: 'selfcare.questionnaire.build', name: 'Build' });
                                }],
                                onExit: popCrumbTwice,
                            },
                            'selfcare.questionnaire.preview': {
                                url: '/preview',
                                component: 'previewQuestionnaireComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'viewQuestionaire'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.questionnaire', name: 'Questionnaire' });
                                    breadCrumbService.push({ state: 'selfcare.questionnaire.preview', name: 'Preview' });
                                }],
                                onExit: popCrumbTwice,
                            },
                            'selfcare.questionnaire.viewSubmissions': {
                                url: '/viewSubmissions',
                                component: 'viewQsnrSubmissionsComponent',
                                onEnter: ['breadCrumbService', '$localStorage', (breadCrumbService, $localStorage) => {
                                    if (!hasRight($localStorage, 'viewQuestionaire'))
                                        return false;
                                    breadCrumbService.push({ state: 'selfcare.questionnaire', name: 'Questionnaire' });
                                    breadCrumbService.push({ state: 'selfcare.questionnaire.viewSubmissions', name: 'View Submissions' });
                                }],
                                onExit: popCrumbTwice,
                            }
                        }
                    },
                    'selfcare.messaging': {
                        url: '/messaging',
                        redirectTo: 'selfcare.messaging.broadcasts',
                        subStates: {
                            'selfcare.messaging.broadcasts': {
                                url: '/broadcasts',
                                component: 'broadcastComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.messaging.broadcasts', name: 'Messaging' });
                                    breadCrumbService.push({ state: 'selfcare.messaging.broadcasts', name: 'Broadcasts' });
                                }],
                                onExit: popCrumbTwice,
                            },
                            'selfcare.messaging.directMessage': {
                                url: '/direct',
                                component: 'directMessageComponent',
                                onEnter: ['breadCrumbService', (breadCrumbService) => {
                                    breadCrumbService.push({ state: 'selfcare.messaging.directMessage', name: 'Messaging' });
                                    breadCrumbService.push({ state: 'selfcare.messaging.directMessage', name: 'Direct Message' });
                                }],
                                onExit: popCrumbTwice,
                            }
                        }
                    }
                }
            }
        }

        _.each(allStates, registerStates);

        function registerStates(state, name) {
            var subStates = state.subStates;
            delete state.subStates;
            $stateProvider.state(name, state);
            if (subStates)
                _.each(subStates, registerStates)
        }

        function hasRight($localStorage, rights) {
            //returns true if user has any of the right in rights.
            var rights = rights.split(',');
            var hasRight = false;
            _.each(rights, (right) => {
                if (hasRight)
                    return false;
                hasRight = _.existsBy($localStorage.userRights, right, 'rightName');
            })
            return hasRight;
        }
    }

})(angular.module('selfcare'));