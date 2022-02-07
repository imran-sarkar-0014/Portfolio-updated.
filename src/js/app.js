const toggleMode = document.getElementById('toggleMode')
const html = document.getElementsByTagName('html')[0]
const typeing = document.getElementById('typing')
const typeing2 = document.getElementById('typing2')

toggleMode.addEventListener('click', toggleTheme)

if (localStorage.theme === 'dark') {
    html.classList.add('dark')
    toggleMode.checked = true
} else {
    toggleMode.checked = false
}


function toggleTheme(e) {
    if (e.target.checked) {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        html.classList.remove('dark')
        localStorage.setItem('theme', '')
    }
}



const typingConfig = {
    index: 0,
    index2: 0,
    text: "GIVE ME THE DESIGN,",
    text2: "I WILL MAKE INTO CODE.",
    speed: 120
}


function typeWriter() {
    if (typingConfig.index < typingConfig.text.length) {
        typeing.innerHTML += typingConfig.text.charAt(typingConfig.index)
        typingConfig.index++;

        setTimeout(typeWriter, typingConfig.speed)
    }
    else if (typingConfig.index2 < typingConfig.text2.length) {
        typeing2.innerHTML += typingConfig.text2.charAt(typingConfig.index2)
        typingConfig.index2++;

        setTimeout(typeWriter, typingConfig.speed)
    }
}


typeWriter()