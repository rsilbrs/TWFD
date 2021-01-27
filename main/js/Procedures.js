var totalProcedures = 14;
var i = 1;
var stepsProcedure = "";

var flowStepsProcedure = {
    1:[
        "At Startup", //Category Title
        "normal" //Class
    ],
    2:[
        "Before Load System", //Category Title
        "normal" //Class
    ],
    3:[
        "Before Tubing Set", //Category Title
        "normal" //Class
    ],
    4:[
        "Before AC Connect", //Category Title
        "focus" //Class
    ],
    5:[
        "Before Donor Entry", //Category Title
        "normal" //Class
    ],
    6:[
        "Before Prepare Donor", //Category Title
        "normal" //Class
    ],
    7:[
        "Before Start Draw", //Category Title
        "normal" //Class
    ],
    8:[
        "During Collection", //Category Title
        "normal" //Class
    ],
    9:[
        "Before Donor Disconnect", //Category Title
        "normal" //Class
    ],
    10:[
        "Before Connect Replacement Solution", //Category Title
        "focus" //Class
    ],
    11:[
        "Befone Connect PAS", //Category Title
        "focus" //Class
    ],
    12:[
        "Befone RBC Additive Solution Connect", //Category Title
        "focus" //Class
    ],
    13:[
        "Before Seal Products", //Category Title
        "normal" //Class
    ],
    14:[
        "Before Next Procedure", //Category Title
        "normal" //Class
    ]
};

while(i <= totalProcedures){

    //Create all Procedure Steps
        stepsProcedure += '<div data-toggle="modal" data-target="#modalProc'+i+'">';
        stepsProcedure +=   '<a class="group Title '+flowStepsProcedure[i][1]+'" href="##" onclick="modalProcedure('+i+')">'+flowStepsProcedure[i][0]+'</a>';
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
        procedureStepModal +=               '<h5 class="modal-title" id="exampleModalLongTitle">'+flowStepsProcedure[id][0]+'</h5>';
        procedureStepModal +=               '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
        procedureStepModal +=                   '<span aria-hidden="true">&times;</span>';
        procedureStepModal +=               '</button>';
        procedureStepModal +=           '</div>';
        procedureStepModal +=           '<div class="modal-body">';
        procedureStepModal +=               '<img src="main/imgs/ENG/'+id+'.png" height="100%">';
        procedureStepModal +=           '</div>';
        procedureStepModal +=       '</div>';
        procedureStepModal +=   '</div>';
        procedureStepModal += '</div>';

        document.getElementById("modalProcedure").innerHTML = procedureStepModal;

        
}
