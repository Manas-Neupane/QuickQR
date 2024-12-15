document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".search-container");
    const input = document.querySelector("#typing-box");
    const qrCodeCanvas = document.querySelector("#qr-code");
    const qr = new QRious({
        element: qrCodeCanvas, 
        size: 200 // You can adjust the size of the QR code
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputValue = input.value;

        if (inputValue.trim() !== "") {
            // Generate the QR code
            qr.value = inputValue;

            // Show the QR code and apply the white border
            qrCodeCanvas.style.display = "block"; // Show the QR code
        } else {
            qrCodeCanvas.style.display = "none"; // Hide if input is empty
        }
    });
});
