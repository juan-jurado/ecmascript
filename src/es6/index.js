// 1. Function to assign default/harcoded values

// Traditional mode
function newFunction(name, age, country){
    var name = name || 'juan';
    var age = age || 32;
    var country = country || 'colombia';
    console.log(name, age, country)
}
newFunction()

// ES6 Mode
function newFunction2(name2 = 'Juan', age2 = 28, country2 = 'Colombia'){
    console.log(name2, age2, country2)
}
newFunction2('Ricardo', '34', 'MX')

// -----------------------------------------------------------------------------

// 2. Concatenate 2 Strings - Traditional

// Traditional Mode
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6 Mode
let hello = "hello";
let world = "world";
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// -----------------------------------------------------------------------------

// 3. Multi line in strings

// Traditional Mode
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n"
+ "another epic phrase";
console.log(lorem);

// ES6 Mode
let lorem2 = `Another epic phrase that we need
then, you can see another epic phrase II
`;
console.log(lorem2);

// -----------------------------------------------------------------------------

// 4. Access to objects

let person = {
    'name': 'Juan',
    'age': 28,
    'country': 'COL'
}

// Traditional Mode
console.log(person.name, person.age, person. country)

// ES6 Mode
let {name, age, country} = person;
console.log(name, age, country);

// -----------------------------------------------------------------------------

// 5. Elements in arrays -> Put them together

let team1 = ['Juan', 'Ricardo', 'Andres']
let team2 = ['Valeria', 'Juana', 'Jessica', 'Camila']

// ES6
// Create a new element with both elements in one
let education = ['David', ...team1, ...team2]

console.log(education);

/*
[
    'David',   'Juan',
    'Ricardo', 'Andres',
    'Valeria', 'Juana',
    'Jessica', 'Camila'
]
*/

// -----------------------------------------------------------------------------

// 6. LET - Save data in the program

// Traditional Mode

var name = 'Juan'; // variable for global scope
console.log(name);

// ES6 Mode
// LET just in the scope or code block
{
    var globalVar = "Global var";
}

{
    let globalLet = "Global Let";
}

console.log(globalVar);
console.log(globalLet); //globalLet is just declared inside of the scope

// -----------------------------------------------------------------------------

// 7. Const - constant variable

// Const -> you can NOT change its value
// var -> You can change its value.

const a = 'b';
a = 'a';
console.log(a);