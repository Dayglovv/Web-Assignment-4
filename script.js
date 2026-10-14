document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".needs-validation");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const password = form.querySelector("#password");
            const confirmPassword = form.querySelector("#confirmPassword");

            if (password && confirmPassword) {
                if (password.value !== confirmPassword.value) {
                    confirmPassword.setCustomValidity("Passwords do not match");
                } else {
                    confirmPassword.setCustomValidity("");
                }
            }

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        });
    });
});
