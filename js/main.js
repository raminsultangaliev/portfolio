const themeButton = document.querySelector('.theme-button')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeButton.classList.add('theme-button_active')
    document.body.classList.add('dark')
}

if (localStorage.getItem('theme') == 'dark') {
    themeButton.classList.add('theme-button_active')
    document.body.classList.add('dark')
}

themeButton.onclick = () => {
    let isDark = document.body.classList.toggle('dark')
    themeButton.classList.toggle('theme-button_active')
    if (isDark) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
}