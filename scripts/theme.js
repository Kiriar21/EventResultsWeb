const switchModeInput = document.getElementById("switchMode");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === 'dark' || !savedTheme) {
    setTheme('dark');
    switchModeInput.checked = true;
} else {
    setTheme('light');
    switchModeInput.checked = false;
}

switchModeInput.addEventListener('change', (e) => {
    if (e.target.checked) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    }
});


function setTheme(mode) {
    document.body.setAttribute('data-theme', mode);
}

if (navigator.userAgent.match(/samsung/i)) {
    alert("Twoja przeglądarka (Samsung Internet) może nie wyświetlać poprawnie tej strony. " +
        "Zalecamy używanie przeglądarki zgodnej ze standardami. " +
        "Zalecamy korzystać na telefonie z Google Chrome, Brave lub  Firefox."
    );
}
if (navigator.userAgent.match(/MSIE|Trident/i)) {
    alert("Twoja przeglądarka (Internet Explorer) może nie wyświetlać poprawnie tej strony. " +
        "Zalecamy używanie przeglądarki zgodnej ze standardami. " +
        "Zalecamy korzystać na telefonie z Google Chrome, Brave lub  Firefox."
    );
}
