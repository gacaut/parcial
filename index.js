var footer = document.querySelector('footer');
footer.style.display = 'none';

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});