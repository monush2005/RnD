(function(app) {
    'use strict';
    app.config(configFn);

    configFn.$inject = ['$transitionsProvider'];

    function configFn($transitionsProvider) {

        var redirectState;

        $transitionsProvider.onBefore({ to: 'login' }, function(transition) {
            //if user is already logged in and tries to go to login page,
            //move user to dashboard.
            var $localStorage = transition.injector().get('$localStorage');
            if ($localStorage.isLoggedIn > Date.now()) {
                return transition.router.stateService.target('selfcare.dashboard.apps');
            }
        })

         $transitionsProvider.onBefore({ to: 'selfcare.dashboard.apps' }, function(transition) {
            //transition for not letting GUEST user move to dashboard.
            //forcefully moving user to selfcare.questionnaire.fill
            var $localStorage = transition.injector().get('$localStorage');
            if ($localStorage.userRole && $localStorage.userRole.logicalName.toLowerCase() == 'guest') {
                return transition.router.stateService.target('selfcare.questionnaire.fill');
            }
        })

        $transitionsProvider.onBefore({ to: 'selfcare.**' }, function(transition) {
            //'redirectState' variable stores a state which was being attempted
            //in case user is not logged in, app is redicted to login and after login
            //if 'redirectState' variable has some value, app is again taken back to the 
            //state which was attempted at first.
            if (redirectState) {
                let temp = redirectState;
                redirectState = null;
                return temp;
            }
            var $localStorage = transition.injector().get('$localStorage');
            if (!$localStorage.isLoggedIn || $localStorage.isLoggedIn < Date.now()) {
                // ^current block for not logged in or session expired
                $localStorage.$reset();
                //storing the target state along with params.
                redirectState = transition.targetState();
                redirectState._params = transition.params();
                transition.injector().get('customToastService').sessionTimeout();
                return transition.router.stateService.target('login');
            } else {
                $localStorage.isLoggedIn = Date.now() + envVars.serverTimeout;
            }
        })

        $transitionsProvider.onError({ to: 'selfcare.**' }, function(transition) {
            //redirect to state when some hook kills the transition, 'OnEnter' defined in 
            //route config in our case where if appid or serviceid is not found
            if(transition._error.type==3)
                transition.router.stateService.go('login');
        })
    }

})(angular.module('selfcare'));
