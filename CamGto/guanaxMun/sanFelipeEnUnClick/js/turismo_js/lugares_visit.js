function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.482027, lng: -101.216354, },
        zoom: 15,
        mapId: '806be64e9955af87',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });
      //la casa hidalgo
      const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">La Casa Hidalgo</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href="../PAGINAS_SF_1CLK/LugaresParaVisitar/casaHidalgo/CasaHidalgo.html"><img src="../PAGINAS_SF_1CLK/LugaresParaVisitar/casaHidalgo/images/dolores.jpg" width="150" height="150"></a></div>' +
    "<p><b>Museo Casa de Hidalgo</b>, Tambien conocida <b>Como</b>, La Francia Chiquita " +
    "La Francia Chiquita o Museo Histórico Casa de Hidalgo " +
    "es un recinto museográfico ubicado en San Felipe, Guanajuato. " +
    "Perteneciente a la arquitectura civil del siglo XVII " +
    'Se dice que el 2 de febrero de 1792 el llamado "padre de la Patria", ' +
    " Miguel Hidalgo renunció a ser tanto rector, tesorero y también catedrático de teología " +
    "Colegio de San Nicolás de Valladolid para después partir hacia el estado de Colima " +
    " a servir al curato que era un cargo que pertenecía a un cura. " +
    "Miguel Hidalgo cuidó la parroquia, entonces incluida en la Intendencia de Michoacán," +
    " desde el 10 de marzo hasta 26 de noviembre del mismo año.</p>" +
    '<p>Attribution: Museo Casa Hidalgo, <a href="../PAGINAS_SF_1CLK/LugaresParaVisitar/CASA HIDALGO/CasaHidalgo.html">' +
    "Turismo-Lugares Para Vissitar-Casa Hidalgo</a> " +
    "(Ultima visita Mayo 27, 2022).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/lugares-para-visitar.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //la Iglesia del Señor de Esquipulita
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Iglesia del Señor de Esquipulita</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //El señor de la Conquista
    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">El Señor de la Conquista</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //San Miguelito
    const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">San Miguelito</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";

    //Jardin de la Secundaria
    const contentString5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jardin de la Secundaria</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";

    //Jardin Principal
    const contentString6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jardin Principal</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";

    //Jardin del Pueblito
    const contentString7 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jardin del Pueblito</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>La Iglesia del Señor de Esquipula</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
    "Te esperamos en calle Jimenez " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
      //Name
      //Latitude, Longitude
      //image Url
      //scaleSize width, height
      //Contenido

      const markers = [
        [
          "Museo Casa Hidalgo",
          21.4784126,
          -101.2191866,
          "../img/turismo/svg_js/casa_hidalgo.svg",
          80,
          75,
          contentString1
        ],
        [
          "Iglesia del Señor de Esquipulita",
          21.472946,
          -101.218543,
          "../img/turismo/svg_js/esquipulita.svg",
          50,
          47,
          contentString2
        ],
        [
          "Señor de La Conquista, Parroquia Principal",
          21.478407, 
          -101.214708,
          "../img/turismo/svg_js/conquista.svg",
          65,
          60,
          contentString3
        ],
        [
          "San Miguelito",
          21.489381, 
          -101.220555,
          "../img/turismo/svg_js/sanMiguelito.svg",
          65,
          60,
          contentString4
        ],
        [
          "Jardin de la Secundaria",
          21.479840, 
          -101.220624,
          "../img/turismo/svg_js/jardin1.svg",
          65,
          60,
          contentString5
        ],
        [
          "Jardin Principal",
          21.478792, 
          -101.216096,
          "../img/turismo/svg_js/jardin1.svg",
          65,
          60,
          contentString6
        ],
        [
          "jardin del peblito",
          21.475506, 
          -101.216525,
          "../img/turismo/svg_js/jardin1.svg",
          65,
          60,
          contentString7
        ],

      ];

      for(let i = 0 ; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
          position: { lat:currMarker[1], lng:currMarker[2]},
          map,
          title: currMarker[0],
          icon: {
              url: currMarker[3],
              scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
          },
          animation: google.maps.Animation.DROP 
      });
      const infowindow = new google.maps.InfoWindow({
        content: currMarker[6],
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
      
      }

      //area destinada a geolocalizacion
      infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");

        locationButton.textContent = "Mi ubicación";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
      
                infoWindow.setPosition(pos);
                infoWindow.setContent("Aqui me encuentro.");
                infoWindow.open(map);
                map.setCenter(pos);
                marker.setMap(map);
              },
              () => {
                handleLocationError(true, infoWindow, map.getCenter());
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
      
      
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }
        //termina geolocalizacion

     

    
      

}