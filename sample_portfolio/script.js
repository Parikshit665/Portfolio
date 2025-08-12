// Remove loading screen after page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none"
  }, 2000)
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu")
const navLinks = document.getElementById("nav-links")

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active")
  }
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el)
})

// Stagger animations
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const elements = entry.target.parentElement.querySelectorAll(".stagger-animation")
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("animated")
        }, index * 100)
      })
    }
  })
}, observerOptions)

// Observe first stagger element in each section
document.querySelectorAll(".stagger-animation:first-child").forEach((el) => {
  staggerObserver.observe(el)
})

// Animate skill tags
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillTags = entry.target.querySelectorAll(".skill-tag")
      skillTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.opacity = "1"
          tag.style.transform = "scale(1)"
        }, index * 50)
      })
    }
  })
}, observerOptions)

document.querySelectorAll(".skill-category").forEach((category) => {
  skillObserver.observe(category)
})

// Form submission with animation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()
  const button = this.querySelector('button[type="submit"]')
  const originalText = button.textContent

  button.textContent = "Sending..."
  button.style.transform = "scale(0.95)"

  setTimeout(() => {
    button.textContent = "Message Sent!"
    button.style.background = "var(--gradient-accent)"

    setTimeout(() => {
      button.textContent = originalText
      button.style.background = "var(--gradient-primary)"
      button.style.transform = "scale(1)"
      this.reset()
    }, 2000)
  }, 1000)
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    shape.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add typing effect to hero title
const heroTitle = document.querySelector(".hero-text h1")
if (heroTitle) {
  heroTitle.style.overflow = "hidden"
  heroTitle.style.whiteSpace = "nowrap"
  heroTitle.style.borderRight = "3px solid var(--primary-color)"

  setTimeout(() => {
    heroTitle.style.borderRight = "none"
    heroTitle.style.whiteSpace = "normal"
  }, 3000)
}

// Add particle effect on button hover
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.position = "relative"
    this.style.overflow = "hidden"
  })
})

// Smooth reveal for about text paragraphs
const aboutTextObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const paragraphs = entry.target.querySelectorAll("p")
      paragraphs.forEach((p, index) => {
        setTimeout(() => {
          p.style.opacity = "1"
          p.style.transform = "translateY(0)"
        }, index * 200)
      })
    }
  })
}, observerOptions)

document.querySelectorAll(".about-text").forEach((text) => {
  aboutTextObserver.observe(text)
})

// Add smooth transitions for contact form and info
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Animate contact info
      const contactInfo = entry.target.querySelector(".contact-info")
      const contactForm = entry.target.querySelector(".contact-form")
      const contactItems = entry.target.querySelectorAll(".contact-item")

      if (contactInfo) {
        setTimeout(() => {
          contactInfo.style.opacity = "1"
          contactInfo.style.transform = "translateX(0)"
        }, 100)
      }

      if (contactForm) {
        setTimeout(() => {
          contactForm.style.opacity = "1"
          contactForm.style.transform = "translateX(0)"
        }, 200)
      }

      // Stagger contact items
      contactItems.forEach((item, index) => {
        setTimeout(
          () => {
            item.style.opacity = "1"
            item.style.transform = "translateX(0)"
          },
          300 + index * 100,
        )
      })
    }
  })
}, observerOptions)

// Observe contact section
const contactSection = document.querySelector(".contact")
if (contactSection) {
  contactObserver.observe(contactSection)
}

// Add intersection observer for section titles
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".section-title").forEach((title) => {
  titleObserver.observe(title)
})

// Add smooth scrolling indicator
let ticking = false

function updateScrollProgress() {
  const scrollTop = window.pageYOffset
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = scrollTop / docHeight

  // You can use this to create a scroll progress bar if needed
  // const progressBar = document.querySelector('.scroll-progress');
  // if (progressBar) {
  //     progressBar.style.width = scrollPercent * 100 + '%';
  // }

  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollProgress)
    ticking = true
  }
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    navLinks.classList.remove("active")
  }
})

// Add focus management for accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusableContent = document.querySelectorAll(focusableElements)
    const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        e.preventDefault()
      }
    }
  }
})
