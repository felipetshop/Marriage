import React from 'react';
import '../styles/Body.css'

const Body = () => {
  return (
    <div className="extra-container" id="extra-container">
      {/* ID adicionado para funcionar com a rolagem */}
      <div className="image-container">
        <img src="URL_DA_SUA_IMAGEM" alt="Descrição da imagem" />
      </div>
      <div className="text-container">
        <p>
          Este é um exemplo de texto descritivo. Aqui você pode escrever algo relacionado à imagem acima e fornecer instruções sobre como usar o QR Code.
        </p>
      </div>
      <div className="qr-container">
        <img src="URL_DO_QR_CODE" alt="QR Code" />
      </div>
    </div>
  );
};

export default Body;
