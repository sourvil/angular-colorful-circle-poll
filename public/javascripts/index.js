var index = angular.module('index', [])

.controller('CircleCtrl', ['$scope', function ($scope) {
    console.log('Circle Controller');

    $scope.subject = "";
    $scope.alertMessage = "";
    $scope.showCircles = false;
    $scope.subjectList = [];
       

    $scope.sendSubject = function () {
            $scope.alertMessage = "Teşekkürler, seçiminiz : " + $scope.subject;
            //$scope.showCircles = true;
            var itemIndex = $scope.contains($scope.subjectList , $scope.subject);

            if (itemIndex > -1){
                console.log('1');
                $scope.subjectList[itemIndex].count = $scope.subjectList[itemIndex].count + 1;
                console.log($scope.subjectList);
            }
            else{
                console.log('2');
                var newSubject = {"name": $scope.subject, "count":1};
                $scope.subjectList.push(newSubject);
                console.log($scope.subjectList);
            }
            $scope.subject = "";
    };

    $scope.contains = function(a, obj) {
        console.log("contains");
        console.log(a);
        console.log(obj);
        for (var i = 0; i < a.length; i++) {
            if (a[i].name === obj) {
                return i;
            }
        }
        return -1;
    };
}])

;