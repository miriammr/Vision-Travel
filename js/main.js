$(function () {
  //Agregar automaticamente pestañas al menu
  $("section").each(function () {
    var tituloSeccion = $(this).find("h2").text();
    var idSeccion = $(this).attr("id");
    console.log(tituloSeccion);
    $("#menu-principal").append(
      '<li class="nav-item">' +
        '<a class="nav-link" href="#' +
        idSeccion +
        '">' +
        tituloSeccion +
        "</a></li>"
    );
    $("#menu-secundario").append(
      '<li class="nav-item">' +
        '<a class="nav-link" href="#' +
        idSeccion +
        '">' +
        tituloSeccion +
        "</a></li>"
    );
  });
  
  //Agregar efecto de superposición al momento de hacer clic en el icono de menu
  $("#inicio .navbar-toggler").click(function () {
    if ($(this).attr("aria-expanded") == "true") {
      $("#inicio .navbar").css("background-color", "#c9a14588");
      $("#inicio .navbar").css("filter", "saturate(50%)");
    }
    else {
      $("#inicio .navbar").css("background-color", "#c9a24536");
    }
  })
});

//Habilitar la opcion popover
$(function () {
  $('[data-bs-toggle="popover"]').popover();
});

//Abrir link en nueva pestaña 
function open_link() {
  window.open(
    "https://tipsparatuviaje.com/lugares-turisticos-de-peru/",
    "_blank"
  );
}

