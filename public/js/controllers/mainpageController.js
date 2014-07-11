/**
 * Created by HDelgado on 09.05.2014.
 */

function MainPageController() {

    // bind event listeners to button clicks //
    var that = this;

    $('.btn_catalogo').click(function(){ that.show("ooo"); });

    $('#btn-logout').click(function(){ that.attemptLogout(); });

    this.show = function()
    {
        $.ajax({
            success: function(data){
                that.activateFormular('Mostrando formulario de libros');
            },
            error: function(jqXHR){
                console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
            }
        });
    }


    this.attemptLogout = function()
    {
        var that = this;
        $.ajax({
            url: "/main",
            type: "POST",
            data: {logout : true},
            success: function(data){
                that.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
            },
            error: function(jqXHR){
                console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
            }
        });
    }


    this.activateFormular = function(msg){
        $('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
        $('.modal-alert .modal-header h3').text('Success!');
        $('.modal-alert .modal-body p').html(msg);
        $('.modal-alert').modal('show');
    }

}
