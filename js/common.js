document.addEventListener("DOMContentLoaded", function() {

  // Elements
  var phoneIcon = document.getElementsByClassName('fa-phone')[0];
  var phoneInfo = document.getElementsByClassName('phone-number-info')[0];
  var mailIcon = document.getElementsByClassName('fa-envelope-o')[0];
  var mailInfo = document.getElementsByClassName('email-info')[0];


  // Setup
  phoneInfo.style.display = 'none';
  mailInfo.style.display = 'none';

  phoneIcon.addEventListener('click', function(e) {
    switch (phoneInfo.style.display) {
      case 'inline-block': 
        phoneInfo.style.display = 'none';
        break;
      case 'none':
        phoneInfo.style.display = 'inline-block';
        break;
    }
  });

  mailIcon.addEventListener('click', function(e) {
    switch (mailInfo.style.display) {
      case 'inline-block': 
        mailInfo.style.display = 'none';
        break;
      case 'none':
        mailInfo.style.display = 'inline-block';
        break;
    }
  });

});