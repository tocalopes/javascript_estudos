const user = ['Gabriel', 'Pedro', 'Sheva'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const person = [
    {
        name: 'Gabriel',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 23,
        gender: gender.MAN
    },
    {
        name: 'Ingrid',
        age: 25,
        gender: gender.WOMAN
    }
];

console.log(Array.isArray(person));
person.forEach((person,index,arr) => {
    console.log(`nome: ${person.name} index: ${index} arr:`, arr);
});

const mens = person.filter(person => person.gender === gender.MAN);
console.log('\nNovo lista apeas com homens:',mens);

//Retorna um novo
const personsWithCourse = person.map(person =>{
    person.course = 'Introdução ao javascript';
    return person;
});

//Transforma um array em oum outro tipo
const totalAge = person.reduce((age,person) => {
    age += person.age;
    return age;
}, 0);
console.log('\nsome de idade',totalAge);

const totalEvenAges = person
                    .filter(person=> person.age %2 === 0)
                    .reduce((age,person) => {
                        age += person.age;
                        return age;
                    }, 0);
console.log('\nsoma dos numeros pares',totalEvenAges);


