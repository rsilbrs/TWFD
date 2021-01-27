// Get the selected language and Change 
	function loadLanguage(language){
		window.location.href = "?lg="+language;
	}

function language(item){
	//Set language: EN, ES or PT
	var url 	= new URL(window.location.href);
	var urlLg 	= url.searchParams.get("lg");
	var language_definition;

	

	if(urlLg){
		language_definition = eval(urlLg);
	} else {
		language_definition = EN;
	}

	//Define if the information will be write on screen or returned
	if(item == 'TrimaSteps' || item == 'imageFolder' || item == 'demoEvents'){
		return language_definition[item];
	} else {
		document.write(language_definition[item]);
	}
	
}

//Change the text to spanish
var ES = {
	"imageFolder": 				"ESP",
	"Available_Events": 		"Eventos disponibles",
	"Create_new_event": 		"Crear nuevo evento",
	"Barcode_Events": 			"Eventos de código de barras",
	"Info_Events": 				"Eventos de información",
	"Timer_Events": 			"Eventos de temporización",
	"Demo_events": 				"Cargar eventos de demostración",
	"Program_flow": 			"Flujo de programa",
	"Save_Report": 				"Guardar reporte",
	"Screen_Simulation": 		"Simulación de pantalla",
	"New_event_description": 	"Crear un nuevo evento para capturar información o proporcionar instrucciones / información al operador durante el procedimiento..",
	"New_event_instruction": 	"Para crear un evento nuevo, responda las siguientes preguntas:",
	"New_event-define-type": 	"¿Qué quieres que haga Trima para ayudarte?",
	"New_event-barcode": 		"Solicite una información mediante código de barras",
	"New_event-button": 		"Solicite una información a través del botón en pantalla",
	"New_event-infom": 			"Informar algo",
	"New_event-define_name": 	"Cual es el nombre de este evento?",
	"New_event-description": 	"Dar más detalles de este nuevo evento para ayudar al operador.?",
	"New_event-options": 		"Informar las opciones?",
	"Create": 					"Crear evento!",
	"Menu_Feedback": 			"Feedback",
	"Menu_Contact": 			"Contacto",
	"Contect_Message1": 		"Si tiene alguna pregunta, dificultad o sugerencia, no dude en contactarnos.<br><br><strong></strong>",
	"Contact_Message2": 		"Por favor escriba a:",
	"Initial_Message1": 		"Bienvenido a la herramienta de diseño de flujo de trabajo Trima Accel.<br>Utilice este sistema para comprender y demostrar la funcionalidad del Trima Accel 7 conectado a los TOMEs.",
	"Initial_Message2": 		"Antes de irte, ¿podrías ayudarnos?",
	"Initial_Message3": 		"¿Podría compartir su opinión sobre esta herramienta accediendo el link <u>Feedback</u> en el menú superior??",
	"TrimaSteps":[
		"Al inicio",
		"Antes de cargar el sistema",
		"Antes de la prueba del conjunto de tubos",
		"Antes de conectar AC",
		"Antes de la entrada del donante",
		"Antes de preparar al donante",
		"Antes de comenzar la extracción",
		"Durante la recolección",
		"Antes de la desconexión del donante",
		"Antes de conectar la solución de reemplazo",
		"Antes de Conectar el PAS",
		"Antes de conectar la Solución de aditiva de glóbulos rojos",
		"Antes de sellar productos",
		"Antes del siguiente procedimiento"
	],
	"demoEvents":[
		[
			"barcode",
			"Lote ACD-A",
			"Por favor, escanee el lote ACD-A",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"ID del Donante",
			"Por favor, escanee la identificación del donante",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"ID de la donación",
			"Por favor, escanee la identificación de la donación"
		],
		[
			"barcode",
			"Tubos de muestra",
			"Por favor, escanee el código de barras de todos los tubos de muestra.",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"Lote desechable",
			"Por favor, escanee el código de barras que informa el lote desechable",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"ID de operador",
			"Por favor, informe al operador responsable de esa información.",
			["Cancelar","","","",""]	
		],				
		[
			"information",
			"Verificación de donante",
			"Todo bien con el donante?",
			["Sí", "", "", "", "No"],
		],
		[
			"information",
			"Etiquetado de bolsas",
			"Recuerda etiquetar todas las bolsas recogidas",
			["","","Okay","",""],
		],
		[
			"information",
			"Brazo de donación",
			"Por favor, informe al brazo de donación",
			["Izquierdo","","","","Derecho"],
		],
		[
			"timer",
			"Espere 1 minuto",
			"Compruebe si la venopunción es buena",
			["","","Seguir","",""],
		],
		[
			"timer",
			"Espera 10 minutos",
			"Verificar que el donante sea cómodo.",
			["","","Seguir","",""],
		],
		[
			"timer",
			"Espere 20 minutos",
			"Verifique la apariencia del producto recolectado",
			["","","Seguir","",""],
		]
	]
};
//End spanish

var EN = {
	"imageFolder": 				"ENG",
	"Available_Events": 		"Available Events",
	"Create_new_event": 		"Create new event",
	"Barcode_Events": 			"Barcode Events",
	"Info_Events": 				"Info Events",
	"Timer_Events": 			"Timer Events",
	"Demo_events": 				"Load demo events",
	"Program_flow": 			"Program flow",
	"Save_Report": 				"Save Report",
	"Screen_Simulation": 		"Screen Simulation",
	"New_event_description": 	"Create a new event to capture information or provide instruction / information to the operator during the procedure.",
	"New_event_instruction": 	"To create a new evet, answer the questions below:",
	"New_event-define-type": 	"What you want Trima to do to help you?",
	"New_event-barcode": 		"Request an information via barcode",
	"New_event-button": 		"Request an information via on-screen button",
	"New_event-infom": 			"Inform something",
	"New_event-define_name": 	"What is the name of this event?",
	"New_event-description": 	"Give more details of this new event to help the operator?",
	"New_event-options": 		"Inform the options?",
	"Create": 					"Create Event!",
	"Menu_Feedback": 			"Feedback",
	"Menu_Contact": 			"Contact",
	"Contect_Message1": 		"If you have any questions, difficulties or suggestions, feel free to contact us.<br><br><strong></strong>",
	"Contact_Message2": 		"Please write to:",
	"Initial_Message1": 		"Welcome to the Trima Accel flow design tool.<br>Use this system to understand and demonstrate the functionality of the Trima Accel 7 connected to the TOMEs.",
	"Initial_Message2": 		"Before leaving, could you help us?",
	"Initial_Message3": 		"Could you share your opinion about this tool by accessing the <u>Feedback</u> link in the top menu?",
	"TrimaSteps":[
		"At Startup",
		"Before Load System",
		"Before Tubing Set Test",
		"Before AC Connect",
		"Before Donor Entry",
		"Before Prepare Donor",
		"Before Start Draw",
		"During Collection",
		"Before Donor Disconnect",
		"Before Connect Replacement Solution",
		"Befone Connect PAS",
		"Befone RBC Additive Solution Connect",
		"Before Seal Products",
		"Before Next Procedure"
	],
	"demoEvents":[
		[
			"barcode",
			"Lot ACD-A",
			"Please, scan the ACD-A Lot",
			["Cancel","","","",""]
		],
		[
			"barcode",
			"Donor ID",
			"Please, scan the Donor ID",
			["Cancel","","","",""]
		],
		[
			"barcode",
			"Donation ID",
			"Please, scan the donation ID"
		],
		[
			"barcode",
			"Sample tubes",
			"Please, scan the barcode of all Sample Tubes",
			["Cancel","","","",""]
		],
		[
			"barcode",
			"Disposabe Lot",
			"Please, scan the barcode that informs the disposable lot",
			["Cancel","","","",""]
		],
		[
			"barcode",
			"Operator ID",
			"Please, inform the operator resposible for that information",
			["Cancel","","","",""]	
		],				
		[
			"information",
			"Donor Check",
			"Everything okay with the donor?",
			["Yes", "", "", "", "No"],
		],
		[
			"information",
			"Bag Labeling",
			"Remember to label all the bags collected",
			["","","Okay","",""],
		],
		[
			"information",
			"Donation Arm",
			"Please, informe the donation arm",
			["Left","","","","Right"],
		],
		[
			"timer",
			"Wait 1 minute",
			"Check if the venipuncture is good",
			["","","Continue","",""],
		],
		[
			"timer",
			"Wait 10 minutes",
			"Check that the donor is confortable",
			["","","Continue","",""],
		],
		[
			"timer",
			"Wait 20 minutes",
			"Check the appearance of the collected product",
			["","","Continue","",""],
		]
	]
};

var PT = {
	"imageFolder": 				"PTBR",
	"Available_Events": 		"Eventos Disponíveis",
	"Create_new_event": 		"Criar um novo evento",
	"Barcode_Events": 			"Códigos de Barras",
	"Info_Events": 				"Informações",
	"Timer_Events": 			"Temporizador",
	"Demo_events": 				"Carregar eventos pré-definidos",
	"Program_flow": 			"Fluxo de programa",
	"Save_Report": 				"Exportar Configuração",
	"Screen_Simulation": 		"Simulador de Tela",
	"New_event_description": 	"Crie um novo evento para capturar alguma informação ou fornecer alguma instrução ao Operador durante o procedimento.",
	"New_event_instruction": 	"Para criar um novo evento, responda as questões abaixo:",
	"New_event-define-type": 	"Como você quer que a Trima te ajude durante o proceimento?",
	"New_event-barcode": 		"Solicitar uma informação de um código de barras",
	"New_event-button": 		"Solicitar uma informação de um botão na tela",
	"New_event-infom": 			"Informar algo",
	"New_event-define_name": 	"Qual o nome desse evento?",
	"New_event-description": 	"Forneça mais detalhes para auxiliar o operador?",
	"New_event-options": 		"Quais serão as opções?",
	"Create": 					"Criar Evento!",
	"Menu_Feedback": 			"Sua Opinião",
	"Menu_Contact": 			"Contato",
	"Contect_Message1": 		"Caso tenha alguma dúvida, dificuldade ou sugestão, sinta-se livre para nos contatar.<br><br><strong></strong>",
	"Contact_Message2": 		"Por favor, escreva para:",
	"Initial_Message1": 		"Bem vindo(a) ao Trima Accel Workflow Designer.<br> Utilize esse sistema para comprrender e demonstrar a funcionalidade da Trima 7 conectada ao TOMEs.",
	"Initial_Message2": 		"Antes de deixar a página, poderia nos ajudar?",
	"Initial_Message3": 		"Gostaríamos de saber a sua opinião sobre essa ferramenta. Para isso, responda um rápido questionário clicando no link <u>Sua Opinião</u>.",
	"TrimaSteps":[
		"Ao Iniciar",
		"Antes de Carregar o Sistema",
		"Antes do teste do Conjunto",
		"Antes de Conectar o AC",
		"Durante a Entrada de Dados",
		"Antes de Preparar o Doador",
		"Antes de Iniciar a Extração",
		"Durante a Coleta",
		"Antes de Desconectar o doador",
		"Antes de Conectar a solução de Reposição",
		"Antes deConectar o PAS",
		"Antes de Conectar a Solução Aditiva de Hemácias",
		"Antes de Selar os Produtos",
		"Antes do Próximo Procedimento"
	],
	"demoEvents":[
		[
			"barcode",
			"Lote do Anticoagulante",
			"Por favor, leia o código de barras do lote da solução anticoagulante",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"ID Doador",
			"Por favor, informe o código de identificação do doador"
		],
		[
			"barcode",
			"ID Doação",
			"Por favor, informe o código de identificação da doação"
		],
		[
			"barcode",
			"Tubos de amostras",
			"Por favor, informe o código de todos os tubos de amostras"
		],
		[
			"barcode",
			"Lote do Kit",
			"Por favor, informe o código de barras referente ao lote do descartável",
			["Cancelar","","","",""]
		],
		[
			"barcode",
			"ID Operador",
			"Por favor, informe o operador responsável por essa informação",
			["Cancelar","","","",""]
		],				
		[
			"information",
			"Verificar Doador",
			"Confirme que está tudo bem com o doador?",
			["Sim", "", "", "", "Não"],
		],
		[
			"information",
			"Etiquetagem das Bolsas",
			"Lembre-se de etiquetar todas as bolsas coletadas",
			["","","Ok","",""],
		],
		[
			"information",
			"Braço da Doação",
			"Informe qual braço foi utilizado para a doação",
			["Esquerdo","","","","Direito"],
		],
		[
			"timer",
			"Aguardar 1 minuto",
			"Verifique se a punção está adequada",
			["","","Continuar","",""],
		],
		[
			"timer",
			"Aguardar 10 minutos",
			"Certifique-se de que o doador está confortável",
			["","","Continuar","",""],
		],
		[
			"timer",
			"Aguardar 20 minutos",
			"Certifique-se de que o aspecto visual do produto está adequado",
			["","","Continue","",""],
		]
	]
};