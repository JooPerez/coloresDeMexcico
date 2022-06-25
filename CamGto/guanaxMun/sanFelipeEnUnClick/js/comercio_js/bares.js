function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.478518, lng: -101.215245 },
        zoom: 16,
        mapId: '81b8af1966da2c93',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });


      const contentString1 =
      //pajaros
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Cantina Pajaros</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/pajaros.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Cantina Pajaros</b>, disfruta del ambiente ideal para disfrutar <b>Unos tragos</b>, " +
    "Al puro estilo de San Felipe " +
    "Heritage Site.</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "Como Llegar</a> " +
    "(last visited May 22, 2022).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //El Compadre
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">El Compadre</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/el-compadre.svg" width="150" height="150"></a></div>' +
    "<p><b>El Compadre</b>, Ven a disfrutar de unas ricas Micheladas</b>, acompañados de una rica botana " +
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

    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">El Gato Negro</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString5 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString6 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString7 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString8 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString9 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString10 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString11 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString12 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString13 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString14 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString15 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString16 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString17 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString18 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString19 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";

    const contentString20 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ciro´s Bar</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><a href=""><img src="../svg/comercios/bares/baresGen.svg" pasition="center" width="150" height="150"></a></div>' +
    "<p><b>Ciro´s Bar</b>, <b></b>,  " +
    "Sitio Digital en construccion " +
    ".</p>" +
    '<p>Attribution: Bares y Cantinas, <a href="">' +
    "dirWEB</a> " +
    "(last visited May 13, 2022).</p>" +
    "</div>" +
    
    "</div>";
      //Name
      //Latitude, Longitude
      //image Url
      //scaleSize width, height
      //Contenido

      const markers = [
        [
          "Cantina Pajaros",
          21.476504,
          -101.217088,
          "../svg/comercios/bares/pajaros.svg",
          100,
          95,
          contentString1
        ],
        [
          "Cantina El Compadre",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/el-compadre.svg",
          50,
          47,
          contentString2
        ],
        [
          "Cantina Ciros",
          21.4799269,
          -101.2128159,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString3
        ],
        [
          "Cantina El gato Negro",
          21.4754517,
          -101.213929,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString4
        ],
        [
          "Bar antes paska",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString5
        ],
        [
          "Bar La Ramona",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString6
        ],
        [
          "Checo´s Bar",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString7
        ],
        [
          "Mezcaleria diligencias",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString8
        ],
        [
          "meabe baar",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString9
        ],
        [
          "Cantina Viky",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString10
        ],
        [
          "Cantina mono",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString11
        ],
        [
          "Bar house",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString12
        ],
        [
          "Cantina colon1",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString13
        ],
        [
          "Cantina El Compadre2",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString14
        ],
        [
          "Cantina la central1",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString15
        ],
        [
          "Antro klub",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString15
        ],
        [
          "bar la meztiza",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString16
        ],
        [
          "Cantina la central2",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString17
        ],
        [
          "Cantina Chenchos",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString18
        ],
        [
          "Cantina las Chatas",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString19
        ],
        [
          "Cantina Congre1",
          21.4802234,
          -101.2128989,
          "../svg/comercios/bares/baresGen.svg",
          50,
          47,
          contentString20
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

        locationButton.textContent = "Aquí me encuentro";
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
                infoWindow.setContent("Aquí me encuentro");
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