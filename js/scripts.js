// Business logic for Pizza

export default class Pizza {

  constructor(size, crust, cheese, sauce, meat, mushrooms, artichoke, anchovy, tomato) {
    
  }

}

// User interface logic

let tarentinos = new Pizza();


// function Tarentinos() {
//   this.orders = {};
//   this.currentOrderId = 0;
// }

// Tarentinos.prototype.addOrder = function(order) {
//   order.orderId = this.assignOrderId();
//   this.orders[order.orderId] = order;
// };

// Tarentinos.prototype.assignOrderId = function() {
//   this.currentOrderId += 1;
//   return this.currentOrderId;
// };

// // Business logic for Order

// function Order() {
//   this.orderId = 1;
//   this.crusts = {};
//   this.sizes = {};
//   this.cheeses = {};
//   this.toppings = {};
//   this.sides = {};
//   this.aficionado = {};
// };

// Order.prototype.addAficionado = function(aficionado) {
//   this.aficionado[aficionado.name] = aficionado;
// };

// Order.prototype.addPizza = function(size, crust, cheeses, toppings, sides) {
//   this.sizes["size"] = size;
//   this.crusts["crust"] = crust;
//   this.cheeses["cheeses"] = cheeses;
//   this.toppings["toppings"] = toppings;
//   this.sides["sides"] = sides;
// };

// // Business logic for Aficionado

// function Aficionado(name, address, city, state, zip, phone, email) {
//   this.name = name;
//   this.address = address;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
//   this.phone = phone;
//   this.email = email;
// };

// Business logic for order listeners

// function addOrderListeners() {
//   let checkboxes = $("input[name:cheeses]");
//   checkboxes.change(function() {

// });

// Business logic for Cheeses

// function getCheeses() {
//   let cheeses = {};
//   $("input[name:cheeses]").forEach(function() {
//     if ($("#mozzarella").val() !== undefined) {
//       cheeses["mozzarella"] = true;
//     } else if ($("#feta").val() !== undefined) {
//       cheeses["feta"] = true;
//     } else if ($("#havarti").val() !== undefined) {
//       cheeses["havarti"] = true;
//     } else if ($("#pecorinoRomano").val() !== undefined) {
//       cheeses["pecorinoRomano"] = true;
//     };
//   });
//   return cheeses
// };

// // User interface logic

// $(document).ready(function() {
//   $("#order-form").submit(function(event) {
//     console.log(event)
//       event.preventDefault();
//     // debugger
//     // addOrderListeners();
//     // console.log(cheeses);

//     // const size = $("input:radio[name=sizes]").val();
//     // console.log(size);
//     // const crust = $("input:radio[name=crusts]").val();
//     // console.log(crust);
//     // let cheeses = {};
//     // getCheeses();
//     // console.log(cheeses);
  
//     const name = $("#name").val();
//     console.log(name);
//     const address = $("#address").val();
//     const city = $("#city").val();
//     const state = $("#state").val();
//     const zip = $("#zip").val();
//     const phone = $("#phone").val();
//     const email = $("#email").val();
//     let newAficionado = new Aficionado(name, address, city, state, zip, phone, email);
//     console.log(newAficionado);
//   });
// });