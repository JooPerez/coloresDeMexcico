function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 21.478518, lng: -101.215245 },
        zoom: 14,
        mapId: 'c8dacfdc48057c4',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      });
      //la brujaUna Familia nos cuenta la historia de San Felipe Torres Mochas Guanajuato, Cotidiano399 
     //Una charla con una familia originaria de la ciudad de San Felipe Guanajuato donde se plato va acerca de la historia, pasajes, atractivos y su gente.
      const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">La História de San Felipe</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><iframe width="280" height="160" src="https://www.youtube.com/embed/lxQJj69jyLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
    "<p><b>Fundación de San Felipe </b>, echos importantes de <b>El Município</b>" +
    "</p>" +
    '<p>Attribution: Wikipedia, <a href="https://es.wikipedia.org/wiki/San_Felipe_(Guanajuato)">' +
    "San Felipe, Guanajuato</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //Zafarrancho 1936
    const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Zafarrancho 1936</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><iframe width="280" height="160" src="https://www.youtube.com/embed/Rn9MTjDwz5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
    "<p><b>Masacre en el Jardín principal de  </b>San Felipe Guanajuato 1936. <b></b>" +
    "</p>" +
    '<p>Attribution: Wikipedia, <a href="https://es.wikipedia.org/wiki/San_Felipe_(Guanajuato)">' +
    "San Felipe, Guanajuato</a> " +
    "(last visited June 22, 2009).</p>" +
    "<a href='https://www.google.com.mx/maps/dir//San+Felipe,+Gto./@21.4787974,-101.2183681,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842afdfdc5f044d5:0x5033021fe06e9996!2m2!1d-101.2157483!2d21.4789227!3e0?hl=es' target='_blank' class='btn'>Como Llegar</a>&nbsp;&nbsp;"+
    '<a href="#about" class="btn">Más Información</a>&nbsp;&nbsp;'+
    '<a href="../TURISMO/historias-y-relatos.html" class="btn">Salir</a>'+
    "<br>"+
    "</div>" +
    
    "</div>";
    //La Historia de San Felipe 
    const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Zafarrancho 1936</h1>' +
    '<div id="bodyContent">' +
    '<div class="model-conteiner"><iframe width="280" height="160" src="https://www.youtube.com/embed/Rn9MTjDwz5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
    "<p><b>Masacre en el Jardín principal de  </b>San Felipe Guanajuato 1936. <b></b>" +
    "</p>" +
    '<p>Attribution: Wikipedia, <a href="https://es.wikipedia.org/wiki/San_Felipe_(Guanajuato)">' +
    "San Felipe, Guanajuato</a> " +
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
          "La Historia de San Felipe",
          21.483610, 
          -101.216520,
          "../svg/escudo-sanfe.svg",
          75,
          70,
          contentString1
        ],
        [
          "Zafarrancho de 1936",
           21.478431, 
           -101.215829,
          "../img/turismo/svg_js/ZafaRancho.svg",
          75,
          70,
          contentString2
        ],
        
        [
          "El Panteon Municipal",
          21.469247,
          -101.217853,
          "../svg/Turismo_hist/Panteon.svg",
          75,
          70,
          contentString3
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