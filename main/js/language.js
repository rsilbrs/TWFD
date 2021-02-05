function loadLanguage(language){
    window.location.href = "?lg="+language;
}

function getLanguage(){
    var url         = new URL(window.location.href);
    var languageSet = url.searchParams.get("lg");

    if(languageSet){
        return languageSet;
    } else {
        return 'ENG';
    }
}

function Language(item, type){
    //Type: 0 = return; 1 = write
    var languageDef = eval(getLanguage());

    if(type == 0){
        return languageDef[item];
    } else {
        document.write(languageDef[item]);
    }
}


var ENG = {
	"CreateNewEvent":   "Create new event",
	"AvailableEvents":  "Available Events",
	"BarcodeEvents":    "Barcode Events",
	"InfoEvents":       "Info Events",
    "TimerEvents":      "Timer Events",
    "LoadDemoEvents":   "Load Demo Events",
    "ProgramFlow":      "Program Flow",
    "CreateANewEvent":  "Create a new event",
    "WhatIsAnEvent":    "What is an event?",
    "EventExplanation": "An event is a feature available with version 7 of Trima and TOMEs. With it it is possible to create personalized messages that will request some action from the operator during the procedure.",
    "EventTypeTitle": 	"The types of Events available at TOMEs are:",
    "EventType1": 		"Request the capture of information via barcode",
    "EventType2": 		"Request the capture of some information by selecting a button on the Trima screen",
    "EventType3": 		"Provide some information / guidance to the operator",
    "EventType4": 		"Provide a timer for the operator to perform some activity",
    "EventType": 		"How do you want Trima to help you?",
    "EventBarcode": 	"Request an information via barcode",
    "EventButton": 		"Request an information via on-screen button",
    "EventInfo": 		"Inform something via Trima Screen",
    "EventTimer": 		"Provide a Timer",
    "EventName": 		"What is the name of this event?",
    "EventDescription": "Provide a description of that event",
    "EventButtonTitle": "Enter the options that will be available on the screen",
    "EventTimerTitle":  "What is the timer interval / duration?",
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
		"Before Connect PAS",
		"Before RBC Additive Solution Connect",
		"Before Seal Products",
		"Before Next Procedure"
    ],
	"demoEvents":[
		[
			"Barcode",
			"Lot ACD-A",
			"Please, scan the ACD-A Lot",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Donor ID",
			"Please, scan the Donor ID",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Donation ID",
			"Please, scan the donation ID"
		],
		[
			"Barcode",
			"Sample tubes",
			"Please, scan the barcode of all Sample Tubes",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Disposabe Lot",
			"Please, scan the barcode that informs the disposable lot",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Operator ID",
			"Please, inform the operator resposible for that information",
			["Cancel","","","",""]	
		],				
		[
			"Button",
			"Donor Check",
			"Everything okay with the donor?",
			["Yes", "", "", "", "No"],
		],
		[
			"Info",
			"Bag Labeling",
			"Remember to label all the bags collected",
			["","","","",""],
		],
		[
			"Button",
			"Donation Arm",
			"Please, informe the donation arm",
			["Left","","","","Right"],
		],
		[
			"Timer",
			"Venopuncture Quality",
			"Check if the venipuncture is good",
			["1","00","","",""],
		],
		[
			"Timer",
			"Donor Confortable",
			"Check that the donor is confortable",
			["10","00","","",""],
		],
		[
			"Timer",
			"Attention to the Product",
			"Check the appearance of the collected product",
			["20","00","","",""],
		]
	]
}

var ESP = {
	"CreateNewEvent":   "Crear nuevo evento",
	"AvailableEvents":  "Eventos disponibles",
	"BarcodeEvents":    "Eventos de código de barras",
	"InfoEvents":       "Eventos de información",
    "TimerEvents":      "Eventos de temporización",
    "LoadDemoEvents":   "Cargar eventos de demostración",
    "ProgramFlow":      "Flujo de programa",
    "CreateANewEvent":  "Crea un nuevo evento",
    "WhatIsAnEvent":    "Que es un evento?",
    "EventExplanation": "Un evento es una función disponible con la versión 7 de Trima y TOMEs. Con él es posible crear mensajes personalizados que solicitarán alguna acción del operador durante el procedimiento.",
    "EventTypeTitle": 	"Los tipos de eventos disponibles en TOMEs son:",
    "EventType1": 		"Solicita la captura de información vía código de barras",
    "EventType2": 		"Solicite la captura de alguna información seleccionando un botón en la pantalla de Trima",
    "EventType3": 		"Proporcionar alguna información / orientación al operador",
    "EventType4": 		"Proporcionar un temporizador para que el operador realice alguna actividad.",
    "EventType": 		"Cómo quieres que Trima te ayude?",
    "EventBarcode": 	"Solicite una información mediante código de barras",
    "EventButton": 		"Solicite una información a través del botón en pantalla",
    "EventInfo": 		"Informar algo a través de la pantalla de Trima",
    "EventTimer": 		"Proporcionar un temporizador",
    "EventName": 		"Cual es el nombre de este evento?",
    "EventDescription": "La descripción de este evento",
    "EventButtonTitle": "Ingrese las opciones que estarán disponibles en la pantalla",
    "EventTimerTitle":  "Intervalo / Duración del temporizador?",
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
			"Barcode",
			"Lote ACD-A",
			"Por favor, escanee el lote ACD-A",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"ID del Donante",
			"Por favor, escanee la identificación del donante",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"ID de la donación",
			"Por favor, escanee la identificación de la donación"
		],
		[
			"Barcode",
			"Tubos de la muestra",
			"Por favor, escanee el código de barras de todos los tubos de muestra.",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"Lote del desechable",
			"Por favor, escanee el código de barras que informa el lote desechable",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"ID del operador",
			"Por favor, informe al operador responsable de esa información.",
			["Cancelar","","","",""]	
		],				
		[
			"Button",
			"Verificación del donante",
			"Todo bien con el donante?",
			["Sí", "", "", "", "No"],
		],
		[
			"Info",
			"Etiquetado de bolsas",
			"Recuerda etiquetar todas las bolsas recogidas",
			["","","","",""],
		],
		[
			"Button",
			"Brazo de donación",
			"Por favor, informe al brazo de donación",
			["Izquierdo","","","","Derecho"],
		],
		[
			"Timer",
			"Calidad de la venopunción",
			"Compruebe si la venopunción es buena",
            ["1","00","","",""],
		],
		[
			"Timer",
			"Donante cómodo",
			"Verificar que el donante sea cómodo.",
            ["10","00","","",""],
		],
		[
			"Timer",
			"Atención al Producto",
			"Verifique la apariencia del producto recolectado",
            ["20","00","","",""],
        ]
    ]
}

var JAP = {
	"CreateNewEvent":   "新しいイベントを作成する",
	"AvailableEvents":  "利用可能なイベント",
	"BarcodeEvents":    "バーコードイベント",
	"InfoEvents":       "情報イベント",
    "TimerEvents":      "タイマーイベント",
    "LoadDemoEvents":   "デモイベントを読み込む",
    "ProgramFlow":      "プログラムフロー",
    "CreateANewEvent":  "新しいイベントを作成する",
    "WhatIsAnEvent":    "イベントとは何ですか？",
    "EventExplanation": "イベントは、バージョン7のTrimaおよびTOMEsで使用できる関数です。これにより、手順中にオペレーターに何らかのアクションを要求するパーソナライズされたメッセージを作成することができます.",
    "EventTypeTitle": 	"イベントはTOMEsでご利用いただけます:",
    "EventType1": 		"バーコードを介して情報のキャプチャを要求する",
    "EventType2": 		"Trima画面でオプションを選択して、一部の情報のキャプチャを要求します",
    "EventType3": 		"オペレーターに情報/ガイダンスを提供する",
    "EventType4": 		"オペレーターが何らかのアクティビティを実行するためのタイマーを提供する.",
    "EventType": 		"Trimaにどのようにお手伝いしてもらいたいですか?",
    "EventBarcode": 	"バーコード情報をリクエストする",
    "EventButton": 		"画面上のボタンから情報をリクエストする",
    "EventInfo": 		"オペレーターに何かを伝えます",
    "EventTimer": 		"タイマーを提供する",
    "EventName": 		"このイベントの名前は何ですか?",
    "EventDescription": "イベントの説明を入力してください",
    "EventButtonTitle": "画面で利用できるオプションを通知します",
    "EventTimerTitle":  "タイマー間隔/期間?",
	"TrimaSteps":[
		"起動時",
		"ロードシステムの前",
		"チューブセットテスト前",
		"ACコネクトの前",
		"ドナーエントリー前",
		"ドナーを準備する前に",
		"描画を開始する前に",
		"収集中",
		"ドナー切断前",
		"交換ソリューションを接続する前に",
		"PASを接続する前に",
		"RASを接続する前に",
		"製品をシールする前",
		"次の手順の前に"
    ],
	"demoEvents":[
		[
			"Barcode",
			"抗凝固剤がたくさん",
			"抗凝固剤溶液のバッチバーコードをスキャンしてください"
		],
		[
			"Barcode",
			"ドナーの識別",
			"寄付者識別コードを入力してください"
		],
		[
			"Barcode",
			"寄付の識別",
			"寄付識別コードを入力してください"
		],
		[
			"Barcode",
			"サンプルチューブ",
			"すべてのサンプルチューブのコードを入力してください"
		],
		[
			"Barcode",
			"キットロット",
			"使い捨てバッチのバーコードを入力してください"
		],
		[
			"Barcode",
			"オペレーターの識別",
			"この情報を担当するオペレーターに通知してください"
		],				
		[
			"Button",
			"ドナーを確認する",
			"ドナーにすべてが順調であることを確認する?",
			["Sí", "", "", "", "No"],
		],
		[
			"Info",
			"奨学金のラベリング",
			"収集したすべてのバッグにラベルを付けることを忘れないでください",
			["","","","",""],
		],
		[
			"Button",
			"寄付アーム",
			"どの腕が寄付に使用されたかを知らせます",
			["Izquierdo","","","","Derecho"],
		],
		[
			"Timer",
			"穿刺品質",
			"パンクが適切であることを確認してください",
            ["1","00","","",""],
		],
		[
			"Timer",
			"ドナーの快適さ",
			"ドナーが快適であることを確認してください",
            ["10","00","","",""],
		],
		[
			"Timer",
			"製品検査",
			"製品の外観が適切であることを確認してください",
            ["20","00","","",""],
        ]
    ]
}

var PTBR = {
	"CreateNewEvent":   "Criar novo Evento",
	"AvailableEvents":  "Eventos Disponíveis",
	"BarcodeEvents":    "Evento de código de barras",
	"InfoEvents":       "Eventos de informação",
    "TimerEvents":      "Eventos de tempo",
    "LoadDemoEvents":   "Carregar eventos de Demonstração",
    "ProgramFlow":      "Fluxo de programa",
    "CreateANewEvent":  "Criar um novo evento",
    "WhatIsAnEvent":    "O que é um evento?",
    "EventExplanation": "Um evento é uma função disponível com a versão 7 da Trima e TOMEs. Com ele é possível criar mensagens personalizadas que solicitam alguma ação do operador durante o procedimento.",
    "EventTypeTitle": 	"São eventos disponíveis no TOMEs:",
    "EventType1": 		"Solicitar a captura de uma informação via código de barras",
    "EventType2": 		"Solicitar a captura de alguma informação a partir da seleção de uma opção na tela da Trima",
    "EventType3": 		"Fornecer alguma informação / orientação ao operador",
    "EventType4": 		"Fornecer um temporizador para que o operador realize alguma atividade.",
    "EventType": 		"Como gostaria que a Trima te ajudasse?",
    "EventBarcode": 	"Solicitar uma informação de um código de barras",
    "EventButton": 		"Solicitar uma informação a partir de um botão na tela",
    "EventInfo": 		"Informar algo ao operador",
    "EventTimer": 		"Fornecer um temporizador",
    "EventName": 		"Qual o nome desse evento?",
    "EventDescription": "Forneça uma descrição do evento",
    "EventButtonTitle": "Informe as opções que serão disponibilizadas na tela",
    "EventTimerTitle":  "Intervalo/Duração do temporizador?",
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
			"Barcode",
			"Lote do Anticoagulante",
			"Por favor, leia o código de barras do lote da solução anticoagulante"
		],
		[
			"Barcode",
			"ID Doador",
			"Por favor, informe o código de identificação do doador"
		],
		[
			"Barcode",
			"ID Doação",
			"Por favor, informe o código de identificação da doação"
		],
		[
			"Barcode",
			"Tubos de amostras",
			"Por favor, informe o código de todos os tubos de amostras"
		],
		[
			"Barcode",
			"Lote do Kit",
			"Por favor, informe o código de barras referente ao lote do descartável"
		],
		[
			"Barcode",
			"ID Operador",
			"Por favor, informe o operador responsável por essa informação"
		],				
		[
			"Button",
			"Verificar Doador",
			"Confirme que está tudo bem com o doador?",
			["Sim", "", "", "", "Não"],
		],
		[
			"Info",
			"Etiquetagem das Bolsas",
			"Lembre-se de etiquetar todas as bolsas coletadas",
			["","","","",""],
		],
		[
			"Button",
			"Braço da Doação",
			"Informe qual braço foi utilizado para a doação",
			["Esquerdo","","","","Direito"],
		],
		[
			"Timer",
			"Qualidade da Punção",
			"Verifique se a punção está adequada",
            ["1","00","","",""],
		],
		[
			"Timer",
			"Conforto do doador",
			"Certifique-se de que o doador está confortável",
            ["10","00","","",""],
		],
		[
			"Timer",
			"Inspeção do produto",
			"Certifique-se de que o aspecto visual do produto está adequado",
            ["20","00","","",""],
        ]
    ]
}
