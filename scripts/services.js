var dateEvent, selectOptions;
function useData() {
    dataEvent = document.getElementById("dateEventValid");
    selectOptions = document.querySelectorAll("select");
    const date = new Date();
    const formatedDate = date.toISOString().slice(0, 10);
    dataEvent.setAttribute('min', formatedDate);

    dataEvent.addEventListener('change', () => {
        if (dataEvent.value === "") {
            placeholderText(dataEvent);
        } else {
            typeText(dataEvent);
        }
    });

    selectOptions.forEach((sel) => {
        sel.addEventListener('change', () => {
            if (sel.selectedIndex > 0) {
                typeText(sel);
            }
        });
    });
}

function changeTheme(ele, col, weight) {
    ele.style.color = col;
    ele.style.fontWeight = weight;
}

function typeText(ele) {
    changeTheme(ele, '#000', 'bold');
}

function placeholderText(ele) {
    changeTheme(ele, '#2D2727', 'normal');
}

window.addEventListener("load", useData);


