// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, 
// в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение.

function greeting(name) {
    console.log(`Привет, ${name}!`);
}

const inputName = prompt("Введите имя: ");
greeting(inputName);