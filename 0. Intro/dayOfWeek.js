function dayOfWeek(day) {

    daysDict = {'Monday': 1,
                'Tuesday': 2,
                'Wednesday': 3,
                'Thursday': 4,
                'Friday': 5,
                'Saturday': 6,
                'Sunday': 7}
    
    if (!(day in daysDict)) {
        console.log('error')
    } else {
        console.log(daysDict[day])
    }
}


function dayOfWeek2(day) {

    let output;

    switch(day) {
        case 'Monday': output = 1; break;
        case 'Tuesday': output = 2; break;
        case 'Wednesday': output = 3; break;
        case 'Thursday': output = 4; break;
        case 'Friday': output = 5; break;
        case 'Saturday': output = 6; break;
        case 'Sunday': output = 7; break;
        default : output = 'error';
    }

    console.log(output)
}


dayOfWeek('Sunday')
dayOfWeek2('Sunda')