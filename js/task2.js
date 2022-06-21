//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const user = {
    name: 'Alexandr',
    surname: 'Mayer',
    age: 24,
    position: 'developer',
};
function headFunc (string, arg) {
    return arg.hasOwnProperty(string);
}
console.log(headFunc('surname', user))
