function pagmaior() {
  window.location.href = "drinks.html"

}
function pagmenor() {
  window.location.href = "drinks.html"
  document.getElementById("wineprice").hidden = true;
  document.getElementById("beerprice").hidden = true;
}


var car = [];
var price

function buywine() {
  car.push(80)
}

function buybeer() {
  car.push(20)
}

function buyrefri() {
  car.push(10)
}

function showresults() {
  window.location.href = "price.html"
  for (car[0]; car.length; car++) {
    price =+ car;
  }
  var finalprice = document.getElementById("finalprice")
  finalprice.innerHTML = "R$" + price
}