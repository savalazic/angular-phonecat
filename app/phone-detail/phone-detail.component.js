angular.module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: [
      '$routeParams', '$http',
      function PhoneDetailController($routeParams, $http) {
        this.phoneId = $routeParams.phoneId;
        this.phone = null;
        
        $http.get(`phones/${this.phoneId}.json`)
          .then((response) => {
            console.log(this);
            this.phone = response.data;
          });
      },
    ],
  });
