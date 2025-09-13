

class Clock {
  makeTransition(htmlTag, isShowing) {
    setTimeout(() => {
      //
      htmlTag.style.opacity = isShowing ? '.3' : '.6'
      setTimeout(() => {
      //
      htmlTag.style.opacity = isShowing ? '.6' : '.3'
      setTimeout(() => {
      //
      htmlTag.style.opacity = isShowing ? '1' : '0'
      /* if(!isShowing) {
        htmlTag.classList.remove('hidden')
      } */
    }, 300)
    }, 400)
    }, 500)
  }
}

const clockInst = new Clock()

// slide
let slideId = -1

// buttons
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

const windows = [...document.querySelectorAll(".feat-smooth")]

/* hideBtn.addEventListener('click', () => {
    clockInst.makeTransition(unitTest, false)
})

showBtn.addEventListener('click', () => {
    clockInst.makeTransition(unitTest, true)
}) */
