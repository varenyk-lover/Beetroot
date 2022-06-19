/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59)
або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
/*
    let input = +prompt('Скільки вам років?');

    if (input > 0 && input <= 11) {
        alert('Ви дитина');
    } else if (input > 11 && input <= 17) {
        alert('Ви підліток');
    } else if (input > 17 && input <= 59) {
        alert('Ви дорослий');
    } else if (input >= 60) {
        alert('Ви пенсіонер');
    }
    else {
        alert('Який дивний вік');
    }
*/


/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій
клавіші (1 !, 2 @, 3 # і т. д).*/
/*
let input = +prompt('Введіть число від 0 до 9');

if (input === 0) {
    alert(')');
} else if (input === 1) {
    alert('!');
} else if (input === 2) {
    alert('@');
} else if (input === 3) {
    alert('#');
} else if (input === 4) {
    alert('$');
} else if (input === 5) {
    alert('%');
} else if (input === 6) {
    alert('^');
} else if (input === 7) {
    alert('&');
} else if (input === 8) {
    alert('*');
} else if (input === 9) {
    alert('(');
} else {
    alert('Ні-ні, тільки від 0 до 9');
}
*/

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
/*let sum = 0;

while (true) {
    let value = +prompt("Введіть число", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Сума: ' + sum );*/

//     Запитай у користувача 2 числа і знайди найбільший спільний дільник. Ruslan
/*let value1 =  +prompt('enter number 1');
let value2 =  +prompt('enter number 2');
let divider;
//
if (value1 > value2) {
  divider = value2;
} else {
  divider = value1;
}

while (divider !== 0) {
  if (value1 % divider === 0 && value2 % divider === 0) {
    break;
  } else {
    divider--;
  }
}
console.log(divider);*/


//     Запитай у користувача число і виведи всі дільники цього числа. Ruslan
// let value = +prompt('enter number');

// for (let i = 1; i <= value; i++) {
//   if (value % i === 0) {
//     console.log(i);
//   }
// }


/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%;
від 300 до 500 - 5%;
від 500 і вище - 7%.*/
/*while (true) {
    let sum = +prompt("Введіть суму вашої покупки", '');

    if (sum >= 200 && sum <= 300) {
        alert('Зі знижкою до сплати: ' + (sum * 0.97) + ' грн');
    } else if (sum > 300 && sum <= 500) {
        alert('Зі знижкою до сплати: ' + (sum * 0.95) + ' грн');
    } else if (sum > 500) {
        alert('Зі знижкою до сплати: ' + (sum * 0.93) + ' грн');
    } else {
        alert('Щось ви мало скупились...Покладіть щось ще у кошик)');
    }
}*/

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом. Ruslan
/*

let value = prompt('enter value');32123
let middle = Math.floor(value.length / 2);5\2=2.5=2

for (let i = 0; i < middle; i++) {
    if (value[i] === value[value.length - 1 - i]) {
        console.log('yes');
    } else console.log('no');
}
*/

//Зацикли дні тижня
/*

let today = 'monday';

switch (today) {
  case 'monday':
    if (confirm('monday')) {
      today = 'tuesday';
    } else break;
  case 'tuesday':
    if (confirm('tuesday')) {
      today = 'wednesday';
    } else break;
  case 'wednesday':
    if (confirm('wednesday')) {
      today = 'thursday';
    } else break;
  case 'thursday':
    if (confirm('thursday')) {
      today = 'friday';
    } else break;
  case 'friday':
    if (confirm('friday')) {
      today = 'saturday';
    } else break;
  case 'saturday':
    if (confirm('saturday')) {
      today = 'sunday';
    } else break;
  case 'sunday':
    if (confirm('sunday')) {
        today = 'monday';
    } else break;
  default:
    alert('again monday');
}
*/


/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй,
скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10)
 для введення чисел користувачем.*/
/*
let positiveNumbers = 0;
let negativeNumbers = 0;
let nulls = 0;
let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 0; i < 10; i++) {
  let value = +prompt('Введіть число');
  if (value > 0) positiveNumbers++;
  if (value < 0) negativeNumbers++;
  if (value === 0) nulls++;
  if (value % 2 === 0) evenNumbers++;
  if (value % 2 !== 0) oddNumbers++;
}

console.log('Додатні:', positiveNumbers);
console.log(`Від'ємні:`, negativeNumbers);
console.log('Нулі:', nulls);
console.log('Парні:', evenNumbers);
console.log('Непарні:', oddNumbers);
*/
