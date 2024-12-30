// Update the hero section in the template string
document.querySelector('#app').innerHTML = `
  <div class="container">
    <section id="inicio" class="hero">
      <h1>Valentina Esperança</h1>
      <div class="profile-image-container">
        <img src="valentina.png" alt="Valentina" class="profile-image">
      </div>
      <p class="highlight">Valentina poderia ser sua filha. Faça por ela o que faria pela sua.</p>
    </section>

    <section class="donation-section">
      <h2>Faça Sua Doação</h2>
      <p>Escaneie o QR Code abaixo e faça sua doação via PIX:</p>
      <div class="qr-code-container">
       <img src="${qrCodeUrl}" alt="QR Code PIX" class="qr-code">
      </div>
      <button class="copy-button" onclick="window.copyPixKey()">Copiar Chave PIX</button>
      <p class="highlight">Qualquer valor faz a diferença!</p>
    </section>
    
    <section class="contact-section">
      <h2>Entre em Contato</h2>
      <p>Para mais informações sobre como ajudar:</p>
      <p>📞 (XX) XXXX-XXXX</p>
      <p>✉️ contato@valentina.org</p>
    </section>
  </div>

  <footer>
    <p>Obrigado por ajudar! Cada doação faz a diferença. ❤️</p>
  </footer>
`