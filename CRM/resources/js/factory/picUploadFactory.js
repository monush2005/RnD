crm.factory('picUploadFactory',function($rootScope,$http){

 var uploadImages=function(fordata){

	return $http({
        method: 'POST',
        url:$rootScope.baseUrl+"/imageUpload",
        data: fordata,
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    });
}
return{
	uploadImages:uploadImages
} 

});