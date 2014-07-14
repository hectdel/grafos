/**
 * Created by HDelgado on 09.05.2014.
 */
function MainPageController() {

    // bind event listeners to button clicks //
    var that = this;
    $('.btn_catalogo').click(function () {this.showMessage("Success", "Enter");
    });

    this.showMessage = function(t, m)
    {
        $('.modal-alert .modal-header h3').text(t);
        $('.modal-alert .modal-body p').text(m);
        this.modal('show');
    }

}
