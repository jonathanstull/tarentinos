// Business logic for Tarentinos



// Business logic for Menu



// Business logic for Aficionado



// User interface logic



// Data structure **PSEUDO**

tarentinos {
  menu {
    // create a key-value object that allows a user to interact with check boxes on a form
    crusts {
      deepDish: false,
      thinCrust: false,
      thickCrust: false
    }
    sizes {
      inches8: false,
      inches12: false,
      inches16: false
    }
    cheeses {
      mozzarella: false,
      feta: false,
      havarti: false,
      pecorinoRomano: false
    }
    toppings {
      italianSausage: false,
      chickenSausage: false,
      mushrooms: false,
      lilMamas: false,
      canadaBacon: false,
      pepperoni: false,
      pineapple: never // What kind of barbarian would put pineapple on their pizza?!?
    }
    sides {
      chiliFlake: false,
      ranch: false,
      marinara: false,
      garlicButter: false
  }
  menu.method that toggles the Boolean values for menu options
  pizza constructor that passes true Boolean values for toppings from menu to customer
  menu.method TBD

  customer {
    this.name = name,
    this.street = street,
    this.city = city,
    this.state = state,
    this.zip = zip,
    this.phoneNumber = phoneNumber,
    this.email = email
    this.pizza = {
      crusts {
        deepDish: false,
        thinCrust: false,
        thickCrust: false
      }
      cheeses {
        mozzarella: false,
        feta: false,
        havarti: false,
        pecorinoRomano: false
      }
      sizes {
        inches8: false,
        inches12: false,
        inches16: false
      }
      toppings {
        italianSausage: false,
        chickenSausage: false,
        mushrooms: false,
        lilMamas: false,
        canadaBacon: false,
        pepperoni: false,
        pineapple: never // What kind of barbarian would put pineapple on their pizza?!?
      }
      sides {
        chiliFlake: false,
        ranch: false,
        marinara: false,
        garlicButter: false
    }
  }
  customer constructor
  customer.method that calculates the cost

tarentinos.method TBD
tarentinos.method TBD
}