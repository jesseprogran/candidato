// document.addEventListener('DOMContentLoaded', function () {
//   // Selecione todos os iframes
//   const iframes = document.querySelectorAll('iframe');
  
//   // Remova o atributo autoplay de cada iframe
//   iframes.forEach((iframe) => {
//     const src = iframe.src;
//     iframe.src = ''; // Limpa o src temporariamente
//     iframe.src = src; // Redefine o src
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  // Função para trocar a logo
  const logoImage = document.getElementById('logoImage');
  const originalSrc = 'src/image/logo.jpg'; // URL da logo original
  const newSrc = 'src/image/logo-new.jpg'; // URL da nova logo

  logoImage.addEventListener('click', function() {
    if (logoImage.src === originalSrc) {
      logoImage.src = newSrc;
    } else {
      logoImage.src = originalSrc;
    }
  });

  // Função para pausar todos os vídeos
  function pauseAllVideos() {
    const videos = document.querySelectorAll('iframe');
    videos.forEach(video => {
      const src = video.src;
      video.src = ''; // Remove o src para pausar o vídeo
      video.src = src; // Reatribui o src para o vídeo
    });
  }

  // Chama a função para pausar todos os vídeos ao carregar a página
  pauseAllVideos();
});
