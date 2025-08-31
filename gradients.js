
//VARIABLES
const refreshButton = document.getElementById('refreshButton');
const colorsGrid = document.getElementById('colorsGrid');


//EVENTS
refreshButton.addEventListener('click', generateGridOfGradients);


//FUNCTIONS
function randomHex() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + hex.padStart(6, '0');
}

function createGradient() {
  const color1 = randomHex();
  const color2 = randomHex();
  const direction = ['to right', 'to left', 'to top', 'to bottom', '45deg', '135deg'][Math.floor(Math.random() * 6)];
  
  const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
  return { gradient, texto: `${color1} → ${color2}` };
}

function generateGridOfGradients() {
  colorsGrid.innerHTML = '';

  for (let i = 0; i < 12; i++) {
    const { gradient, texto } = createGradient();

    const div = document.createElement('div');
    div.className = 'color-card';
    div.innerHTML = `
      <div class="color-box" style="background:${gradient}"></div>
      <span class="hex-value">${texto}</span>`;

    colorsGrid.appendChild(div);
  }
}

//CALLS
generateGridOfGradients();