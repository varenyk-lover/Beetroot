// Мінімум

// Напиши всі можливі варіанти створення функцій.
//function expression
/*function sum(a, b) {
    return a + b;
}*/

//function declaration
/*let sum = function(a, b) {
    return a + b
};*/

//     Створи функцію, яка буде виводити кількість переданих їй аргументів.
//Я бачила такий варіант:
/*function amountOfArguments() {
  console.log(arguments.length);
}
amountOfArguments(1, 2, 'aa');
*/

/*Та я хотіла, щоб юзер сам вводив число. Тож я зробила так, але не знаю, як:
1) уникнути виведення undefined в алерт
2)обійтись без виводу в консоль, натомість виводити відповідь в алерт віконце */

/*function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введіть число");

        if (value === "" || value === null || !isFinite(value) || value === undefined) break; // Наш стопер

        numbers.push(+value);
    }

    let countElementsArr = numbers.length; //Довжина масиву, тобто кількість ключів, тобто введених чисел
    console.log(countElementsArr);

}

alert( sumInput() + ' Кінець розрахунку');*/

/*Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге;
1 - якщо перше число більше, ніж друге;
0 - якщо числа рівні.
*/

/*function checkNumbers(a, b) {
    if (a < b){
    return -1;
} else if (a > b){
    return 1;
} else {
        return 0;
    }

}

console.log(checkNumbers(1, 2))*/

// Напиши функцію, яка обчислює факторіал переданого їй числа.
/* function factorial(n) {

        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

console.log(factorial(3)) */



/*    Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
/*function createNum(a, b, c) {
  return ''+ a + b + c
}

console.log(createNum(1, 4, 9))*/


/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
/*
const calcSquare = (number1, number2) => {
    return number1 * number2 || number1 ** 2;
};

console.log(calcSquare(10));
*/


// Норма

/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює
сумі всіх своїх дільників.*/
/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з
     діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/
//Ці два завдання пов'язані однією функцією, тому виконуємо разом

/*function isPerfectNumber(num) {
    let result = 0;
    //і - це дільник. На 0 не ділимо, тож починаємо з 1.
    //Нам треба всі дільники, окрім самого числа, тож ми ділимо число на два  num / 2
    for (let i = 1; i <= num / 2; i++) {
        //Якщо ділиться без залишку - йдемо далі.
        //Додаємо до 0 наші дільники, і так по колу, поки працює цикл.
        if (num % i === 0) result = result + i;
    }
    //Досконале число має дорівнювати сумі своїх дільників
    if (result === num && result !== 0) {
        return num;
    //    Тож якщо збігається - видодимо це число як досконале. Якщо ні,то не виводимо.
    }
}
isPerfectNumber(6);

//Тепер спробуємо не 6, а взяти проміжок від 1 до 9000.
function findPerfectNumber(num1, num2) {
    //Початкове число не вказуємо, бо воно в нас в аргументі.
    //Оскільки  йдемо від 1 до 9000, тому 2ге число більше. Якщо візьмемо 9001 - значить ми вийшли за діапазон
    for (; num1 <= num2; num1++) {
        //Пробігаємо по функції, і коли вона знайде досконале число - вона її виведе.
        //Далі це число зрівнюємо із введеним знову, щоб ми могли його вивести вже в цій функції. І так по колу діаапазону.
        if (isPerfectNumber(num1) === num1) console.log(num1);
    }
}
findPerfectNumber(1, 9000);*/