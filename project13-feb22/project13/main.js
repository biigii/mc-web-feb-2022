function changeBackgroundColor() {
    document.body.style.setProperty('background-color', '#123')
}

function addImageToPage() {
    const image = document.createElement('img')
    image.src = 'https://picsum.photos/id/1049/700'
    image.setAttribute('alt', 'this is a cool image.')
    image.width = 225
    document.querySelector('figure').appendChild(image)
}

document.querySelector('#btn').addEventListener('mouseover', changeBackgroundColor)
document.querySelector('#add-image').addEventListener('dblclick', addImageToPage)

function testFunction() {
    document.querySelector('body').style.setProperty('background-color', 'pink')
}

function submit() {
    const text = document.querySelector('#text-input').value
    const label = document.querySelector('#text-label')
    label.innerHTML = text
}

function changeSiteTheme() {
    const color = document.querySelector('[type="color"]').value
    document.body.style.setProperty('background-color', color)
}
