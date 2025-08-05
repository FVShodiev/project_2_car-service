window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 0|| document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      btn.style.bottom = "50px";
    } else {
      btn.style.bottom = "50px";
    }
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const menuToggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});