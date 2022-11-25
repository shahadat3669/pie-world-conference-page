const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const speakersContainer = document.getElementById('speakers-card-container');
const speakersBtn = document.getElementById('speakers-btn');
let speakerShowMore = false;

const speakersList = [
  {
    id: 0,
    imgUrl: './public/images/speaker-1.jpg',
    author: 'Kaium Uddin',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
  {
    id: 1,
    imgUrl: './public/images/speaker-2.jpg',
    author: 'Mohima Rahman',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
  {
    id: 2,
    imgUrl: './public/images/speaker-3.jpg',
    author: 'Monir Hossain',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
  {
    id: 3,
    imgUrl: './public/images/speaker-4.jpg',
    author: 'Sharif Khan',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
  {
    id: 4,
    imgUrl: './public/images/speaker-5.jpg',
    author: 'Nusrath Jahan',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
  {
    id: 5,
    imgUrl: './public/images/speaker-6.jpg',
    author: 'Esrath Jahan',
    position: 'Cras volutpat, massa id vel, diam magna',
    desc: 'Maecenas vel lorem interdum, fermentum quam vel, posuere ante.',
  },
];

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
};

const generateSpeakers = (n = 2) => {
  let cardsHtmlGenerator = '';
  for (let i = 0; i < n; i += 1) {
    cardsHtmlGenerator += `
  <!-- speakers card ${speakersList[i].id} -->
  <div class="speakers-card relative mt-10 flex items-center gap-4">
    <div class="speakers-card-img-wrapper relative flex max-w-fit items-center justify-end">
      <img
        src="${speakersList[i].imgUrl}"
        alt="speaker-${speakersList[i].id}: ${speakersList[i].author}"
        class="speakers-card-img relative w-[75%]"
      />
      <img
        src="./public/images/speaker-bg.png"
        alt="speaker background"
        class="absolute -top-[20%] right-[50%] -z-10 w-[40%]"
      />
    </div>
    <div class="speakers-card-content flex max-w-[60%] flex-col gap-3">
      <h3 class="speakers-card-title text-2xl font-bold text-heavy-metal">
        ${speakersList[i].author}
      </h3>
      <p class="speakers-card-subtitle l font-medium italic leading-6 tracking-wide text-coral-red">
        ${speakersList[i].position}
      </p>
      <hr class="h-[2px] w-7 bg-metal-grey bg-opacity-60" />
      <p class="speakers-card-text text-metal-grey">
      ${speakersList[i].desc}
      </p>
    </div>
  </div>
`;
  }
  speakersContainer.innerHTML = cardsHtmlGenerator;
};

const speakersBtnToggle = () => {
  const speakersBtnAngle = document.querySelector('#speakers-btn > i');
  const speakersBtnText = document.querySelector('#speakers-btn > span');
  if (!speakerShowMore) {
    generateSpeakers(2);
    speakersBtnAngle.classList.toggle('rotate-180');
    speakerShowMore = true;
    speakersBtnText.innerText = 'SHOW MORE';
  } else {
    speakersBtnAngle.classList.toggle('rotate-180');
    generateSpeakers(6);
    speakerShowMore = false;
    speakersBtnText.innerText = 'SHOW LESS';
  }
};

const showSpeakers = () => {
  const w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 767) {
    speakersBtnToggle();
  } else {
    generateSpeakers(6);
  }
};

window.addEventListener('load', () => {
  showSpeakers();
});

window.addEventListener('resize', () => {
  showSpeakers();
});

hamburgerBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);
speakersBtn.addEventListener('click', speakersBtnToggle);
