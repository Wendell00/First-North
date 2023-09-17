window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  const navinfo = document.querySelector('.nav-info-container')
  const scrollPosition = window.scrollY;

  if (window.innerWidth > 768) {
    if (scrollPosition >= 40) {
      navbar.classList.add('fixed');
      navinfo.classList.add('scroll-fixed')
    } else {
      navbar.classList.remove('fixed');
      navinfo.classList.remove('scroll-fixed')
    }
  }
});

// var dataAtual = new Date();

// // Obtém o ano atual
// var anoAtual = dataAtual.getFullYear();

// var elementDate = document.querySelector('.year-date');
// elementDate.innerText = anoAtual;

