const nameText = "Maria Madero";
const titleText = "Blending creativity and passion through design.";

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

  function updateNavbarStyle() {
  if (!nav) return;
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


// Wrap each word inside selected elements with <span class="word">
function wrapWords(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    // Skip if already wrapped (prevents double-wrapping on refresh / live server)
    if (el.querySelector(".word")) return;

    // Only wrap direct text content (keeps your existing spans like .emph/.accent intact)
    // We'll rebuild the element by walking its childNodes.
    const nodes = Array.from(el.childNodes);
    el.innerHTML = "";

    nodes.forEach((node) => {
      // If it's a text node, split into words + spaces
      if (node.nodeType === Node.TEXT_NODE) {
        const parts = node.textContent.split(/(\s+)/); // keeps spaces
        parts.forEach((part) => {
          if (part.trim() === "") {
            el.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = part;
            el.appendChild(span);
          }
        });
      } else {
        // If it's an element (like your <span class="emph">), keep it
        el.appendChild(node);

        // Also wrap words inside those nested spans if you want
        // (optional: only do this if you want emph/accent to highlight per word too)
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Wrap only the text inside nested spans, without destroying their class
          const innerNodes = Array.from(node.childNodes);
          if (!node.querySelector(".word")) {
            node.innerHTML = "";
            innerNodes.forEach((inner) => {
              if (inner.nodeType === Node.TEXT_NODE) {
                const innerParts = inner.textContent.split(/(\s+)/);
                innerParts.forEach((p) => {
                  if (p.trim() === "") {
                    node.appendChild(document.createTextNode(p));
                  } else {
                    const w = document.createElement("span");
                    w.className = "word";
                    w.textContent = p;
                    node.appendChild(w);
                  }
                });
              } else {
                node.appendChild(inner);
              }
            });
          }
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (isTouchDevice) return;

  // 1) Wrap words where you want this effect
  wrapWords("#name-intro, .intro-blurb"); // add more selectors if needed

  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  // IMPORTANT: Make sure cursor doesn't block elementFromPoint
  cursor.style.pointerEvents = "none";

  let lastHighlighted = null;

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    const elem = document.elementFromPoint(e.clientX, e.clientY);

    if (lastHighlighted && lastHighlighted !== elem) {
      lastHighlighted.classList.remove("text-highlight");
      lastHighlighted = null;
    }

    // Only highlight individual words
    if (elem && elem.classList && elem.classList.contains("word")) {
      elem.classList.add("text-highlight");
      lastHighlighted = elem;
    }
  });
});

