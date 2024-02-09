
function nums (a, b) {

    a = a ?? 0;
    b = b ?? 0;

    let result;

    if (a % 2 === 0 && b % 2 === 0) {
        result = a * b;
        console.log(result);
    } 
    
    else if (a % 2 !== 0 && b % 2 !== 0) {
        result = a + b;
        console.log(result);
    } 
    
    else {

        if (a % 2 !== 0) {
            console.log(a);
        }

        else {
            console.log(b);
        }
    }
}

nums();