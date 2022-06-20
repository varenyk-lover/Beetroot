/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака,
середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:*/

const car = {
    manufacturer: 'BMW',
    model: 'X5 M',
    yearOfProduction: 2015,
    averageSpeed: 175,
    fuelTankCapacity: 85,
    fuelInTank: 0,
    averageFuelConsumption: 11.1,
    drivers: ['Ivan', 'John', 'Hanna'],

    // Висновок на екран з інформацією про автомобіль.
    infoAboutCar() {
        console.log(
            `Manufacturer: ${this.manufacturer}\n`,
            `Model: ${this.model}\n`,
            `Record year: ${this.yearOfProduction}\n`,
            `Average speed: ${this.averageSpeed}\n`,
            `Capacity of the fuel tank: ${this.fuelTankCapacity}\n`,
            `Average fuel consumption: ${this.averageFuelConsumption}\n`,
            `Names of drivers: ${this.drivers}\n`,
            `Current amount of fuel in tank: ${this.fuelInTank}\n`,
        )
    },
    // Додавання водія, який має право керувати автомобілем.
    addDriver(name) {
        this.drivers.push('Andriy');
    },

// Заправка автомобіля.
    fuelUp(litres) {
        if (litres > 0) {
            if (this.fuelTankCapacity - this.fuelInTank >= litres) {
                console.log(`Now you have` + (this.fuelInTank = this.fuelInTank + litres) + `litres of fuel.`)
            } else console.log(`Your fuel tank is full.`);
        }
    },

    /*Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
S = V * t
t = S/V
   І потрібно перевіряти чи має право водій  керувати даним автомобілем
  (ім'я водія функція приймає другим аргументом).*/
    countTime(distance, driverName) {
        let time = Math.floor(distance / this.averageSpeed);

        for (let i = 1; i <= time; i++) {
            // Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину
            if (i % 4 === 0) time = time + 1;
        }
        /* потрібно перевіряти чи має право водій  керувати даним автомобілем.*/
        const checkDrivers = this.drivers.find((item) => item === driverName);
        if (checkDrivers === driverName) {
            console.log(`You can drive, ${driverName}.`);
        } else console.log(`You don't have access.`);

        /*Gеревірити чи вистачить палива, для здійснення цієї поїздки,
         якщо палива нi -  потрібно вивести повідомлення про це і запропонувати заправити автомобіль.*/
        const checkFuel = (this.fuelInTank / this.averageFuelConsumption) * 100;
        if (checkFuel > distance) {
            console.log('You have enough fuel');
        } else console.log('Not enough. Fuel up!');

        console.log(`Your trip will continue ${time} hours`);
    },
};

car.infoAboutCar();
car.addDriver();
car.infoAboutCar();
car.fuelUp(85);
car.infoAboutCar();
car.countTime(400, 'Hanna')
