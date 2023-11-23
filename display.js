window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var numberOfBottles = parseInt(params.get('bottles'), 10);
    var totalAmount = numberOfBottles * 0.10; // Assuming 10 cents per bottle

    // Update the displayed total amount
    document.getElementById('totalAmount').innerText = 'Nodotā summa: ' + totalAmount.toFixed(2) + ' EUR';

    // Calculate and update the progress bar
    var progressPercentage = Math.min((numberOfBottles / 50) * 100, 100); // Assuming 50 is the goal, max out at 100%
    document.getElementById('progressBar').style.width = progressPercentage + '%';

    // Create and position the 'current number of bottles' element
    var currentBottlesElement = document.getElementById('currentBottles');
    var progressBar = document.getElementById('progressBar');
    var progressBarContainer = progressBar.parentElement;
    var progressContainerWidth = progressBarContainer.offsetWidth;
    var progressValuePosition = progressPercentage * progressContainerWidth / 100 - currentBottlesElement.offsetWidth / 2;
    currentBottlesElement.style.left = progressValuePosition + 'px';
    currentBottlesElement.innerText = numberOfBottles; // Set the current number of bottles

    // Create and position the triangle indicator
    var triangle = document.createElement('div');
    triangle.classList.add('triangle');
    progressBarContainer.appendChild(triangle);
    triangle.style.position = 'absolute';
    triangle.style.top = (progressBar.offsetHeight + 5) + 'px'; // Position just below the progress bar
    triangle.style.left = '50%'; // Start at the center
    
    var triangleOffset = progressBar.offsetLeft + (progressValuePosition - triangle.offsetWidth / 2);
    triangle.style.left = triangleOffset + 'px';

    // Ensure the 'current number of bottles' element doesn't overflow the progress container
    if (progressPercentage > 90) {
        currentBottlesElement.style.transform = 'translateX(-100%)';
    } else if (progressPercentage < 10) {
        currentBottlesElement.style.transform = 'translateX(0%)';
    } else {
        currentBottlesElement.style.transform = 'translateX(-50%)';
    }
};