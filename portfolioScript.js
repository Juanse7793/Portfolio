function openNav() {
  document.getElementById('desk-buttons').style.width = '100%';
}

function closeNav() {
  document.getElementById('desk-buttons').style.width = '0%';
}

document.getElementById('open').addEventListener('click', () => {
  openNav();
});

document.getElementById('clsebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.a-buttons').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('desk-buttons').style.width = '0%';
}));
