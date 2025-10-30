// js/script.js - Nuestro ÚNICO archivo de JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const serverIP = 'mc.smaugmc.com';

    // --- 1. FUNCIONALIDAD: ESTADO DEL SERVIDOR ---
    const statusContainer = document.getElementById('server-status-container');
    
    // El 'if' se asegura de que este código SOLO se ejecute si estamos en index.html
    if (statusContainer) { 
        const statusDot = statusContainer.querySelector('.status-dot');
        const statusText = document.getElementById('status-text');

        async function checkServerStatus() {
            try {
                const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
                const data = await response.json();
                statusDot.classList.remove('loading');
                
                if (data.online) {
                    statusDot.classList.add('online');
                    statusText.textContent = `Servidor En Línea - ${data.players.online} Jugadores Conectados`;
                } else {
                    statusDot.classList.add('offline');
                    statusText.textContent = 'Servidor Desconectado';
                }
            } catch (error) {
                console.error('Error al consultar el estado del servidor:', error);
                statusDot.classList.remove('loading');
                statusDot.classList.add('offline');
                statusText.textContent = 'No se pudo cargar el estado';
            }
        }
        checkServerStatus(); // Ejecuta el chequeo del servidor
    }

    // --- 2. FUNCIONALIDAD: COPIAR IP ---
    const copyIpBtn = document.getElementById('copyIpBtn'); // Buscamos el botón por su NUEVO ID
    
    // Este 'if' se asegura de que el código SOLO se ejecute si el botón existe
    if (copyIpBtn) { 
        copyIpBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(serverIP).then(() => {
                alert(`¡IP "${serverIP}" copiada! ¡Nos vemos en el juego!`);
            }).catch(err => {
                console.error('Error al copiar la IP: ', err);
            });
        });
    }
});