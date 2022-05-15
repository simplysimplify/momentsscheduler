var currentDay = document.getElementById("currentDay")
var saveBtn = document.getElementsByClassName("saveButton")
var textArea = document.getElementsByClassName("textBox")
var readText = ""
var storeSched1 = []

pageLoad()
colorChange()
textArea[0].value = localStorage.getItem("storeSched0")
textArea[1].value = localStorage.getItem("storeSched1")
textArea[2].value = localStorage.getItem("storeSched2")
textArea[3].value = localStorage.getItem("storeSched3")
textArea[4].value = localStorage.getItem("storeSched4")
textArea[5].value = localStorage.getItem("storeSched5")
textArea[6].value = localStorage.getItem("storeSched6")
textArea[7].value = localStorage.getItem("storeSched7")
textArea[8].value = localStorage.getItem("storeSched8")

function pageLoad() {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

function colorChange() {
    document.body.children[moment().hour() - 8].children[0].children[1].children[0].setAttribute("style", "background: gray")
    for (let i = 1; i < moment().hour() - 8; i++)
        document.body.children[i].children[0].children[1].children[0].setAttribute("style", "background: red")
}

saveBtn[0].addEventListener("click", function readText() {
    localStorage.setItem("storeSched0", textArea[0].value)
    console.log(textArea[0].value)
})

saveBtn[1].addEventListener("click", function readText() {
    localStorage.setItem("storeSched1", textArea[1].value)
    console.log(textArea[1].value)
})

saveBtn[2].addEventListener("click", function readText() {
    localStorage.setItem("storeSched2", textArea[2].value)
    console.log(textArea[2].value)
})

saveBtn[3].addEventListener("click", function readText() {
    localStorage.setItem("storeSched3", textArea[3].value)
    console.log(textArea[3].value)
})

saveBtn[4].addEventListener("click", function readText() {
    localStorage.setItem("storeSched4", textArea[4].value)
    console.log(textArea[4].value)
})
saveBtn[5].addEventListener("click", function readText() {
    localStorage.setItem("storeSched5", textArea[5].value)
    console.log(textArea[5].value)
})

saveBtn[6].addEventListener("click", function readText() {
    localStorage.setItem("storeSched6", textArea[6].value)
    console.log(textArea[6].value)
})

saveBtn[7].addEventListener("click", function readText() {
    localStorage.setItem("storeSched7", textArea[7].value)
    console.log(textArea[7].value)
})

saveBtn[8].addEventListener("click", function readText() {
    localStorage.setItem("storeSched8", textArea[8].value)
    console.log(textArea[8].value)
})
