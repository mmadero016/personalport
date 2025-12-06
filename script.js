const nameText = "Maria Madero";
const titleText = "Creator · Designer";

const nameEl = document.getElementById("typed-name");
const titleEl = document.getElementById("typed-title");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = "";
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 60);
  } else if (callback) {
    setTimeout(callback, 300);
  }
}

function deleteWriter(text, element, index, callback) {
  if (index >= 0) {
    element.textContent = text.substring(0, index);
    setTimeout(() => {
      deleteWriter(text, element, index - 1, callback);
    }, 40);
  } else if (callback) {
    callback();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter(nameText, nameEl, 0,() => {
    typeWriter(titleText, titleEl, 0);
  });
});

// Scroll trigger to delete text
let hasDeleted = false;

window.addEventListener("scroll", () => {
  if (!hasDeleted && window.scrollY > 30) {
    hasDeleted = true;

    deleteWriter(nameText, nameEl, nameText.length, () => {
      deleteWriter(titleText, titleEl, titleText.length);
    });
  }
});



const nameGal = "Gallery";
const titleGal = "My work below.";

const titleElGal = document.getElementById("typed-gal");
const titleElGal2 = document.getElementById("typed-second");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 60);
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
const titleAb = "My journey, skills, and passions.";

const titleAbout1 = document.getElementById("typed-ab");
const titleAbout2 = document.getElementById("typed-abt");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 60);
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
const titleCon = "Stay in touch.";

const titleCon1 = document.getElementById("typed-con");
const titleCon2 = document.getElementById("typed-cont");

function typeWriter(text, element, index, callback) {
  if (index === 0) element.textContent = ""; // Clear previous
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 60);
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
    }, 60);
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


// ========= HORIZONTAL SCROLL GALLERY =========
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("scroll-gallery");
  const track = document.querySelector(".scroll-gallery-track");
  if (!section || !track) return;

  function updateHorizontalScroll() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress through the section: 0 at start, 1 at end
    const progress = Math.min(
      Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
      1
    );

    // how far to slide the track to the left (in %)
    const maxShift = 60; // increase if you want it to move more
    const translateX = -progress * maxShift;

    track.style.transform = `translateX(${translateX}%)`;
  }

  updateHorizontalScroll();
  window.addEventListener("scroll", updateHorizontalScroll);
  window.addEventListener("resize", updateHorizontalScroll);
});



// =======================
// Custom cursor + text highlight
// =======================
document.addEventListener("DOMContentLoaded", () => {
  // Skip everything on touch / mobile devices
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouchDevice) return;

  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  let lastHighlighted = null;

  document.addEventListener("mousemove", (e) => {
    // Move the cursor dot
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    // Find the element directly under the cursor
    const elem = document.elementFromPoint(e.clientX, e.clientY);

    // Remove highlight from previous element
    if (lastHighlighted && lastHighlighted !== elem) {
      lastHighlighted.classList.remove("text-highlight");
      lastHighlighted = null;
    }

    // Only highlight actual text elements (you can tweak this selector)
    if (
      elem &&
      elem.matches("p, a, h1, h2, h3, h4, h5, li, span")
    ) {
      elem.classList.add("text-highlight");
      lastHighlighted = elem;
    }
  });
});
