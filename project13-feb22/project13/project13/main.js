// document.querySelector('h1').style.color = '#080'
// document.querySelector('.heading').style.backgroundColor = '#777'
// document.querySelector('#btn').style.border = "3px solid #e77"

document.querySelector('h1').classList.add('js-text')
// document.querySelector('h1').classList = 'js-text'

document.querySelector('h2').classList.remove('heading')

const p = document.createElement('p')
p.innerHTML = 'hello world :)'
document.querySelector('main').appendChild(p)

document.querySelector('#btn').setAttribute('class', 'class-added-by-css')

const image = document.createElement('img')
image.src = 'https://picsum.photos/id/1049/700'
image.setAttribute('alt', 'this is a cool image.')
image.width = 225
document.querySelector('figure').appendChild(image)

document.querySelector('h2').style.setProperty('font-size', '80px')

// document.querySelector('#btn').style.cssText = "background-color: red; width: 300px; height: 100px;"
