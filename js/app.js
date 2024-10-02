const search = document.getElementById('search');
const message = document.getElementById('user-message');
const toggleEmail = document.getElementById('t-email');
const toggleProfile = document.getElementById('t-profile');
const timezone = document.getElementById('timezone');
let btnSend = document.querySelector('.send');
let btnSave = document.querySelector('.save');
let btnCancel = document.querySelector('.cancel');
let messageWrapper = document.querySelector('.message-wrapper');
let topAlert = document.querySelector('.alert');
let users = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];


// ----------------------------------------------
// Send button event for the message user section
// ----------------------------------------------
// Check if the message's user is in the array of valid users
function checkUser(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (search.value.toLowerCase() === arr[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

// if the alert box exist than removes it, after that creates a new alert box, put in the document,
// clean the innerText and put a new one
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

// check if the user and message are valid than show an accordingly alert
function submitSend() {
    if (checkUser(users) === false || message.value === '') {
        alertBuilder('Message not sent! Invalid user or message.');
    } else {
        alertBuilder('Message sent!');
        search.value = '';
        message.value = '';
    }
}

// ---------------------------------
// Local storage for setting section
// ---------------------------------
config();

// Set the setting section accordingly with the local storage info
function config() {
    const config = getSetting();
    if (config.email) {
        toggleEmail.checked = true;
    }
    if (config.profile) {
        toggleProfile.checked = true;
    }
    if (config.timezone) {
        timezone.value = config.timezone;
    }
}

// check if that is info in the localStorage and return the object
function getSetting() {
    const sett = localStorage.getItem('settingConfig');
    if (sett) {
        return JSON.parse(sett);
    }
    let setting = {};
    return setting;
}

// get the values from the setting section and put in the object
function getValues() {
    let t = timezone.value;
    let m;
    let p;
    if (toggleEmail.checked) {
        m = true;
    }
    if (toggleProfile.checked) {
        p = true;
    }
    let setting = {
        email: m,
        profile: p,
        timezone: t,
    }
    return setting;
}

// reset setting info and clear the localStorage
function cancelConfig() {
    toggleEmail.checked = false;
    toggleProfile.checked = false;
    timezone.value = '';
    localStorage.clear();
}


btnSave.addEventListener('click', () => {
    localStorage.setItem('settingConfig', JSON.stringify(getValues()));
})

btnCancel.addEventListener('click', () => {
    cancelConfig();
})
btnSend.addEventListener('click', () => {
    submitSend();
})

// close top alert box
topAlert.addEventListener('click', (evt) => {
    let e = evt.target;
    if (e.tagName === 'SPAN') {
        e.parentElement.style.display = 'none';
    }
})