// Given an array of integers, If the numbers fluctuate in a way that they increase and decrease. Maximum length of turbulence in integers must be calculated. 

solution = (array) => {
    //Calculating turbulance.
    var tempTurblenceTime = 0;
    var turbulenceTime = 0;
    for (let i = 0; i < array.length ;i++){
        // (p,q) = turbulance if => array[p]>array[p+1]<array[p+2]>...<array[q] or array[p]<array[p+1]>array[p+2]<...>array[q]
        tempTurblenceTime++;
        if (array[i] === array[i+1] || !(array[i-1]<array[i]>array[i+1] || (array[i-1]>array[i]<array[i+1]))) {
            if(turbulenceTime < tempTurblenceTime ){
                turbulenceTime = tempTurblenceTime;
            }
            tempTurblenceTime = 0;
        }
    }
    process.stdout.write('Total Turbulance was: ' + turbulenceTime + '\n');
}

testArray4 = [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,12,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1];
testArray1 = [1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1];
testArray2 = [12,4,8,6];
testArray3 = [100];

solution(testArray1);
