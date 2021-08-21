const editIcon = document.getElementsByTagName('ion-icon')[0]
const resetIcon = document.getElementById('reset')

const goal = document.getElementById('goal')
const goal_entries = document.querySelectorAll('.goal')

const addBtn = document.getElementById('add')

const current = document.getElementById('current')
const serving = document.getElementById('serving')

let goal_kcal = localStorage.getItem('goal_kcal') || 2000
let current_kcal = localStorage.getItem('current_kcal') || 0
let date = localStorage.getItem('date') || new Date() && localStorage.setItem('date', new Date())

if (new Date(date) < new Date() && new Date(date).getDay() !== new Date().getDay()) {
    resetCurrent()
    date = new Date()
}

for (i = 0; i < goal_entries.length; i++) {
    goal_entries[i].innerHTML = goal_kcal
}

updateProgress()

// For modifying the Daily Goal
let goal_input = document.createElement('input')
goal_input.value = `${goal_kcal}`
goal_input.type = 'number'
goal_input.id = 'goal_input'

editIcon.addEventListener('click', () => {
    if (editIcon.name === 'pencil-sharp') {
        editIcon.setAttribute('name','checkmark-sharp')
        editIcon.id = 'confirm'
        goal.replaceWith(goal_input)
    } else {
        goal_kcal = goal_input.value
        localStorage.setItem('goal_kcal', goal_kcal)
        goal_input.replaceWith(goal)
        for (i = 0; i < goal_entries.length; i++) {
            goal_entries[i].innerHTML = goal_kcal
        }
        progress.style.width =  current_kcal * 100 / goal_kcal + '%'
        editIcon.setAttribute('name','pencil-sharp')
        editIcon.id = 'edit'
    }
})

resetIcon.addEventListener('click', resetCurrent)

addBtn.addEventListener('click', () => {
    if (serving.value) {
        current_kcal = parseInt(current_kcal) + parseInt(serving.value)
        serving.value = ''
        localStorage.setItem('current_kcal', current_kcal)
        current.innerHTML = current_kcal
        progress.style.width =  current_kcal * 100 / goal_kcal + '%'
    }
})

function resetCurrent() {
    localStorage.setItem('current_kcal', 0)
    current_kcal = localStorage.getItem('current_kcal')
    updateProgress()
}

function updateProgress() {
    current.innerHTML = current_kcal
    progress.style.width =  current_kcal * 100 / goal_kcal + '%'
}