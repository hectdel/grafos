/**
 * Created by HDelgado on 11.07.2014.
 */
function MainMenuService() {

    this.showMessage = function(t, m)
    {
        $('.modal-alert .modal-header h3').text(t);
        $('.modal-alert .modal-body p').text(m);
        this.modal('show');
    }

}
