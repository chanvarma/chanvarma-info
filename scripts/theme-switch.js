document.addEventListener('DOMContentLoaded', function(event) {
    if (localStorage.getItem('theme') === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

function toggleTheme(event) {
    event.preventDefault();

    if (document.body.className === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function setLightTheme() {
    document.body.className = 'light';
    document.getElementsByClassName('toggle-theme')[0].children[0].innerHTML = 'Dark';
    localStorage.setItem('theme', 'light');
}

function setDarkTheme() {
    document.body.className = 'dark';
    document.getElementsByClassName('toggle-theme')[0].children[0].innerHTML = 'Light';
    localStorage.setItem('theme', 'dark');
}