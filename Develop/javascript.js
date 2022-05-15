var currentDay = document.getElementById("currentDay")

pageLoad()

function pageLoad() {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

