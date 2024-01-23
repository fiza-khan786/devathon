// script.js

document.addEventListener("DOMContentLoaded", function () {
    const updatePasswordButton = document.getElementById("signup");

    updatePasswordButton.addEventListener("click", function () {
        Swal.fire({
            title: "Password Updated",
            text: "Your password has been updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
        });
    });
});
