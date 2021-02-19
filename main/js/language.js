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
    "EventExplanation": "Events allow you to give specific input about the process, for instance, via barcodes. Events can be used to personalize messages that will request some action from the operator during the procedure.",
    "EventTypeTitle": 	"The types of Events available at TOMEs are:",
    "EventType1":		"Request the capture of information with a barcode scan",
    "EventType2":		"Request the capture of some information by selecting a button on the Trima screen",
    "EventType3":		"Provide some information/guidance to the operator",
    "EventType4":		"Provide a timer for the operator to perform some activity",
    "EventType": 		"How do you want Trima to help you?",
    "EventBarcode": 	"Request information via barcode",
    "EventButton":	 	"Request information via on-screen button",
    "EventInfo": 		"Inform the operator via the Trima Screen",
    "EventTimer":	 	"Provide a Timer",
    "EventName": 		"What is the name of this event?",
    "EventDescription": "Provide a description of that event",
    "EventButtonTitle": "Enter the options that will be available on the screen",
    "EventTimerTitle":  "What is the timer interval/duration?",
	"Contact":			"If you have any questions, difficulties or suggestions, feel free to contact us:",
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
			"Please scan the ACD-A lot number",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Donor ID",
			"Please scan the donor ID",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Donation ID",
			"Please scan the donation ID"
		],
		[
			"Barcode",
			"Sample tubes",
			"Please scan the barcode on each sample tube",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Tubing set Lot",
			"Please scan the tubing set lot number ",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Operator ID",
			"Please scan the operator ID of the person performing the action",
			["Cancel","","","",""]	
		],				
		[
			"Button",
			"Donor Check",
			"Is the donor comfortable?",
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
			"Please select the arm used for the venipuncture",
			["Left","","","","Right"],
		],
		[
			"Timer",
			"Venipuncture Quality",
			"Please verify the venipuncture site is okay",
			["1","00","","",""],
		],
		[
			"Timer",
			"Donor Confortable",
			"Please verify that the donor is comfortable",
			["10","00","","",""],
		],
		[
			"Timer",
			"Product Verification",
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
    "EventExplanation": "Los eventos le permiten dar información específica sobre el proceso, por ejemplo, a través de códigos de barras. Los eventos se pueden utilizar para personalizar mensajes que solicitarán alguna acción del operador durante el procedimiento.",
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
	"Contact":			"Si tiene alguna pregunta, dificultad o sugerencia, no dude en contactarnos:",
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
    "EventExplanation": "イベントを使用すると、たとえばバーコードを介して、プロセスに関する特定の入力を行うことができます。イベントを使用して、手順中にオペレーターに何らかのアクションを要求するメッセージをパーソナライズできます。",
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
	"Contact":			"ご質問、問題、提案がございましたら、お気軽にお問い合わせください",
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

var DE = {
	"CreateNewEvent":   "Neues Ereignis erstellen",
	"AvailableEvents":  "Verfügbare Ereignisse",
	"BarcodeEvents":    "Barcode-Ereignis",
	"InfoEvents":       "Informationsereignisse",
    "TimerEvents":      "Wetterereignisse",
    "LoadDemoEvents":   "Demo-Events laden",
    "ProgramFlow":      "Programmablauf",
    "CreateANewEvent":  "Erstellen Sie ein neues Ereignis",
    "WhatIsAnEvent":    "Was ist eine Veranstaltung?",
    "EventExplanation": "Ein Ereignis ist eine Funktion, die mit Version 7 von Trima und TOMEs verfügbar ist. Damit ist es möglich, personalisierte Nachrichten zu erstellen, die vom Bediener während des Vorgangs eine Aktion anfordern.",
    "EventTypeTitle": 	"Bei TOMEs verfügbare Veranstaltungen sind:",
    "EventType1": 		"Fordern Sie die Erfassung von Informationen per Barcode an",
    "EventType2": 		"Fordern Sie die Erfassung einiger Informationen an, indem Sie eine Option auf dem Trima-Bildschirm auswählen",
    "EventType3": 		"Geben Sie dem Bediener einige Informationen / Anleitungen",
    "EventType4": 		"Stellen Sie dem Bediener einen Timer zur Verfügung, mit dem er bestimmte Aktivitäten ausführen kann.",
    "EventType": 		"Wie soll Trima Ihnen helfen?",
    "EventBarcode": 	"Fordern Sie eine Barcode-Information an",
    "EventButton": 		"Fordern Sie Informationen über eine Schaltfläche auf dem Bildschirm an",
    "EventInfo": 		"Sagen Sie dem Bediener etwas",
    "EventTimer": 		"Fornecer um temporizador",
    "EventName": 		"Wie heißt diese Veranstaltung?",
    "EventDescription": "Geben Sie eine Beschreibung des Ereignisses an",
    "EventButtonTitle": "Informieren Sie die Optionen, die auf dem Bildschirm verfügbar sein werden",
    "EventTimerTitle":  "Timer Intervall / Dauer?",
	"Contact":  		"Wenn Sie Fragen, Schwierigkeiten oder Vorschläge haben, zögern Sie nicht, uns zu kontaktieren:",
	"TrimaSteps":[
		"Beim Starten",
		"Vor dem Laden des Systems",
		"Vor dem Testen des Sets",
		"Vor dem Anschließen der Klimaanlage",
		"Während der Dateneingabe",
		"Vor der Vorbereitung des Spenders",
		"Vor dem Beginn der Extraktion",
		"Während der Abholung",
		"Vor dem Trennen des Spenders",
		"Vor dem Anschließen der Ersatzlösung",
		"Vor dem Anschließen des PAS",
		"Vor dem Anschließen der Red Cell Additive Solution",
		"Vor dem Versiegeln von Produkten",
		"Vor dem nächsten Eingriff"
    ],
	"demoEvents":[
		[
			"Barcode",
			"Viel Antikoagulans",
			"Bitte lesen Sie den Chargen-Barcode der Antikoagulanslösung"
		],
		[
			"Barcode",
			"Spender-ID",
			"Bitte geben Sie den Spenderidentifikationscode ein"
		],
		[
			"Barcode",
			"Spenden-ID",
			"Bitte geben Sie den Spendenidentifikationscode ein"
		],
		[
			"Barcode",
			"Probenröhrchen",
			"Bitte geben Sie den Code für alle Probenröhrchen ein"
		],
		[
			"Barcode",
			"Kit Lot",
			"Bitte geben Sie den Barcode für das Einweglos ein"
		],
		[
			"Barcode",
			"Bediener-ID",
			"Bitte informieren Sie den für diese Informationen zuständigen Betreiber"
		],				
		[
			"Button",
			"Überprüfen Sie den Spender",
			"Bestätigen Sie, dass mit dem Spender alles in Ordnung ist?",
			["Ja", "", "", "", "Nein"],
		],
		[
			"Info",
			"Kennzeichnung von Stipendien",
			"Denken Sie daran, alle gesammelten Taschen zu kennzeichnen",
			["","","","",""],
		],
		[
			"Button",
			"Spendenarm",
			"Informieren Sie, welcher Arm für die Spende verwendet wurde",
			["Links","","","","Richtig"],
		],
		[
			"Timer",
			"Punktionsqualität",
			"Überprüfen Sie, ob die Punktion ausreichend ist",
            ["1","00","","",""],
		],
		[
			"Timer",
			"Spenderkomfort",
			"Stellen Sie sicher, dass sich der Spender wohl fühlt",
            ["10","00","","",""],
		],
		[
			"Timer",
			"Produktinspektion",
			"Stellen Sie sicher, dass das optische Erscheinungsbild des Produkts angemessen ist",
            ["20","00","","",""],
        ]
    ]
}

var FR = {
	"CreateNewEvent":   "Créer un nouvel événement",
	"AvailableEvents":  "Événements disponibles",
	"BarcodeEvents":    "Événement de code-barres",
	"InfoEvents":       "Événements d'information",
    "TimerEvents":      "Événements météorologiques",
    "LoadDemoEvents":   "Charger les événements de démonstration",
    "ProgramFlow":      "Flux de programme",
    "CreateANewEvent":  "Créer un nouvel événement",
    "WhatIsAnEvent":    "Qu'est-ce qu'un événement?",
    "EventExplanation": "Un événement est une fonction disponible avec la version 7 de Trima et TOME. Avec lui, il est possible de créer des messages personnalisés qui demandent une action de l'opérateur pendant la procédure.",
    "EventTypeTitle": 	"Les événements disponibles à TOME sont:",
    "EventType1": 		"Demander la saisie d'informations par code-barres",
    "EventType2": 		"Demandez la capture de certaines informations en sélectionnant une option sur l'écran Trima",
    "EventType3": 		"Fournir des informations / conseils à l'opérateur",
    "EventType4": 		"Fournissez une minuterie à l'opérateur pour qu'il effectue certaines activités.",
    "EventType": 		"Comment aimeriez-vous que Trima vous aide?",
    "EventBarcode": 	"Demander des informations sur le code-barres",
    "EventButton": 		"Demander des informations à partir d'un bouton à l'écran",
    "EventInfo": 		"Dites quelque chose à l'opérateur",
    "EventTimer": 		"Fournir une minuterie",
    "EventName": 		"Quel est le nom de cet événement?",
    "EventDescription": "Fournissez une description de l'événement",
    "EventButtonTitle": "Renseignez les options qui seront disponibles à l'écran",
    "EventTimerTitle":  "Intervalle / durée de la minuterie?",
	"Contact":  		"Si vous avez des questions, des difficultés ou des suggestions, n'hésitez pas à nous contacter:",
	"TrimaSteps":[
		"Au démarrage",
		"Avant de charger le système",
		"Avant de tester l'ensemble",
		"Avant de connecter le secteur",
		"Pendant la saisie des données",
		"Avant de préparer le donateur",
		"Avant de préparer le donateur",
		"Pendant la collecte",
		"Avant de déconnecter le donateur",
		"Avant de connecter la solution de remplacement",
		"Avant de connecter le PAS",
		"Avant de connecter la solution d'additif érythrocytaire",
		"Avant de sceller les produits",
		"Avant la procédure suivante"
    ],
	"demoEvents":[
		[
			"Barcode",
			"Lot d'anticoagulant",
			"Veuillez lire le code-barres du lot de solution anticoagulante"
		],
		[
			"Barcode",
			"ID du donateur",
			"Veuillez saisir le code d'identification du donneur"
		],
		[
			"Barcode",
			"ID de don",
			"Veuillez saisir le code d'identification du don"
		],
		[
			"Barcode",
			"Tubes échantillons",
			"Veuillez saisir le code de tous les tubes d'échantillons"
		],
		[
			"Barcode",
			"Lot de kit",
			"Veuillez saisir le code-barres du lot jetable"
		],
		[
			"Barcode",
			"ID opérateur",
			"Veuillez informer l'opérateur responsable de ces informations"
		],				
		[
			"Button",
			"Vérifier le donateur",
			"Confirmer que tout va bien avec le donateur?",
			["Ouais", "", "", "", "Non"],
		],
		[
			"Info",
			"Étiquetage des bourses",
			"N'oubliez pas d'étiqueter tous les sacs collectés",
			["","","","",""],
		],
		[
			"Button",
			"Bras de don",
			"Indiquez quel bras a été utilisé pour le don",
			["La gauche","","","","Droite"],
		],
		[
			"Timer",
			"Qualité de la perforation",
			"Vérifiez que la ponction est adéquate",
            ["1","00","","",""],
		],
		[
			"Timer",
			"Confort des donateurs",
			"Assurez-vous que le donneur est à l'aise",
            ["10","00","","",""],
		],
		[
			"Timer",
			"Inspection des produits",
			"Assurez-vous que l'aspect visuel du produit est adéquat",
            ["20","00","","",""],
        ]
    ]
}

var IT = {
	"CreateNewEvent":   "Crea nuovo evento",
	"AvailableEvents":  "Eventi disponibili",
	"BarcodeEvents":    "Evento codice a barre",
	"InfoEvents":       "Eventi informativi",
    "TimerEvents":      "Eventi meteorologici",
    "LoadDemoEvents":   "Carica eventi demo",
    "ProgramFlow":      "Flusso del programma",
    "CreateANewEvent":  "Crea un nuovo evento",
    "WhatIsAnEvent":    "Cos'è un evento?",
    "EventExplanation": "Un evento è una funzione disponibile con la versione 7 di Trima e TOME. Con esso è possibile creare messaggi personalizzati che richiedono un'azione da parte dell'operatore durante la procedura.",
    "EventTypeTitle": 	"Gli eventi disponibili presso TOME sono:",
    "EventType1": 		"Richiedi l'acquisizione di informazioni tramite codice a barre",
    "EventType2": 		"Richiedi l'acquisizione di alcune informazioni selezionando un'opzione nella schermata Trima",
    "EventType3": 		"Fornire alcune informazioni / indicazioni all'operatore",
    "EventType4": 		"Fornire un timer all'operatore per eseguire alcune attività.",
    "EventType": 		"Come vorresti che Trima ti aiutasse?",
    "EventBarcode": 	"Richiedi informazioni sul codice a barre",
    "EventButton": 		"Richiedi informazioni da un pulsante sullo schermo",
    "EventInfo": 		"Di 'qualcosa all'operatore",
    "EventTimer": 		"Fornisci un timer",
    "EventName": 		"Qual è il nome di questo evento?",
    "EventDescription": "Fornisci una descrizione dell'evento",
    "EventButtonTitle": "Informa le opzioni che saranno disponibili sullo schermo",
    "EventTimerTitle":  "Intervallo / durata del timer?",
	"Contact":  		"Se hai domande, difficoltà o suggerimenti, non esitare a contattarci:",
	"TrimaSteps":[
		"All'avvio",
		"Prima di caricare il sistema",
		"Prima di provare il set",
		"Prima di collegare l'AC",
		"Durante l'immissione dei dati",
		"Prima di preparare il donatore",
		"Prima di iniziare l'estrazione",
		"Durante la raccolta",
		"Prima di disconnettere il donatore",
		"Prima di collegare la soluzione sostitutiva",
		"Prima di collegare il PAS",
		"Prima di collegare la soluzione additiva dei globuli rossi",
		"Prima di sigillare i prodotti",
		"Prima della prossima procedura"
    ],
	"demoEvents":[
		[
			"Barcode",
			"Lotto di anticoagulante",
			"Eseguire la scansione del codice a barre del lotto della soluzione anticoagulante"
		],
		[
			"Barcode",
			"ID donatore",
			"Inserisci il codice di identificazione del donatore"
		],
		[
			"Barcode",
			"ID donazione",
			"Inserisci il codice identificativo della donazione"
		],
		[
			"Barcode",
			"Provette per campioni",
			"Immettere il codice per tutte le provette di campionamento"
		],
		[
			"Barcode",
			"Lotto di kit",
			"Inserisci il codice a barre per il lotto usa e getta"
		],
		[
			"Barcode",
			"ID operatore",
			"Si prega di informare l'operatore responsabile di queste informazioni"
		],				
		[
			"Button",
			"Controlla donatore",
			"Confermare che tutto va bene con il donatore?",
			["Si", "", "", "", "No"]
		],
		[
			"Info",
			"Etichettatura di borse di studio",
			"Ricordati di etichettare tutti i bagagli raccolti",
		],
		[
			"Button",
			"Braccio di donazione",
			"Informare quale braccio è stato utilizzato per la donazione",
			["Sinistra","","","","Giusto"]
		],
		[
			"Timer",
			"Qualità della puntura",
			"Verificare che la foratura sia adeguata",
            ["1","00","","",""]
		],
		[
			"Timer",
			"Comfort del donatore",
			"Assicurati che il donatore stia bene",
            ["10","00","","",""]
		],
		[
			"Timer",
			"Ispezione del prodotto",
			"Assicurati che l'aspetto visivo del prodotto sia adeguato",
            ["20","00","","",""]
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
	"Contact":  		"Se você tiver alguma dúvida, dificuldade ou sugestão, não hesite em nos contatar:",
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
		"Antes de Conectar o PAS",
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

var CHI = {
	"CreateNewEvent":   "建立新活動",
	"AvailableEvents":  "可用活動",
	"BarcodeEvents":    "條碼事件",
	"InfoEvents":       "信息事件",
    "TimerEvents":      "天氣事件",
    "LoadDemoEvents":   "加載演示事件",
    "ProgramFlow":      "程序流程",
    "CreateANewEvent":  "建立新活動",
    "WhatIsAnEvent":    "什麼事",
    "EventExplanation": "事件是Trima和TOMEs的版本7中提供的功能。有了它，就有可能創建個性化的消息，要求操作員在手術過程中採取一些措施。",
    "EventTypeTitle": 	"TOMEs提供的事件有：:",
    "EventType1": 		"通過條形碼請求捕獲信息",
    "EventType2": 		"通過選擇Trima屏幕上的選項來請求捕獲某些信息",
    "EventType3": 		"向操作員提供一些信息/指導",
    "EventType4": 		"為操作員提供計時器以執行一些活動。",
    "EventType": 		"您希望Trima如何為您提供幫助？",
    "EventBarcode": 	"索取條形碼信息",
    "EventButton": 		"通過屏幕上的按鈕請求信息",
    "EventInfo": 		"告訴操作員一些事情",
    "EventTimer": 		"提供一個計時器",
    "EventName": 		"此活動的名稱是什麼？",
    "EventDescription": "提供事件的描述",
    "EventButtonTitle": "通知屏幕上可用的選項",
    "EventTimerTitle":  "計時器間隔/持續時間？",
	"Contact":  		"如果您有任何疑問，困難或建議，請隨時與我們聯繫：",
	"TrimaSteps":[
		"啟動時",
		"加載系統之前",
		"測試套裝之前",
		"連接交流電之前",
		"數據輸入期間",
		"準備捐贈者之前",
		"開始提取之前",
		"收集期間",
		"斷開捐助者之前",
		"連接替換解決方案之前",
		"連接PAS之前",
		"連接紅細胞添加劑解決方案之前",
		"密封產品之前",
		"下一個步驟之前"
    ],
	"demoEvents":[
		[
			"Barcode",
			"大量抗凝劑",
			"請閱讀抗凝溶液批次條形碼"
		],
		[
			"Barcode",
			"捐助者ID",
			"捐助者ID"
		],
		[
			"Barcode",
			"捐贈ID",
			"請輸入捐贈識別碼"
		],
		[
			"Barcode",
			"樣品管",
			"請輸入所有樣品管的代碼"
		],
		[
			"Barcode",
			"套件批",
			"請輸入一次性使用的條形碼"
		],
		[
			"Barcode",
			"操作員編號",
			"請告知負責此信息的操作員"
		],				
		[
			"Button",
			"檢查捐助者",
			"確認捐贈者一切都好嗎？",
			["是的", "", "", "", "不"],
		],
		[
			"Info",
			"獎學金標籤",
			"切記對所有收集的袋子貼標籤",
		],
		[
			"Button",
			"捐贈臂",
			"告知使用哪隻手臂進行捐贈",
			["剩下","","","","正確的"],
		],
		[
			"Timer",
			"穿刺質量",
			"檢查穿刺是否足夠",
            ["1","00","","",""],
		],
		[
			"Timer",
			"捐助者的安慰",
			"捐助者的安慰",
            ["10","00","","",""],
		],
		[
			"Timer",
			"產品檢驗",
			"確保產品的視覺外觀足夠",
            ["20","00","","",""],
        ]
    ]
}
