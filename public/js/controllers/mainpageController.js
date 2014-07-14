/**
 * Created by HDelgado on 09.05.2014.
 */
function MainPageController() {

    // bind event listeners to button clicks //
    var that = this;
    $('.btn_catalogo').click(function () {that.showMessage("EDEBE", "Accediendo a Libreria");
    });

    this.showMessage = function(t,m)
    {
        $('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
        $('.modal-alert .modal-header h3').text(t);
        $('.modal-alert .modal-body p').text(m);
        $('.modal-alert').modal('show');
//        $('.modal-alert').modal('hide');
    };

}
