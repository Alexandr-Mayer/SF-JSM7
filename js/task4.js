//Родительская функция(буду так ее называть везде, как имя собственное), которая определяет включен ли прибор в розетку.
function ElecticialDevice(name, turn) {
    this.name = name;
    this.turn = function(){
        if (turn === 'on'){
        console.log(`${name} device is ${turn}`)
        } else {
            console.log(`${name} device is ${turn}`)
        };
    };
};


//Прототип объекта телевизор, который имеет уникальный метод - диагональ экрана(для данной функции прототипом является Родительская функция)
function Tv(diagonal){
    this.diagonal = function(){
        console.log(`screen diagonal = ${diagonal}`)
    }
};
Tv.prototype = new ElecticialDevice('samsung', 'on');
//Объект телевизор - samsung, который наследует методы своего прототипа и Родительской функции
const samsung = new Tv('108cm');


//Прототип объекта компьютер, который имеет уникальный метод - мощность процессора(для данной функции прототипом является Родительская функция)
function Computer(processorPower){
    this.processorPower = function(){
        console.log(`processor power = ${processorPower}`)
    }
};
Computer.prototype = new ElecticialDevice('intel', 'off');
//Объект компьютер - intel, который наследует методы своего прототипа и Родительской функции 
const intel = new Computer('3,7Ghz');


//Проверка унаследованных методов
samsung.turn();
intel.turn();
samsung.diagonal();
intel.processorPower();