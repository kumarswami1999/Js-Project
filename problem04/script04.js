// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

const number = parseInt(prompt('Enter a positive integer: '));

if(number<=1){
    console.log("Error! Not valid")
}
else if(number==1){
    console.log("31 Days")
}
else if(number==2){
    console.log("28 Days")
}
else if(number==3){
    console.log("31 Days")
}
else if(number==4){
    console.log("30 Days")
}
else if(number==5){
    console.log("31 Days")
}
else if(number==6){
    console.log("30 Days")
}
else if(number==7){
    console.log("31 Days")
}
else if(number==8){
    console.log("31 Days")
}
else if(number==9){
    console.log("30 Days")
}
else if(number==10){
    console.log("31 Days")
}
else if(number==11){
    console.log("30 Days")
}
else if(number==12){
    console.log("31 Days")
}
else if(number>12){
    console.log("Error! Not valid ")
}