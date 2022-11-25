const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

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

hamburgerBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);
