(function(app) {
    'use strict';
    app.service('commonDataService', commonDataServiceFn);
    commonDataServiceFn.$inject = ['httpService', '$http'];

    function commonDataServiceFn(httpService, $http) {

        var commonDataService = this;
        commonDataService.fetchStates = fetchStates;
        commonDataService.getStateName = getStateName;
        commonDataService.fetchLanguages = fetchLanguages;
        commonDataService.fetchOccupationList = fetchOccupationList;
        commonDataService.fetchQualification = fetchQualification;
        commonDataService.getWorkingHoursMultiLang = getWorkingHoursMultiLang;
        commonDataService.fetchGovtDomains = fetchGovtDomains;
        commonDataService.setSharedData = setSharedData;
        commonDataService.getSharedData = getSharedData;
        commonDataService.refreshServerCache = refreshServerCache;
        var commonSharedInfo = {};
        function fetchStates(nonBlocking) {
            return httpService.post("fetchStates", { lang: "en" }, {
                    cache: true,
                    nonBlocking: nonBlocking
                })
                .then(function(states) {
                    _.remove(states, { stateid: "99" });
                    states = _(states).map(function(state) {
                        state.statename = _.startCase(_.toLower(state.statename));
                        return state;
                    }).sortBy('statename').value();
                    return states;
                })
        }
        
        	function setSharedData(params) {
        	
            var payload = {
                startDate: params.startDate,
                endDate: params.endDate                
            }    
           // alert('params in setCommonData : '+JSON.stringify(payload.startDate));
            commonSharedInfo = payload;
            
        }
        	
        
        function getSharedData(){
        //	alert("common Shared Info"+JSON.stringify(commonSharedInfo));
        	 return {commonSharedInfo};
        }

        function getStateName(stateId) {
            return fetchStates(true).then((states) => {
                states.push({
                    stateid: '99',
                    statename: 'Central'
                })
                let state = _.find(states, {stateid: stateId});
                return state?state.statename:'';
            })
        }

        function fetchLanguages(nonBlocking) {
            return httpService.post('commonData', {}, {
                cache: true,
                nonBlocking: nonBlocking
            }).then((response) => {
                return _.map(response.languageList, (i) => {
                    return {
                        id: i.alises,
                        language: _.capitalize(i.langauge)
                    }
                });
            });
        }

        function fetchOccupationList() {
            return httpService.post('commonData', {}, { cache: true }).then((response) => {
                return _.map(response.occupationList, (i) => {
                    return {
                        occuId: i.occupationId,
                        occuName: i.occupationName
                    }
                });
            });
        }

        function fetchQualification() {
            return httpService.post('commonData', {}, { cache: true }).then((response) => {
                return _.map(response.qualificationList, (i) => {
                    return {
                        qualId: i.qualificationId,
                        qualName: i.qualificationName
                    }
                });
            });
        }

        function fetchGovtDomains() {
            return httpService.post('commonData', {}, {
                cache: true,
                nonBlocking: true
            }).then((response) => {
                return _(response.domainList).map('domainName').map(_.toLower).value();
            });
        }

        function refreshServerCache(){
            envVars.keywordsCacheURL1 && $http.get(envVars.keywordsCacheURL1);
            envVars.keywordsCacheURL2 && $http.get(envVars.keywordsCacheURL2);
        }

        function getWorkingHoursMultiLang(lang) {
            var langs = {};
            langs.en = {
                weekday: {
                    0: 'Monday',
                    1: 'Tuesday',
                    2: 'Wednesday',
                    3: 'Thursday',
                    4: 'Friday',
                    5: 'Saturday',
                    6: 'Sunday',
                },
                time: {
                    morning: 'Morning',
                    evening: 'Evening'
                },
                to: "to",
                am: 'AM',
                pm: 'PM'
            }

            langs.hi = {
                weekday: {
                    0: 'सोमवार',
                    1: 'मंगलवार',
                    2: 'बुधवार',
                    3: 'गुरूवार',
                    4: 'शुक्रवार',
                    5: 'शनिवार',
                    6: 'रविवार',
                },
                time: {
                    morning: 'सुबह',
                    evening: 'शाम'
                },
                to: "से",
                am: 'ए एम',
                pm: 'पी एम'
            }

            langs.bn = {
                weekday: {
                    0: 'সোমবার',
                    1: 'মঙ্গলবার',
                    2: 'বুধবার',
                    3: 'বৃহস্পতিবার',
                    4: 'শুক্রবার',
                    5: 'শনিবার',
                    6: 'রবিবার',
                },
                time: {
                    morning: 'সকাল',
                    evening: 'সন্ধ্যা'
                },
                to: "থেকে",
                am: 'এ এম',
                pm: 'পি এম'
            }

            langs.gu = {
                weekday: {
                    0: 'સોમવાર',
                    1: 'મંગળવારે',
                    2: 'બુધવાર',
                    3: 'ગુરુવાર',
                    4: 'શુક્રવાર',
                    5: 'શનિવાર',
                    6: 'રવિવાર',
                },
                time: {
                    morning: 'સવારે',
                    evening: 'સાંજ'
                },
                to: "થી",
                am: 'એ એમ',
                pm: 'પી એમ'
            }

            langs.ml = {
                weekday: {
                    0: 'തിങ്കൾ',
                    1: 'ചൊവ്വാഴ്ച',
                    2: 'ബുധൻ',
                    3: 'വ്യാഴാഴ്ച',
                    4: 'വെള്ളിയാഴ്ച',
                    5: 'ശനിയാഴ്ച',
                    6: 'ഞായറാഴ്ച',
                },
                time: {
                    morning: 'രാവിലെ',
                    evening: 'വൈകുന്നേരം'
                },
                to: "മുതൽ",
                am: 'എ എം',
                pm: 'പി എം'
            }

            langs.mr = {
                weekday: {
                    0: 'सोमवार',
                    1: 'मंगळवार',
                    2: 'बुधवार',
                    3: 'गुरूवार',
                    4: 'शुक्रवार',
                    5: 'शनिवार',
                    6: 'रविवार',
                },
                time: {
                    morning: 'सकाळी',
                    evening: 'संध्याकाळी'
                },
                to: "ते",
                am: 'ए एम',
                pm: 'पी एम'
            }

            langs.ta = {
                weekday: {
                    0: 'திங்கள்',
                    1: 'செவ்வாய்க்கிழமை',
                    2: 'புதன்கிழமை',
                    3: 'வியாழக்கிழமை',
                    4: 'வெள்ளி',
                    5: 'சனிக்கிழமை',
                    6: 'ஞாயிறு',
                },
                time: {
                    morning: 'காலை',
                    evening: 'சாயங்காலம்'
                },
                to: "முதல்",
                am: 'ஏ எம்',
                pm: 'பி எம்'
            }

            langs.te = {
                weekday: {
                    0: 'సోమవారం',
                    1: 'మంగళవారం',
                    2: 'బుధవారం',
                    3: 'గురువారం',
                    4: 'శుక్రవారం',
                    5: 'శనివారం',
                    6: 'ఆదివారం',
                },
                time: {
                    morning: 'ఉదయం',
                    evening: 'సాయంత్రం'
                },
                to: "నుండి",
                am: 'ఎ ఎమ్',
                pm: 'పి ఎమ్'
            }

            langs.ur = {
                weekday: {
                    0: 'سوموار',
                    1: 'منگل',
                    2: 'بدھ',
                    3: 'جمعرات',
                    4: 'جمعہ',
                    5: 'ہفتہ',
                    6: 'اتوار',
                },
                time: {
                    morning: 'صبح',
                    evening: 'شام'
                },
                to: "سے",
                am: 'اے ایم',
                pm: 'پی ایم',
                rtl: true
            }

            langs.kn = {
                weekday: {
                    0: 'ಸೋಮವಾರ',
                    1: 'ಮಂಗಳವಾರ',
                    2: 'ಬುಧವಾರ',
                    3: 'ಗುರುವಾರ',
                    4: 'ಶುಕ್ರವಾರ',
                    5: 'ಶನಿವಾರ',
                    6: 'ಭಾನುವಾರ',
                },
                time: {
                    morning: 'ಮಾರ್ನಿಂಗ್',
                    evening: 'ಸಂಜೆ'
                },
                to: "ರಿಂದ",
                am: 'ಎ ಎಮ್',
                pm: 'ಪಿ ಎಮ್'
            }


            langs.pa = {
                weekday: {
                    0: 'ਸੋਮਵਾਰ',
                    1: 'ਮੰਗਲਵਾਰ',
                    2: 'ਬੁੱਧਵਾਰ',
                    3: 'ਵੀਰਵਾਰ',
                    4: 'ਸ਼ੁੱਕਰਵਾਰ',
                    5: 'ਸ਼ਨੀਵਾਰ',
                    6: 'ਐਤਵਾਰ',
                },
                time: {
                    morning: 'ਸਵੇਰੇ',
                    evening: 'ਸ਼ਾਮ ਦਾ'
                },
                to: "ਤੋਂ",
                am: 'ਏ ਐਮ',
                pm: 'ਪੀ ਐਮ'
            }

            langs.as = {
                weekday: {
                    0: 'দেওবাৰ',
                    1: 'সোমবাৰ',
                    2: 'মঙ্গলবাৰ',
                    3: 'বুধবাৰ',
                    4: 'বৃহষ্পতিবাৰ',
                    5: 'শুক্ৰবাৰ',
                    6: 'শনিবাৰ',
                },
                time: {
                    morning: 'ৰাতিপুৱা',
                    evening: 'আবেলি'
                },
                to: "ইয়ালৈ",
                am: 'এ এম',
                pm: 'পি এম'
            }

            langs.or = {
                weekday: {
                    0: 'ସୋମବାର',
                    1: 'ମଙ୍ଗଳବାର',
                    2: 'ବୁଧବାର',
                    3: 'ଗୁରୁବାର',
                    4: 'ଶୁକ୍ରବାର',
                    5: 'ଶନିବାର',
                    6: 'ରବିବାର',
                },
                time: {
                    morning: 'ସକାଳ',
                    evening: 'ସନ୍ଧ୍ୟା'
                },
                to: "କୁ",
                am: 'ଏ ଏମ୍‌',
                pm: 'ପି ଏମ୍‌'
            }


            return langs[lang.id];
        }
    }
})(angular.module('selfcare'));