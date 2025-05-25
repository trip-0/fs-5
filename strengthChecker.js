$(document).ready(function () {
  $('#password').on('input', function () {
    var password = $(this).val();
    var meter = $('.strength-meter');
    var strength = 0;
    var progressClass = '';

    // Check password criteria and increase strength accordingly
    if (password.length > 8) {
      strength += 1;
    }

    if (password.match(/[A-Z]/)) {
      strength += 1;
    }

    if (password.match(/[a-z]/)) {
      strength += 1;
    }

    if (password.match(/\d/)) {
      strength += 1;
    }

    if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      strength += 1;
    }

    // Determine the CSS class based on strength score
    switch (strength) {
      case 0:
      case 1:
        progressClass = 'very-weak';
        break;
      case 2:
        progressClass = 'weak';
        break;
      case 3:
        progressClass = 'medium';
        break;
      case 4:
        progressClass = 'strong';
        break;
      case 5:
        progressClass = 'very-strong';
        break;
      default:
        progressClass = 'very-weak';
    }

    // Update the meter with appropriate class
    meter.removeClass().addClass('strength-meter').addClass(progressClass);
  });
});
