// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
    // поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола; D = 2r.
// метод, що обчислює площу кола; S= π*r2
// метод, що обчислює довжину кола.  С = π*D = 2r*π
//     Продемонструй роботу властивостей і методів.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius () {
        return this._radius;
    }

    set radius (value) {
        if (value < 1) {
           console.log(`Розрахунок неможливий. Введіть число більше за 1.`);
           return;
        }
       this._radius = value;
    }

    get diametr () {
        return `Діаметр кола дорівнює ${this._radius * 2}`;
    }


     countSquare(number) {
         if (number < 1) {
             console.log(`Розрахунок площі неможливий. Введіть число більше за 1.`);
         }
        return `Площа кола дорівнює ${this._radius ** 2 * Math.PI}`;
    }

     countLenth(radius) {
        if (radius < 1) {
            console.log(`Розрахунок довжини кола неможливий. Введіть число більше за 1.`);
        }
        return `Довжина кола дорівнює ${this._radius * 2 * Math.PI}`;
    }
}

let circle = new Circle(10);
console.log(circle.radius);

console.log(circle.diametr)

let circleSquare = new Circle(10);
console.log(circleSquare.countSquare())

let circleLenth = new Circle(0);
console.log(circleLenth.countLenth())

