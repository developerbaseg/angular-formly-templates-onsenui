angular.module('formly.onsenui').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('onsenui/fields/ons-list-checkbox.html',
    "<ons-list-header style=\"background-color: #f9f9f9\" ng-show=\"{{options.templateOptions.separators}}\"></ons-list-header>\r" +
    "\n" +
    "<ons-list-item class=\"list__item ons-list-item-inner\" modifier=\"tappable\">\r" +
    "\n" +
    "    <label class=\"checkbox checkbox--noborder checkbox--list-item\" ng-class=\"{'has-error': showError}\">\r" +
    "\n" +
    "      <input type=\"checkbox\" ng-model=\"model[options.key]\" ng-required=\"{{options.templateOptions.required}}\">\r" +
    "\n" +
    "      <div class=\"checkbox__checkmark checkbox--noborder checkbox--list-item__checkmark\"></div>\r" +
    "\n" +
    "      <span ng-show=\"options.templateOptions.required\">* </span>\r" +
    "\n" +
    "      {{options.templateOptions.label}}\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n" +
    "<ons-list-header style=\"background-color: #f9f9f9\" ng-show=\"{{options.templateOptions.separators}}\"></ons-list-header>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-input.html',
    "<ons-list-header ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</ons-list-header>\r" +
    "\n" +
    "<ons-list-item>\r" +
    "\n" +
    "    <input\r" +
    "\n" +
    "        id=\"{{options.key}}\"\r" +
    "\n" +
    "        name=\"{{options.key}}\"\r" +
    "\n" +
    "        type=\"{{options.templateOptions.type}}\"\r" +
    "\n" +
    "        maxlength=\"{{options.templateOptions.maxlength}}\"\r" +
    "\n" +
    "        class=\"text-input text-input--transparent\" \r" +
    "\n" +
    "        style=\"width:100%; margin-top:4px;\"\r" +
    "\n" +
    "        ng-pattern=\"options.templateOptions.pattern\"        \r" +
    "\n" +
    "        ng-model=\"model[options.key]\">\r" +
    "\n" +
    "        <span class=\"list-item-action\" ng-show=\"options.templateOptions.type == 'date' || options.templateOptions.type == 'datetime-local'\">\r" +
    "\n" +
    "            <ons-icon icon=\"fa-calendar\" size=\"22px\"></ons-icon>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "        <span class=\"list-item-action\" ng-show=\"options.templateOptions.type == 'time'\">\r" +
    "\n" +
    "            <ons-icon icon=\"fa-clock-o\" size=\"22px\"></ons-icon>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-radio.html',
    "<ons-list-header ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</ons-list-header>\r" +
    "\n" +
    "<ons-list-item modifier=\"tappable\" class=\"list__item ons-list-item-inner\" ng-repeat=\"o in options.templateOptions.options\">\r" +
    "\n" +
    "    <label class=\"radio-button radio-button--list-item\">\r" +
    "\n" +
    "        <input type=\"radio\" name=\"{{o.value}}\" ng-model=\"model[options.key]\" value=\"{{o.value}}\" ng-required=\"{{options.templateOptions.required}}\">\r" +
    "\n" +
    "        <div class=\"radio-button__checkmark radio-button--list-item__checkmark\"></div>\r" +
    "\n" +
    "        {{o.text}}\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-range.html',
    "<ons-list-header ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</ons-list-header>\r" +
    "\n" +
    "<ons-list-item>\r" +
    "\n" +
    "    <input\r" +
    "\n" +
    "        type=\"range\"\r" +
    "\n" +
    "        class=\"range\"\r" +
    "\n" +
    "        style=\"width:100%; margin-top:4px;\"\r" +
    "\n" +
    "        ng-model=\"model[options.key]\">\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-section-title.html',
    "<ons-list-header style=\"background-color: #f9f9f9; height: 45px; line-height: 60px; font-weight: normal\">{{options.templateOptions.label | uppercase}}</ons-list-header>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-select.html',
    "<ons-list-header ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</ons-list-header>\r" +
    "\n" +
    "<ons-list-item>\r" +
    "\n" +
    "    <select \r" +
    "\n" +
    "        style=\"width: 100%; margin-top: 4px; font-size: 16px; line-height: 1;\" \r" +
    "\n" +
    "        class=\"text-input text-input--transparent\" \r" +
    "\n" +
    "        ng-options=\"item as item[to.labelProp || 'text'] group by item[to.groupProp || 'group'] for item in options.templateOptions.options track by item[to.valueProp || 'value']\" \r" +
    "\n" +
    "        ng-model=\"model[options.key]\"\r" +
    "\n" +
    "        ng-required=\"{{options.templateOptions.required}}\">\r" +
    "\n" +
    "    </select>\r" +
    "\n" +
    "    <span class=\"list-item-action\">\r" +
    "\n" +
    "        <ons-icon icon=\"caret-down\" size=\"22px\"></ons-icon>\r" +
    "\n" +
    "    </span>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-switch.html',
    "<ons-list-item>\r" +
    "\n" +
    "    <span ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</span>\r" +
    "\n" +
    "    <label class=\"switch switch--list-item\">\r" +
    "\n" +
    "        <input type=\"checkbox\" class=\"switch__input\" ng-model=\"model[options.key]\">\r" +
    "\n" +
    "        <div class=\"switch__toggle\"></div>\r" +
    "\n" +
    "    </label>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );


  $templateCache.put('onsenui/fields/ons-list-textarea.html',
    "<ons-list-header ng-class=\"{'has-error': showError}\"><span ng-show=\"options.templateOptions.required\">*</span> {{options.templateOptions.label}}</ons-list-header>\r" +
    "\n" +
    "<ons-list-item class=\"list__item ons-list-item-inner\">\r" +
    "\n" +
    "    <textarea \r" +
    "\n" +
    "        class=\"textarea textarea--transparent\" \r" +
    "\n" +
    "        style=\"width:100%;margin-top:4px;\" \r" +
    "\n" +
    "		rows=\"{{options.templateOptions.rows}}\" \r" +
    "\n" +
    "		placeholder=\"{{options.templateOptions.placeholder}}\"\r" +
    "\n" +
    "		ng-model=\"model[options.key]\"></textarea>\r" +
    "\n" +
    "</ons-list-item>\r" +
    "\n"
  );

}]);
