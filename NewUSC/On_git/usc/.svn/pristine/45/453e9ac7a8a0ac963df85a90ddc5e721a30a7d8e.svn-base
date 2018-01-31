(function(app) {
    'use strict';
    app.directive('search', searchFn);
    searchFn.$inject = ['$compile', '$parse'];

    function searchFn($compile, $parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                elem.addClass("select-header");

                if (attr.selectAll) {
                    var allValues = attr.selectAll.split('|')[0];
                    var ngModel = attr.selectAll.split('|')[1];

                    var allValuesParsed = $parse(allValues);
                    var ngModelParsed = $parse(ngModel);

                    var scopeObj = 'search'+_.random(99999999);
                    scope[scopeObj] = {};
                    scope[scopeObj].selectAll = selectAll;

                    var template = `<md-icon style="margin-right: 9px;">search</md-icon><input ng-keydown="$event.stopPropagation()" ng-model="${attr.search}" 
                        type="Search" placeholder="Search...">
                        <md-button ng-hide="${attr.search}" ng-click="${scopeObj}.selectAll(${ngModel}.length!=${allValues}.length)" 
                        class="md-primary">{{${ngModel}.length==${allValues}.length?'Unselect All':'Select All'}}
                        </md-button>`

                    function selectAll(toSelect) {
                        ngModelParsed.assign(scope, []);
                        if (toSelect){
                        	let allValues = allValuesParsed(scope);
                        	 _.forEach(allValues, function(item) {
                                ngModelParsed(scope).push(item);
                            })
                        }
                    }
                    if(attr.hasOwnProperty('preSelect'))
                        selectAll(true);
                } else {
                    var template = `<md-icon style="margin-right: 9px;">search</md-icon><input ng-keydown="$event.stopPropagation()" ng-model="${attr.search}" 
                        type="Search" placeholder="Search...">`
                }

                var searchElem = $compile(template)(scope);
                elem.append(searchElem);
            }
        }
    }
})(angular.module('selfcare'));
