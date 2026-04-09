document.getElementById("form-registroactividades").addEventListener("submit", function(a) {
  a.preventDefault();

  // pedir elementos del form
  const tipo=document.getElementById("tipo-actividad").value;
  const horas=parseInt(document.getElementById("horas-actividad").value);
  const dia=document.getElementById("dia-actividad").value;
  const archivo=document.getElementById("archivo").files[0];
  const enlace=document.getElementById("enlace-actividad").value.trim();
  
  document.getElementById("error-tipo").classList.remove("visible");
  document.getElementById("error-dia").classList.remove("visible");
  document.getElementById("error-horas").classList.remove("visible");
  document.getElementById("error-archivo").classList.remove("visible");
  document.getElementById("error-enlace").classList.remove("visible");

  let valido=true;
  //validacion

  if (tipo==="") {
    document.getElementById("error-tipo").classList.add("visible");
    valido=false;
  }

  if (dia==="") {
    document.getElementById("error-dia").classList.add("visible");
    valido=false;
  }
  if (isNaN(horas)|| horas<1 || horas>40) {
    document.getElementById("error-horas").classList.add("visible");
    valido=false;
  }
  if (!archivo) {
    document.getElementById("archivo").classList.add("visible");
    valido=false;
  }
  if (enlace ==="") {
    document.getElementById("error-enlace").classList.add("visible");
    valido=false;
  }
  if (valido ===false) return;

  //agregar actividad
  const item=document.createElement("div");
  item.classList.add("actividad-item");
  item.innerHTML=
    '<span class="tipo">' + tipo + '</span>' + " - " + 
    '<span class="dia">' + dia + '</span>'
    + '<span>' + " - " + horas + ' hrs</span>' + 
    " - " + "Archivo y Enlace subidos correctamente";

  document.getElementById("lista-actividades").appendChild(item);

  //actualizar contador
  const total=document.querySelectorAll(".actividad-item").length;
  document.getElementById("total-actividades").textContent=total;

  //limpiar form
  document.getElementById("tipo-actividad").value="";
  document.getElementById("dia-actividad").value="";
  document.getElementById("horas-actividad").value="";
  document.getElementById("archivo").value="";
  document.getElementById("enlace-actividad").value="";

});