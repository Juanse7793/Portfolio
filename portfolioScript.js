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

// Render object
const object = [
  {
    name: 'Keeping track of hundred of components',
    imgsrc: 'images/Snapshoot.png',
    technologies: ['css', 'Javascript', 'html', 'Codepen', 'Codekit', 'Gitlab'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Second Project',
    imgsrc: 'images/Snapshoot.png',
    technologies: ['css', 'Javascript', 'Ruby on Rails'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Thrird Project',
    imgsrc: 'images/Snapshoot-Portfolio-mob.png',
    technologies: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Fourth Project',
    imgsrc: 'images/Snapshoot-Portfolio-mob.png',
    technologies: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Fifth Project',
    imgsrc: 'images/Snapshoot-Portfolio-mob.png',
    technologies: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'Sixth Project',
    imgsrc: 'images/Snapshoot-Portfolio-mob.png',
    technologies: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

const worksSection = document.querySelector('.whole-works-section');
const workButtons2 = document.querySelectorAll('#open-modal');

function projectRender(i) {
  for (let k = 0; k < object.length; k += 1) {
    let techsHTML = '';
    for (let j = 0; j < object[k].technologies.length; j += 1) {
      techsHTML += `<button class="technologies">${object[k].technologies[j]}</button>`;
    }
    worksSection.innerHTML += '<div class="modal-container" id="modal-container">'
        + '<div class="render-container">'
        + `<div class="render-container2"><img class="project-image" src="${object[i].imgsrc}"></div>`
        + '<div class="render-container3">'
        + '<div class="render-container4">'
        + '<div class="render-container5">'
        + `<h3 class="name-render">${object[i].name}</h3>`
        + '<div class="render-live">'
        + `<a href="#" class="live" id="${i}">See live project</a>`
        + `<a href="#" class="live" id="${i}">View source</a>`
        + '<button id="cl-modal">Close</button>'
        + '</div>'
        + '</div>'
        + '<div class="render-btns">'
        + `${techsHTML}`
        + '</div>'
        + '<div class="description">'
        + `<p>${object[i].description}</p>`
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
  }
}

for (let i = 0; i < object.length; i += 1) {
  workButtons2[i].dataset.work = i;
}

workButtons2.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    projectRender(e.target.dataset.work);
    document.getElementById('modal-container').classList.add('show');
    const cerrar = document.getElementById('cl-modal');
    cerrar.addEventListener('click', () => {
      document.getElementById('modal-container').classList.remove('show');
    });
  });
});