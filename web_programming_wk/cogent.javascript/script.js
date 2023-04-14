// var productId = 5001;
// var productName = "iPhone"
// var productPrice = 600;
// document.write("<center><font size=5px color=blue>Product ID: " + productId);
// document.write("<br/>Product Name: " + productName);
// document.write("<br/>Product Price: $" + productPrice + "</font></center>");

// var global = "Cogent Infotech";
// function f1() {
//     var x = 10;
//     var y = 20;
//     document.write("x = "+x);
//     document.write("<br/>y = "+y);
//     document.write("<br/>global is: " + global);
// }
// function f2() {
//     var a = 500;
//     var b = 600;
//     document.write("<br/>a = "+a);
//     document.write("<br/>b = "+b);
//     document.write("<br/>global is: "+global);
// }
// f1();
// f2();

// var sStr = "10", iNum1 = 10, iNum2 = 20
// iNum3 = iNum1+iNum2
// sSum = sStr+iNum2
// sSum = iNum2+sStr
// document.write("iNum3: "+iNum3)
// document.write("<br/>sSum: "+sSum)

// var age = 20
// if(age<20)
//     document.write("You are not eligible to vote!")
// else
//     document.write("You are eligible to vote!")

// for(i=0; i<=100; i+=2)
//     document.write(i+"<br/>")

// i=0
// while(i<=100) {
//     document.write(i+"<br/>")
//     i+=2
// }

// num = 12345
// reversedNum = 0
// document.write("num = "+num)
// document.write("<br/>")
// i=1
// while(num > 0) {
//     reversedNum = reversedNum*10 + num%10
//     num = Math.floor(num/10)
// }
// document.write("reversedNum = "+reversedNum)

// function Book() {
//     this.name = "The Lightning Thief"
//     this.author = "Rick Riordan"
//     this.publisher = "Penguin Books"

//     this.display = function() {
//         with(this) {
//             document.write("Book Details:")
//             document.write("<br/>\tName: "+name)
//             document.write("<br/>\tAuthor: "+author)
//             document.write("<br/>\tPublisher: "+publisher)
//         }
//     }
// }

// book = new Book()
// book.display()

// arr = new Array("1", "2", "3", "4", "5", "6", "7")
// arr2 = new Array()
// arr2 = arr2.concat(arr)
// document.write(arr2)

// arr3 = new Array(3, 6, 2, 9, 5, 7, 1)
// arr3.sort()
// document.write("Sorted arr3: "+arr3+"<br/>")
// document.write("Reversed sorted arr3: "+arr3.reverse())

// arr = new Array(20, 30, 10, 40, 60)
// min = max = arr[0]
// for(i=1; i<arr.length; i++) {
//     if(min > arr[i])
//         min = arr[i]
//     if(max < arr[i])
//         max = arr[i]
// }
// document.write("Minimum: "+min)
// document.write("<br/>Maximum: "+max)

// var animals = new Array("Dog", "Cat")
// document.write("animals array upon creation: " + animals + "<br/>")
// animals.push("Fox", "Fish")
// document.write("animals array after pushing fox and fish to back: " + animals + "<br/>")
// fish = animals.pop()
// document.write("animals array after popping last element: " + animals + "<br/>")
// document.write("former last element: " + fish + "<br/>")
// animals.unshift("Bird", "Eagle")
// document.write("animals array after pushing to front: " + animals + "<br/>")
// bird = animals.shift()
// document.write("animals array after popping first element: " + animals + "<br/>")
// document.write("former first element: " + bird + "<br/>")
// animals.sort()
// document.write("sorted animals array: " + animals + "<br/>")
// animals.reverse()
// document.write("reversed animals array: " + animals + "<br/>")
// all_four = animals.join(", ")
// document.write("animal elements joined with commas: " + all_four + "<br/>")
// animals.splice(1, 2)
// document.write("animals array after removing 2nd and 3rd element: " + animals.join(", ") + "<br/>")

// function sum(a, b) {
//     return a+b
// }

// function subtraction(x, y) {
//     return x-y
// }

// function multiply(x, y) {
//     return x*y
// }

// function divide(a, b) {
//     return a/b
// }

// function green() {
//     document.bgColor = "green"
// }
// function red() {
//     document.bgColor = "red"
// }
// function blue() {
//     document.bgColor = "blue"
// }
// function yellow() {
//     document.bgColor = "yellow"
// }
// function white() {
//     document.bgColor = "white"
// }