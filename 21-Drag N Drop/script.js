const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragstart)
fill.addEventListener('dragend', dragend)

for(const empty of empties){
    empty.addEventListener('dragover' , dragOver)
    empty.addEventListener('dragenter' , dragEnter)
    empty.addEventListener('dragleave' , dragLeave)
    empty.addEventListener('drop' , dragDrop)
}

function dragstart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'iinvisible' , 0)
}

function dragend() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave () {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}