// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Resume Download Functionality
const resumeLink = document.querySelector("a[download]");
resumeLink.addEventListener("click", function() {
  alert("Your resume will start downloading now!");
});
