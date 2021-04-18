Pizza Parlor
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

// user-submitted form with drop-down menus for pizza toppings
// constructor for a pizza including nested objects for toppings
// each topping is an array consisting of a value push from a branch that determines cost the cost based on user input
// the final equation will sum the values in the array using a forEach loop and return the cost of the pizza

Data architecture
// refactor this architecture using classes

Pizza {
  this.size = []; // empty array to handle one size option
  this.crust = []; // empty array to handle one crust option
  this.cheese = []; // empty array to handle one cheese option
  this.sauce = []; // empty array to handle one sauce option
  this.meat = []; // empty array to handle one meat option
  this.mushrooms = []; // empty array to handle one mushroom option
  this.artichoke = []; // empty array to handle one artichoke option
  this.anchovy = []; // empty array to handle one anchovy option
  this.tomatoes = []; // empty array to handle on sun-dried tomato option
}

Pizza.prototype.sumCost = () => {
  let itemCosts = []; // empty array to handle all item costs
  let totalCost = 0;
  itemCost.values(this); // object.values(this) adds the values (costs) of the pizza object to the itemCost array
  totalCost.forEach(function(i) {  // use a forEach to add the cost of each item to the variable totalCost;
    totalCost += i;
  }
  return totalCost;
}