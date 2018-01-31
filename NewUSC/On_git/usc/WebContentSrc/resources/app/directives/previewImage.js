(function(app) {
    'use strict';
    app.directive('previewImage', previewImageFn);
    previewImageFn.$inject = ['$document', '$compile'];

    function previewImageFn($document, $compile) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, elem, attr) {
                elem[0].style.cursor = 'zoom-in';
                elem.on('click', handler);

                scope.$on('$destroy', function() {
                    elem.off('click', handler);
                })

                function handler() {
                    var body = $document.find('body')[0]
                    var imagePreview = $compile(`<div class="image-preview" layout="row" layout-align="center center"><img src="${attr.src}" style="max-height:calc(100% - 10px)"></div>`)(scope);
                    body.appendChild(imagePreview[0]);

                    imagePreview.on('click', () => {
                    	body.removeChild(imagePreview[0]);
                    })
                }
            }
        }
    }
})(angular.module('selfcare'));
