<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Advanced Dashboard</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

        <div class="container">
            <div class="grafici">
              <div class="grafico1">
                <canvas id="fatturato"></canvas>
              </div>
              <div class="grafico2">
                <canvas id="fatturato_by_agent"></canvas>
              </div>
              <div class="grafico3">
                <canvas id="team_efficiency"></canvas>
              </div>
            </div>
        </div>

        <script src="main.js" charset="utf-8"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/locale/it.min.js"> </script>
    </body>
</html>
