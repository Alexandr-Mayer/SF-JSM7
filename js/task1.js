//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
//все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const user = {
    name: 'Alexandr',
    surname: 'Mayer',
    age: 24,
    position: 'developer',
};

function headFunc (arg) {
    for (let key in arg) {
        console.log(`${key}: ${arg[key]}`)
    };
};
headFunc(user);
