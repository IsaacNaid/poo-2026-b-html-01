const btnSaludar = document.getElementById('btn-saludar');
let mensajeMostrado = false;

console.log(btnSaludar);
btnSaludar.addEventListener('click',function(){



    if(!mensajeMostrado){
        const seccionContacto = document.getElementById('contacto');

        const mensaje = document.createElement('p');
        mensaje.textContent = 'Gracias por tu visita';
        mensaje.style.color = '#27ae60';
        mensaje.style.fontWeight = 'bold';

        seccionContacto.appendChild(mensaje);
        mensajeMostrado=true;
        btnSaludar.textContent = 'Mensaje enviado';
        btnSaludar.disabled = true;
        btnSaludar.style.backgroundColor = '#bdc3c7';

    }
  
})