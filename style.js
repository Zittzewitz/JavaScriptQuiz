// --- Nutzer Datenbank ------------------------------------------------------------------------




// --- Funktionen SSS --------------------------------------------------------------------------

var nutzerAntwort = new Array();
var beantwortet = 0;

function renderQuiz() {
  for(i=0;i<fragen.length;i++) {
    document.writeln('<p class="question">' + fragen[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    for(j=0;j<auswahl[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + auswahl[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="sendeAntwort(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + auswahl[i][j] + '</label><br />');
    }
  }

}
function quizNeustarten(zeigePassende) {
  if(zeigePassende)
    if(!confirm("Bist Du Dir sicher dass Du neu anfangen willst ?"))
      return false;
  document.location = document.location;
}
function sendeAntwort(frageID, obj, classId, labelId) {
  nutzerAntwort[frageID] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  frageAbschalten(classId);
  zeigeErgebniss(frageID);
  beantwortet++;
}
function zeigeErgebniss(frageID) {
  if(antworten[frageID] == nutzerAntwort[frageID]) {
    document.getElementById('result_' + frageID).innerHTML = '<img src="richtig.gif" style="border:0" alt="richtig!" />';
  } else {
    document.getElementById('result_' + frageID).innerHTML = '<img src="falsch.gif" style="border:0" alt="falsch!" />';
  }
}
function showScore() {
  if(beantwortet != antworten.length) {
    alert("Du hast noch nicht alle Fragen beantwortet!");
    return false;
  }
  laengeFragen = antworten.length;
  richtig = 0;
  falsch = 0;
  for(i=0;i<laengeFragen;i++) {
    if(nutzerAntwort[i] == antworten[i])
      richtig++;
    else
      falsch++;
  }
  pc = Math.round((richtig / laengeFragen) * 100);
  alertMsg = "Du hast " + richtig + " von " + laengeFragen + "Fragen richtig.\n\n";
  alertMsg += "Du hast " + pc + "% der Fragen richtig beantwortet! \n\n";
  if(pc == 100)
    alertMsg += reaktion[0];
  else if(pc >= 90)
    alertMsg += reaktion[1];
  else if(pc >= 70)
    alertMsg += reaktion[2];
  else if(pc > 50)
    alertMsg += reaktion[3];
  else if(pc >= 40)
    alertMsg += reaktion[4];
  else if(pc >= 20)
    alertMsg += reaktion[5];
  else if(pc >= 10)
    alertMsg += reaktion[6];
  else
    alertMsg += reaktion[7];
  if(pc < 100) {
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

// Reaktionen auf das Ergebniss
reaktion[0] = "Super gemacht! Top Punktzahl!!";
reaktion[1] = "Super! Versuchs nochmal um 100% zu erreichen!"
reaktion[2] = "Gut gemacht. Das ist ein tolles Ergebniss. Kannst Du das besser?";
reaktion[3] = "Schön. Du hast über 50% der Fragen richtig. Versuche es gleich nochmal ...";
reaktion[4] = "Ein paar Antworten sind immerhin richtig. Das kannst Du aber besser!";
reaktion[5] = "Das war aber nichts. Versuch es gleich noch mal.";
reaktion[6] = "Das war ja wirklich schlecht. Da muss sich Deine Mutter aber für schämen";
reaktion[7] = "Ach Du Scheisse! Bist Du sicher dass Du überhaupt lesen kannst?";
