// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
const selectFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const bgColor = document.querySelector('#input-bg-color')
const text = document.querySelector('#enter-text')
const selectWeight = document.querySelector('#select-weight')
const selectStyle = document.querySelector('#select-style')
const inputSpacing = document.querySelector('#input-spacing')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')
const showWeight = document.querySelector('#show-weight')
const showStyle = document.querySelector('#show-style')
const showSpacing = document.querySelector('#show-spacing')
// Repeat this for the input and "show" elements

function handleInput() {
	// get the font size:
    const fontSize = inputSize.value
    const fontValue = selectFont.value
    const color = inputColor.value
    const backgroundColor = bgColor.value
    const textValue = text.value
    const weightValue = selectWeight.value
    const styleValue = selectStyle.value
    const spacingValue = inputSpacing.value
	// Set the style 
    display.style.fontSize = fontSize
    display.style.fontFamily = fontValue
    display.style.color = color
    display.style.backgroundColor = backgroundColor
    display.style.fontWeight = weightValue
    display.style.fontStyle = styleValue
    display.style.letterSpacing = spacingValue
	// Show the size
    showSize.innerHTML = fontSize
    showFont.innerHTML = fontValue
    showColor.innerHTML = color
    showBgColor.innerHTML = backgroundColor
    display.innerHTML = textValue
    showWeight.innerHTML = weightValue
    showStyle.innerHTML = styleValue
    showSpacing.innerHTML = spacingValue
}

inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
bgColor.addEventListener('input', handleInput)
text.addEventListener('input', handleInput)
selectWeight.addEventListener('input', handleInput)
selectStyle.addEventListener('input', handleInput)
inputSpacing.addEventListener('input', handleInput)