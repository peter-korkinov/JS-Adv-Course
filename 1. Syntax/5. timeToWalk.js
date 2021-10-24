function walkie(steps, footprint, speed) {
    const distance = steps * footprint;
    const runtimeMinutes = (distance / (speed * 1000) * 60) + Math.floor(distance / 500);
    let hours = Math.floor(runtimeMinutes / 60).toString().padStart(2, '0');
    let minutes = Math.floor(runtimeMinutes).toString().padStart(2, '0');
    let seconds = Math.round((runtimeMinutes - Math.floor(runtimeMinutes)) * 60).toString().padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}


walkie(4000, 0.60, 5);
walkie(2564, 0.70, 5.5);