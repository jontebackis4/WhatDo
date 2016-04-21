whatDoApp.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

	$scope.info = "Hej";
	
	$scope.close = function(){
		$uibModalInstance.dismiss('close');
	};
}]);