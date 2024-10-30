const needle = document.getElementById('needle');
const directionText = document.getElementById('direction');

function handleOrientation(event) {
  const alpha = event.alpha; // Rotation around the Z axis

  // Rotate the needle based on the alpha (compass) rotation
  needle.style.transform = `translate(-50%, -50%) rotate(${alpha}deg)`;

  // Determine direction
  let direction = '';
  if (alpha >= 337.5 || alpha < 22.5) direction = 'North';
  else if (alpha >= 22.5 && alpha < 67.5) direction = 'Northeast';
  else if (alpha >= 67.5 && alpha < 112.5) direction = 'East';
  else if (alpha >= 112.5 && alpha < 157.5) direction = 'Southeast';
  else if (alpha >= 157.5 && alpha < 202.5) direction = 'South';
  else if (alpha >= 202.5 && alpha < 247.5) direction = 'Southwest';
  else if (alpha >= 247.5 && alpha < 292.5) direction = 'West';
  else if (alpha >= 292.5 && alpha < 337.5) direction = 'Northwest';

  directionText.textContent = direction;
}

// Check if DeviceOrientationEvent is supported
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleOrientation);
} else {
  directionText.textContent = "Device orientation not supported";
}
