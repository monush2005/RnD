(function(app) {
    'use strict';
    app.component('starRatingComponent', {
        templateUrl: 'resources/app/components/_commonComponents/starRatingComponent/starRatingComponent.html',
        controller: starRatingComponentController,
        controllerAs: 'vm',
        bindings: {
            rating: '<'
        }
    })

    starRatingComponentController.$inject = ['$localStorage'];

    function starRatingComponentController($localStorage) {
        var vm = this;
        vm.starIconValue = [];


        vm.$onChanges = function(changes) {
            if (changes.rating.currentValue) {
                vm.rating = parseFloat(vm.rating);

                for (var i = 0; i < 5; i++) {
                    vm.starIconValue[i] = calcStarIconValue(i + 1);
                }
            }
        }

        function calcStarIconValue(iconNumber) {
            var diff = vm.rating - parseInt(iconNumber);
            if (diff >= 0)
                return 'star';
            else if (diff > -1 && diff < 0)
                return 'star_half';
            else
                return 'star_border';
        }
    }
})(angular.module('selfcare'));
