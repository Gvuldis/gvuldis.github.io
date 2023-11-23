window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var numberOfBottles = params.get('bottles');
    var totalAmount = numberOfBottles * 0.10; // Assuming 10 cents per bottle

    document.getElementById('totalAmount').innerText = 'Nodotā summa: ' + totalAmount.toFixed(2) + ' EUR';

    var progressPercentage = (numberOfBottles / 50) * 100; // Assuming 50 is the goal
    document.getElementById('progressBar').style.width = progressPercentage + '%';
};