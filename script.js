const nameText = "Maria Madero";
const titleText = "Creative · Developer · Designer";

const nameEl = document.getElementById("typed-name");
const titleEl = document.getElementById("typed-title");


function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ''; // clear previous content
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  typeWriter(nameText, nameEl, 0, () => {
    typeWriter(titleText, titleEl, 0);
  });
});

const nameGal = "Gallery";
const titleGal = "My previous projects displayed at your convenience.";

const titleElGal = document.getElementById("typed-gal");
const titleElGal2 = document.getElementById("typed-second");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titleElGal && titleElGal2) {
    typeWriter(nameGal, titleElGal, 0, () => {
      typeWriter(titleGal, titleElGal2, 0);
    });
  }
});

const nameAb = "About Me";
const titleAb = "What I do, and what I'm passionate about.";

const titleAbout1 = document.getElementById("typed-ab");
const titleAbout2 = document.getElementById("typed-abt");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titleAbout1 && titleAbout2) {
    typeWriter(nameAb, titleAbout1, 0, () => {
      typeWriter(titleAb, titleAbout2, 0);
    });
  }
});



const nameCon = "Contact";
const titleCon = "Let's stay in touch.";

const titleCon1 = document.getElementById("typed-con");
const titleCon2 = document.getElementById("typed-cont");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titleCon1 && titleCon2) {
    typeWriter(nameCon, titleCon1, 0, () => {
      typeWriter(titleCon, titleCon2, 0);
    });
  }
});


const nameThank = "Thank you!";
const titleThank = "Return to site using button below.";

const titleTy1 = document.getElementById("typed-thank");
const titleTy2 = document.getElementById("typed-thanks");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 100);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titleTy1 && titleTy2) {
    typeWriter(nameThank, titleTy1, 0, () => {
      typeWriter(titleThank, titleTy2, 0);
    });
  }
});


const skillButtons = document.querySelectorAll('.skill-btn');

skillButtons.forEach(button => {
  button.addEventListener('click', () => {
    const desc = button.nextElementSibling;
    const isOpen = desc.style.display === 'block';
    
    desc.style.display = isOpen ? 'none' : 'block';
    button.classList.toggle('open', !isOpen);
  });
});

const nav = document.getElementById('mainNav');

function updateNavbarStyle() {
  if (!nav) return; 

  const isHomePage = 
    window.location.pathname.includes("index.html") ||
    window.location.pathname.includes("gallery.html") ||
    window.location.pathname.includes("about.html") ||
    window.location.pathname.includes("contact.html") ||
    window.location.pathname.includes("contact.html") ||
    window.location.pathname === "/";

  if (window.scrollY > 50) {
    nav.classList.remove('transparent-navbar');
    nav.classList.add('solid-navbar');
  } else if (isHomePage) {
    nav.classList.add('transparent-navbar');
    nav.classList.remove('solid-navbar');
  } else {
    nav.classList.remove('transparent-navbar');
    nav.classList.add('solid-navbar');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavbarStyle(); // check immediately on page load
  window.addEventListener('scroll', updateNavbarStyle); // update as you scroll
});

  
if (nav) {
  updateNavbarStyle();
  window.addEventListener('scroll', updateNavbarStyle);
}


const scrollArrow = document.getElementById("scrollArrow");
const landing = document.getElementById("landing");

window.addEventListener("scroll", () => {
  const landingBottom = landing.getBoundingClientRect().bottom;

  if (landingBottom <= window.innerHeight / 1.5) {
    scrollArrow.classList.add("hidden");
  } else {
    scrollArrow.classList.remove("hidden");
  }
});
const targetSection = document.getElementById("main-content");

if (scrollArrow && targetSection) {
  scrollArrow.addEventListener("click", () => {
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
}


const scrollElements = document.querySelectorAll('.scroll-slide-up');

function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
  );
}

function displayScrollElement(el) {
  el.classList.add('show');
}

function hideScrollElement(el) {
  el.classList.remove('show');
}

function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);

handleScrollAnimation();


