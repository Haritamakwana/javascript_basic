var num1 = 7;
var num2 = 3;
//console.log(num1 * num2);
var answer = num1 > num2;
//console.log(answer);
//d =(lp-sp)/lp*100;
var sellprice = 199;
var listprice = 799;
var discount = ((listprice - sellprice) / listprice) * 100;
console.log("discont percentage" + discount);
displaydiscount = Math.round(discount);
console.log("discont percentage" + displaydiscount + "% off");
