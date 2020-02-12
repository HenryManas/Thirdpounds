
// var name= 'Henry';
// var age='10';
// var location='Bauchi';
// console.log('my name' + name + 'and i am' + age + 'years old and i stay in' + location);


// var a =12;
// var d =4;
// var b = 'books';
// var c = a + d + b;
// var e = b - a + d;
// console.log(c);
// console.log(e);



// var projector ={
//     color: 'orange',
//     sound: 'vomvom',
//     price: 120000
// }

// var person ={
//     name: 'Henry',
//     age: 16,
//     height: '1.5',
//     location: 'jos',
// }

// var car ={
//     color:'red',
//     model:'2020',
//     price:2000
// }  

// var Henry_Pro = 'my name is ${person.name} and i am ${person.age}';
// var HenryCar = 'i also have a ${car.color} and it is model ${car.model} wich cost ${car.price}';
// var Henry = Henry_Pro + HenryCar;
// var x= 2;
// var y = x + projector.price;
// console.log(projector);
// console.log(y);
// console.log(Henry);


    
// =======================Array
// var x =[391, 392, 120, 70, 492];
// console.log(x)
// console.log(x[0])
// console.log(x.length);
// var y = x.pop();
// console.log(x)
// console.log(y);
// var z = x.push('dangx')
// console.log(x)
// var e = x.splice(0, 2, 'Hi', 'There')
// console.log(x)
// var e = x.splice(3, 4, 'Love', 'Ones')
// console.log(x)
// var e = x.splice(0, 1, 2, 3, 4, 'Hi', 'There', 'My', 'Love', 'Ones')
// console.log(x)

//================Mighty formular
// var a = 1;
// var b =  - 5;
// var c = 6;
// var y = - b + Math.sqrt ((b * b) - 4 * a * c) / 2 * a;
// var z = - b - Math.sqrt ((b * b) - 4 * a * c) / 2 * a;
// var y = - 5 + Math.sqrt ((- 5 * - 5) - 4 * 1 * 6) / 2 * 1;
// var z = - 5 - Math.sqrt ((- 5 * - 5) - 4 * 1 * 6) / 2 * 1; 
// console.log(y)
// console.log(z)


//======================================= Typeof =====================================
// var a =typeof 'my name' + '...' + typeof 4 + '...' + typeof false + '...' + typeof [1, 3, 4] + '...' + typeof {name: 'henry', age: 12}
// console.log(a);

//============================== FUNCTIONS ==============================
// function funName(){
// var x = 3;
// var y = 7;
// var z = x + y;
// return z;
// }
//  var result = funName();
// console.log(result);

// function funName(one, two, three){
//     var sum = one * three + two;
//     return sum;
// }
// var result = funName(20, 0, 100);
// console.log(result);

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    console.log(123456789)
    var lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
    document.getElementById('ozOutput').innerHTML = lbs * 16;
    
})