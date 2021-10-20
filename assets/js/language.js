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
    "CreateNewEvent":   "Create New Event",
    "AvailableEvents":  "Available Events",
    "BarcodeEvents":    "Barcode Events",
    "InfoEvents":       "Info Events",
    "TimerEvents":      "Timer Events",
    "LoadDemoEvents":   "Load Demo Events",
    "ProgramFlow":      "Program Flow",
    "CreateANewEvent":  "Create a new event",
    "WhatIsAnEvent":    "What is an event?",
    "EventExplanation": "An event allows you to get specific input about a procedure from the operator, for example by requiring a barcode scan. Events can also be used to personalize messages that will request some action from the operator during the procedure.",
    "EventTypeTitle": 	"The types of Events available on TOMEs are:",
    "EventType1":		"Request the capture of information with a barcode scan",
    "EventType2":		"Request the capture of some information by selecting a button on the Trima Accel screen",
    "EventType3":		"Provide information or instructions to the operator",
    "EventType4":		"Provide a timer for the operator to perform some activity",
    "EventType": 		"How do you want Trima Accel to help you?",
    "EventBarcode": 	"Require information via barcode",
    "EventButton":	 	"Require information via on-screen button",
    "EventInfo": 		"Inform the operator via the Trima Screen",
    "EventTimer":	 	"Provide a Timer",
    "EventName": 		"What is the name of this event?",
    "EventDescription": "Provide a description of this event: ",
    "EventButtonTitle": "Enter the options that will be available on the screen",
    "EventTimerTitle":  "What is the timer interval/duration?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Let's talk",
	"Contact":			"If you have any questions, difficulties or suggestions, feel free to contact us:",
	"ExportTo":			"Export to",
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
			"ACD-A Lot",
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
			"Sample Tubes",
			"Please scan the barcode on each sample tube",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Tubing Set Lot",
			"Please scan the tubing set lot number ",
			["Cancel","","","",""]
		],
		[
			"Barcode",
			"Operator ID",
			"Please scan the ID of the person performing this",
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
			"Donor Comfort",
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
    "EventDescription": "La descripción de este evento:",
    "EventButtonTitle": "Ingrese las opciones que estarán disponibles en la pantalla",
    "EventTimerTitle":  "Intervalo / Duración del temporizador?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Vamos a hablar",
	"Contact":			"Si tiene alguna pregunta, dificultad o sugerencia, no dude en contactarnos:",
	"ExportTo":			"Exportar a",
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
			"Escanee la identificación de la donación"
		],
		[
			"Barcode",
			"Tubos de la muestra",
			"Escanee el código de barras de todas las muestras",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"Lote del desechable",
			"Leer el código de barras del lote desechable",
			["Cancelar","","","",""]
		],
		[
			"Barcode",
			"ID del operador",
			"Informe al operador responsable de esa información",
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
    "EventExplanation": "イベントを使用すると、たとえばバーコードを介して、プロセスに関する特定のインプットを行うことができます。イベントを使用して、手順中にオペレーターに何らかのアクションを要求するメッセージを用途に合わせて設定できます。",
    "EventTypeTitle": 	"イベントはTOMEsでご利用いただけます:",
    "EventType1": 		"バーコードを介して情報のキャプチャを要求する",
    "EventType2": 		"Trima画面でオプションを選択して、一部の情報のキャプチャを要求します",
    "EventType3": 		"オペレーターに情報/ガイダンスを提供する",
    "EventType4": 		"オペレーターが何らかのアクティビティを行うためのタイマーを提供する",
    "EventType": 		"Trimaに何を手伝ってもらいたいですか？",
    "EventBarcode": 	"バーコード情報をリクエストする",
    "EventButton": 		"画面上のボタンから情報をリクエストする",
    "EventInfo": 		"オペレーターに何かを伝えます",
    "EventTimer": 		"タイマーを提供する",
    "EventName": 		"このイベントの名前は何ですか?",
    "EventDescription": "イベントの説明を入力してください",
    "EventButtonTitle": "画面で利用できるオプションを通知します",
    "EventTimerTitle":  "タイマーの間隔／時間とは何ですか？",
	"EventInfoOk":		"はい",
	"ContactName":		"話そう",
	"Contact":			"ご質問、問題、提案がございましたら、お気軽にお問い合わせください",
	"ExportTo":			"輸出",
	"TrimaSteps":[
		"起動時",
		"「システムへの装着」の前",
		"「回路セットテスト」の前",
		"「抗凝固剤接続」の前",
		"「ドナー情報入力」の前",
		"「ドナーを準備」の前",
		"「採血開始」の前",
		"採血中",
		"「抜針」の前",
		"「置換液接続」の前",
		"「PASを接続」の前",
		"「RASを接続」の前",
		"「製剤バッグをシール」の前",
		"次の手順に移る前"
    ],
	"demoEvents":[
		[
			"Barcode",
			"抗凝固剤のロット",
			"抗凝固剤のロット番号をスキャンしてください"
		],
		[
			"Barcode",
			"ドナーの識別",
			"寄付者識別コードを入力してください"
		],
		[
			"Barcode",
			"献血ID",
			"献血IDをスキャンしてください"
		],
		[
			"Barcode",
			"検体チューブ",
			"各検体チューブのバーコードをスキャンしてください"
		],
		[
			"Barcode",
			"回路セットのロット",
			"回路セットのロット番号をスキャンしてください"
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
			["はい", "", "", "", "いいえ"],
		],
		[
			"Info",
			"奨学金のラベリング",
			"採血した全ての製品バッグにラベルを付けることを忘れないでください",
			["","","","",""],
		],
		[
			"Button",
			"寄付アーム",
			"どの腕が寄付に使用されたかを知らせます",
			["左","","","","右"],
		],
		[
			"Timer",
			"穿刺品質",
			"パンクが適切であることを確認してください",
            ["1","00","","",""],
		],
		[
			"Timer",
			"ドナーの快適性",
			"ドナーが快適であることを確認してください",
            ["10","00","","",""],
		],
		[
			"Timer",
			"製品検査",
			"採取した製品の外観を確認してください",
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
    "EventExplanation": "Mit Ereignissen können Sie bestimmte Informationen zum Prozess eingeben, z. B. über Barcodes. Ereignisse können verwendet werden, um Nachrichten zu personalisieren, die vom Bediener während des Vorgangs eine Aktion anfordern.",
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
    "EventDescription": "Geben Sie eine Beschreibung des Ereignisses an:",
    "EventButtonTitle": "Informieren Sie die Optionen, die auf dem Bildschirm verfügbar sein werden",
    "EventTimerTitle":  "Timer Intervall / Dauer?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Lass uns reden",
	"Contact":  		"Wenn Sie Fragen, Schwierigkeiten oder Vorschläge haben, zögern Sie nicht, uns zu kontaktieren:",
	"ExportTo":			"Exportieren nach",
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
			"Lesen Sie den Antikoagulans-Batch-Barcode"
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
			"Geben Sie den Code für alle Probenröhrchen ein"
		],
		[
			"Barcode",
			"Kit Lot",
			"Bitte geben Sie den Barcode für das Einweglos ein"
		],
		[
			"Barcode",
			"Bediener-ID",
			"Informieren Sie den zuständigen Betreiber darüber"
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
    "EventExplanation": "Les événements vous permettent de donner des informations spécifiques sur le processus, par exemple via des codes à barres. Les événements peuvent être utilisés pour personnaliser les messages qui demanderont une action à l'opérateur pendant la procédure.",
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
    "EventDescription": "Fournissez une description de l'événement:",
    "EventButtonTitle": "Renseignez les options qui seront disponibles à l'écran",
    "EventTimerTitle":  "Intervalle / durée de la minuterie?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Parlons",
	"Contact":  		"Si vous avez des questions, des difficultés ou des suggestions, n'hésitez pas à nous contacter:",
	"ExportTo":			"Exporter vers",
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
    "EventExplanation": "Gli eventi consentono di fornire input specifici sul processo, ad esempio tramite codici a barre. Gli eventi possono essere utilizzati per personalizzare i messaggi che richiederanno un'azione da parte dell'operatore durante la procedura.",
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
    "EventDescription": "Fornisci una descrizione dell'evento:",
    "EventButtonTitle": "Informa le opzioni che saranno disponibili sullo schermo",
    "EventTimerTitle":  "Intervallo / durata del timer?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Vamos converser",
	"Contact":  		"Se hai domande, difficoltà o suggerimenti, non esitare a contattarci:",
	"ExportTo":			"Esporta a",
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
    "EventDescription": "Forneça uma descrição do evento:",
    "EventButtonTitle": "Informe as opções que serão disponibilizadas na tela",
    "EventTimerTitle":  "Intervalo/Duração do temporizador?",
	"EventInfoOk":		"Ok",
	"ContactName":		"Vamos conversar",
	"Contact":  		"Se você tiver alguma dúvida, dificuldade ou sugestão, não hesite em nos contatar:",
	"ExportTo":			"Exportar para",
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
			"Lote Anticoagulante",
			"Leia o código de barras do lote do anticoagulante"
		],
		[
			"Barcode",
			"ID Doador",
			"Informe o código de identificação do doador"
		],
		[
			"Barcode",
			"ID Doação",
			"Informe o código de identificação da doação"
		],
		[
			"Barcode",
			"Tubos de amostras",
			"Informe o código de todos os tubos de amostras"
		],
		[
			"Barcode",
			"Lote do Kit",
			"Informe o código de barras do lote do kit"
		],
		[
			"Barcode",
			"ID Operador",
			"Informe o operador responsável pela informação"
		],				
		[
			"Button",
			"Verificar Doador",
			"Confirme que está tudo bem com o doador?",
			["Sim", "", "", "", "Não"],
		],
		[
			"Info",
			"Etiqueta das Bolsas",
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
	"CreateNewEvent":   "建立新事件",
	"AvailableEvents":  "可用事件",
	"BarcodeEvents":    "条形码事件",
	"InfoEvents":       "信息事件",
    "TimerEvents":      "定时器事件",
    "LoadDemoEvents":   "加载演示事件",
    "ProgramFlow":      "程序流",
    "CreateANewEvent":  "建立新事件",
    "WhatIsAnEvent":    "什么是事件？",
    "EventExplanation": "事件允许您在过程中提供特定的输入，例如，条形码输入。事件可用于个性化消息，这些消息将要求操作者在操作过程中采取某些措施。",
    "EventTypeTitle": 	"TOMEs上可用的事件类型为：:",
    "EventType1": 		"通过条形码扫描请求捕获信息",
    "EventType2": 		"通过选择Trima屏幕上的按钮来请求捕获某些信息",
    "EventType3": 		"向操作者提供一些信息/指导",
    "EventType4": 		"向操作者提供定时器以执行一些活动",
    "EventType": 		"您希望Trima如何为您提供帮助？",
    "EventBarcode": 	"通过条形码请求信息",
    "EventButton": 		"通过屏幕上的按钮请求信息",
    "EventInfo": 		"通过Trima屏幕通知操作者",
    "EventTimer": 		"提供一个定时器",
    "EventName": 		"此事件的名字是什么？",
    "EventDescription": "提供该事件的描述",
    "EventButtonTitle": "输入屏幕上可用的选项",
    "EventTimerTitle":  "定时器间隔/持续时间是多少？",
	"EventInfoOk":		"好的",
	"ContactName":		"让我们谈谈",
	"Contact":  		"如果您有任何疑问、困难或建议，请随时与我们联系：",
	"ExportTo":			"输出到",
	"TrimaSteps":[
		"在启动时",
		"在装载系统前",
		"在管路套件测试前",
		"在抗凝剂连接前",
		"在输入献血者信息前",
		"在献血者准备前",
		"在开始采血前",
		"采集期间",
		"在献血者断开连接前",
		"在连接替代解决方案前",
		"在连接PAS前",
		"在连接红细胞添加剂解决方案前",
		"在产品封口前",
		"在下一个程序前"
    ],
	"demoEvents":[
		[
			"Barcode",
			"ACD-A批次",
			"请扫描ACD-A批号"
		],
		[
			"Barcode",
			"献血者编号",
			"请扫描献血者编号"
		],
		[
			"Barcode",
			"献血编号",
			"请扫描献血编号"
		],
		[
			"Barcode",
			"样品管",
			"请扫描每个样品管上的条形码"
		],
		[
			"Barcode",
			"管路套件批次",
			"请扫描管路套件批次号"
		],
		[
			"Barcode",
			"操作者编号",
			"请扫描执行操作人员的操作者编号"
		],				
		[
			"Button",
			"检查献血者",
			"献血者是否舒适？",
			["是", "", "", "", "否"],
		],
		[
			"Info",
			"血袋贴标",
			"记得对所有采集的血袋贴标",
		],
		[
			"Button",
			"献血手臂",
			"请选择用于静脉穿刺的手臂",
			["左","","","","右"],
		],
		[
			"Timer",
			"静脉穿刺质量",
			"请确认静脉穿刺部位是否合适",
            ["1","00","","",""],
		],
		[
			"Timer",
			"献血者舒适度",
			"请确认献血者是否舒适",
            ["10","00","","",""],
		],
		[
			"Timer",
			"产品确认",
			"检查采集产品的外观",
            ["20","00","","",""],
        ]
    ]
}
