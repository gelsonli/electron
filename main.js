// Importa os módulos 'app' e 'BrowserWindow' do Electron
const { app, BrowserWindow } = require('electron');

// Importa o módulo 'ipcMain' do Electron para comunicação entre processos
const { ipcMain } = require('electron/main');

// Declara uma variável para a janela principal
let Mainwindow = null;

// Define um evento que será executado quando o aplicativo estiver pronto
app.on('ready', () => {
    console.log("inicializando o App");

    // Cria uma nova janela do navegador com as dimensões especificadas
    Mainwindow = new BrowserWindow({
        width: 800, // Largura da janela
        height: 600 // Altura da janela
    });

    // Carrega um arquivo HTML específico na janela criada
    Mainwindow.loadURL(`file://${__dirname}/app/index.html`);
});

// Define um evento que será executado quando todas as janelas forem fechadas
app.on("window-all-closed", () => {
    // Encerra o aplicativo
    app.quit();
});

// Declara uma variável para a janela "sobre"
let sobreWindow = null;

// Define um evento que será executado quando um sinal 'abrir-janela-sobre' for recebido
ipcMain.on('abrir-janela-sobre', () => {
    // Verifica se a janela "sobre" não está criada
    if (sobreWindow == null) {
        // Cria uma nova janela do navegador com as dimensões especificadas para a janela "sobre"
        sobreWindow = new BrowserWindow({
            width: 300, // Largura da janela "sobre"
            height: 220 // Altura da janela "sobre"
        });
    }
    // Carrega o conteúdo na janela "sobre"
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);  
    // Define um evento que será executado quando a janela "sobre" for fechada
    sobreWindow.on('closed', () => {
        // Define a variável sobreWindow como null para evitar que a variável seja destruída
        sobreWindow = null;
    });
});
