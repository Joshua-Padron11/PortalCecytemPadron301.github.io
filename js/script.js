
function actualizarReloj() {
    const ahora = new Date();
    

    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('reloj-digital').textContent = ahora.toLocaleTimeString('es-MX', opcionesHora);

 
    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long' };
    const fechaFormateada = ahora.toLocaleDateString('es-MX', opcionesFecha);
    document.getElementById('fecha-actual').textContent = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


let visitas = localStorage.getItem('conteoVisitantes');
if (!visitas) {
    visitas = 0; a
}
if (!sessionStorage.getItem('sesionIniciada')) {
    visitas++;
    localStorage.setItem('conteoVisitantes', visitas);
    sessionStorage.setItem('sesionIniciada', 'true');
}
document.getElementById('visitantes').textContent = visitas;


const btnArriba = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnArriba.classList.add('active');
    } else {
        btnArriba.classList.remove('active');
    }
};


document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito al correo institucional!');
    this.reset();
});