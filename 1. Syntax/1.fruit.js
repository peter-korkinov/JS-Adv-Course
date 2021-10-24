function fruit(name, weight, pricePerKg) {
    let weightInKg = weight / 1000;
    let cost = weightInKg * pricePerKg;
    
    console.log(`I need $${cost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${name}.`);
}

fruit('orange', 2500, 1.80);