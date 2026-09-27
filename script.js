document.addEventListener("DOMContentLoaded", function () {

    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const location = document.getElementById("location").value.trim();
        const packageSelected = document.getElementById("package").value;

        if (!name || !phone || !location || !packageSelected) {
            alert("Please fill in all the required fields.");
            return;
        }

        const whatsappNumber = "2348061232889";

        const message =
            "Hello, I want to place an order for the 3-in-1 Magic Brush.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Phone: " + encodeURIComponent(phone) + "%0A" +
            "Delivery Location: " + encodeURIComponent(location) + "%0A" +
            "Package: " + encodeURIComponent(packageSelected) + "%0A%0A" +
            "Thank you.";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");

    });

});