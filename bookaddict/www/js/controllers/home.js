app.controller('HomeCtrl',['$scope', function($scope) {

	$scope.title = "Home Page";
	$scope.welcomeMsg = "Welcome to Cordova / Angular / Bootstrap. Let the fun begin...";
	$scope.cameraPic = "None";
	$scope.barcode = "Please Scan";

	$scope.takePicture = function() {
		console.log('picture');

		var onSuccess = function(imageData) {
			console.log(imageData);
			

			$scope.cameraPic = "data:image/png;base64," + imageData;
			$scope.$apply();
		};

		var onFail = function(error) {
			console.log("error",error);
		}
		navigator.camera.getPicture(onSuccess, onFail, {encodingType:1, targetHeight:400, destinationType:0, quality:75})

	};

	$scope.scanBarCode = function() {
		cordova.plugins.barcodeScanner.scan(
			function(result) {
				console.log(result);
				$scope.barcode = "Format: " + result.format + " - Barcode: " + result.text;
				$scope.$apply();
			},
			function (error) {
				console.log("error",error);
				$scope.barcode = "You done messed up";
				$scope.$apply();
			}
		);
	}
}]);