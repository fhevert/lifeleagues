define([], function() {
 function menuClose() {
     return {
         restrict: 'AC',
         link: function($scope, $element) {
             $element.bind('click', function() {
                 var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
                 var obfuscator = angular.element(document.querySelector('.mdl-layout__obfuscator'));

                 if(drawer) {
                     drawer.toggleClass('is-visible');
                 }
                 if(obfuscator){
                     obfuscator.toggleClass('is-visible');
                 }
             });
         }
     };
 }
  return menuClose;
});




