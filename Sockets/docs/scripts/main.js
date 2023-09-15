// Initialize Socket.IO client
const socket = io();

// Handle voting when the "Vote" button is clicked
document.getElementById('vote-button').addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const optionName = selectedOption.value;
    socket.emit('vote', optionName); // Emit a 'vote' event with the selected option
  }
});

// Listen for updated results from the server
socket.on('results', (results) => {
  // Update the UI to display the latest results
  document.getElementById('option-a').textContent = `Option A: ${results.optionA} votes`;
  document.getElementById('option-b').textContent = `Option B: ${results.optionB} votes`;
  document.getElementById('option-c').textContent = `Option C: ${results.optionC} votes`;
});
