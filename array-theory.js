
// const numbers = [10, 8, 2, 12, 1]

// console.log(numbers.toSorted(function (a, b) {
//     return a-b
// }));

// console.log(numbers);

// /* Выучи и зазубри метод map для массивов */

// const names = ['Aziz', 'Guzel', 'Dilia', 'Marat', 'Azaliia']

// // const capitalNames = names.map(function (name) {
// //     const newName = name + '!' 
// //     return newName
// // })

// const capitalNames = names.map(function (name) {
//     return name.toUpperCase()
// })

// console.log(capitalNames)

// // console.log(names.includes('Aziz!'))
// console.log(names.indexOf('Aziz' !== -1))

// Задача, нужно найти определенную сумму из вложенных объектов

// const people = [
//     {name: 'Aziz', budget: 40000},
//     {name: 'Guzel', budget: 37100},
//     {name: 'Marat', budget: 59100},
//     {name: 'Azaliia', budget: 80200},
// ]

// Можно сделать так, но это будет не совсем верно

// let findedPerson 

// for (let person of people) {
//     if (person.budget == 59100) {
//         findedPerson = person
//     }
// }

// Правильный вариант

// const findedPerson = people.find(function(person) {
//     return person.budget === 37100
// })

// Более продвинутый вариант

// const finded = people.find((p) => p.budget === 37100)


// console.log(findedPerson)


// Метод filter

// const filtered = people.filter(function (p) {
//     return p.budget > 50000
// })

// console.log(filtered)

// let someTotalBudget = 0

// // const filtered = people.filter(function (p) {
// //     return p.budget > 50000
// // })

// // console.log(filtered)

// // filtered.forEach(function(p) {
// //     someTotalBudget += p.budget
// // })


// console.log(someTotalBudget)


// const someTotalBudget = people

// const sumBudget = people.filter((p) => p.budget > 50000).map((p) => p.budget).reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)


// const text = 'Hi, how are you?'
// const reversed = text.split('').toReversed().join('')

// console.log(reversed)