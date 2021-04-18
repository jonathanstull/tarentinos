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
    this.itemCosts;
    this.totalCost;
  }

  addItemCost() {
    let itemCosts = Object.values(this);
    return this.itemCosts = itemCosts;
  }

  sumTotalCost() {
    let itemCostsArray = this.itemCosts;
    let totalCost = 0;
    itemCostsArray.forEach((itemCost) => {
      totalCost += itemCost;
    });
    return this.totalCost = totalCost;
  }
}

// User interface logic

let tarentinos = new Pizza();