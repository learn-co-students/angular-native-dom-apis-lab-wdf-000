function SomeDirective() {
  return {
    template: [
      '<div>',
      '<h3>{{ some.text }}</h3>',
      '<span>Click here to replace the text</span>',
      '</div>'
    ].join(''),
    controller: function() {
      this.text = 'Replace this text!';
    },
    controllerAs: 'some',
    require: 'someDirective',
    link: function (scope, elem, attrs, ctrl) {
      ctrl.text = 'Thank you for clicking!';
      var actualElem = elem[0];
      var spanElem = actualElem.querySelector('span');

      // spanElem.addEventListener('click', function() {
      actualElem.addEventListener('click', function() {
	spanElem.innerHTML(ctrl.text);
	$scope.apply();
      });
    }
  }
}

angular
  .module('app')
  .directive('someDirective', SomeDirective);
