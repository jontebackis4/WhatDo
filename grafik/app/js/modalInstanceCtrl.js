whatDoApp.controller('modalInstanceCtrl', ['$scope', '$uibModalInstance', 'WhatDo', function($scope, $uibModalInstance, WhatDo) {

	$scope.info = WhatDo.selectedPlaceInfo;

	$scope.$on('update', function(){
		$scope.info = WhatDo.selectedPlaceInfo;
	});

	$scope.getPhoto = function(photos){
		return photos[0].getUrl({'maxWidth': photos[0].width, 'maxHeight': photos[0].height});
	};
	
	$scope.close = function(){
		$uibModalInstance.dismiss('close');
	};
}]);