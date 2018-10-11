import moment from 'moment';
import math from 'mathjs';

console.log("Hello from JavaScript")

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

console.log(math.sqrt(-4));

var name = "Susan", time = "right now";
console.log(`Hello ${name}, how are you ${time}?`);