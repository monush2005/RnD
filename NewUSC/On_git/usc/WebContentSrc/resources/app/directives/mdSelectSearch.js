//this directive is a less verbose improvement over selectSearch.js (which is being 
//used at places throughout the project).

(function(app) {
    'use strict';
    app.directive('mdSelectSearch', mdSelectSearchFn);
    mdSelectSearchFn.$inject = ['$compile', '$parse'];

    function mdSelectSearchFn($compile, $parse) {
        return {
            require: 'mdSelect',
            priority: 1,
            restrict: 'A',
            scope: false,
            compile: function(tElement, tAttrs) {
                let searchModel = _.uniqueId('search');
                let ngRepeat = tElement.find('md-option').attr('ng-repeat');
                var allValues = ngRepeat.split(' ').pop();

                let header = `<md-select-header class="select-header">
                    <md-icon style="margin-right: 9px;">search</md-icon>
                    <input ng-keydown="$event.stopPropagation()" ng-model="${searchModel}" type="Search" placeholder="Search...">
                        </md-select-header>`;

                tElement.prepend(header);
                tElement.find('md-option').attr('ng-repeat', `${ngRepeat} |filter:${searchModel}`);
                tAttrs.mdOnClose = `${tAttrs.mdOnClose || ''}; ${searchModel}=''`


                return {
                    pre: () => {},
                    post: (scope, elem, attrs) => {
                        let searchElment = elem.find('md-select-header');
                        let searchElemCondition = attrs.mdSelectSearch;

                        let unwatch = scope.$watch(searchElemCondition, function(newValue) {
                            if(newValue)
                                searchElment.removeClass('hide');
                            else
                                searchElment.addClass('hide');
                        });
                        // if(!scope.$eval(attrs.mdSelectSearch)){
                        //     elem.find('md-select-header').remove();
                        //     return;
                        // }
                        // 
                        scope.$on('$destroy', function () {
                            unwatch();
                        })

                        if (!attrs.hasOwnProperty('multiple'))
                            return;

                        var template = `<md-button ng-hide="${searchModel}" ng-click="${'selectUnselectAll'+searchModel}(${tAttrs.ngModel}.length!=${allValues}.length)" 
                            class="md-primary">{{${tAttrs.ngModel}.length==${allValues}.length?'Unselect All':'Select All'}}
                            </md-button>`;
                        elem.find('md-select-header').append($compile(template)(scope));
                        scope['selectUnselectAll' + searchModel] = function(toSelect) {
                            _.set(scope, tAttrs.ngModel, []);
                            if (toSelect) {
                                let allValuesArray = _.get(scope, allValues);
                                _.each(allValuesArray, (item) => {
                                    _.get(scope, tAttrs.ngModel).push(item);
                                })
                            }

                            try {
                                $parse(attrs.ngChange)(scope);
                            } catch(e) {}
                        }

                        if(attrs.hasOwnProperty('preSelectAll') && scope.$eval(attrs.preSelectAll))
                            scope['selectUnselectAll' + searchModel](true);
                    }
                }
            }
        }
    }
})(angular.module('selfcare'));