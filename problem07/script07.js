// programme to display the Nth term of the series: 1 , 4, 9, 16, 25,

const number = parseInt(prompt('Enter a number: '));

if(number<0){
    console.log("Error")
}
else if(number==0){
    console.log("Error")
}
else if(number>0){
    square = number*number
    console.log(`${number}th term of the series is ${square}.`);
}