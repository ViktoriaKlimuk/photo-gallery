function onEntryLogo(entryLogo) {
  entryLogo.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}

// Use different variable names for options in each observer
let optionsLogo = { threshold: [0.5] };
let observerLogo = new IntersectionObserver(onEntryLogo, optionsLogo);
let elementsLogo = document.querySelectorAll('.footer-container-link-svg');
for (let elm of elementsLogo) {
  observerLogo.observe(elm);
}
