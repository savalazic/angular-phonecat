angular.module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: [
      '$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        console.log(this);

        Phone.get({ phoneId: $routeParams.phoneId }, (phone) => {
          this.phone = phone;
          this.setImage(phone.images[0]);
        });

        this.phoneId = $routeParams.phoneId;
        this.phone = null;
        this.mainImageUrl = null;

        this.setImage = imageUrl => {
          this.mainImageUrl = imageUrl;
        }; 

        this.downloadImage = imageUrl => {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.setAttribute('download', imageUrl);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      },
    ],
  });
