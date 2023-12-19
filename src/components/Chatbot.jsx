import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const chat = document.createElement('div');
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(chat);
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'badc0809-1c02-4ef5-812d-1e4858217082',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'badc0809-1c02-4ef5-812d-1e4858217082',
        composerPlaceholder: 'Bienvenidos',
        webhookId: '6430d4fe-e988-424a-8985-2814cd6cfb29',
        lazySocket: true,
        themeName: 'prism',
        botName: 'Departamento de Alumnos ',
        frontendVersion: 'v1',
        theme: 'prism',
        themeColor: '#2563eb',
        stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/1e927a87-1183-4b9f-88a7-b676f8dc82c6/v30433/style.css',
      });
    };
  }, []);

  return (
    <div className='chat'>
      <div id="help-text">¿Necesitás ayuda?</div>
      <div id="webchat" />
    </div>
  );
};

export default Chatbot;
