// JavaScript for the stopwatch and distance functionality
let timer = 0;      // Tracks time in seconds
let distance = 0;   // Tracks distance in metres
let running = false; // Single flag to track if the timer is running

// Element references
const timeElement = document.querySelector('.time'); // Time display
const distanceElement = document.querySelector('.distance-value'); // Distance display
const toggleButton = document.getElementById('toggle-button'); // Start/Stop button

// Helper function to format the time or distance values with leading zero
function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Function to update the displayed time
function updateTime() {
    const seconds = timer % 60;
    const minutes = Math.floor(timer / 60) % 60;
    const hours = Math.floor(timer / 3600);

    // Display the formatted time
    timeElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to update the displayed distance
function updateDistance() {
    const metres = distance % 1000; // Track metres (0-999)
    const kilometres = Math.floor(distance / 1000); // Track kilometres

    // Display the formatted distance
    distanceElement.textContent = `${kilometres} km ${pad(metres)} m`;
}

// Start/Stop the timer and toggle the button icon
toggleButton.addEventListener('click', () => {
    running = !running; // Toggle the running state

    // Change the button icon based on the timer state
    if (running) {
        toggleButton.textContent = '⏸️'; // Stop icon
    } else {
        toggleButton.textContent = '▶️'; // Start icon
    }
});

// Timer interval: updates every second if running
setInterval(() => {
    if (running) {
        timer++; // Increase the time by 1 second
        updateTime(); // Update the displayed time

        distance += 5; // Assume 5 metres per second for simplicity
        updateDistance(); // Update the displayed distance
    }
}, 1000);
