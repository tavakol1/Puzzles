// Given a time, calculate the angle between the hour and minute hands.

solution = (time) => {
    time = time.split(':');
    let minute = time[1];
    let hour = time[0];
    let angle = Math.abs((minute * 6) - (hour * 30));
    const output = {key1: hour, key2: minute, key3:angle};
    return output
} 

const {key1,key2,key3} = solution('2:33');

console.log( `The time is -- ${key1} hours, and ${key2} minutes and the Angle between the two hands is: ${key3}`);