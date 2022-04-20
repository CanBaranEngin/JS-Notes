const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true

    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true

    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false

    }
    
];


//For loop

for(let i =0; i< 10; i++) {
    console.log(i);

}

for(let i =0; i< 10; i++) {
    console.log(`For Loop Number: ${i}`);

}

// Grab the Array element with for loop

for(let i =0; i< todos.length; i++) {   // First Method
    console.log(todos[i].text);

}

for(let todo of todos) {     // Handy Method
    console.log(todo.text);  
}


// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);

});

const todoText = todos.map(function(todo) { // We get an array with map method
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {  // we get an array with condition which is defined in filter function
    return todo.isCompleted === true;
});

console.log(todoCompleted);


const todoCompletedText = todos.filter(function(todo) {  // We used map and filter function together and finally we get one array which is wanted 
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text
}

)

console.log(todoCompletedText);





