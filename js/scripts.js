// Business logic for Tarentinos

let tarentinos = new Tarentinos();

function Tarentinos() {
  this.orders = {};
  this.currentOrderId = 0;
}

Tarentinos.prototype.addOrder = function(order) {
  order.orderId = this.assignOrderId();
  this.orders[order.orderId] = order;
};

Tarentinos.prototype.assignOrderId = function() {
  this.currentOrderId += 1;
  return this.currentOrderId;
};

// Business logic for Order

function Order() {
  this.orderId = 1;
  this.crusts = {};
  this.sizes = {};
  this.cheeses = {};
  this.toppings = {};
  this.sides = {};
  this.aficionado = {};
};

Order.prototype.addAficionado = function(aficionado) {
  this.aficionado[aficionado.name] = aficionado;
};

Order.prototype.addPizza = function(size, crust, cheeses, toppings, sides) {
  this.sizes["size"] = size;
  this.crusts["crust"] = crust;
  this.cheeses["cheeses"] = cheeses;
  this.toppings["toppings"] = toppings;
  this.sides["sides"] = sides;
};

// Business logic for Aficionado

function Aficionado(name, address, city, state, zip, phone, email) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.email = email;
};

// Business logic for order listeners

function addOrderListeners() {

};

// User interface logic

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
      // need to call contact listeners function

    const size = $("input:radio[name=sizes]").val();
    const crust = $("input:radio[name=crusts]").val();

    const name = $("form#name").val();
    const address = $("form#address").val();
    const city = $("form#city").val();
    const state = $("form#state").val();
    const zip = $("form#zip").val();
    const phone = $("form#phone").val();
    const email = $("form#email").val();
    let newAficionado = new Aficionado(name, address, city, state, zip, phone, email);
    console.log(newAficionado);
  });
});

// function addCheeses() {
//   if ($("#mozzarella").is(":checked") === true) {
//     cheeses["mozzarella"] = true;
//   } else if ($("#feta").is(":checked") === true) {
//     let cheeses["feta"] = true;
//   } else if ($("#havarti").is(":checked") === true) {
//     cheeses["havarti"] = true;
//   } else if ($("#pecorinoRomano").is(":checked") === true) {
//     cheeses["havarti"] = true;
//   }
//   return cheeses;
// };

// js architecture **PSEUDO**

// tarentinos {
//   newOrder {
//     // create a key-value object that allows a user to interact with check boxes on a form
//     crusts {
//       deepDish: false,
//       pan: false,
//       traditional: false
//     }
//     sizes {
//       inches8: false,
//       inches12: false,
//       inches16: false
//     }
//     cheeses {
//       mozzarella: false,
//       feta: false,
//       havarti: false,
//       pecorinoRomano: false
//     }
//     toppings {
//       italianSausage: false,
//       chickenSausage: false,
//       mushrooms: false,
//       lilMamas: false,
//       canadaBacon: false,
//       pepperoni: false,
//       pineapple: never // What kind of barbarian would put pineapple on their pizza?!?
//     }
//     sides {
//       chiliFlake: false,
//       ranch: false,
//       marinara: false,
//       garlicButter: false
//   }
//   newOrder.method that toggles the Boolean values for menu options
//   newOrder constructor that passes true Boolean values for toppings from menu to customer
//   newOrder.method TBD

//   aficionado {
//     this.name = name,
//     this.street = street,
//     this.city = city,
//     this.state = state,
//     this.zip = zip,
//     this.phone = phone,
//     this.email = email
//     this.aficionadoOrder = {
//       crusts {
//         deepDish: false,
//         thinCrust: false,
//         thickCrust: false
//       }
//       cheeses {
//         mozzarella: false,
//         feta: false,
//         havarti: false,
//         pecorinoRomano: false
//       }
//       sizes {
//         inches8: false,
//         inches12: false,
//         inches16: false
//       }
//       toppings {
//         italianSausage: false,
//         chickenSausage: false,
//         mushrooms: false,
//         lilMamas: false,
//         canadaBacon: false,
//         pepperoni: false,
//         pineapple: never // What kind of barbarian would put pineapple on their pizza?!?
//       }
//       sides {
//         chiliFlake: false,
//         ranch: false,
//         marinara: false,
//         garlicButter: false
//     }
//   }
//   aficionado constructor
//   aficionado.method that calculates the cost

// tarentinos.method TBD
// tarentinos.method TBD
// }