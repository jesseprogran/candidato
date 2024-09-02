// Seleciona todos os iframes na página
document.querySelectorAll('iframe').forEach(function(iframe) {
  // Quando o iframe é carregado
  iframe.addEventListener('load', function() {
    let src = iframe.src;
    // Remove o parâmetro autoplay=1, se presente
    src = src.replace(/autoplay=1/, 'autoplay=0');
    iframe.src = src;
  });
});