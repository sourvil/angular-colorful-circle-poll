var index = angular.module('index', [])

.controller('CircleCtrl', ['$scope', function ($scope) {
    console.log('Circle Controller');

    $scope.subject = "";
    $scope.alertMessage = "";
    $scope.showCircles = false;
    $scope.subjectList = [];
       

    $scope.sendSubject = function () {
            $scope.alertMessage = "Teşekkürler, seçiminiz : " + $scope.subject;
            $scope.showCircles = true;
            if ( $scope.subjectList.indexOf($scope.subject) > -1 ){
                console.log('1');
                $scope.subject[$scope.subjectList.indexOf($scope.subject)].count = $scope.subject[$scope.subjectList.indexOf($scope.subject)].count + 1;
                console.log($scope.subjectList);
            }
            else{
                console.log('2');
                var newSubject = {"name": $scope.subject, "count":1};
                $scope.subjectList.push(newSubject);
                console.log($scope.subjectList);
            }
                
    };
}])

;