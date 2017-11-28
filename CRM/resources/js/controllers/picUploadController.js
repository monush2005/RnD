crm.controller('picUploadController',function($scope,$location,$http,$rootScope,picUploadFactory,$location,$mdDialog) {
		angular.element(document).ready(function () { 
			hideLoader();
		console.log('page loading completed'); });
		$scope.uploadFile = function(filez){
			showLoader();
//			 	var file = $scope.myFile;
			var file=filez[0];
			console.log(file);
				console.log('file is ' );
				console.log(file.name);
				fileName=file.name
				console.dir(file);
				var fd = new FormData();
				fd.append('file', file);


				picUploadFactory.uploadImages(fd).success(function(data){
					console.log("200");
					console.log(fileName);
					if(data.status=="success"){
						hideLoader();
						alert("Document is uploaded successfully");
				}
					else{
						alert("File has not been uploaded. Please try again later.");
					}
				}).error(function(error) {
					console.log("400");	


				});
			};
});