// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Attach an event listener to the form
    const form = document.getElementById("order-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh on submit

        // Get the selected value from the dropdown
        const selectedItem = document.getElementById("item").value;

        // Display a success message or validation message
        const messageElement = document.getElementById("order-message");

        if (selectedItem) {
            messageElement.textContent = `You have selected: ${selectedItem}. Order placed successfully!`;
            messageElement.style.color = "green"; // Display success in green
        } else {
            messageElement.textContent = "Please select an item before placing your order.";
            messageElement.style.color = "red"; // Display error in red
        }
    });
});
