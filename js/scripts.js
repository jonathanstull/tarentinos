// Business logic for Tarentinos

function Tarentinos() {
  this.orders = {};
}

Tarentinos.prototype.addOrder = function(order) {
  this.orders[order.orderId] = order;
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

// Business logic for Aficionado

function Aficionado(name, street, city, state, zip, phone, email) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.email = email;
};

// User interface logic



// js architecture **PSEUDO**

// tarentinos {
//   newOrder {
//     // create a key-value object that allows a user to interact with check boxes on a form
//     crusts {
//       deepDish: false,
//       thinCrust: false,
//       thickCrust: false
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