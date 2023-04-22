function pagmaior() {
  window.location.href = "drinks.html?age=true"

}
function pagmenor() {
  window.location.href = "drinks.html?age=false"
}


let car = [];

function buywine() {
  car.push(80);
  console.log(car);
}

function buybeer() {
  car.push(20);
  console.log(car);
}

function buyrefri() {
  car.push(10);
  console.log(car);
}

function showresults() {
  let price = 0;

  if (car.length > 0) {
  for (let i = 0; i < car.length; i++) {
    price =+ car[i];
  }
  }
  
  if (price > 0) {
    const value = localStorage.getItem("price");
    localStorage.setItem('price', Number(value) + price);
  }
  window.location.href = "price.html";
}