var index = angular.module('index', ['ngResource'])

    .controller('CircleCtrl', ['$scope', '$http', 'pollService', function ($scope, $http, pollService) {

        console.log('Circle Controller');

        $scope.alertMessage = "";
        $scope.showCircles = false;
        $scope.newSubject = { subject: '', username: '' };
        $scope.subjectType = [
            { id: '1', name: 'NodeJS' },
            { id: '2', name: 'Docker' },
            { id: '3', name: 'Microservices' }
        ];

        $scope.getSubjectsByHttpGet = function () {
            $http.get('/poll', $scope.newSubject)
                .then(
                function (response) {
                    //console.log(response);
                    $scope.subjectList = response.data;

                },
                function (response) {
                    console.log('Subjects could not be listed');
                }
                );

        }
        $scope.getSubjectsByHttpGet();

        $scope.sendSubjectByHttpPost = function () {

            $http.post('/poll', $scope.newSubject)
                .then(
                function (data) {
                    console.log(data);

                    console.log($scope.newSubject.subject + ' is saved');

                    $scope.alertMessage = "Teşekkürler, seçiminiz : " + $scope.newSubject.subject;
                    $scope.newSubject.subject = "";

                    // Get
                    $scope.getSubjectsByHttpGet();

                },
                function (data) {
                    console.log($scope.newSubject.subject + ' couldnot be saved');
                    $scope.alertMessage = data.message;
                }
                );

        };

        $scope.sendSubjectByFactory = function () {

            pollService.save($scope.newSubject, function () {
                console.log('poll subject is saved');

                $scope.subjectList = pollService.query();

                $scope.alertMessage = "Teşekkürler, seçiminiz : " + $scope.newSubject.subject;
                $scope.newSubject.subject = "";
            });
        };

        $scope.contains = function (arr, obj) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].name === obj) {
                    return i;
                }
            }
            return -1;
        };
    }])

    .factory('pollService', function ($resource) {
        return $resource('/poll');
    });

;
