// function cooker(...params) {
//     let num = Number(params[0]);
//     let tasks = [];

//     for (let i = 1; i < params.length; i++) {
//         tasks.push(params[i]);
//     }

//     for (let task of tasks) {
//         switch(task) {
//             case 'chop':
//                 num /= 2;
//                 console.log(num);
//                 break;
//             case 'dice':
//                 num = Math.sqrt(num);
//                 console.log(num);
//                 break;
//             case 'spice':
//                 num += 1;
//                 console.log(num);
//                 break;
//             case 'bake':
//                 num *= 3;
//                 console.log(num);
//                 break;
//             case 'fillet':
//                 num *= 0.8;
//                 console.log(num);
//                 break;
//         }
//     }
// }


function cooker(...params) {
    let num = Number(params[0]);

    for (let task = 1; task < params.length; task++) {
        switch(params[task]) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;
        }
    }
}

cooker('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooker('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
