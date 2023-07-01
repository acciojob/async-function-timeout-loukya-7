//your JS code here. If required.
async function showMessageAfterDelay() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  // Wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message on the webpage
  outputDiv.textContent = text;
}

