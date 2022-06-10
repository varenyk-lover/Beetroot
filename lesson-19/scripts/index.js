/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака,
середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:*/
/*const car = {
    manufacturer: 'BMW',
    model: 'X5 M',
    yearOfProduction: 2015,
    averageSpeed: 175,
    fuelTankCapacity: 85,
    averageFuelConsumption: 11.1,
    driverName: ['Ivan', 'John', 'Hanna'],
}; */
// Висновок на екран з інформацією про автомобіль.
// console.log(car);


// Додавання водія, який має право керувати автомобілем.
/*car.driverName.push('Andriy')
console.log(car);*/

// Заправка автомобіля.
/*function fuelUp(litres) {
    if (litres === 0) {
        alert('Так ти нікуди не поїдеш, друже...');
    } else if (litres < 85) {
        alert( 'Залий ще трохи :)');
    } else if (litres === 85) {
        alert('Поїхали!');
    } else {
        alert( 'Щось це ту мач.');
    }
}

fuelUp(95);*/
//а якщо щодо від'ємних значень??





/*Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
S = V * t
t = S/V */
const car = {
    manufacturer: 'BMW',
    model: 'X5 M',
    yearOfProduction: 2015,
    averageSpeed: 175,
    fuelTankCapacity: 85,
    averageFuelConsumption: 11.1,
    driverName: ['Ivan', 'John', 'Hanna'],
   /* timeofRoad: function() {
        let distance = 200;
    return distance * this.averageSpeed;??????*/
}
};
console.log(car);

/*Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
а також потрібно перевіряти чи має право водій  керувати даним автомобілем
(ім'я водія функція приймає другим аргументом).*/
/*if > 4
(+1, name)*/
/*
Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.*/
