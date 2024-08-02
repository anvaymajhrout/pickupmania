async function generatePickupLine() {
    try {
      const response = await fetch('https://api.jcwyt.com/pickup');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const pickupLineText = document.getElementById('pickupLineText');
      
      pickupLineText.innerText = data.line;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      const pickupLineText = document.getElementById('pickupLineText');
      pickupLineText.innerText = 'Failed to fetch a pickup line. Please try again later.';
    }
  }
  