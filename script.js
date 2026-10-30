document.addEventListener("DOMContentLoaded", function () {

    /* WHATSAPP ORDER FORM */
    const orderForm = document.getElementById("orderForm");

    if (orderForm) {
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

            const message = [
                "Hello, I want to place an order for the 3-in-1 Magic Brush.",
                "",
                "Name: " + name,
                "Phone: " + phone,
                "Delivery Location: " + location,
                "Package: " + packageSelected,
                "",
                "Thank you."
            ].join("\n");

            const whatsappURL =
                "https://wa.me/" + whatsappNumber +
                "?text=" + encodeURIComponent(message);

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    }

    /* 30-MINUTE SESSION COUNTDOWN */
    const countdownDisplay = document.getElementById("countdown");

    if (countdownDisplay) {
        let remainingTime = 30 * 60;
        let countdownInterval;

        function updateCountdown() {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;

            countdownDisplay.textContent =
                String(minutes).padStart(2, "0") + ":" +
                String(seconds).padStart(2, "0");

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "00:00";
                return;
            }

            remainingTime--;
        }

        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    /* ILLUSTRATIVE SAMPLE ACTIVITY — NOT REAL CUSTOMER ORDERS */
    const sampleOrders = [
        { name: "Aisha Bello", state: "Lagos", quantity: "1 Magic Brush" },
        { name: "Tunde Adeyemi", state: "Oyo", quantity: "2 Magic Brushes" },
        { name: "Fatima Ibrahim", state: "Kano", quantity: "1 Magic Brush" },
        { name: "Chinedu Okafor", state: "Anambra", quantity: "3 Magic Brushes" },
        { name: "Mariam Abdullahi", state: "Kwara", quantity: "2 Magic Brushes" },
        { name: "Emeka Nwosu", state: "Enugu", quantity: "1 Magic Brush" },
        { name: "Zainab Musa", state: "Kaduna", quantity: "3 Magic Brushes" },
        { name: "Samuel Johnson", state: "Rivers", quantity: "2 Magic Brushes" },
        { name: "Blessing Eze", state: "Abia", quantity: "1 Magic Brush" },
        { name: "Abdulrahman Sani", state: "Niger", quantity: "2 Magic Brushes" },
        { name: "Grace Oladipo", state: "Osun", quantity: "3 Magic Brushes" },
        { name: "Ibrahim Sule", state: "Abuja", quantity: "1 Magic Brush" },
        { name: "Ngozi Okeke", state: "Imo", quantity: "2 Magic Brushes" },
        { name: "Bashir Usman", state: "Plateau", quantity: "1 Magic Brush" }
    ];

    const notification = document.getElementById("orderNotification");
    const notificationText = document.getElementById("notificationText");

    if (notification && notificationText && sampleOrders.length > 0) {
        let orderIndex = 0;
        let hideNotificationTimeout;

        function showSampleNotification() {
            const order = sampleOrders[orderIndex];

            notificationText.textContent =
                order.name + " — " +
                order.state + " — " +
                order.quantity;

            notification.hidden = false;

            requestAnimationFrame(function () {
                notification.classList.add("show");
            });

            clearTimeout(hideNotificationTimeout);

            hideNotificationTimeout = setTimeout(function () {
                notification.classList.remove("show");

                setTimeout(function () {
                    if (!notification.classList.contains("show")) {
                        notification.hidden = true;
                    }
                }, 300);
            }, 6000);

            orderIndex = (orderIndex + 1) % sampleOrders.length;
        }

        setInterval(showSampleNotification, 20000);
    }

});
