var totalProcedures = 14;
var i = 1;
var stepsProcedure = "";
var stepClass = "";

while(i <= totalProcedures){

    //Check if the procedure step are 'special' and need to be focused
        if(i == 4 || i == 10 || i == 11 || i == 12){
            stepClass = 'focus';
        } else {
            stepClass = 'normal';
        }

    //Create all Procedure Steps
        stepsProcedure += '<div data-toggle="modal" data-target="#modalProc'+i+'">';
        stepsProcedure +=   '<a class="step Title '+stepClass+'" id="linkProc'+i+'" href="##" onclick="modalProcedure('+i+')">'+Language('TrimaSteps',0)[i-1]+'</a>';
        stepsProcedure += '</div>';
        stepsProcedure += '<div id="Proc'+i+'"></div>';

    i += 1;
}

document.getElementById("stepsProcedure").innerHTML = stepsProcedure;


//Function to create the modal after click
function modalProcedure(id){

    //Create procedure modal code
        procedureStepModal = '';
        procedureStepModal =  '<div class="modal fade" id="modalProc'+id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
        procedureStepModal +=   '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">';
        procedureStepModal +=       '<div class="modal-content">';
        procedureStepModal +=           '<div class="modal-header">';
        procedureStepModal +=               '<h5 class="modal-title" id="exampleModalLongTitle">'+Language('TrimaSteps',0)[id-1]+'</h5>';
        procedureStepModal +=               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
        procedureStepModal +=                   '<span aria-hidden="true">&times;</span>';
        procedureStepModal +=               '</button>';
        procedureStepModal +=           '</div>';
        procedureStepModal +=           '<div class="modal-body">';
        procedureStepModal +=               '<img src="main/imgs/'+getLanguage()+'/'+id+'.png" height="100%">';
        procedureStepModal +=           '</div>';
        procedureStepModal +=       '</div>';
        procedureStepModal +=   '</div>';
        procedureStepModal += '</div>';

        document.getElementById("modalProcedure").innerHTML = procedureStepModal;

        
}
