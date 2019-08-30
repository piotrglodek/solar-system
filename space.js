const app = {
 getElement: function(classname) {
  const ele = document.querySelector(classname);
  return ele;
 },
 bindEvents: function() {
  document.querySelectorAll('.planet__speed').forEach(planet => {
   planet.addEventListener('input', this.handlePlanet.bind(this));
  });
 },
 handlePlanet: function(e) {
  let value = e.target.value;
  let planetName = e.target.previousSibling.previousSibling.textContent.toLowerCase();
  this.changePlanetSpeed(value, planetName);
 },
 changePlanetSpeed: function(value, planetName) {
  if (planetName === 'dorix 0') {
   this.getElement('.planet-1').style.animationDuration = `${value}ms`;
  } else if (planetName === 'accaro') {
   this.getElement('.planet-2').style.animationDuration = `${value}ms`;
  } else {
   this.getElement('.planet-3').style.animationDuration = `${value}ms`;
  }
 },
 init: function() {
  this.bindEvents();
 }
};
app.init();