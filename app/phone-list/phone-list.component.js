angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        console.log(this);

        this.phones = Phone.query();
        
        this.orderProp = 'age';
        this.currentYear = new Date().getFullYear();
      }
    ]
  });
