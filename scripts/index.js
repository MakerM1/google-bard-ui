const input = document.querySelector('.message-send')
const sendButton = document.querySelector('.send-button')

input.addEventListener('input', (e) => {
    if (input.value !== '') {
        sendButton.classList.add('active')
    } else {
        sendButton.classList.remove('active')
    }
})