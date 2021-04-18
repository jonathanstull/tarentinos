// Business logic for Pizza

class Pizza {

  constructor(sizeCost, crustCost, cheeseCost, sauceCost, meatCost, mushroomsCost, artichokeCost, anchovyCost, tomatoCost) {
    this.size = parseInt(sizeCost);
    this.crust = parseInt(crustCost);
    this.cheese = parseInt(cheeseCost);
    this.sauce = parseInt(sauceCost);
    this.meat = parseInt(meatCost);
    this.mushrooms = parseInt(mushroomsCost);
    this.artichoke = parseInt(artichokeCost);
    this.anchovy = parseInt(anchovyCost);
    this.tomato = parseInt(tomatoCost);
  }

  addItemCost() {
    return Object.values(this);
  }

  sumTotalCost(itemCostsArray) {
    let totalCost = 0;
    itemCostsArray.forEach((itemCost) => {
      totalCost += itemCost;
    });
    return totalCost;
  }
}

// User interface logic

$(document).ready(() => {
  $("#order-form").submit((event) => {
    event.preventDefault();

    let cost = 0;

    const sizeCost = $("#size").val();
    const crustCost = $("#crust").val();
    const cheeseCost = $("#cheese").val();
    const sauceCost = $("#sauce").val();
    const meatCost = $("#meat").val();
    const mushroomsCost = $("#mushrooms").val();
    const artichokeCost = $("#artichoke").val();
    const anchovyCost = $("#anchovy").val();
    const tomatoCost = $("#sundried-tomato").val();

    let pizza = new Pizza(sizeCost, crustCost, cheeseCost, sauceCost, meatCost, mushroomsCost, artichokeCost, anchovyCost, tomatoCost);

    let itemCostsArray = pizza.addItemCost();
    cost = pizza.sumTotalCost(itemCostsArray).toFixed(2);

    $("#order-summary").html(`<h2>Total cost: $${cost}</h2>`).show();
  });
});
