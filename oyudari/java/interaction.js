//drawing tools code developed by Marco Guglielmelli http://codepen.io/MarcoGuglielmelli/pen/omnvE
// defining the variables
var canvas;
var context;
// inizializzo il canvas e definisco le azioni
window.onload = function() {
  // associo canvas e contesto alle variabili
  canvas = document.getElementById("progDisegno");
  context = canvas.getContext("2d");
  // collego gli eventi
  canvas.onmousedown = inizioDisegno;
  canvas.onmouseup = interrompoDisegno;
  canvas.onmouseout = interrompoDisegno;
  canvas.onmousemove = disegno;
};
// funzione modificaColore
// Tengo traccia della precedente icona colore selezionata
var colorePrecedente;
function modificaColore(color, img) {
  // modifico il colore in quello corrente.
  context.strokeStyle = color;
  // attribuisco la classe selezionato all’elemento cliccato.
  img.className = "selezionato";
  // rimuovo la classe selezionato agli altri elementi
  if (colorePrecedente != null) colorePrecedente.className = "";
  colorePrecedente = img;
}
// funzione modificaSpessore
// Tengo traccia della precedente icona spessore selezionata
var spessorePrecedente;
function modificaSpessore(spessore, img) {
  // modifico il colore in quello corrente.
  context.lineWidth = spessore;
  // attribuisco la classe selezionato all’elemento cliccato.
  img.className = "selezionato";
  // rimuovo la classe selezionato agli altri elementi
  if (spessorePrecedente != null) spessorePrecedente.className = "";
  spessorePrecedente = img;
}
// definisco la variabile globale disegnoAttivo settata su false
var disegnoAttivo = false;
function inizioDisegno(e) {
  // setto la variabile su true
  disegnoAttivo = true;
  // inizio un nuovo path con colore e spessore correnti
  context.beginPath();
  // posiziono l'inizio in corrispondenza del puntatore del mouse
  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function disegno(e) {
  if (disegnoAttivo == true) {
    // trovo la posizione attuale del puntatore
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    // disegno la linea fino all'attuale posizione del mouse
    context.lineTo(x, y);
    context.stroke(); 
  }
}
function interrompoDisegno() {
  disegnoAttivo = false;
}
function salva() { 
  // aggancio l'elemento img
  var imageCopy = document.getElementById("imgSalvataggio");
  // mostro i dati del canvas nell'elemento
  imageCopy.src = canvas.toDataURL();  
  // Visualizzo il div che contiene il tag img
  var imageContainer = document.getElementById("boxSalvataggio");
  imageContainer.style.display = "block";
}
function pulisci() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
