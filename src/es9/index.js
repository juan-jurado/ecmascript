// Operador de Reposo

const obj = {
    name: 'Juan',
    age: '28',
    country: 'mx',
};

let { name, ...alla } = obj; // operador de reposo
console.log(name, all);

// Unir uno o N elementos de objetos a un nuevo objeto

const obj = {
    name: 'Juan',
    age: '28',
};

const obj1 = {
    country: 'Colombia',
};

// como anidamos los dos objetos?
const obj_2 = {
    ...obj,
    country: 'Colombia',
};

console.log(obj_2);

// saber cuando ha terminado el llamado de una promise

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Erros('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo la promesa'))

// saber cuando ha terminado el llamado de una promise + Complejidad

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Fello world'), 3000)
            : reject(new Erros('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo la promesa'))

// Como podemos agrupar bloques del Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

