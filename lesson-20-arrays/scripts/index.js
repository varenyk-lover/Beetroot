    // Мінімум

/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений
 він чи ні, ціну за одиницю товару, сума. Написати кілька функці й для роботи з таким масивом:*/
    const productList = [
        {
            productName: 'apple',
            amount: 6,
            buyStatus: 'purchased',
            price: 20,
          get sum() {
                return this.price * this.amount;
            },
        },

        {
            productName: 'avocado',
            amount: 4,
            buyStatus: 'purchased',
            price: 45,
            get  sum() {
                return this.price * this.amount;
            },
        },

        {
            productName: 'salmon',
            amount: 3,
            buyStatus: 'notPurchased',
            price: 200,
            get  sum() {
                return this.price * this.amount;
            },
        },
        {
            productName: 'cherry',
            amount: 1,
            buyStatus: 'purchased',
            price: 90,
            get   sum() {
                return this.price * this.amount;
            },
        },
        {
            productName: 'pasta',
            amount: 2,
            buyStatus: 'notPurchased',
            price: 40,
            get sum() {
                return this.price * this.amount;
            },
        },
    ];

console.log(productList);


/*Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані,
а потім - ті, що вже придбали.*/
    const notPurchasedProducts = productList.filter(function (item, index, array) {
        return item.buyStatus === 'notPurchased';
    });
    console.log(notPurchasedProducts);

    const purchasedProducts = productList.filter(function (item, index, array) {
        return item.buyStatus === 'purchased';
    });
    console.log(purchasedProducts);

    const sortedProductList = [...notPurchasedProducts, ...purchasedProducts];
    console.log(sortedProductList);


   /* Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/
    const buyingProducts = (productsName) => {
        const newProductsList = productList.map((item) => {
            if (productsName === item.productName && item.buyStatus === 'notPurchased') {
                return {
                    /*  Якщо item.buyStatus = 'purchased'; тут є нюанс: ми змінюємо поле об‘єкта, а об’єкт веде на одне
            і теж посилання. Тобто масив повертається новий, але його елементи - об’єкти, теж мають свої посилання.
            ми не не копіюємо його, а просто присвоюєм ключу інше значення. Тому тут масиви мають різне посилання,
            а об’єкти те ж саме, і тому так змінюється вихідний список, а нам так не підходить.
            Тому  треба отак:*/
                    ...item,
                    buyStatus: 'purchased'
                };
            }
            return item;
        });
        return newProductsList;
    };
    console.log(buyingProducts('salmon'));



    // Норма
/*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
в якому продукт, що ми шукаємо, буде відсутнім)*/

    const deleteProduct = (nameOfProduct) => {
        return productList.filter((item) => item.productName !== nameOfProduct);
    };
    console.log(deleteProduct('apple'));
/*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно
збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад,
якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/
    let anotherProductsList;
    const addingProduct = (productsName) => {
        anotherProductsList = productList.map((item) => {
            if (productsName === item.productName) {
                return {
                    item.amount++
                  /*  ...item,
                    amount++*/
                };
            }
            return item;
        });

        const newProduct = products.find((item) => item.productName === productsName);

        if (!newProduct) {
            anotherProductsList.push({
                productsName,
                amount: 1,
                buyStatus: 'purchased',
                price: 90,
                get   sum() {
                    return this.price * this.amount;
                },
            });
        }
        return anotherProductsList;
    };

    console.log(addingProduct('egg'));



    // Максимум
    /*Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.*/
 /*   Підрахунок суми всіх (не) придбаних продуктів.*/
    /*Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого,
    в залежності від параметра функції, який вона приймає)*/