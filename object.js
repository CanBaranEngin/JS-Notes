const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1])

console.log(person.address.city.toLowerCase())

const {firstName, lastName, address: {city}} = person;

console.log(firstName);

console.log(city);


person.email = 'john@gmail.com';

console.log(person)
console.log(person.email);
