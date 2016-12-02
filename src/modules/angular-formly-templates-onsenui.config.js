(function() {
    'use strict';

    angular.module('formly.onsenui').config(configFormlyOnsenui);
    
	configFormlyOnsenui.$inject = ['formlyConfigProvider'];
	
    function configFormlyOnsenui(formlyConfigProvider) {
        
        angular.forEach(['list-section-title','list-input','list-switch','list-range','list-radio','list-checkbox','list-textarea','list-select','list-selector','list-static'], function (fieldName) {
        formlyConfigProvider.setType({
                name: fieldName,
                templateUrl: getFieldTemplateUrl(fieldName)
            });
        });
        
        function getFieldTemplateUrl(name) {
            return 'onsenui/fields/ons-' + name + '.html';
        }

    }
})();
