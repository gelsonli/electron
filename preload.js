// Importa os módulos 'contextBridge' e 'ipcRenderer' do Electron
const { contextBridge, ipcRenderer } = require('electron');

// Usa o 'contextBridge' para expor um conjunto de APIs no contexto global (window) do renderizador
contextBridge.exposeInMainWorld('api', {
    // Define uma função 'send' dentro da API exposta
    send: (channel, data) => {
        // Define um array de canais válidos para comunicação
        let canaisValidos = ['abrir-janela-sobre'];
        
        // Verifica se o canal fornecido está na lista de canais válidos
        if (canaisValidos.includes(channel)) {
            // Se for um canal válido, envia a mensagem usando 'ipcRenderer'
            ipcRenderer.send(channel, data);
        }
    }
});
