//1
let user = {};
user.name = prompt("Как тебя зовут ?");
user.age = prompt("Сколько тебе лет ?");
user.isMale = confirm("Вы мужчина?");

console.log(user.name);
console.log(user.age);
console.log(user.isMale ? "Да" : "Нет");

//2

let userInput = prompt("Введите число:");


if (!isNaN(userInput)) {
    alert("Вы ввели число: " + userInput);
} else {
    alert("Это не число!!!");
}

//3

let a = +prompt('a?', '');

console.log(a);
a = +a;
console.log(a);

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        break;
}

//4
sum = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 === 0) {
        sum += j;
    }
    j++;
}

console.log(sum);
