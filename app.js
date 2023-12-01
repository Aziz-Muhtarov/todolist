// Theory

// const array = [1, 2, 3, 4, 10, 11, 190];

// console.log(array[3]);

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = ['Learn JavaScript', 'Learn React', 'Learn CS', 'get rich']

// function render() {
//     /* Этот цикл итерации стандартный */
//     // for ( let i = 0; i < notes.length; i++) [
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // ]
//     /* Этот цикл более современный */
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//   //   listElement.innerHTML =
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li class="list-group-item d-flex justify-content-between aligh-atem-center">
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>
//     `
// }


/* 

Object Theory 

const person = {
    firstName: 'Aziz',
    lastName: 'Muhtarov',
    year: 1994,
    hasWife: true,
    languages: ['russian', 'english', 'turkish'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    },
}

console.log(person.year)
console.log(person['languages'])

*/

const notes = [
    {
        title: 'Learn JavaScript',
        completed: false,
    },
    {
        title: 'Learn React',
        completed: true,
    },
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No elements</p>'
    }
    for ( let i = 0; i < notes.length; i++) [
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    ]
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
    <li 
        class="list-group-item d-flex justify-content-between
        align-items-center"
        >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${
            note.title
        }</span>
            <span>
                <span class="btn btn-small btn-${
                note.completed ? 'warning' : 'success'
                }" data-index='${index}' data-type='toggle'>&check;</span>
            <span class="btn btn-small btn-danger" data-type='remove'
            data-index='${index}'>&times;</span>
        </span>
    </li>
    `
}

