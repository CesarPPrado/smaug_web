// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const copyIpBtn = document.getElementById('copyIpBtn');
    const serverIp = 'mc.smaugmc.com';

    copyIpBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(serverIp).then(() => {
            alert(`¡IP "${serverIp}" copiada! ¡Nos vemos en el juego!`);
        }).catch(err => {
            console.error('Error al copiar la IP: ', err);
        });
    });
});