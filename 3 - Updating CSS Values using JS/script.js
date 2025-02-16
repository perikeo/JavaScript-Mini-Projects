const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  const suffix = this.dataset.sizing || ""; //this.dataset.sizing find inside of the element the sizing property.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));