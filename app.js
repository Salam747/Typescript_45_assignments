"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Qustion No:01
console.log("Assala o Alaikum my name is Abdul Salam");
//__________________________________________________________________________________________________
// Qustion N0:02
// Personal message
let personalmessage = "Abdul Salam";
console.log(`Assalam o Alaikum "${personalmessage}, would you like to learn some typescript And Node .js today?`);
//__________________________________________________________________________________________________
// Qustion N0:03
// Name Cases
let person_name = "Abdul Salam";
console.log(person_name.toLowerCase());
let personName = "Abdul Salam";
console.log(personName.toUpperCase());
let $perrsonName = "Abdul Salam";
console.log($perrsonName.charAt(0).toUpperCase() + $perrsonName.slice(1).toLowerCase());
//_________________________________________________________________________________________________
// Qustion N0:04
// Famous Quote
console.log("Albert Einstein, Once said , A person who never made a mistake never triedny thing new ");
//_________________________________________________________________________________________________
// Qustion N0:05
// Famous quot 2
let famousPerson = "Albert Einstein";
let message = "A person who never made a mistake never tried any thing new";
console.log(`"${famousPerson}, Once said ${message}`);
//_________________________________________________________________________________________________
// Qustion N0:06
// Strippin Names
let Name1 = "\n\t Sir Ahmad Raza Shaikh \n\t";
console.log(Name1);
console.log(Name1.trim());
//_________________________________________________________________________________________________
// Question N0:07
// Number Eight
let a1 = 2 + 6;
console.log(a1);
let b1 = 17 - 9;
console.log(b1);
let c1 = 16 / 2;
console.log(c1);
let d1 = 4 * 2;
console.log(d1);
//_________________________________________________________________________________________________
// Question N0:08
// Addition
console.log(4 + 4);
// division
console.log(16 / 2);
// Multiplication
console.log(2 * 4);
// Subtraction
console.log(20 - 12);
//________________________________________________________________________________________________
// Question N0:09
// Favorite Number
let favoritenumber = "50333";
console.log(`MY favourite number is ${favoritenumber}`);
//__________________________________________________________________________________________________
// Question N0:10
// Adding commints
let a = 70;
let b = 47;
// Addision
console.log(`${a}+${b} = ${a + b}`);
// Subtraction
console.log(`${a}-${b} = ${a - b}`);
// Multiplication
console.log(`${a}*${b} = ${a * b}`);
// Division
console.log(`${a}/${b} = ${a / b}`);
//___________________________________________________________________________________________________
// Question N0:11
// Names
let naMes = ["Qasim", "Dawood", "Fayaz",];
for (let i = 0; i < naMes.length; i++) {
    console.log(naMes[i]);
}
//___________________________________________________________________________________________________
// Question N0:12
// Greeting
let names = ["Sir Zia Khan,", "Sir Daniyal Nagori,", "Sir Hunain Hyder, ", "Sir Ahmad Raza,",];
let message1 = "Assalam o Alaikum ";
for (let i = 0; i < names.length; i++) {
    console.log(names[i], message1);
}
//___________________________________________________________________________________________________
// Question N0:13
// Your own array
let vehichle = ["Honda Motor cycle ", "Honda Civic", "Audi", "BMW ",];
vehichle.map((items) => console.log(`i would like to own a ${items}`));
//___________________________________________________________________________________________________
// Question N0:14
// Guest list
let guest_list = ["Saeed", "Nawaz", "Riyaz",];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]} :\n you are invited to dinner!\n`);
}
//__________________________________________________________________________________________________
// Question N0:15
// Changing guest list
let guest_list2 = ["Saeed", "Nawaz", "Riyaz",];
let absentGuest = "Saeed";
let newGuest = "Abdul Salam";
guest_list2[0] = newGuest;
for (let i = 0; i < guest_list2.length; i++) {
    console.log(`Dear ${guest_list2[i]}\n you are invited to the dinner\n`);
}
console.log(absentGuest, ", is not coming to the dinner");
//_________________________________________________________________________________________________
// Question N0:16
// More guests
let guest_list3 = ["Saeed", "Nawaz", "Riyaz",];
let absent_guest = "Saeed";
let new_guest = "Abdul Salam";
guest_list3[0] = new_guest;
console.log("Good news! we found a bigger dinner table, now available more space , so we invte more 3 guests \n");
guest_list3.unshift("Manzoor");
guest_list3.splice(2, 0, "Qasim");
guest_list3.push("Dawood");
for (let i = 0; i < guest_list3.length; i++) {
    console.log(`Dear ${guest_list3[i]}\n you are invited to the dinner\n`);
}
//________________________________________________________________________________________________
// Question N0:17
// Shrinking guest list
let guest_list4 = ["Saeed", "Nawaz", "Riyaz"];
guest_list4.unshift("Manzoor");
guest_list4.splice(2, 0, "ayaz");
guest_list4.push("Ejaz");
console.log("\n soryy we can,t arrange a bigger dinner table so only two guest are invited!\n");
while (guest_list4.length > 2) {
    let removeGuest = guest_list4.pop();
    console.log(removeGuest, " \n sorry you are not invited to dinner\n  ");
}
for (let i = 0; i < guest_list4.length; i++) {
    console.log(`\n Dear ${guest_list4[i]} : \n you are still invited to dinner!\n `);
}
guest_list4.splice(0, 2);
console.log(guest_list4);
//_________________________________________________________________________________________________
// Question N0:18
// Seeing the world
// Store a locations in a array.  make sure the array is not in alphabetical order. 
let places = ["Makkah  Sharif", "Madina Sharif", "Lahore", "Karachi", "Islamabad"];
// Print your array in its original order.
console.log("original order:", places);
// Print your array in alphabetical order without modifying actual list. 
console.log("Alphabetical order:", [...places].sort());
// Show that your array is still in its original order by printing it.
console.log("original order:", places);
// Print your array in revers alphabetical order without changing the order of the original
console.log("reverse Alphabetical order:", [...places].sort().reverse());
// show that your array still in its  original order by printing it again.
console.log("original order:", places);
// Revers the order of your list. Print the array to that its order has changed.
console.log("reverse order:", places.reverse());
// Reverse the order of your list again.print the list to show its back to its original order.
console.log("original order:", places.reverse());
// Sort your array so its stored in alphabetical order. Print the array to show that its order.
console.log("Alphabetical  order:", places.sort());
// Sort to change your array so its stored in reverse alphabetical order
console.log("reverse Alphabetical order:", places.sort().reverse());
//_________________________________________________________________________________________________
// Question N0:19
// Dinner guests 
let guest_list5 = ["Saeed", "Nawaz", "Riyaz"];
guest_list5.unshift("Manzoor");
guest_list5.splice(2, 0, "ayaz");
guest_list5.push("Ejaz");
console.log("\n soryy we can,t arrange a bigger dinner table so only two guest are invited!\n");
while (guest_list5.length > 2) {
    let removeGuest = guest_list5.pop();
    console.log(removeGuest, " \n sorry you are not invited to dinner\n  ");
}
for (let i = 0; i < guest_list5.length; i++) {
    console.log(`\n Dear ${guest_list5[i]} : \n you are still invited to dinner!\n `);
}
guest_list5.splice(0, 2);
console.log(guest_list5);
console.log("The number of people are you inviting to dinner", guest_list5.length);
//_______________________________________________________________________________________________
// Qustion N0:20
// Think of something you could store in a array.
let array = ["Arabic", "Urdu", "English", "Turkish"];
array.forEach(array => {
    console.log(array);
});
// car object
let car = {
    maker: "Audi",
    color: "white",
    automatic: true,
};
console.log(car);
//_______________________________________________________________________________________________
// Question No:22
// intentional error
// if you haven't received an array index error in one of your programes yet, 
// try to make one happen .
//  creating array
let newArray = [
    "Sir Zia Khan",
    "Sir Daniyal Nagori",
    "Sir Ameen Aalam",
];
//   accesing array by index
console.log(newArray[5]);
//   make sure you correct the error before closing the program.
console.log(newArray);
//______________________________________________________________________________________________
// Qustion No:23
// write a series of conditional tests.
// creating car veriable
let Car = "subaru";
// test no 1
console.log("is car == subaru ? I predict true . ");
console.log(Car == "subaru");
// test no 2
console.log("is car === subaru ? I predict true . ");
console.log(Car === "subaru");
// test no 3
console.log("is car != SUBARU ? I predict true . ");
console.log(Car != "SUBARU");
// test no 4
console.log("is car !== Honda ? I predict true . ");
console.log(Car !== "Honda");
// test no 5
console.log("is car upper Case == Honda ? I predict true . ");
console.log(Car.toUpperCase() == "SUBARU");
// test no 6
console.log("is car  == Honda ? I predict False . ");
console.log(Car == "SUBARU");
// test no 7
console.log("is car === SUBARU ? I predict False . ");
console.log(Car === "SUBARU");
//  test no 8
console.log("is car === train ? I predict False . ");
console.log(Car === "train");
// //  test no 9
console.log("is car === cycle ? I predict False . ");
console.log(Car === "cycle");
//  test no 10
console.log("is car == cycle ? I predict False . ");
console.log(Car == "cycle");
//________________________________________________________________________________________________
// // Qustion N0:24
// Equality and Inequality test with string 
console.log("Equality test:", "Abdul Salam" === "Abdul Salam");
console.log("Inequlity test:", ("Abdul Salam" !== "Saeed Ahmad"));
// // Test using the lower case function 
console.log("Lower case function test:", "HELLO".toLowerCase() === "hello");
// // Numerical test involing equality
console.log("Equality test with number:", 47 === 47);
// Numerical test involing inequality
console.log("Inequality test in number:", 22 != 26);
// greater than test
console.log("greater than test :", 26 > 22);
// Less than
console.log("Less than test:", 22 <= 26);
// greater than or equal to
console.log("greater than and equal to test:", 12 >= 12);
// Less than or equal to
console.log("Less than or equal to:", 7 <= 11);
//Test using "and" and "or" operators
console.log("and operators test:", 4 === 4 && 10 > 7);
// Test using "or" operators
console.log("or operators test:", 4 === 4 || 10 > 7);
// Test whether an item is an a array
let fruite = ["Banana", "Orange", "Mango"];
console.log("Test Mango in the Array", fruite.includes("Mango"));
//  Test whether an item is not an a array
console.log("Apple is not in array", !fruite.includes("Apple"));
// ______________________________________________________________________________________________
// Qustion N0:25
// Creat a veriable called alien color
let alien_color = "green";
// write an if statment to test wether the aliens color is green . if it is ,
// print a message that the player just earned 5 points.
if (alien_color === "green") {
    console.log("plyer just earned 5 points.");
}
// Pass
alien_color = "yellow";
// (the version  this fails will have no output.)
if (alien_color === "green") {
    console.log("player just earned 5 points ");
}
//______________________________________________________________________________________________
// Qustion N0:26
// Alien color #2: chose a color for an alien as you did in Excercise 25
let alien_color2 = "green";
// Write an if -else chain.
// If the aliens color not green.
// Print a statment that the player just earned 5 points shooting the alien .
if (alien_color2 === "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points ");
}
// .If aliens color isn't green, print a statment that plyer just eearned 10 points .
if (alien_color2 === "yellow") {
    console.log("player just earned 5 points for shooting the alien");
}
else
    console.log("player just earned 10 points  ");
//_______________________________________________________________________________________________
// Qustion N0:27
// Alien color 3
//  print if condition
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("the plyer just earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("the plyer earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("the plyer earned 15 points.");
}
else {
    console.log("unknown color");
}
// ptint else if condition,color yellow
alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("the plyer just earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("the plyer earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("the plyer earned 15 points.");
}
else {
    console.log("unknown color");
}
// print else if condition,color red
alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("the plyer just earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("the plyer earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("the plyer earned 15 points.");
}
else {
    console.log("unknown color");
}
//_____________________________________________________________________________________________
// Qustion No:28
// Starge of life
let age = 60;
// if the person is less then 2 years old, print a message that 
// the person is a baby.
if (age < 2) {
    console.log("the person is a baby.");
}
// if the person is at least 2 years old but lesst than 4,print a message
// that the person is a tolder.
else if (age >= 2 && age < 4) {
    console.log("the person is a tolder.");
}
// if the person is at least 4 years old but less than 13 , print a message
// that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a kid .");
}
// if the person is at least 13 years old but less than 20.print a message
// that the person is a teenager
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
// if the person is at least 20 years old but less than 65, print a message
// that the person is a adult.
else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
}
// if the person is age 65 or older, print a message that the 
// person is an elder.
else if (age >= 65 && age > 65) {
    console.log("the person is an elder.");
}
//______________________________________________________________________________________________
// Qustion N0:29
// Favrite fruite
// write 5 if statments.
let favorite_fruit = ["mango", "orange", "apple"];
if (favorite_fruit.includes("mango")) {
    console.log("you really like mango.");
}
if (favorite_fruit.includes("orange")) {
    console.log("you really like orange.");
}
if (favorite_fruit.includes("apple")) {
    console.log("you really like apple.");
}
if (favorite_fruit.includes("banana")) {
    console.log("you really like banana.");
}
if (favorite_fruit.includes("peach")) {
    console.log("you really like peach.");
}
//_________________________________________________________________________________________________
// Qustion N0:30
// Hello admin
const userName = ["admin", "Salam", "Saeed", "Fayyaz", "Qasim"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "admin") {
        console.log("Hello, Admin would you like to see a status report.");
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for loging in`);
    }
}
//___________________________________________________________________________________________________
// Qustion N0:31
// No users
let userNames = ["admin", "Salam", "Saeed", "Fayyaz", "Qasim"];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames = [];
    console.log("\nAll users names have been removed. " + userNames.length);
}
//_____________________________________________________________________________________________________
// Qustion N0:32
// Checking Usernames.
let current_users = ["salam", "saeed", "qasiM", "NawaZ", "dawood"];
let new_users = ["SALAM", "fayz", "Qasim", "nawaz", "riayz"];
new_users.forEach((newUser => {
    let condition = current_users.some(curRent => curRent.toLowerCase() === newUser.toLowerCase());
    if (condition) {
        console.log(`sorry ${newUser} is already been used .`);
    }
    else {
        console.log(`this ${newUser} is available.`);
    }
    ;
}));
//___________________________________________________________________________________________________
// Qustion N0:33
// Ordinal NUmber
let oridinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < oridinalNumber.length; i++) {
    if (oridinalNumber[i] === 1) {
        console.log(`${oridinalNumber[i]}st`);
    }
    else if (oridinalNumber[i] === 2) {
        console.log(`${oridinalNumber[i]}nd`);
    }
    else if (oridinalNumber[i] === 3) {
        console.log(`${oridinalNumber[i]}rd`);
    }
    else if (oridinalNumber[i] >= 4 && oridinalNumber[i] <= 9) {
        console.log(`${oridinalNumber[i]}th`);
    }
}
//________________________________________________________________________________________________
// Qustion N0:34
// Pizzas
let pizZas = ["pepperoni", "chicken", "vegitable"];
for (let pizza of pizZas) {
    console.log(`\ni like ${pizza} pizza.`);
}
console.log(`\nI really love pizza !`);
//_______________________________________________________________________________________________
// Qustion N0:35
// Animals 
let animals = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet .`);
}
console.log(`\nAny of these animals would make a great pet !`);
//________________________________________________________________________________________________
// Qustion N0:36
// T_ Shirt
function Make_shirt(size, lable) {
    return `My shirt size is ${size}\nand my lable is ${lable}\n`;
}
let myFunction = Make_shirt(32, "the rock.");
console.log(myFunction);
//_______________________________________________________________________________________________|
// Qustion N0:37
// Large Shirt
function Make_shirt1(lable, size = "Large.") {
    return (`${lable} ${size}`);
}
let func1 = Make_shirt1("I love typescript ");
console.log(func1);
function Make_shirt2(lable, size = "Medium.") {
    return (`${lable} ${size}`);
}
let func2 = Make_shirt2("I love typescript");
console.log(func2);
function Make_shirt3(lable, size) {
    return (`${lable} ${size}`);
}
let func3 = Make_shirt3("I love typescrip", "Any size.");
console.log(func3);
//___________________________________________________________________________________________________________
// Qustion N0:38
// Cities
function describ_city(city, country = "Default Country.") {
    console.log(`${city} is in ${country}`);
}
describ_city("Karachi", "Pakistan");
describ_city("Beijing", "China");
describ_city("New Dehli");
//____________________________________________________________________________________________________________
// Qustion N0:39
// City Names
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Riyadh", "Sadi Arabia"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New York", "USA"));
//______________________________________________________________________________________________________________
// Qustion N0:40
// Album
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.track = tracks;
    }
    return album;
}
const album1 = make_album("Artist 1", "Title 1");
console.log(album1);
const album2 = make_album("Artisr 2", "Title 2 ");
console.log(album2);
const album3 = make_album("Artist 3", "Title 3", 23);
console.log(album3);
//_____________________________________________________________________________________________________________________
// Qustion N0:41
// Magician
let Magician = ["Hermione Granger", "Harry Potter", "Ron Weasly", "Albus Dubledore"];
function show_magician(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_magician(Magician);
//__________________________________________________________________________________________________________________
// Qustion N0:42
//Great Magicians
let MaGician = ["Hermione Granger", "Harry Potter", "Ron Weasly", "Albus Dubledore"];
function make_great(MagicianArray) {
    for (let i = 0; i < MagicianArray.length; i++) {
        MaGician[i] = "The great " + MagicianArray[i];
    }
}
function show_maGician(MaGicians) {
    MaGicians.forEach(element => {
        console.log(element);
    });
}
make_great(Magician);
show_magician(MaGician);
//_______________________________________________________________________________________________________________________
//Qustion N0:43
// Unchanged Magicians
let MagiCian = ["Hermione Granger", "Harry Potter", "Ron Weasly", "Albus Dubledore"];
function coppyArray(Array) {
    return [...Array];
}
function make_Great(MagicianArray) {
    for (let i = 0; i < MagicianArray.length; i++) {
        MagicianArray[i] = "The great " + MagicianArray[i];
    }
}
function show_magiCian(MaGicians) {
    MaGicians.forEach(element => {
        console.log(element);
    });
}
const copymagician_array = coppyArray(MagiCian);
make_Great(copymagician_array);
console.log("\nThis is my original Array:\n");
show_magiCian(MagiCian);
console.log("\nThis is my modified of the Array:\n");
show_magiCian(copymagician_array);
//______________________________________________________________________________________________________________________
// Qustion N0:44
// Sandwiches
function Sandwich(...items) {
    console.log("\nSandwich Order.");
    for (let i = 0; i < items.length; i++) {
        console.log(`|${items[i]}`);
    }
}
console.log("\nEnjoy your Sandwich.");
Sandwich("Tomato", "Chese", "Capsicum");
Sandwich("Chicken", "Onion", "egg");
Sandwich("Cabage", "Jelly", "Tommato");
function carinfo(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = carinfo("Honda", "Civic", { color: "Black", year: 2024 });
console.log(myCar);
//_______________________________________________________________________________________________________________________________
//   >>>>>>>>>>>>>>>  Allhamdulillah  I have completed 45 assignments  <<<<<<<<<<<<<<<<                        
