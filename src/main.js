// Business logic for Pizza

class Pizza {

  constructor(sizeCost, crustCost, cheeseCost, sauceCost, meatCost, mushroomsCost, artichokeCost, anchovyCost, tomatoCost) {
    this.size = sizeCost;
    this.crust = crustCost;
    this.cheese = cheeseCost;
    this.sauce = sauceCost;
    this.meat = meatCost;
    this.mushrooms = mushroomsCost;
    this.artichoke = artichokeCost;
    this.anchovy = anchovyCost;
    this.tomato = tomatoCost;
  }

  addCost() {
    let itemCosts = [];
    itemCosts.push(Object.values(this));
    return itemCosts;
  }
}

// User interface logic

let tarentinos = new Pizza();