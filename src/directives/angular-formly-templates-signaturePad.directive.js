
(function() {
    'use strict';

    angular
        .module('formly.onsenui')
        .directive('signaturePad', signaturePad);

    signaturePad.$inject = [];
    
    function signaturePad() {
        // Usage:
        //     <signature-pad ng-model="mySign" options="options"></signature-pad>
        // Creates:
        // 
        var directive = {
            require: 'ngModel',
            link: link,
            compile: function(element, attrs) {
                var _elem = $(element);
                _elem.children().attr('width', _elem.width() - 20);
                
                return link;
            },
            restrict: 'E',
            replace: true,
            scope: {
                options: '='
            },
            template: '<div style="height: 412px"><canvas style="background-color: white; margin-top: 5px; border: solid #eaeaea 1px" class=signature-pad height="400"></canvas></div>'
        };
        return directive;

        function link(scope, elm, attr, ngModelCtrl) {
            var defaultOpts = {
			    height: 220,
			    width: 300,
			    clearBtn: 'Limpiar'
		    },
		    canvas,signaturePad;
		    var writingStarted = false;

            scope.opts = angular.extend({},defaultOpts,scope.options);
            scope.clear = function () {
                signaturePad.clear();
                //update model value to ''
                ngModelCtrl.$setViewValue('');
            };

            canvas = elm.find('canvas');
            signaturePad = new SignaturePad(canvas[0],scope.opts);
            signaturePad.penColor = "rgb(66, 133, 244)";
            
            function resize() {
                //elm.find('canvas')[0].getContext("2d").scale(2,1);
            }

            //writing handling
            elm.on('mousedown touchstart',function(e){
                writingStarted = true;
            });

            angular.element(document).on('mouseup touchend',function(e){
                if(!writingStarted) return;
                
                writingStarted = false;
                // check the mouse up is on the canvas
                if(angular.equals(e.target, canvas[0])){
                    var signature = !signaturePad.isEmpty() ? signaturePad.toDataURL() : '';
                    ngModelCtrl.$setViewValue(signature);
                } else {
                    //clear signature
                    scope.clear();
                }
            });

            ngModelCtrl.$formatters.push(function(modelValue) {
                //converts model value to data strucutre used by the template view.
                signaturePad.fromDataURL(modelValue);
                resize();
                return modelValue;
            });

            ngModelCtrl.$render = function() {  
                //assigning the view value to the scope variables we used in our HTML template.
                //...ngModelCtrl.$viewValue;
            };

            ngModelCtrl.$parsers.push(function(viewValue) {  
                //converts view value to data structure used by model.
                return viewValue;
            });
        }
    }
})();