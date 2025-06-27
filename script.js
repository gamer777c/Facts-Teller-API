// Fetch and display a random scientific fact using the Useless Facts API
function getScientificFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
      // Display the fetched fact in the fact paragraph
      document.getElementById("fact").textContent = data.text;
    })
    .catch(error => {
      // If an error occurs, display a message
      document.getElementById("fact").textContent = "Unable to fetch a fact right now. Try again later.";
      console.error("Error fetching the fact:", error);
    });
}

// Load an initial fact when the page loads
window.onload = getScientificFact;
