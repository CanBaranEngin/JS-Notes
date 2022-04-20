const x = 11;

const color = x > 10 ? 'red' : 'blue';  // if condition is true this statement return to us first value, if not return the second value 


switch(color) {

    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}