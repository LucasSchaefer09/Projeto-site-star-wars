document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modal').style.display = 'block';
    document.body.classList.add('overlay'); // Adicionar classe overlay ao body
  });
  
  // ...
  
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('overlay'); // Remover classe overlay do body
  });