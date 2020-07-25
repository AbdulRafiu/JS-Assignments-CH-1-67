// //Chapters 38-42

// //01

// function power(base, power){
//     let total  = 1;
//     while(power > 0){
//         total *= base;
//         power--;
//     }
//     return total;
// }
// alert(power(2, 0));

// //02

// let year = window.prompt("Enter the year ");
// function leapYear(year){
//     if (year % 4 === 0){
//         return(year + " is a leap year");
//     }
//     else{
//         return(year + " is not a leap year");
//     }
// }
// alert(leapYear(year));

// //03

// function calculateSemiPerimeter(a, b, c){
//     return (a + b + c) / 2;
// }
// function calculateArea(s, a, b, c){
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// alert(calculateArea(calculateSemiPerimeter(2, 3, 4), 2, 3, 4));

// //04

// function main(){
//     sub1 = parseInt(window.prompt("Enter Marks of Subject 1"));
//     sub2 = parseInt(window.prompt("Enter Marks of Subject 2"));
//     sub3 = parseInt(window.prompt("Enter Marks of Subject 3"));
//     alert("Your Percentage is " + percentage(sub1, sub2, sub3) + "%");
//     alert("Your Average is " + average(sub1, sub2, sub3));
// }
// function percentage(sub1, sub2, sub3){
//     let sum = sub1 + sub2 + sub3;
//     return ((sum / 300) * 100);
// }
// function average(sub1, sub2 ,sub3){
//     let sum = sub1 + sub2 + sub3;
//     return (sum / 3);
// }
// main();

// //05

// function index(sentence, target){
//     let counter = 0;
//     while(counter < sentence.length){
//         if(sentence[counter] === target){
//             return counter;
//         }
//         counter++;
//     }
// }
// alert(index("My Name is ABC", "B"));

// //06

// function dltvowel(sentence){
//     return sentence.replace(/[aeiouAEIOU]/g, "");
// }
// alert(dltvowel("My Name is ABC"));

// //07

// //Not

// //08

// let distance = window.prompt("Enter the distance between two cities in km's");
// function inMeters(distance){
//     return distance * 1000;
// }
// function inFeet(distance){
//     return distance * 1000 * 3.28084;
// }
// function inInches(distance){
//     return distance * 1000 * 3.28084 * 12;
// }
// function inCMs(distance){
//     return distance * 1000 * 100;
// }
// alert("Distance in KMs " + distance + "km.");
// alert("Distance in Meters " + inMeters(distance) + "m.");
// alert("Distance in Feet " + inFeet(distance) + "feet.");
// alert("Distance in Inches " + inInches(distance) + "inches.");
// alert("Distance in CMS " + inCMs(distance) + "cm.");

// //09

// function overTime(hours){
//     if(hours <= 40){
//         return alert("You are not eigible for overtime.");
//     }
//     else{
//         return alert("Your overtime payment is Rs. " + (hours - 40) * 12);
//     }
// }
// let hours = window.prompt("Enter the number of hours you have worked")
// overTime(hours);

// //10

// function denominations(amount){
//     let hundreds = parseInt(amount / 100);
//     let remaining = amount % 100;
//     let fifties = parseInt(remaining / 50);
//     let remaining1 = remaining % 50;
//     let tens = parseInt(remaining1 / 10)
//     return alert("You will have " + hundreds + " hundred notes, " + fifties + " fifty notes & " + tens + " ten notes.");
// }
// let amount = window.prompt("Enter the amount you would like to withdraw");
// denominations(amount)


// //Chapters 43-48

// //01

// function clk(){ 
//     alert("You have clicked the link");
// }

// //02

// function buy(){
//     alert("Thanks for buying this item");
// }

// //03

// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }

// //04

// //in html

// //05

// let counter = 0;
// function increment(){
//     counter++;
//     document.querySelector('#result').innerHTML = counter;
// }
// function decrement(){
//     counter--;
//     document.querySelector('#result').innerHTML = counter;
// }

// // Chapters 49-52

// //01

// function returnValues(){
//     var firstname = document.getElementById("firstname").value;
//     var lastname = document.getElementById("lastname").value;
//     var dob = document.getElementById("dob").value;
//     var email = document.getElementById("email").value;
//     var cellno = document.getElementById("cellno").value;
//     document.writeln("<h3>Your First Name is " + firstname + "</h3><br>");
//     document.writeln("<h3>Your Last Name is " + lastname + "</h3><br>");
//     document.writeln("<h3>Your DOB is " + dob + "</h3><br>");
//     document.writeln("<h3>Your Email is " + email + "</h3><br>");
//     document.writeln("<h3>Your Cell Number is " + cellno + "</h3>")
//     document.write("<button type='submit'>Submit</button>");

// }


// //02

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
// }

// //03

// function edit_row(no) {
//     document.getElementById("edit_button" + no).style.display = "none";
//     document.getElementById("save_button" + no).style.display = "block";

//     var name = document.getElementById("name_row" + no);
//     var country = document.getElementById("country_row" + no);
//     var age = document.getElementById("age_row" + no);

//     var name_data = name.innerHTML;
//     var country_data = country.innerHTML;
//     var age_data = age.innerHTML;

//     name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
//     country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
//     age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
// }

// function save_row(no) {
//     var name_val = document.getElementById("name_text" + no).value;
//     var country_val = document.getElementById("country_text" + no).value;
//     var age_val = document.getElementById("age_text" + no).value;

//     document.getElementById("name_row" + no).innerHTML = name_val;
//     document.getElementById("country_row" + no).innerHTML = country_val;
//     document.getElementById("age_row" + no).innerHTML = age_val;

//     document.getElementById("edit_button" + no).style.display = "block";
//     document.getElementById("save_button" + no).style.display = "none";
// }

// function delete_row(no) {
//     document.getElementById("row" + no + "").outerHTML = "";
// }

// function add_row() {
//     var new_name = document.getElementById("new_name").value;
//     var new_country = document.getElementById("new_country").value;
//     var new_age = document.getElementById("new_age").value;

//     var table = document.getElementById("data_table");
//     var table_len = (table.rows.length) - 1;
//     var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

//     document.getElementById("new_name").value = "";
//     document.getElementById("new_country").value = "";
//     document.getElementById("new_age").value = "";
// }

// //Chapters 58-67

// //01

// //(i)
// var mainContent = document.getElementById("main-content");
// //(ii)
// console.log(mainContent.childNodes);
// //(iii)
// var items = document.getElementsByClassName("render"),
//     i, len;
// for (i = 0, len = items.length; i < len; i++) {
//     console.log(items[i].innerHTML);
// }
// //(iv)
// document.getElementById("first-name").value = "Abdul Rafiu";
// // (v)
// document.getElementById("last-name").value = "Khokhar";
// document.getElementById("email").value = "ark.1kh@gmail.com";

// //02

// //(i)
// console.log(document.getElementById("form-content").nodeType);
// //(ii)
// console.log(document.getElementById("lastname").nodeType);
// console.log(document.getElementById("lastname").childNodes);
// //(iii)
// const text = document.createTextNode("I'm a new text node.");
// document.getElementById("lastname").appendChild(text);
// console.log(document.getElementById("lastname").childNodes);
// //(iv)
// console.log(document.getElementById("main-content").firstChild);
// console.log(document.getElementById("main-content").lastChild);
// //(v)
// console.log(document.getElementById("lastname").nextSibling);
// console.log(document.getElementById("lastname").previousSibling);
// //(vi)
// console.log(document.getElementById("email").parentNode);
// console.log(document.getElementById("email").nodeType);