
function init(){
  //richiamo le funzioni corrispondenti all'input utente, in questo modo mi evito errori in console.
  //i dati vengono trasmessi da php comunque solo per il livello dell'utente.
  //a seconda del livello nascondo o mostro in html i grafici solo per le funzioni che hanno dati

  //se non viene inserito alcun valore, l'utente è guest, quindi richiamo la prima funzione e nascondo in html i grafici
  // di livello superiore.
    faiGraficoLinea();
    $(".grafico2").hide();
    $(".grafico3").hide();

  //se il livello è employee svelo il grafico corrispondente nascosto per l'utente guest
  if (window.location.search==="?access=employee"){
    faiGraficoLinea();
    faiGraficoTorta();
    $(".grafico2").show();
  }
  //se il livello è clevel mostro tutti i grafici
  if (window.location.search==="?access=clevel"){
    faiGraficoLinea();
    faiGraficoTorta();
    faiGraficoTripliceLinea();
    $(".grafico2").show();
    $(".grafico3").show();
  }
  // faiGraficoLinea();
  // faiGraficoTorta();
  // faiGraficoTripliceLinea();
}

$(document).ready(init);

function faiGraficoLinea(){
  $.ajax({
  url: "apiNuova.php"+window.location.search,
  method: "GET",
  success: function(data,stato) {
    console.log(data);
  var ctx = $("#fatturato");
  // cambio il colore dei caratteri della canvas
  Chart.defaults.global.defaultFontColor = 'rgb(221, 221, 221, 0.8)';
  var myChart = new Chart(ctx, {
      type: data[0].type,
      data: {
          labels: moment.months(),
          datasets: [{
              label: 'Vendite Mensili',
              data: data[0].data,
              backgroundColor: [
                'rgba(150, 33, 146, 0.2)',
                'rgba(82, 40, 204, 0.2)',
                'rgba(4, 51, 255, 0.2)',
                'rgba(0, 146, 146, 0.2)',
                'rgba(0, 249, 0, 0.2)',
                'rgba(202, 250, 0, 0.2)',
                'rgba(255, 251, 0, 0.2)',
                'rgba(255, 199, 0, 0.2)',
                'rgba(255, 147, 0, 0.2)',
                'rgba(255, 80, 0, 0.2)',
                'rgba(255, 38, 0, 0.2)',
                'rgba(216, 34, 83, 0.2)'
              ],
              borderColor: [
                  'rgba(150, 33, 146, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  },
  error: function(richiesta,stato,errore){
    alert("Chiamata fallita!!!");
  }
});
}

function faiGraficoTorta(){
  $.ajax({
  url: "apiNuova.php"+window.location.search,
  method: "GET",
  success: function(data,stato) {
  var ctx = $("#fatturato_by_agent");
  // cambio il colore dei caratteri della canvas
  Chart.defaults.global.defaultFontColor = 'rgb(221, 221, 221, 0.8)';
  var myChart = new Chart(ctx, {
      type: data[1].tipoGrafico,
      data: {
          labels: data[1].agenti,
          datasets: [{
              label: 'Vendite Per Agente',
              data: data[1].venditeTotali,
              backgroundColor: [
                'rgba(4, 51, 255, 0.2)',
                'rgba(0, 249, 0, 0.2)',
                'rgba(255, 251, 0, 0.2)',
                'rgba(216, 34, 83, 0.2)'
              ],
              borderColor: [
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 38, 0, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  },
  error: function(richiesta,stato,errore){
    alert("Chiamata fallita!!!");
  }
});
}

function faiGraficoTripliceLinea(){
  $.ajax({
  url: "apiNuova.php"+window.location.search,
  method: "GET",
  success: function(data,stato) {
  var ctx = $("#team_efficiency");
  // cambio il colore dei caratteri della canvas
  Chart.defaults.global.defaultFontColor = 'rgb(221, 221, 221, 0.8)';
  var myChart = new Chart(ctx, {
      type: data[2].type,
      data: {
          labels: moment.months(),
          datasets: [{
              label: 'Team 1',
              data: data[2].andamentoSquadre[0],
              backgroundColor: [
                'rgba(150, 33, 146, 0.2)',
                'rgba(82, 40, 204, 0.2)',
                'rgba(4, 51, 255, 0.2)',
                'rgba(0, 146, 146, 0.2)',
                'rgba(0, 249, 0, 0.2)',
                'rgba(202, 250, 0, 0.2)',
                'rgba(255, 251, 0, 0.2)',
                'rgba(255, 199, 0, 0.2)',
                'rgba(255, 147, 0, 0.2)',
                'rgba(255, 80, 0, 0.2)',
                'rgba(255, 38, 0, 0.2)',
                'rgba(216, 34, 83, 0.2)'
              ],
              borderColor: [
                  'rgba(4, 51, 255, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'Team 2',
              data: data[2].andamentoSquadre[1],
              backgroundColor: [
                'rgba(150, 33, 146, 0.2)',
                'rgba(82, 40, 204, 0.2)',
                'rgba(4, 51, 255, 0.2)',
                'rgba(0, 146, 146, 0.2)',
                'rgba(0, 249, 0, 0.2)',
                'rgba(202, 250, 0, 0.2)',
                'rgba(255, 251, 0, 0.2)',
                'rgba(255, 199, 0, 0.2)',
                'rgba(255, 147, 0, 0.2)',
                'rgba(255, 80, 0, 0.2)',
                'rgba(255, 38, 0, 0.2)',
                'rgba(216, 34, 83, 0.2)'
              ],
              borderColor: [
                  'rgba(0, 249, 0, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
              ],
              borderWidth: 1
          },
          {
              label: 'Team 3',
              data: data[2].andamentoSquadre[2],
              backgroundColor: [
                'rgba(150, 33, 146, 0.2)',
                'rgba(82, 40, 204, 0.2)',
                'rgba(4, 51, 255, 0.2)',
                'rgba(0, 146, 146, 0.2)',
                'rgba(0, 249, 0, 0.2)',
                'rgba(202, 250, 0, 0.2)',
                'rgba(255, 251, 0, 0.2)',
                'rgba(255, 199, 0, 0.2)',
                'rgba(255, 147, 0, 0.2)',
                'rgba(255, 80, 0, 0.2)',
                'rgba(255, 38, 0, 0.2)',
                'rgba(216, 34, 83, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 38, 0, 1)',
                  'rgba(82, 40, 204, 1)',
                  'rgba(4, 51, 255, 1)',
                  'rgba(0, 146, 146, 1)',
                  'rgba(0, 249, 0, 1)',
                  'rgba(202, 250, 0, 1)',
                  'rgba(255, 251, 0, 1)',
                  'rgba(255, 199, 0, 1)',
                  'rgba(255, 147, 0, 1)',
                  'rgba(255, 80, 0, 1)',
                  'rgba(255, 38, 0, 1)',
                  'rgba(216, 34, 83, 1)'
              ],
              borderWidth: 1
          }

        ]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  },
  error: function(richiesta,stato,errore){
    alert("Chiamata fallita!!!");
  }
});
}
