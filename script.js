// Toggle mobile menu
document.getElementById('menuBtn').addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
});

// Load selected publications (sample list from CV)
const publications = [
  "Adeokun, O. A. (2001): An appraisal of the Role of Extension Services in Fisheries Development in Nigeria.",
  "Adeokun, O. A. & Adedoyin, S. F. (2004): Essentials of Fisheries Extension (Book).",
  "Adeokun, O. A. (2014): Travails of Weever Birds: Inaugural Lecture, Olabisi Onabanjo University.",
  "Oladoja, M. A. & Adeokun, O. A. (2009): Analysis of Socio-Economic Constraints of Fisher Folks on Poverty Alleviation."
];

const pubList = document.getElementById('pubList');
const ul = document.createElement('ul');
publications.forEach(pub => {
  const li = document.createElement('li');
  li.textContent = pub;
  ul.appendChild(li);
});
pubList.appendChild(ul);

// Contact form - opens default mail app
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const to = "adesiji.oluwatobi@oouagoiwoye.edu.ng";
  const subject = encodeURIComponent("Website Contact from " + name);
  const body = encodeURIComponent(message + "\n\nSent via professor's website.");
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
