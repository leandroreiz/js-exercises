let i = 0;
let j = 10;
checkiandj: //labeled statement
    while (i < 4) {
        console.log(i);
        i += 1;
        checkj:
            while (j > 4) {
                console.log(j);
                j -= 1;
                if ((j % 2) === 0) {
                    continue checkj; //use of continue statement
                }
                console.log(j + ' is odd.');
            }
            console.log('i = ' + i);
            console.log('j = ' + j);
            
    }