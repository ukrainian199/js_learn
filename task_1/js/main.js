// Variable money.
let money = prompt('Ваш бюджет на месяц?', '0');

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

// Variable question user.
let qestion1 = prompt('Введите обязательную статью расходов в этом месяце', 'Не вказано');
let qestion2 = prompt('Во сколько обойдется?', '0');
let qestion3 = prompt('Введите обязательную статью расходов в этом месяце', 'Не вказано');
let qestion4 = prompt('Во сколько обойдется?', '0');


// Write data user.
appData.expenses.question1 = qestion2;
appData.expenses.question3 = qestion4;

// Сalculation of a float for a day.
let dayBudget = money / 30;

// Output budget per day.
alert('Бюджет на 1 день:' + dayBudget);