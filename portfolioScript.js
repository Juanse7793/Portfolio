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
    name: 'Covid-19 Stats in South America',
    title: 'Covid-19 Stats in South America',
    imgsrc: 'images/Covid-b.png',
    imgMain: 'images/Covid-l.png',
    technologies: ['React.js', 'Redux.js', 'API', 'JSX', 'Netlify'],
    techMain: ['React.js', 'Redux.js', 'API', 'JSX', 'Netlify'],
    demo: 'https://covid-app-juanse7793.netlify.app/',
    source: 'https://github.com/Juanse7793/Covid-19-in-South-America',
    description: 'This is a project that shows the stats of Covid-19 in South America. The data is obtained from an API. The project is made with React.js and Redux.js.',
  },
  {
    name: 'Bookstore App',
    title: 'Bookstore created with React.js',
    imgsrc: 'images/Bookstore-b.png',
    imgMain: 'images/Bookstore-l.png',
    technologies: ['React.js', 'Redux.js', 'API', 'JSX', 'Netlify'],
    techMain: ['React.js', 'Redux.js', 'API', 'JSX', 'Netlify'],
    demo: 'https://bookstore-juanse7793.netlify.app/',
    source: 'https://github.com/Juanse7793/Bookstore',
    description: 'This is a SPA created on React that creates a library of books in which you can store books and authors in an API also the app is showing the status of the book. The state is managed with Redux.',
  },
  {
    name: 'Space Travelers',
    title: 'The Space Travelers Project (SPA)',
    imgsrc: 'images/space-b.png',
    imgMain: 'images/space-l.png',
    technologies: ['React.js', 'Redux.js', 'API', 'JSX', 'Heroku'],
    techMain: ['React.js', 'Redux.js', 'API', 'JSX', 'Heroku'],
    demo: 'https://space-travelers-juan-isaac.herokuapp.com/',
    source: 'https://github.com/isaacpitwa/space-travelers',
    description: 'In this project, we work with a real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application allows the users to book rockets and join selected space missions.',
  },
  {
    name: 'Movies App',
    title: 'Movies App built with JavaScript',
    imgsrc: 'images/movie-b.png',
    imgMain: 'images/movie-l.png',
    technologies: ['HTML', 'Javascript', 'Bootstraps', 'API', 'CSS'],
    techMain: ['HTML', 'Javascript', 'Bootstraps', 'API', 'CSS'],
    demo: 'https://juanse7793.github.io/Movies-App/',
    source: 'https://github.com/Juanse7793/Movies-App',
    description: 'This is an API-bassed web application, in which we selected one API of movies to display it and using another API we implement Likes and Comments, take a look!',
  },
  {
    name: 'VPN World Tour',
    title: 'My Band World Tour Concert',
    imgsrc: 'images/band-b.png',
    imgMain: 'images/band-l.png',
    technologies: ['CSS', 'Javascript', 'HTML'],
    techMain: ['CSS', 'Javascript', 'HTML'],
    demo: 'https://juanse7793.github.io/My-Band-World-Tour/',
    source: 'https://github.com/Juanse7793/My-Band-World-Tour',
    description: 'This is my personal Project from module 1, in which I created a Web Page for my former band called "VPN" in which I promote a world tour concert! check it out!',
  },
  {
    name: 'Math Magicians',
    title: 'Math Magicians built with React.js',
    imgsrc: 'images/math-b.png',
    imgMain: 'images/math-l.png',
    technologies: ['React.js', 'JSX', 'Netlify'],
    techMain: ['React.js', 'JSX', 'Netlify'],
    demo: 'https://math-magicians-jsotomayor.netlify.app/',
    source: 'https://github.com/Juanse7793/Math-Magicians',
    description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations & Read a random math-related quote.',
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
          <button class="see-project" id="${i}">See Project</button>
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
            <img class="img-big-pop" src="${object[btnId].imgsrc}" alt="..." id="img">
        </div>
        
        <div class="space-bet">
            <h2 id="name">${object[btnId].name}</h2>
            <div class="flex-btn">
                <div>
                    <button onclick="window.open('${object[btnId].demo}', '_blank');" class="live" id="demo">See Live <img src="images/circle.png" alt="live"></button>
                </div>
                <div>
                    <button onclick="window.open('${object[btnId].source}', '_blank');" class="live" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
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
                <button onclick="window.open('${object[btnId].demo}', '_blank');" class="live-mob" id="demo">See Live <img src="images/circle.png" alt="live"></button>
            </div>
            <div>
                <button onclick="window.open('${object[btnId].source}', '_blank');" class="live-mob" id="source">Source <img src="images/cat.png" alt="liveCat"></button>
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