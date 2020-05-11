
function init(){
  faiGraficoLinea();
  faiGraficoTorta();
}

$(document).ready(init);

function faiGraficoLinea(){
  $.ajax({
  url: "apiLinea.php",
  method: "GET",
  success: function(data,stato) {
  var ctx = $("#line");
  // cambio il colore dei caratteri della canvas
  Chart.defaults.global.defaultFontColor = 'rgb(221, 221, 221, 0.8)';
  var myChart = new Chart(ctx, {
      type: data.type,
      data: {
          labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
          datasets: [{
              label: 'Vendite Mensili',
              data: data.data,
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
  url: "apiTorta.php",
  method: "GET",
  success: function(data,stato) {
  var ctx = $("#pie");
  // cambio il colore dei caratteri della canvas
  Chart.defaults.global.defaultFontColor = 'rgb(221, 221, 221, 0.8)';
  var myChart = new Chart(ctx, {
      type: data.tipoGrafico,
      data: {
          labels: data.agenti,
          datasets: [{
              label: 'Vendite Per Agente',
              data: data.venditeTotali,
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
