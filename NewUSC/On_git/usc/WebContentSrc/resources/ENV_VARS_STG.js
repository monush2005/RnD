var envVars = {}
envVars.base = '/usc';
envVars.apiServer = '';
envVars.debugInfo = false;
envVars.serverTimeout = 60 * 60 * 1000;
envVars.xhrTimeout = 15 * 1000;
envVars.analyticsStartDate = new Date(2017, 4, 28);
envVars.mutipleHelplinePattern = '^([\\d\\-\\s+]+)([\\d\\-+,\\s]+)$';
envVars.timePattern = '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';
envVars.mobilePattern = '^[7-9][0-9]{9}$';
envVars.namePattern = /^([a-zA-z\.\s])*$/;
envVars.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
envVars.urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
envVars.keywordsCacheURL1 = 'https://stgnotify.umang.gov.in/solr/umang_keywords/dataimport?command=full-import';
envVars.keywordsCacheURL2 = 'https://stgnotify.umang.gov.in/solr/umang_app1/dataimport?command=full-import';
envVars.spiceMail = 'sujit.pathak@spicedigital.in';


envVars.ga = {};
envVars.ga.apiKey = 'AIzaSyDTdO7Mtvb8QVzfLsE-Y9sZQ36JZ_l-D5o';
envVars.ga.clientId = '616074837787-aclok0vn5jo2kl2bp11gsno9csl0raod.apps.googleusercontent.com';
envVars.ga.androidViewId = '134567367';
envVars.ga.iOSViewId = '139233041';
envVars.ga.wpViewId = '139241019';
envVars.ga.maxResults = 50;