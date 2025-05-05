document.addEventListener('DOMContentLoaded', function() {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const body = document.body;
    const formularioContacto = document.getElementById('formularioContacto');
    const mensajeRespuesta = document.getElementById('mensajeRespuesta');

    if (body.id === 'pagina-contacto') {
        const colores = [
            { bg: 'bg-light', text: 'text-dark' },
            { bg: 'bg-dark', text: 'text-light' },
            { bg: 'bg-theme-blue', text: 'text-theme-blue' },
            { bg: 'bg-theme-green', text: 'text-theme-green' },
            { bg: 'bg-theme-warning', text: 'text-theme-warning' },
            { bg: 'bg-theme-purple', text: 'text-theme-purple' },
            { bg: 'bg-theme-orange', text: 'text-theme-orange' },
            { bg: 'bg-theme-gray', text: 'text-theme-gray' },
            { bg: 'bg-theme-red', text: 'text-theme-red' },
            { bg: 'bg-theme-dark-blue', text: 'text-theme-dark-blue' },
            { bg: 'bg-theme-dark-green', text: 'text-theme-dark-green' },
            { bg: 'bg-theme-pink', text: 'text-theme-pink' },
            { bg: 'bg-theme-teal', text: 'text-theme-teal' }
        ];
        let indiceColor = 0;

        function aplicarColorContacto(color) {
            colores.forEach(c => {
                body.classList.remove(c.bg, c.text);
            });
            body.classList.add(color.bg, color.text);
        }

        if (cambiarColorBtn) {
            cambiarColorBtn.addEventListener('click', function() {
                indiceColor = (indiceColor + 1) % colores.length;
                aplicarColorContacto(colores[indiceColor]);
            });
        }
    }

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
            console.log('Formulario enviado (simulado):', { nombre, email, telefono, mensaje });
            mensajeRespuesta.innerHTML = '<div class="alert alert-success" role="alert">¡Mensaje enviado con éxito! Te responderemos pronto.</div>';
            formularioContacto.reset();
            setTimeout(() => {
                mensajeRespuesta.innerHTML = '';
            }, 5000);
        });
    }
});