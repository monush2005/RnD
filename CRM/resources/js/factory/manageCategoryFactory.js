crm.factory('manageCategoryFactory',  function($rootScope,$http) {
	var categoryId="";
	var addCategory=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/addCat",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	var delCatReq=function(a){
		console.log($rootScope.baseUrl);
		return $http({
            method: 'POST',
            url: $rootScope.baseUrl+"/delCat",
            data:a,
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        });	
	};
	var setCatId=function(catId){
		categoryId=catId;
	}
	var getCatId=function(){
		return categoryId;
	}
	
	
	

	return {
		addCategory:addCategory,
		delCatReq:delCatReq,
		setCatId:setCatId,
		getCatId:getCatId
		};
})