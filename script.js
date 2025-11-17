function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = parseFloat(document.getElementById('radius').value);
		
	let vol = document.getElementById('volume');
	if (isNaN(radius) || radius < 0) {
		vol.value = "NaN";
		return false;
	}
	
	let volume = (4/3) * Math.PI * Math.pow(radius, 3);

	vol.value = volume.toFixed(4);
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
