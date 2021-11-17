onEvent("btnAceptar", "click", function( ) {
  setProperty("Login", "image", "assets/backgroundImg.png");
  if (getText("txtUsuario") == "Lucy" && getText("txtPass") == "123456") {
    setText("lblResultado", "Acceso Permitido");
    setScreen("Principal");
  } else {
    setText("lblResultado", "Acceso Denegado");
  }
});
onEvent("btnAceptarPrincipal", "click", function( ) {
  if ((getText("txtNombre") == "" || getText("txtEdad") == "") || (getText("txtCurp") == "" || getText("txtAreaDireccion") == "")) {
    setText("lblExitoso", "¡Llena los campos!");
  } else {
    setText("lblExitoso", "¡Registro Éxitoso!");
    limpiar();
  }
});
function limpiar() {
  setText("txtNombre", "");
  setText("txtEdad", "");
  setText("txtCurp", "");
  setText("txtAreaDireccion", "");
  setText("ddlDia", "");
  setText("ddlMes", "");
}
