// Variable money.
let money = +prompt('Ваш бюджет на месяц?', '0');

// Variable time.
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


// Const day month.
const month = 30;

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// Write data user.
// appData.expenses.question1 = qestion2;
// appData.expenses.question3 = qestion4;


// Question user.
for (let i = 0; i < 2; i++) {
    let qestion1 = prompt('Введите обязательную статью расходов в этом месяце', 'Не вказано'),
        qestion2 = prompt('Во сколько обойдется?', '0');

    if (
        (typeof (a)) === 'string' &&
        (typeof (a)) != null &&
        (typeof (b)) != null &&
        a != '' &&
        b != '' &&
        a.length < 50
    ) {
        appData.expenses[a] = b;
    } else {

    }
};

appData.moneyPerDay = appData.budget / 30;

// Output budget per day.
alert('Бюджет на 1 день:' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {

    console.log('Минимальний уровени достатка')

} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {

    console.log('Средний уровени достатка');

} else if (appData.moneyPerDay > 2000) {

    console.log('Високий уровени достатка');

} else {

    console.log('Произошла ошибка');

}