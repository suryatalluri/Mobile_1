Application.$controller("QRCodeController", ["$scope", "$element", function($scope, $element) {
    "use strict";

    /* 
     * This function will be invoked when any of this prefab's property is changed
     * @key: property name
     * @newVal: new value of the property
     * @oldVal: old value of the property
     */
    function propertyChangeHandler(key, newVal, oldVal) {
            /*
		switch (key) {
			case "prop1":
				// do something with newVal for property 'prop1'
				break;
			case "prop2":
				// do something with newVal for property 'prop2'
				break;
		}
		*/
        }
        /* register the property change handler */
    $scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);
    $scope.renderQRCode = function() {
        var qrele = $element.find("[name='qrcode']")[0];
        var QRErrorCorrectLevel = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        };
        qrele.innerHTML = "";
        // this method will be triggered post initialization of the prefab.
        var qrcode = new QRCode(qrele, {
            width: $scope.width,
            height: $scope.height,
            typeNumber: $scope.type,
            colorDark: $scope.darkcolor,
            colorLight: $scope.lightcolor,
            correctLevel: QRErrorCorrectLevel[$scope.level]
        });
        qrcode.makeCode($scope.text);
    }
    $scope.onInitPrefab = function() {
        $scope.renderQRCode();
    }
}]);