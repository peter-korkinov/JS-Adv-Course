function radar(speed, area) {
    let speedNum = Number(speed);
    let speedLimit;
    

    switch (area) {
        case "motorway": speedLimit = 130; break;
        case "interstate": speedLimit = 90; break;
        case "city": speedLimit = 50; break;
        case "residential": speedLimit = 20; break;
    }


    if (speedNum > speedLimit) {
        let speedDiff = speedNum - speedLimit;
        let offenceLevel;
        
        if (speedDiff <= 20) {
            offenceLevel = "speeding";
        } else if (speedDiff <= 40) {
            offenceLevel = "excessive speeding";
        } else {
            offenceLevel = "reckless driving";
        }

        console.log(`The speed is ${speedNum - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${offenceLevel}`);

    } else {

        console.log(`Driving ${speedNum} km/h in a ${speedLimit} zone`);

    }
}

radar(51, 'city');