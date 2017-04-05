// --- Nutzer Datenbank ------------------------------------------------------------------------




// Variablen ---
var nutzerAntwort = new Array();
var beantwortet = 0;


// --- Funktionen  --------------------------------------------------------------------------

// Render Quiz - holt die Fragen mittels Radiobuttons ab ---
function renderQuiz() {
  for(i=0;i<fragen.length;i++) {
    document.writeln('<p class="question">' + fragen[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<auswahl[i].length;j++) {
      document.writeln('<input type="radio" name="antwort' + i + '" value="' + auswahl[i][j] + '" id="antwort' + i + '_' + j + '" class="question_' + i + '" onclick="sendeAntwort(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="antwort' + i + '_' + j + '"> ' + auswahl[i][j] + '</label><br>');
    }
  }

}
// Neues Spiel starten ---
function quizNeustarten(zeigePassende) {
  if(zeigePassende)
    if(!confirm("Bist Du Dir sicher dass Du neu anfangen willst ?"))
      return false;
  document.location = document.location;
}

// Eingabe übergeben und Frage ausgrauen ---
function sendeAntwort(frageID, obj, classId, labelId) {
  nutzerAntwort[frageID] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  frageAbschalten(classId);
  beantwortet++;
}

// Benachrichtigung wenn noch nicht alle Fragen beantwortet wurden
function showScore() {
  if(beantwortet != antworten.length) {
    alert("Du hast noch nicht alle Fragen beantwortet!");
    return false;
  }
  
  //  Fragt Anzahl der Fragen ab
  laengeFragen = antworten.length;
  richtig = 0;
  falsch = 0;
  for(i=0;i<laengeFragen;i++) {
    if(nutzerAntwort[i] == antworten[i])
      richtig++;
    else
      falsch++;
  }
  // Gibt das Ergebniss aus
  qn = Math.round((richtig / laengeFragen) * 100);
  alertMsg = "Du hast " + richtig + " von " + laengeFragen + "Fragen richtig.\n\n";
  alertMsg += "Du hast " + qn + "% der Fragen richtig beantwortet! \n\n";
  
 // Neustarten
  if(qn < 100) {
    if(confirm(alertMsg))
      quizNeustarten(false);
    else
      return false;
  } else {
    alert(alertMsg);
  }
}
function frageAbschalten(classId) {
  var alltags=document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}





// --- Fragen erstellen -------------------------------------------------------------------




var fragen = new Array();
var auswahl = new Array();
var antworten = new Array();
var reaktion = new Array();

// Fragen hinzufügen

fragen[0] = "1) JavaScript ist ...";
auswahl[0] = new Array();
auswahl[0][0] = "das selbe wie Java";
auswahl[0][1] = "eine art von Java";
auswahl[0][2] = "etwas anderes als Java";
auswahl[0][3] = "in Java geschrieben";
antworten[0] = auswahl[0][2];

fragen[1] = "2) JavaScript ist ...";
auswahl[1] = new Array();
auswahl[1][0] = "Subjektiv";
auswahl[1][1] = "Objektiv";
auswahl[1][2] = "Narrativ";
auswahl[1][3] = "Objektbassiert";
antworten[1] = auswahl[1][3];

fragen[2] = "3) JavaScript heisst eigentlich ...";
auswahl[2] = new Array();
auswahl[2][0] = "AcmeScript";
auswahl[2][1] = "AndreScript";
auswahl[2][2] = "JonasScript";
auswahl[2][3] = "HTML";
antworten[2] = auswahl[2][0];

fragen[3] = "4) JavaScript läuft nur aus Windows";
auswahl[3] = new Array();
auswahl[3][0] = "Wahr";
auswahl[3][1] = "Falsch";
antworten[3] = auswahl[3][1];

fragen[4] = "5) Semikolons sind optional am Ende einer Eingabe in JavaScript?";
auswahl[4] = new Array();
auswahl[4][0] = "Wahr";
auswahl[4][1] = "Falsch";
antworten[4] = auswahl[4][1];

fragen[5] = "6) Die 4 Basisdatentypen sind:";
auswahl[5] = new Array();
auswahl[5][0] = "strings, numbers, boolins, und bils";
auswahl[5][1] = "strings, text, Booleans, und nulls";
auswahl[5][2] = "strings, numbers, Booleans, und nulls";
auswahl[5][3] = "strings, numbers, Booleans, und zeros";
antworten[5] = auswahl[5][2];


fragen[6] = "7) Mit JavaScript kann man auch Windows 10 Apps programmieren?";
auswahl[6] = new Array();
auswahl[6][0] = "Wahr";
auswahl[6][1] = "Falsch";
antworten[6] = auswahl[3][0];

fragen[7] = "8) Ist es möglich eine anonyme Funktion als Argument an eine weitere Funktion weiterzugeben?";
auswahl[7] = new Array();
auswahl[7][0] = "Wahr";
auswahl[7][1] = "Falsch";
antworten[7] = auswahl[3][0];

fragen[8] = "9) Javascript ist eine weiterentwickelte Scriptsprache der Programmiersprache Java. ?";
auswahl[8] = new Array();
auswahl[8][0] = "Wahr";
auswahl[8][1] = "Falsch";
antworten[8] = auswahl[3][1];

