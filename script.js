// Função para acesso à área administrativa
function acessarAdmin() {
    alert("Redirecionando para a área administrativa...");
  }
  
  // Navegação suave (scroll suave)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  