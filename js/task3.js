//Написать функцию, которая создает пустой объект, но без прототипа.

function obj(arg){
    let result = Object.create(null)
    console.log(result)
}

obj();