

const number = parseInt(prompt('Enter a number: '));

if(number<0){
    console.log("Error")
}
else if(number==0){
    console.log("Error")
}
else if(number>0){
    series = (number*number)+number
    console.log(`${number}th term of the series is ${series}.`);
}