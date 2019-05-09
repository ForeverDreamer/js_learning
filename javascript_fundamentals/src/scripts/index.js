import '../styles/index.scss';

console.log('webpack starterkit');


console.log('2) Constants ------------------------');
const carId = 42;
// const bodyStyle;  // error: 常量声明必须初始化
// carId = 100;  // error: 常量初始化之后不可更改


console.log('3) let and var for Variable Declaratiions -------');
// 变量先使用后声明: let 和 var 都是undefined，推荐使用let替代var
console.log(carName);
let carName;

console.log(carPrice);
var carPrice;

// 不声明使用，控制台抛错误异常
// console.log(carModel);

// 外部访问局部变量，var可以正常访问，let会抛错误异常
if (true) {
    var foo = 9;
}

console.log(foo);

// if (true) {
//     let goo = 9;
// }
//
// console.log(goo);


console.log('4) Rest Parameters -----------');
function sendCars(day, ...allCarIds) {
    console.log(day);
    allCarIds.forEach(id => console.log(id));
}

sendCars('Monday',100, 200, 555);


console.log('5) Destructuring Arrays -----------');
let carIds = [1, 2, 5];

let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);
let [car4, car5] = carIds;
console.log(car4, car5);

let car6, remainingCars;
[car6, ...remainingCars] = carIds;
console.log(car6, remainingCars);

// 逗号','表示跳过一个元素
let remaining1;
[, ...remaining1] = carIds;
console.log(remaining1);

let remaining2;
[, , ...remaining2] = carIds;
console.log(remaining2);


console.log('6) Destructuring Objects-----------');
let car = {id: 5000, style: 'convertible'};
let {id, style} = car;
console.log(id, style);

// 课程演示可以正常赋值，但这里不行，估计是js版本问题
let id1, style1;
({id1, style1} = car);
console.log(id1, style1);

console.log('7) Spread Syntax -----------');
function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3);
    console.log(rest);
}

let carIds1 = [100, 200, 300, 400, 500, 600];
startCars(...carIds1);
let carCodes = 'abc';
startCars(...carCodes);


console.log('8) typeof() -----------');
console.log(typeof(1));
console.log(typeof(true));
console.log(typeof('Hello'));
console.log(typeof(function () {}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));


console.log('9) Common Type Conversions -----------');
let hoo = 789;
console.log(typeof hoo.toString());
console.log(hoo.toString());
console.log(typeof Number.parseInt('55'));
console.log(Number.parseInt('55'));
console.log(typeof Number.parseInt('55ABC'));
console.log(Number.parseInt('55ABC'));
console.log(typeof Number.parseFloat('55.99'));
console.log(Number.parseFloat('55.99'));
console.log(typeof Number.parseFloat('55.88abc'));
console.log(Number.parseFloat('55.88abc'));
console.log(Number.parseFloat('xyx55.88abc'));


console.log('10) Controlling Loops -----------');

let i = 0;
for (; i < 12; i++) {
    if (i === 8) {
        break;
    }
}
console.log(i);
console.log('---');

for (let i = 0; i < 4; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
