export function Splune(opts) {
  const options = opts || {}
  const elements = document.querySelectorAll(options.el)
  const whiteSpaceClass = options.whiteSpaceClass || 'whitespace'

  elements.forEach(element => {
    // Split all letters into an array
    const split = [...element.textContent];

    // turn every letter into a span 
    const spanify = split.map((letter, index) => {
      const newEl = document.createElement('span')
      newEl.textContent = letter
      newEl.style.setProperty('--index', index)

      // Check if letter is a whitespace and add a class
      if (letter === ' ') {
        newEl.classList.add(whiteSpaceClass)
      }
      return newEl
    })

    // populate element with nested spans
    element.innerHTML = ''
    spanify.forEach(el => element.append(el))
  })
}