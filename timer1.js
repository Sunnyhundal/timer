const input = process.argv.slice(2).filter(input => input >= 0).filter(input => !isNaN(input));

//Commented out more user friendly code, but did not allow for multiple timers
// if (input <= 0) {
//   console.log("Please enter a value over 0 seconds");
//   return;
// } if (isNaN(input)) {
//   console.log("Please enter a numarical (integer 1, 2, 3) value");
//   return;
// }

input.forEach((time) => {
  setTimeout(() => {
    console.log(`Timer of ${time} seconds is complete!!`);
    //Three system sounds since it only plays a soft sound
    process.stdout.write('\x07');
    process.stdout.write('\x07');
    process.stdout.write('\x07');
  }, time * 1000);
});