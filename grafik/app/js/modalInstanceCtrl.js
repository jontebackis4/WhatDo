whatDoApp.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', 'WhatDo', function($scope, $uibModalInstance, WhatDo) {

	$scope.info = WhatDo.selectedPlaceInfo;

	$scope.$on('update', function(){
		$scope.info = WhatDo.selectedPlaceInfo;
	});
	
	$scope.close = function(){
		$uibModalInstance.dismiss('close');
	};
}]);