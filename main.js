// Check Yourself! Week 7

// Задание №1
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.
//!! function declareyshon
// function calculator(num1, num2 ){
// return num1+num2;
// }
// console.log(calculator(5,4))
// !!arow function
// let calculator = (num1, num2) => num1+ num2;
// console.log(calculator(5,4));


// Задание №2
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть: 15
// так как 4 + 5 + 6 = 15
// function checkTask(number) {
//     let sum = 0;
//     let a = number.toString();
//     for (let i = 0; i < a.length; i++) {
//       let u = parseInt(a[i]); 
//       sum += u; 
//     }
//     return sum;
//   }
//   let number = 456;
//   let result = checkTask(number);
//   console.log(result);
// Задание №3
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).
function getQuarter(min){
    if (min >= 0 && min <= 14) {
      return "первую";
    } else if (min >= 15 && min <= 29) {
      return "вторую";
    } else if (min >= 30 && min <= 44) {
      return "третью";
    } else if (min >= 45 && min <= 59) {
      return "четвертую";
    } else {
      return "Параметр min должен быть числом от 0 до 59";
    }
  }
  let min = 37;
  let quarter = getQuarter(min);
  console.log(`Число ${min} попадает в ${quarter} четверть часа.`);
  
// Задание №4
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'
// function modifyString(str) {
//     let a = ['a', 'e', 'i', 'o', 'u'];
//     let kaStr = '';
//     for (let i = 0; i < str.length; i++) {
//       let ls = str[i].toLowerCase();
//       if (!a.includes(ls)) {
//         kaStr += ls.toUpperCase();
//       }
//     }
//     return kaStr;
//   }
//   let input = 'hello';
//   let kaString = modifyString(input);
//   console.log(kaString); 
  
// Задание №5
// Дан массив с товарами
let db = [
  {
    title: 'samsung S10',
    category: 'samsung',
  },
  {
    title: 'iPhone 13 Pro',
    category: 'apple',
  },
  {
    title: 'Samsung S9',
    category: 'samsung',
  },
  {
    title: 'iPhone 11',
    category: 'apple',
  },
][
  // Задача: создать функцию checkTask, которая будет принимать массив с объектами и строку, а затем будет смотреть на все товары и возвращать только те, у которых в названии есть данная строка
  // название может быть полным, а может быть частичным. Регистр не должен учитываться при поиске
  // Например:
  // console.log(checkTask5(db, 'sams'))
  // Вывод:

  ({
    title: 'Samsung S9',
    category: 'samsung',
  },
  {
    title: 'samsung S10',
    category: 'apple',
  })
];

//EXTRA!!!
// Создайте две функции addExpenses, addBalance, и объект user который будет хранить
// {name: 'Sam', balance: 700,  }
// Первая будет записывать расходы, вторая просто пополнять баланс,
//первая функция: ее основная задача получать 2 аргумента на что потрачено и сколько потрачено, дальше формировать объект типа:
// {target: 'Products', spend: 400}
// Затем вычитать из баланса сумму трат, вторая функция просто получает в качестве аргумента сумму, которую нужно добавить на баланс, также необходимо реализовать проверку, достаточно ли средств на балансе для совершения расходов
