const darkModeSwitch = document.getElementById('dark-mode-switch')
const rootElement = document.querySelector(':root')

function setDarkModeState (state) { localStorage.setItem('darkMode', state) }
setDarkModeState('light')

darkModeSwitch.addEventListener('click', () => {
    localStorage.getItem('darkMode') == 'light' ? setDarkMode() : setLightMode()
})

function setDarkMode (){
    darkModeSwitch.textContent = 'light_mode'
    setDarkModeState('dark')
    rootElement.classList.remove('light')
    rootElement.classList.add('dark')
}

function setLightMode (){
    darkModeSwitch.textContent = 'dark_mode'
    setDarkModeState('light')
    rootElement.classList.remove('dark')
    rootElement.classList.add('light')
}

