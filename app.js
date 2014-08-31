angular.module('app', [
  'ui.router'
])
.config(['$stateProvider', function ($stateProvider) {

  $stateProvider.state('home', {
    url : '/',
    templateUrl: 'partials/forms.html',
    controller: ['$scope', function ($scope) {
      var data = {
        'industries' : [
          {'name': 'Select an option'},
          {'name': 1}, 
          {'name': 2}, 
          {'name': 3}, 
          {'name': 4}
        ],
      'ratings' : [
          {'name': 'Select an option'},
          {'name': 1}, 
          {'name': 2}, 
          {'name': 3}, 
          {'name': 4}
        ],
      'types' : [
          {'name': 'Select an option'},
          {'name': 1}, 
          {'name': 2}, 
          {'name': 3}, 
          {'name': 4}
        ]
      }

      data.industry = data.industries[0]
      data.rating = data.ratings[0]
      data.type = data.types[0]

      function copy(from, to, fields) {
        for (var i in fields) {
          var f = fields[i]
          data[from + '_' + f] = data[to + '_' + f]
        }
      }

      $scope.copyShipping = function () {
        copy('shipping', 'billing', ['address', 'po_box', 'city', 'state', 'postal_code', 'country'])
        data.billing_address = data.shipping_address
      }

      $scope.copyBilling = function () {
        copy('billing', 'shipping', ['address', 'po_box', 'city', 'state', 'postal_code', 'country'])
      }

      $scope.data = data;
    }]
  })
}])