// Given N --> (1,2,3,...,N) if N % 2 = 0 print Fizz, if N % 3 = 0 print Buzz, if N % 5 = 0 print Doodle and if not print N.

function solutionFinal(N) {
    // written code in JavaScript (Node.js 8.9.4)
    for (i = 1; i <= N;i++){
        if(i % 2 === 0) {
            process.stdout.write('Fizz');
        }
        if(i % 3 === 0) {
            process.stdout.write('Buzz');
        }
        if(i % 5 === 0) {
            process.stdout.write('Doodle');
        }
        if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
            process.stdout.write(i+'');
        }
        process.stdout.write('\n');
    }
}

solutionFinal(30); // given N (positive & int) ranged from [1,10000].
