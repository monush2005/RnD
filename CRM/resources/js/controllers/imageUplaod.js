crm.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

crm.service('fileUpload', ['$http','$rootScope', function ($http,$rootScope) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        fd.append('id', 123456);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        	
        })
        .error(function(){
        	
        });
    }
}]);

crm.controller('imageUplaod', ['$scope', 'fileUpload','$rootScope', function($scope, fileUpload,$rootScope){
 
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = $rootScope.baseUrl + "/" + "imageUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);