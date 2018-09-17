angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      console.log(this);

      this.phones = [];
      this.orderProp = 'age';
      this.currentYear = new Date().getFullYear();

      $http.get('phones/phones.json')
        .then((response) => {
          this.phones = response.data.slice(0, 5);
        });
    }
  });
