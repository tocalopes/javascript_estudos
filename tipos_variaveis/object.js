let user = {
    name: 'Gabriel'
};
console.log(user);

user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'outro nome 2';
console.log(user);

const propName = 'name';
user[propName] = 'Outro nome 3';
console.log(user);

const user = {
    name: 'Gabriel',
    lastName: 'Pontes'
}

//Recupera as chaves do objeto
console.log('propriedades do objeto user:', Object.keys(user));

//Recupera os valores do onjeto
console.log('\nValores do objeto', Object.values(user));

//Retorna um array com arrays contendo o nome da prop e o valor da prop
console.log('\nLista de prpridades e valores', Object.entries(user));
