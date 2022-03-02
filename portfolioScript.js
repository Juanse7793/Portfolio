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
    name: 'First Project',
    title: 'Multi-Post Stories Gain+Glory 1',
    imgsrc: 'images/Snapshoot.png',
    imgMain: 'Backgroud-images/Img_Plaholder.png',
    technologies: ['css', 'Javascript', 'html', 'Codepen', 'Codekit', 'Gitlab'],
    techMain: ['css', 'Javascript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
          <button class="see-project" id="${i}">See Project ${i}</button>
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
                    <button class="live" id="demo">See Live <img src="images/circle.png" alt="live"></button>
                </div>
                <div>
                    <button class="live" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
                </div>
            </div>

        </div>
        <section class="buttons-tech" id="buttons">
          ${object[btnId].technologies.map((language) => `<button class="languages">${language}</button>`).join('')}
        </section>
        <div>
            <p class="lorem" id="paragraph">${object[btnId].description}</p>
        </div>
        <div class="flex-btn-mob">
            <div>
                <button class="live-mob" id="demo">See Live <img src="images/circle.png" alt="live"></button>
            </div>
            <div>
                <button class="live-mob" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
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
