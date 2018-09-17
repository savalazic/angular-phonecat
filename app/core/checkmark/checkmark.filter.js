angular.module('core')
  .filter('checkmark', () => input => input ? '\u2713' : '\u2718');