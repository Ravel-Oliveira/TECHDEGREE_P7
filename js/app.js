const search = document.getElementById('search');
const message = document.getElementById('user-message');
let btnSend = document.querySelector('.send');
let messageWrapper = document.querySelector('.message-wrapper');
let topAlert = document.querySelector('.alert');
let users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];


// Check if the message's user is in the array of valid users
function checkUser(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (search.value.toLowerCase() === arr[i].toLowerCase()) {
            return arr[i].toLowerCase();
        }
    }
    return search.value;
}


function alertBuilder(text) {
    if (document.querySelectorAll(".message-wrapper .send-alert").length > 0) {
        let el = document.querySelector('.send-alert');
        el.remove();
    }
    let alert = document.createElement('div');
    alert.classList.add('send-alert');
    alert.innerText = '';
    alert.innerText = text;
    messageWrapper.appendChild(alert);
}

function submitSend() {
    if (checkUser(users) === search.value || message.value === '') {
        alertBuilder('Message not sent! Invalid user or message.');
    } else {
        alertBuilder('Message sent!');
        search.value = '';
        message.value = '';
    }
}

btnSend.addEventListener('click', () => {
    submitSend();
})

topAlert.addEventListener('click', (evt) => {
    let e = evt.target;
    if (e.tagName === 'SPAN') {
        e.parentElement.style.display = 'none';
    }
})