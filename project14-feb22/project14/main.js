const panel = document.querySelector('[data-panel]')
const tab = document.querySelector('[data-tab]')
const icon = document.querySelector('[data-icon]')
const text = document.querySelector('[data-text]')

tab.addEventListener('click', function () {
    if (icon.classList.contains('fa-arrow-down')) {
        panel.style.setProperty('height', '300px')
        icon.classList.remove('fa-arrow-down')
        icon.classList.add('fa-arrow-up')
        text.innerHTML = 'close'
    } else {
        panel.style.setProperty('height', '0')
        icon.classList.remove('fa-arrow-up')
        icon.classList.add('fa-arrow-down')
        text.innerHTML = 'open'
    }
})
