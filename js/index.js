$(document).ready(function() {
    $('.main-page-content-login-container-form-button').click(function() {
        $('.main-page-content-login-container-form-button').text('Enter code');
    });

    $('.nav-hamburger').click(function() {
        $('.nav-hamburger').text('X');
        rotateHamburger();
    });
})