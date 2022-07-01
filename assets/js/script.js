document.querySelector ("#boton").addEventListener("click", function () {
  var inputCantidad = document.querySelector("#input-1").value;
  var inputColor = document.querySelector("#input-2").value;
  var price = document.querySelector("#precio").value;
  var total = inputCantidad * price;
  document.querySelector("#cantidad").innerHTML = "Cantidad:" + inputCantidad;
  document.querySelector("#total").innerHTML = "Total:" + total;
  color.setAttribute("style", `background-color:${inputColor}`).innerHTML;
});


