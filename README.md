# _{Application Name}_

#### _{Brief description of application}, {Date of current version}

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Software requirements (internet browser, code editor, etc.)
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase

* Download/clone instructions
1. Download this repository onto your computer by clicking the 'code' button
2. Open the project folder.
3. Double-click the index.html to open it in your web browser

*Open via Bash/GitBash:
1. Clone this repository onto your computer: git clone {PUT_REPO_HERE}
2. Navigate into the {NAME_OF_DIRECTORY}  directory, and open in VSCode or preferred text editor code .
3. Open index.html in Chrome or preferred browser

To see my live website go to {GH_PAGES_LINK_HERE}!

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Specs

* The website should allow users to place an order for a pizza of their choosing
* Each pizza should have options for different toppings and/or crust styles, cheese, sides
* Logic should include a pizza object constructor with properties for toppings and size
* Logic should also include a method that calculates the cost of the pizza and shows the cost to the customer
* Time permitting, Tarentino should make an appearance during the ordering process to charm the user, as chefs must do and dread doing

## Tests

Describe: Tarentinos();
  1. Test: "It creates an object with a key-value object pair containing an empty order"
  Code: function Tarentinos {this.orders = {}};
  Expected Output: Tarentinos {orders: {}};

Describe: Order();
  1. Test: "It creates an order object with key-value objects for menu category options"
  Code: function Order {this.crusts = {}, this.sizes = {}, this.cheeses = {}, this.toppings = {}, this.sides = {}};
  Expected Output: Order {crusts: {}, sizes: {}, cheeses: {}, toppings: {}, sides: {}}

Describe: Aficionado();
  1. Test: "It creates an aficionado object with customer information and a key-value object for order"
  Code: function Aficionado(name, street, city, state, zip, phone, email) {}
  Expected Output: Aficionado {name: name, street: street, city: city, state: state, zip: zip, phone: phone, email: email, aficionadoOrder: {}}

Describe: Tarentinos.prototype.addOrder();
  1. Test: "It adds an order to the empty key-value object in Tarentinos"
  Code: Tarentinos.prototype.addOrder = function(order) {this.orders[order.id] = order};
  Expected Output: Tarentinos {orders: order{}}

Describe: Tarentinos.prototype.assignOrderId();
  1. Test: "It adds an order ID to Order objects"
  Code: Tarentinos.prototype.assignOrderId = function() {this.currentOrderId += 1; return this.currentOrderId;}
  Expected Output: this.currentOrderId

Describe: Order.prototype.addAficionado();
  1. Test: "It adds an aficionado to Order objects"
  Code: Order.prototype.addAficionado = function(aficionado) {this.aficionado[aficionado.name] = aficionado;}
  Expected Output: tarentinos {orders: 1 {orderId: 1, crusts: {}, sizes: {}, cheeses: {}, toppings: {}, sides: {}, aficionado{name, street, city, state, zip, phone, email}}}

Describe: Order.prototype.addPizza()
  1. Test: "It adds all pizza values to the key-value objects in the Order object"
  Code: Order.prototype.addPizza = function(size, crust, cheeses, toppings, sides) {}
  Expected Output: order {orderId: 1, sizes: {size}, crusts: {crust}, cheeses: {cheese}, toppings: {toppings}, sides: {sides}, aficionado{name, street, city, state, zip, phone, email}}}

Describe: addOrderListeners();
  1. Test: "It listens for changes to the form fields"
  Code: function addOrderListeners() {}
  Expected Output:

## Refactor tests

Describe: Pizza();
  1. Test: "It creates a new pizza object with values for size, crust, cheese, sauce, meat, mushrooms, artichoke, anchovy, and tomato";
  Code: Pizza(size, crust, cheese, sauce, meat, mushrooms, artichoke, anchovy, tomato);
  Expected Output: Pizza: {size, crust, cheese, sauce, meat, mushrooms, artichoke, anchovy, tomato};

  2. Test: "It passes the item cost from the object to an item cost array";
  Code: Pizza.prototype.addItemCosts();
  Expected Output: itemCosts [sizeCost, crustCost, cheeseCost, meatCost, mushroomsCost, artichokeCost, anchovyCost, tomatoCost];

  3. Test: "It sums to the total cost using the item cost array";
  Code: Pizza.prototype.sumTotalCost(itemCosts);
  Expected Output: totalCost;


## MIT License

Copyright (c) 2021 Jonathan Stull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_