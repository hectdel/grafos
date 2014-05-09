/**
 * Created by HDelgado on 09.05.2014.
 */

$(document).ready(function () {

    var av = new AccountValidator();

    // customize the account settings form //
    $('#main-page h1').text('Account Settings');
    $('#main-page  #sub1').text('Here are the current settings for your account.');

    $('#main-page-btn1').html('Catálogo');
    $('#main-page-btn2').html('Clientes');
    $('#main-page-btn3').html('Recursos');

    // setup the confirm window that displays when the user chooses to delete their account //

    $('.modal-confirm').modal({ show: false, keyboard: true, backdrop: true });
    $('.modal-confirm .modal-header h3').text('Delete Account');
    $('.modal-confirm .modal-body p').html('Are you sure you want to delete your account?');
    $('.modal-confirm .cancel').html('Cancel');
    $('.modal-confirm .submit').html('Delete');
    $('.modal-confirm .submit').addClass('btn-danger');

})