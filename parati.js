    function obtenerRecomendacion() {
      var region = document.getElementById("region").value;
      var condiciones = document.getElementById("condiciones").value;
      
      if (region === "" || condiciones === "") {
        Swal.fire({
          title: "Error",
          text: "Debe seleccionar una región y condiciones",
          icon: "error"
        });
        return;
      }
      
      var recomendacion = "";
      
      if (region === "norte" && condiciones === "ciudad") {
        recomendacion = "Se recomienda un panel fotovoltaico de alta eficiencia.";
      } else if (region === "norte" && condiciones === "campo") {
        recomendacion = "Se recomienda un aerogenerador de tamaño mediano.";
      } else if (region === "centro" && condiciones === "ciudad") {
        recomendacion = "Se recomienda un sistema híbrido que combine paneles fotovoltaicos y aerogeneradores.";
      } else if (region === "centro" && condiciones === "campo") {
        recomendacion = "Se recomienda un aerogenerador de gran tamaño.";
      } else if (region === "sur" && condiciones === "ciudad") {
        recomendacion = "Se recomienda un sistema híbrido que combine paneles fotovoltaicos y aerogeneradores.";
      } else if (region === "sur" && condiciones === "campo") {
        recomendacion = "Se recomienda un aerogenerador de tamaño mediano.";
      }
      
      if (recomendacion !== "") {
        Swal.fire({
          title: "Recomendación",
          text: recomendacion,
          icon: "info"
        });
      } else {
        Swal.fire({
          title: "Sin recomendación",
          text: "No hay recomendación disponible para las opciones seleccionadas",
          icon: "info"
        });
      }
    }