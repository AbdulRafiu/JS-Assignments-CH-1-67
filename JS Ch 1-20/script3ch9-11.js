// task1
// let city = prompt('Enter City? ');
// if (city === 'karachi') {
// 	document.write('Welcome to City of Lights')
// }else{
// 	document.write("Welcome to " + city)
// }





// task2
// let gender = prompt('Your Gender ');
// if (gender === 'male') {
// 	document.write(' Good Morning Sir');
// }else if( gender === 'female' ){
// 	document.write(' Good Morning Mam');
// }else{
// 	document.write(' Hey!!!, you gender is not defined ')
// }




// task3
// let traffic = prompt('traffic light Color');
// if (traffic === 'red') {
// 	document.write('Must Stop');
// }else if( traffic === 'yellow' ){
// 	document.write('Ready to move');
// }else if( traffic === 'green' ){
// 	document.write('Move Now')
// }


// task4
// let fuel = prompt('Remaining fuel in car in LITERS');
// if (fuel < 0.25) {
// 	document.write("Please refill the fuel in your car")
// }else{
// 	document.write("Fuel in your car is OK")
// }



// task5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }




// task6

// document.write("<h1> Marksheet </h1>"+"<br>")
// let totalmarls = 300;
// let inpTmarks = prompt("Total marks out of 300");
// let perc = inpTmarks/totalmarls * 100;

// if (perc >= 80) {
// 	document.write(' Total marks: ' + totalmarls + '<br>' + 'Marks obtained '+ inpTmarks + '<br>' + "Percentage" + perc + '%' + "<br>" + "Grade : A"+ '<br>' + "Remarks: Excellence");
// }else if (perc >=70) {
// 	document.write(' Total marks: ' +totalmarls + '<br>' + 'Marks obtained '+ inpTmarks + '<br>' + "Percentage" + perc + '%' + "<br>" + "Grade : B"+ '<br>' + "Remarks: Good");	
// }else{
// 	document.write(' Total marks: ' +totalmarls + '<br>' + 'Marks obtained '+ inpTmarks + '<br>' + "Percentage" + perc  + '%'+ "<br>" + "Grade : C"+ '<br>' + "Remarks: You Need to Improve");
// }


// task7
// let secret = 7;
// let inputnumbr = prompt("Guess any number in the range of 1-10");
// if (inputnumbr == secret) {
// 	document.write("Bingo! Correct answer");
// } else if (inputnumbr == ++secret){
// 	document.write("Close enough to the correct answer");
// } else{
// 	document.write("OOOPS!!! Try Again");
// }


// task8
// let num = prompt('enter any mumber');
// if (num % 3 === 0) {
// 	document.write('this is divided by 3')
// }else{
// 	document.write('this is NOT divided by 3')
// }



// task9
// let num = prompt('enter any mumber');
// if (num % 2 === 0) {
// 	document.write('this EVEN')
// }else if (num % 2 -1 === 0){
// 	document.write('this is ODD')
// }


// task10
// let inpTemp = prompt("temperature as input in C");
// if (inpTemp >= 40) {
// 	document.write("“It is too hot outside")
// }else if(inpTemp >= 30){
// 	document.write("The Weather today is Normal")
// }else if(inpTemp >= 20){
// 	document.write('Today’s Weather is cool.')
// }else if(inpTemp >= 10 || inpTemp<= 10){
// 	document.write('OMG! Today’s weather is so Cool.')
// }



// task11
// let input1 = prompt('Enter first Number');
// let input2 = prompt('Enter second Number');
// let operator = prompt('+ , - , * , /')

// if (operator === '-') {
// 	document.write(input1 - input2);
// } else if (operator === '+'){
// 	document.write(input1 + input2);
// } else if(operator === '*'){
// 	document.write(input1 * input2);
// }else if( operator === '/'){
// 	document.write(input1 / input2);
// }