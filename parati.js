function obtenerRecomendacion() {
  var region = document.getElementById("region").value;
  var condiciones = document.getElementById("condiciones").value;
  
  if (region === "" || condiciones === "") {
    alert("Debe seleccionar una región y condiciones");
    return;
  }
  
  var recomendacion = "";
  
  if (region === "norte" && condiciones === "ciudad") {
    recomendacion = "Se recomiendan paneles fotovoltaicos de alta eficiencia, aprovechando el clima tropical, el cual potencia el uso del mismo, ya que al ser una ciudad los vientos son interceptados por estructuras altas, o no son consistentes como para adquirir un aerogenerador y que sea rentable.";
  } else if (region === "norte" && condiciones === "campo") {
    recomendacion = "Se recomienda un aerogenerador de tamaño mediano, como el RB2, o el LIAM F2 UWT, aprovechando el viento sin intercepciones.";
  } else if (region === "centro" && condiciones === "ciudad") {
    recomendacion = "Se recomienda un sistema híbrido que combine paneles fotovoltaicos y aerogeneradores, como el sistema de RidgeBlade que combina las caracteristicas del RB1 y RB2, junto con paneles fotovoltaicos.";
  } else if (region === "centro" && condiciones === "campo") {
    recomendacion = "Se recomienda un aerogenerador de gran tamaño, o los equipos RB1, ya que pueden colocarse en los tejados y se adhieren muy bien a las estructuras, optimizando la recolecciòn de viento.";
  } else if (region === "sur" && condiciones === "ciudad") {
    recomendacion = "Se recomienda un aerogenerador como el CW100 de IceWind, que permite colocar multiples aerogeneradores en una zona y trabajar todos sin problema, aprovechando la consistencia y velocidad de los vientos del sur.";
  } else if (region === "sur" && condiciones === "campo") {
    recomendacion = "Se recomienda un aerogenerador de tamaño mediano, ya que no va a ser necesario exigirse demasiado, gracias a los vientos consistentes y veloces de la zona, cualquier aerogenerador de nuestra página puede rendir muy bien.";
  } else if (region === "oeste" && condiciones === "ciudad") {
    recomendacion = "Se recomiendan paneles fotovoltaicos por la altura de las llanuras, que permiten optimizar la recolección de energía solar.";
  } else if (region === "oeste" && condiciones === "campo") {
    recomendacion = "Se recomiendan paneles fotovoltaicos por la altura de las llanuras, que permiten optimizar la recolección de energía solar, y a su vez, los aerogeneradores medianos como los LIAM F1 UWT o el RB1/RB2 también son alternativas rentables, ya que no hay edificios que intercepten el viento.";
  }
  
  if (recomendacion !== "") {
    alert("Recomendación:\n\n" + recomendacion);
  } else {
    alert("Sin recomendación\n\nNo hay recomendación disponible para las opciones seleccionadas");
  }
}