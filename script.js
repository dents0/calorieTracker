const ionIcon = document.getElementsByTagName('ion-icon')[0]
const goal = document.getElementById('goal')
const goal_entries = document.querySelectorAll('.goal')
const addBtn = document.getElementById('add')
const current = document.getElementById('current')
const serving = document.getElementById('serving')
let goal_kcal = localStorage.getItem('goal_kcal') || 2000
let current_kcal = localStorage.getItem('current_kcal') || 0
let date = localStorage.getItem('date') || new Date()

if (date < new Date() && date.getDay() !== new Date.getDay()){
    current_kcal = 0
    date = new Date()
}

localStorage.setItem('date', date)

for (i = 0; i < goal_entries.length; i++) {
    goal_entries[i].innerHTML = goal_kcal
}

current.innerHTML = current_kcal
progress.style.width =  current_kcal * 100 / goal_kcal + '%'

// For modifying the Daily Goal
let goal_input = document.createElement('input')
goal_input.value = `${goal_kcal}`
goal_input.type = 'number'
goal_input.id = 'goal_input'

ionIcon.addEventListener('click', () => {
    if (ionIcon.name === 'pencil-sharp') {
        ionIcon.setAttribute('name','checkmark-sharp')
        ionIcon.id = 'confirm'
        goal.replaceWith(goal_input)
    } else {
        goal_kcal = goal_input.value
        localStorage.setItem('goal_kcal', goal_kcal)
        goal_input.replaceWith(goal)
        for (i = 0; i < goal_entries.length; i++) {
            goal_entries[i].innerHTML = goal_kcal
        }
        progress.style.width =  current_kcal * 100 / goal_kcal + '%'
        ionIcon.setAttribute('name','pencil-sharp')
        ionIcon.id = 'edit'
    }
})

function addServing() {
    current_kcal = parseInt(current_kcal) + parseInt(serving.value)
    localStorage.setItem('current_kcal', current_kcal)
}
