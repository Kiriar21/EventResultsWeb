(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();

                const fields = form.querySelectorAll('input, select, textarea, checkbox, date');
                for (let i = 0; i < fields.length; i++) {
                    if (!fields[i].checkValidity()) {
                        fields[i].focus();
                        break;
                    }
                }
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

function counterChars(textarea, element) {
        textarea.addEventListener('input', function () {
            const count = textarea.value.length;
            const countMax = textarea.getAttribute('maxlength');
            const ele = document.getElementById(element);
            ele.textContent = count + '/' + countMax + 'znaków';
        });
}
