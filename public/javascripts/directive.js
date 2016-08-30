angular.module('directives', [])


.directive("colorfulCircleXs", [function () {
    return {
        restrict: "A",
        template: "<h2>meteorDatetimeAttribute tarafindan cikti aliniyor.</h2>",
        link: function (scope, element, attrs) {
                element.css('display', 'block');
        }
    }
}])





;