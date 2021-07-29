function newEvent(){
    var form = '';

    form += '<form id="NewEvent">';
        form += '<div class="modal fade" id="modalNewEvent" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
            form += '<div class="modal-dialog modal-dialog-centered" role="document">';
                form += '<div class="modal-content" style="background:none; border:none; padding:0">';
                    form += '<div class="modal-body">';
                        form += '<div class="col-12 mainSec" style="padding:0px;">';
                            form += '<!-- Title -->';
                            form += '<div class="topNavForm">';
                                form += '<strong>'+Language('CreateANewEvent',0)+'</strong>';
                                form += '<button type="button" class="close float-end" data-dismiss="modal" aria-label="Close">';
                                    form += '<span aria-hidden="true">&times;</span>';
                                form += '</button>';
                            form += '</div>';
                            form += '<div class="newEventDescription">';
                                form += '<span>';
                                    form += '<h5>'+Language('WhatIsAnEvent',0)+'</h5>';
                                    form += Language('EventExplanation',0)+'<br>';
                                    form += Language('EventTypeTitle',0);
                                        form += '<li>'+Language('EventType1',0)+'</li>';
                                        form += '<li>'+Language('EventType2',0)+'</li>';
                                        form += '<li>'+Language('EventType3',0)+'</li>';
                                        form += '<li>'+Language('EventType4',0)+'</li>';
                                form += '</span>';
                            form += '</div>';
                            form += '<div class="formEvent">';
                                form += '<div class="row newSection">';
                                    form += '<div class="col-12">';
                                        form += '<label for="inputState" class="col-5">'+Language('EventType',0)+'</label>';
                                        form += '<select id="eventType" class="col-5" onchange="eventUpdateForm(this.value)">';
                                            form += '<option value="Barcode" selected>'+Language('EventBarcode',0)+'</option>';
                                            form += '<option value="Button">'+Language('EventButton',0)+'</option>';
                                            form += '<option value="Info">'+Language('EventInfo',0)+'</option>';
                                            form += '<option value="Timer">'+Language('EventTimer',0)+'</option>';
                                        form += '</select>';
                                    form += '</div>';
                                form += '</div>';
                                form += '<div class="row newSection">';
                                    form += '<div class="col-12">';
                                        form += '<label for="inputState" class="col-5">'+Language('EventName',0)+'</label>';
                                        form += '<input id="eventName" type="text" class="col-5" maxlength="20" required>';
                                    form += '</div>';
                                form += '</div>';
                                form += '<div class="row newSection">';
                                    form += '<div class="col-12">';
                                        form += '<label for="inputState" class="col-5">'+Language('EventDescription',0)+'</label>';
                                        form += '<input id="eventDescription" type="text" class="col-5" maxlength="50" required>';
                                    form += '</div>';
                                form += '</div>';

                                form += '<div id="specialFields"></div>';

                                
                            form += '</div>';
                            form += '<div class="row">';
                                form += '<div class="col-12">';
                                    form += '<button type="submit" class="btn newEventBtn" onclick="createNewEvent()" data-dismiss="modal" aria-label="Close">'+Language('CreateNewEvent',0)+'</button>';
                                form += '</div>';
                            form += '</div>';
                        form += '</div>';
                    form += '</div>';
                form += '</div>';
            form += '</div>';
        form += '</div>';
    form += '</form>';

    document.getElementById("modalNewFormEvent").innerHTML = form;
}


var eventNewId = 1;
function createNewEvent(source){

    var totalEvents = 0;
    var eventNewItem = [];

    //Define the data source
    if(source == 'demo'){
        totalEvents = Language('demoEvents',0).length;
        document.getElementById("demo").innerHTML = ""; //Hide "Load Demo Events" button
    } else {
        totalEvents = 1;
    }

    for(var i = 0; i < totalEvents; i++){
        eventNewItem['ID']          = eventNewId;
        eventNewItem['Icon']        = '';
        eventNewItem['Btn1']        = '';
        eventNewItem['Btn2']        = '';
        eventNewItem['Btn3']        = '';
        eventNewItem['Btn4']        = '';
        eventNewItem['Btn5']        = '';
        eventNewItem['Mm']          = '';
        eventNewItem['Ss']          = '';

        if(source == 'demo'){
            eventNewItem['Class']       = Language('demoEvents',0)[i][0];
            eventNewItem['Name']        = Language('demoEvents',0)[i][1];
            eventNewItem['Description'] = Language('demoEvents',0)[i][2];

            if(eventNewItem['Class'] == 'Button'){
                eventNewItem['Btn1'] = Language('demoEvents',0)[i][3][0];
                eventNewItem['Btn2'] = Language('demoEvents',0)[i][3][1];
                eventNewItem['Btn3'] = Language('demoEvents',0)[i][3][2];
                eventNewItem['Btn4'] = Language('demoEvents',0)[i][3][3];
                eventNewItem['Btn5'] = Language('demoEvents',0)[i][3][4];
            } else if(eventNewItem['Class'] == 'Timer'){
                eventNewItem['Mm'] = Language('demoEvents',0)[i][3][0];
                eventNewItem['Ss'] = Language('demoEvents',0)[i][3][1];
            }
            
        } else {
            //Define the form as data source
                eventNewItem['Class']       = document.getElementById("eventType").value;
                eventNewItem['Name']        = document.getElementById("eventName").value;
                eventNewItem['Description'] = document.getElementById("eventDescription").value;
                if(eventNewItem['Class'] == 'Button'){
                    eventNewItem['Btn1'] = document.getElementById("eventBtn1").value;
                    eventNewItem['Btn2'] = document.getElementById("eventBtn2").value;
                    eventNewItem['Btn3'] = document.getElementById("eventBtn3").value;
                    eventNewItem['Btn4'] = document.getElementById("eventBtn4").value;
                    eventNewItem['Btn5'] = document.getElementById("eventBtn5").value;
                } else if(eventNewItem['Class'] == 'Timer'){
                    eventNewItem['Mm'] = document.getElementById("eventTimerMm").value;
                    eventNewItem['Ss'] = document.getElementById("eventTimerSs").value;
                }
            //. form as data source
        } //.Data source

        //Set icon
            if(eventNewItem['Class'] == 'Barcode'){
                eventNewItem['Icon'] = 'fa-barcode';
            } else if(eventNewItem['Class'] == 'Info'){
                eventNewItem['Icon'] = 'fa-info';
            } else if(eventNewItem['Class'] == 'Button'){
                eventNewItem['Icon'] = 'fa-hand-pointer';
                eventNewItem['Class'] = 'Info';
            } else if(eventNewItem['Class'] = 'Timer'){
                eventNewItem['Icon'] = 'fa-clock';
            }

        newEventLayout(eventNewItem);

        eventNewId = eventNewId+1;

    } //.for



}

function newEventLayout(info){
    //Event layout and creator
    var newItem = '';

    newItem += '<div class="eventOption" id="event'+info['ID']+'" onclick="modalEvent(this.id)" data-toggle="" data-target="#modalEvent'+info['ID']+'">';
    newItem +=    '<span class="title"><i class="fas '+info['Icon']+'"></i> <span id="eventName'+info['ID']+'">'+info['Name']+'</span></span>';
    newItem +=    '<span id="eventDescription'+info['ID']+'" class="hidden">'+info['Description']+'</span>';
    newItem +=    '<span id="eventBtn1'+info['ID']+'" class="hidden">'+info['Btn1']+'</span>';
    newItem +=    '<span id="eventBtn2'+info['ID']+'" class="hidden">'+info['Btn2']+'</span>';
    newItem +=    '<span id="eventBtn3'+info['ID']+'" class="hidden">'+info['Btn3']+'</span>';
    newItem +=    '<span id="eventBtn4'+info['ID']+'" class="hidden">'+info['Btn4']+'</span>';
    newItem +=    '<span id="eventBtn5'+info['ID']+'" class="hidden">'+info['Btn5']+'</span>';
    newItem +=    '<span id="eventTimerMim'+info['ID']+'" class="hidden">'+info['Mm']+'</span>';
    newItem +=    '<span id="eventTimerSs'+info['ID']+'" class="hidden">'+info['Ss']+'</span>';
    newItem +=    '<span id="eventClass'+info['ID']+'" class="hidden">'+info['Class']+'</span>';
    newItem += '</div>';

    document.getElementById(info['Class']).innerHTML = document.getElementById(info['Class']).innerHTML+newItem;
}


/*Add the extra fields in the form based on the event type*/
function eventUpdateForm(eventClass){
    //Add extra fields
    var newForm = '';
    if(eventClass == 'Barcode'){
        document.getElementById("eventDescription").setAttribute("maxlength", "50");
    } else {
        document.getElementById("eventDescription").setAttribute("maxlength", "150");
    }
    
    if(eventClass == 'Button'){
        newForm += '<div class="row newSection">';
        newForm +=     '<div class="col-12">';
        newForm +=         '<div class="row">';
        newForm +=             '<div class="col-12">';
        newForm +=                 '<label for="inputState" style="text-align: center;">'+Language('EventButtonTitle',0)+'</label>';
        newForm +=             '</div>';
        newForm +=         '</div>';
        newForm +=         '<div class="row">';
        newForm +=             '<div class="col-12">';
        newForm +=                 '<input type="text" id="eventBtn1" class="col-2 center" maxlength="14">';
        newForm +=                 '<input type="text" id="eventBtn2" class="col-2 center" maxlength="14">';
        newForm +=                 '<input type="text" id="eventBtn3" class="col-2 center" maxlength="14">';
        newForm +=                 '<input type="text" id="eventBtn4" class="col-2 center" maxlength="14">';
        newForm +=                 '<input type="text" id="eventBtn5" class="col-2 center" maxlength="14">';
        newForm +=             '</div>';
        newForm +=         '</div>';
        newForm +=     '</div>';
        newForm += '</div>';
    } else if(eventClass == 'Timer'){
        newForm += '<div class="row newSection">';
        newForm +=      '<div class="col-12">';
        newForm +=          '<label for="inputState" class="col-5">'+Language('EventTimerTitle',0)+'</label>';
        newForm +=          '<input type="text" id="eventTimerMm" class="col-1 center" placeholder="mm" maxlength="2" type="number">';
        newForm +=          '<input type="text" id="eventTimerSs" class="col-1 center" placeholder="ss" maxlength="2" type="number">';
        newForm +=      '</div>';
        newForm += '</div>';        
    }

    document.getElementById("specialFields").innerHTML = newForm;
}