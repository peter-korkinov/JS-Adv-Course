function proletariyatHidrator(worker) {
  if (worker.dizziness == true) {
      worker.levelOfHydrated = 0.1 * worker.weight * worker.experience;
      worker.dizziness = false;
  }

  return worker;
}

console.log(proletariyatHidrator(
  { weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
));

console.log(proletariyatHidrator({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }
));

console.log(proletariyatHidrator({ weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false }
));