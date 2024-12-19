// Q1

let nickname = "ごっしー";
age = 28;

console.log("私のニックネームは" + nickname + "で、年齢は" + String(age) + "歳です。");

// Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log("私の好きな言語は" + languages[0] + "です。次は" + languages[3] + "を勉強してみたいです。");

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

let ages = playerList[0].age + playerList[1].age + playerList[2].age;
average = ages / 3;
console.log(average);

// Q6

function sayHello() {
  let hello = "Hello";
  console.log(hello);
}

sayHello();

let sayWorld = function(){
  console.log("World");
};
sayWorld();

// Q7

// let user = {
// name: 'John',
// age: 26,
// bloodType: 'A',
// favorite: 'card',
// };

//  birthday プロパティを追加
user.birthday = '2000-09-27';
console.log(user);

// メソッド sayHello を追加
user.sayHello = function() {
  console.log('Hello!');
};

user.sayHello();

// Q8
let calc = {};

// 和が７
calc.add = function(x, y) {
  console.log(x + y);
};

calc.add(3, 4);

// 差が１０
calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.subtract(20, 10);

// 積が４９
calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

// 商が５
calc.divide = function(x, y) {
  console.log(x / y);
};

calc.divide(25, 5);

// Q9
function rem(x, y) {
  let remainder = x % y;
  return remainder;
}
console.log('5 を 3 で割った余りは' + rem(5, 3) + 'です。');

//Q10
// function foo() {
// let x = 1;
// }
// console.log(x);

// x が スコープ 内で定義されているため
// x はこの関数内のスコープでのみ有効


// 応用問題

// Q1
// 0 ~ 9 のランダムな整数を出力
let random = Math.floor(Math.random() * 10);
console.log(random);


// Q2
// 関数 setTimeout を使用し、3 秒後にhelloworld

function hello(callback) {
  console.log();
  setTimeout(callback, 3000);
}

hello(function() {
  console.log("Hello World!");
});
// hello が呼び出され、最初に空の console.log(); が実行
// その後、setTimeout が実行、3秒後にコールバック関数（console.log("Hello World!");）が実行。

// Q3

let num = 7;

if (num > 0) {
    console.log(num + " is greater than 0");
} else if (num < 0) {
    console.log(num + " is less than 0");
} else {
    console.log(num + " is 0");
}

// Q4
let numbers= [];
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}

console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

mixed.forEach(item => {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
});
