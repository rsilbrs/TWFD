var teste = "teste";
function modalEvent(eventID){

    console.log(teste);

    var parentID        = document.getElementById(eventID).parentNode.id;
    var parentIDonly    = parentID.split("Proc");
    var eventModal      = "";


    //Create event modal code
        eventModal += '<div class="modal fade" id="modalEvent1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
        eventModal +=   '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">';
        eventModal +=       '<div class="modal-content">';
        eventModal +=           '<div class="modal-header">';
        eventModal +=               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
        eventModal +=                   '<span aria-hidden="true">&times;</span>';
        eventModal +=               '</button>';
        eventModal +=           '</div>';
        eventModal +=           '<div class="modal-body">';
        eventModal +=               '<img src="main/imgs/ENG/'+parentIDonly[1]+'.png" height="100%">';
        eventModal +=           '</div>';
        eventModal +=       '</div>';
        eventModal +=   '</div>';
        eventModal += '</div>';

    //Check if the event are in left or right side
        if(parentID != 'Barcode' && parentID != 'Info'){
            //Enable the modal
                document.getElementById(eventID).setAttribute("data-toggle", "modal");
            //Create the Modal
                document.getElementById("modalEvent").innerHTML = eventModal;     
        } else {
            //Disable the modal
                document.getElementById(eventID).setAttribute("data-toggle", "");   
        }


           
}