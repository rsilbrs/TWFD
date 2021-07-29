function modalContact(){

    var contactModal = '';

    contactModal += '<div id="contactModal" class="modal fade modalContact" tabindex="-1" role="dialog" aria-hidden="true">';
    contactModal +=     '<div class="modal-dialog" role="document">';
    contactModal +=         '<div class="modal-content">';

    contactModal +=             '<div class="modal-header">';
    contactModal +=                 '<h5 class="modal-title">';
    contactModal +=                     Language('ContactName',0);
    contactModal +=                 '</h5>';
    contactModal +=                 '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    contactModal +=                     '<span aria-hidden="true">&times;</span>';
    contactModal +=                 '</button>';
    contactModal +=             '</div>';

    contactModal +=             '<div class="modal-body contact">';
            
    contactModal +=                 Language('Contact',0);
    contactModal +=                 '<strong>';
    contactModal +=                     '<a href="mailto:software.support@terumobct.com">software.support@terumobct.com</a>';
    contactModal +=                 '</strong>';

    contactModal +=             '</div>';

    contactModal +=         '</div>';
    contactModal +=     '</div>';
    contactModal += '</div>';
    
    console.log(contactModal);
    document.getElementById("modalEvent").innerHTML = contactModal;
}