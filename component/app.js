let isMasked = true;

function maskCardNumber() {
  const cardNumberInput = document.getElementById('cardNumber');
  let cardNumber = cardNumberInput.value.replace(/\D/g, ''); // Remove non-digit characters

  if (cardNumber.length > 4) {
    // Mask all but the last 4 digits
    cardNumber = cardNumber.slice(0, -4).replace(/\d/g, '*') + cardNumber.slice(-4);
  }

  // Format with dashes (XXXX-XXXX-XXXX-XXXX)
  cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');

  cardNumberInput.value = cardNumber;
}

function toggleMask() {
  const cardNumberInput = document.getElementById('cardNumber');
  const toggleButton = document.getElementById('toggleMask');

  if (isMasked) {
    // Show full card number
    let cardNumber = cardNumberInput.value.replace(/\D/g, ''); // Remove dashes and non-digits
    cardNumberInput.value = formatCardNumber(cardNumber); // Format the number with dashes
    cardNumberInput.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    // Mask card number (show only last 4 digits)
    cardNumberInput.type = 'password';
    toggleButton.textContent = 'Show';
    maskCardNumber(); // Apply masking again
  }

  isMasked = !isMasked;
}

// Helper function to format card number with dashes
function formatCardNumber(cardNumber) {
  return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
}
