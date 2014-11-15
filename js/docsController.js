bookApp.controller('docsController',['$scope', '$http', function($scope,$http) {

	$scope.accordion = $(function() {
		$( "#accordion" ).accordion({
			collapsible: true,
			heightStyle: "content"
		});
	});

	$("#accordion").accordion();

	$scope.createAccount = function() {
		$scope.baseAPISearchURL = "http://localhost:8080/bookaddict/";

		console.log("base api url" + $scope.baseAPISearchURL);
		$query = $scope.baseAPISearchURL + "register?fname=" + $scope.fname + "&lname=" + $scope.lname + "&email=" + $scope.email + "&password=" + $scope.password;
		$http.post($query).success(function(response) {
			$scope.createAccountResponse = JSON.stringify(response,null,2);
			console.log(response);
			$scope.fname = null;
			$scope.lname = null;
			$scope.email = null;
			$scope.password = null;
			$scope.confirmPassword = null;
		});
	}

}]);