document.addEventListener('DOMContentLoaded', function () {
  // Selecione todos os iframes
  const iframes = document.querySelectorAll('iframe');
  
  // Remova o atributo autoplay de cada iframe
  iframes.forEach((iframe) => {
    const src = iframe.src;
    iframe.src = ''; // Limpa o src temporariamente
    iframe.src = src; // Redefine o src
  });
});