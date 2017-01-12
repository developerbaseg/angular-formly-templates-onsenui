(function() {
    'use strict';

    angular
        .module('formly.onsenui')
        .directive('clearButton', clearButton);

    clearButton.$inject = ['$parse'];
    
    function clearButton($parse) {
        // Usage:
        //     <input type="text" placeholder="Type here" ng-model="userInfoData.first_name" clear-button>
        // Creates:
        // 
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, elm, attr, ngModelCtrl) {
            elm = $(elm);
            var top = elm.height() / 2;
            elm.wrap("<div style='position: relative;'></div>");    
            var btn = '<span id=' + Math.round(Math.random() * 1000000000) + ' class="searchclear ng-hide fa fa-times-circle" style="size: 22px"></span>';
            var angularBtn = angular.element(btn);
            angularBtn = $(angularBtn);
            angularBtn.css('top', top);
            elm.after(angularBtn);
            
            //clear the input
            angularBtn.on("click", function () {
                elm.val('').trigger("change");
                $parse(attr.ngModel).assign(scope, null);
                scope.$apply();
            });
            
            // show  clear btn  on focus
            elm.bind('focus keyup change paste propertychange', function (blurEvent) {
                if (elm.val() && elm.val().length > 0) {
                    angularBtn.removeClass("ng-hide");
                } else {
                    angularBtn.addClass("ng-hide");
                }
            });

            // remove  clear btn  on focus
            elm.bind('blur', function (blurEvent) {
                if (!angularBtn.is(":hover"))
                    angularBtn.addClass("ng-hide");
            });
        }
    }
})();