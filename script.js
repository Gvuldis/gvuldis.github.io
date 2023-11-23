document.getElementById('bottleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var numberOfBottles = document.getElementById('bottles').value;
    var qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = ''; // Clear any previous QR code

    // Assuming your second page is named 'display.html'
    var url = 'https://gvuldis.github.io/display.html?bottles=' + numberOfBottles;

    new QRCode(qrCodeContainer, {
        text: url,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});