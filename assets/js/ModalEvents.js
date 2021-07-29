function modalEvent(eventID){

    var parentID        = document.getElementById(eventID).parentNode.id;
    var parentIDonly    = parentID.split("Proc")[1];
    var eventIDonly     = eventID.split("event")[1];
    var eventModal      = "";

    var eventClass          = document.getElementById('eventClass'+eventIDonly).innerHTML;
    var eventName           = document.getElementById('eventName'+eventIDonly).innerHTML;
    var eventDescription    = document.getElementById('eventDescription'+eventIDonly).innerHTML;

    var eventBtn1 = document.getElementById("eventBtn1"+eventIDonly).innerHTML;
    var eventBtn2 = document.getElementById("eventBtn2"+eventIDonly).innerHTML;
    var eventBtn3 = document.getElementById("eventBtn3"+eventIDonly).innerHTML;
    var eventBtn4 = document.getElementById("eventBtn4"+eventIDonly).innerHTML;
    var eventBtn5 = document.getElementById("eventBtn5"+eventIDonly).innerHTML;
    var eventTimerMm = document.getElementById("eventTimerMim"+eventIDonly).innerHTML;
    var eventTimerSs = document.getElementById("eventTimerSs"+eventIDonly).innerHTML;

    //Check if the timer is empty
        if(eventTimerMm == ''){
            eventTimerMm = '00';
        }
        if(eventTimerSs == ''){
            eventTimerSs = '00';
        }

    //Get the Procedure Step name
        var linkEventID = "linkProc"+parentIDonly;

    //Create event modal code
        eventModal += '<div class="modal fade" id="modalEvent'+eventIDonly+'" tabindex="-1" role="dialog">';
        eventModal +=   '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">';
        eventModal +=       '<div class="modal-content">';
        eventModal +=           '<div class="modal-header">';
        eventModal +=               '<h5 class="modal-title" id="exampleModalLongTitle"></h5>';
        eventModal +=               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
        eventModal +=                   '<span aria-hidden="true">&times;</span>';
        eventModal +=               '</button>';
        eventModal +=           '</div>';
        eventModal +=           '<div class="modal-body">';
        eventModal +=               '<iframe id="trimaEvent" src="eventDetail.html?Step='+parentIDonly+'&lg='+getLanguage()+'&Class='+eventClass+'&Name='+eventName+'&Description='+eventDescription+'&Btn1='+eventBtn1+'&Btn2='+eventBtn2+'&Btn3='+eventBtn3+'&Btn4='+eventBtn4+'&Btn5='+eventBtn5+'&timerMM='+eventTimerMm+'&timerSS='+eventTimerSs+'" scrolling="no" frameborder="0" width="600px" height="450px"></iframe>';
        eventModal +=           '</div>';
        eventModal +=       '</div>';
        eventModal +=   '</div>';
        eventModal += '</div>';

    //Check if the event are in left or right side
        if(parentID != 'Barcode' && parentID != 'Info'&& parentID != 'Timer'){
            //Enable the modal
                document.getElementById(eventID).setAttribute("data-toggle", "modal");
            //Create the Modal and set the Procedure Step Name
                document.getElementById("modalEvent").innerHTML = eventModal;
                document.getElementById("exampleModalLongTitle").innerHTML = document.getElementById(linkEventID).textContent;  
        } else {
            //Disable the modal
                document.getElementById(eventID).setAttribute("data-toggle", " ");   
        }
   
}