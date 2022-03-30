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
    name: 'To-do List',
    title: 'Project: 1 - Single Page Application "To-do List"',
    imgsrc: 'images/bigtodo.png',
    imgMain: 'images/todolist.png',
    technologies: ['css', 'Javascript', 'html', 'ES6', 'Webpack'],
    techMain: ['css', 'Javascript', 'html', 'ES6', 'Webpack'],
    demo: 'https://juanse7793.github.io/To-do-list/',
    source: 'https://github.com/Juanse7793/To-do-list',
    description: 'A simple to-do list application that allows the user to add, edit, and delete tasks, also allows the user to mark tasks as completed and remove them from the list.',
  },
  {
    name: 'A fine Project',
    title: 'Multi-Post Stories Gain+Glory 2',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['css', 'Javascript', 'Ruby on Rails'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'A very good Project',
    title: 'Multi-Post Stories Gain+Glory 3',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['Bootstraps', 'Javascript', 'React', 'PHP', 'Codepen'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'An Excelent Project',
    title: 'Multi-Post Stories Gain+Glory 4',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['Node.js', 'Javascript', 'Bootstraps'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'OMG Project',
    title: 'Multi-Post Stories Gain+Glory 5',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['css', 'Javascript', 'html'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    name: 'The mother of all Projects',
    title: 'Multi-Post Stories Gain+Glory 6',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['css', 'Javascript', 'html'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

const container = document.getElementById('whole-section');

const works = document.createElement('div');
works.setAttribute('class', 'desk-works');

for (let i = 0; i < object.length; i += 1) {
  const read = `
  <section class="works-container">
  <img class="image-grey" src="${object[i].imgMain}" alt="image-of-works">
  <div class="multi">
      <section class="multi-post">
          <h2 class="multi-post-title">${object[i].title}</h2>
          <section class="buttons">
          ${object[i].techMain.map((language) => `<button class="languages">${language}</button>`).join('')}
          </section>
          <button class="see-project" id="${i}">See Project ${i + 1}</button>
       </section>
   </div>
  </section>`;

  works.innerHTML += read;
}

container.appendChild(works);

// render for pop up

// Get the button that opens the modal
const projectBtns = document.querySelectorAll('.see-project');
const body = document.getElementById('body');

const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
overlay.setAttribute('id', 'overlay');

const popup = document.createElement('div');
popup.setAttribute('class', 'pop-up-modal');
overlay.appendChild(popup);

projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const btnId = button.id;
    const content = `
        <div class="close-btn-cont">
            <button class="cerrar" id="cerrar">&times</button>
        </div>
        <div class="img-cont-pop">
            <img src="${object[btnId].imgsrc}" alt="..." id="img">
        </div>
        
        <div class="space-bet">
            <h2 id="name">${object[btnId].name}</h2>
            <div class="flex-btn">
                <div>
                    <button onclick= "location.href = '${object[btnId].demo}';" class="live" id="demo">See Live <img src="images/circle.png" alt="live"></button>
                </div>
                <div>
                    <button onclick= "location.href = '${object[btnId].source}';" class="live" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
                </div>
            </div>

        </div>
        <div class="buttons-tech" id="buttons">
          <ul class="ul-container">
          ${object[btnId].technologies.map((language) => `<li class="technologies-buttons">${language}</li>`).join('')}
          </ul>
        </div>
        <div>
            <p class="lorem" id="paragraph">${object[btnId].description}</p>
        </div>
        <div class="flex-btn-mob">
            <div>
                <button onclick= "location.href = '${object[btnId].demo}';" class="live-mob" id="demo">See Live <img src="images/circle.png" alt="live"></button>
            </div>
            <div>
                <button onclick= "location.href = '${object[btnId].source}';" class="live-mob" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
              </div>
          </div>`;

    popup.innerHTML = content;
    overlay.style.display = 'block';
    body.appendChild(overlay);

    // Get the <span> element that closes the modal
    const span = document.getElementById('cerrar');
    // When the user clicks on <span> (x), close the modal
    span.onclick = function closeOnClick() {
      overlay.style.display = 'none';
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function closeOnEvent(event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    };
  });
});

const form = document.getElementById('form-id');
const divError = document.getElementById('div-error');
const errorMsg = document.getElementById('error-msg');
const emailForm = document.getElementById('email');
const lastName = document.querySelector('.input-last-name');

form.addEventListener('submit', (e) => {
  if (emailForm.value.match(/^[a-z@.0-9-_]*$/)) {
    divError.style.display = 'none';
    errorMsg.innerHTML = '';
    emailForm.style.border = '1px solid green';
  } else {
    e.preventDefault();
    emailForm.style.border = '2px solid red';
    divError.style.display = 'flex';
    errorMsg.textContent = 'Email should be in lower case';
  }
});

lastName.removeAttribute('required');