function factory(order) {
  let car = {
    model: order.model
  }

  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 }
  ];

  for (let engi of engines) {
    if (engi.power >= order.power) {
      car.engine = engi;
      break;
    }
  }

  car.carriage = {};
  car.carriage.type = order.carriage;
  car.carriage.color = order.color;

  if (order.wheelsize % 2 == 0) {
    const wheel = order.wheelsize - 1;
    car.wheels = [wheel, wheel, wheel, wheel];
  } else {
    const wheel = order.wheelsize;
    car.wheels = [wheel, wheel, wheel, wheel];
  }

  return car;
}

console.log(factory(
  { model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
));
// console.log();
