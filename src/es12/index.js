// -----------------------------------------------------------------------------
//Replace all
const string = "JavaScript es maravillos, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// -----------------------------------------------------------------------------
// Metodos privados

class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');