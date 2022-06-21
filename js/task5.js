class ElecticialDevice {
    constructor(name, turn){
        this.name = name;
        this.turn = function() {
            if (turn === 'on'){
            console.log(`${name} device is ${turn}`)
            } else {
                console.log(`${name} device is ${turn}`)
            }
        }
    }
}

class Tv extends ElecticialDevice {
    constructor(diagonal, name, turn) {
        super('samsung', 'on');
        this.diagonal = function(){
            console.log(`screen diagonal = ${diagonal}`)
        }
    }
}
const samsung = new Tv('108cm')

class Computer extends ElecticialDevice {
    constructor(processorPower, name, turn){
        super('intel', 'off');
        this.processorPower = function(){
            console.log(`processor power = ${processorPower}`)
        }
    }
}
const intel = new Computer('3,7Ghz');

samsung.diagonal();
samsung.turn();
intel.processorPower();
intel.turn();