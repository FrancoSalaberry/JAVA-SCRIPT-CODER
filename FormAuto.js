document.addEventListener("DOMContentLoaded", function() {
    const botonEnviar = document.querySelector(".botons");
    
    botonEnviar.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        const nombres = document.getElementById("Nombres").value;
        const apellidos = document.getElementById("Apellidos").value;
        const correo = document.getElementById("Correo").value;
        const autoDeseado = document.getElementById("Autodesea").value;
        
        console.log("Nombres:", nombres);
        console.log("Apellidos:", apellidos);
        console.log("Correo:", correo);
        console.log("Auto Deseado:", autoDeseado);
        
        // Esto lo hice para que en caso de no poner un @, muestre error
        if (!correo.includes("@")) {
            Toastify({
                text: "Por favor, introduce un correo electrónico válido.",
                duration: 3000,
                close: true,
                gravity: "top", 
                backgroundColor: "#ff6347", 
            }).showToast();
            return; 
        }
        
        // Guarda en el localStorage
        const datosUsuario = {
            nombres: nombres,
            apellidos: apellidos,
            correo: correo,
            autoDeseado: autoDeseado
        };
        
        localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

        //SweetAlert
        Swal.fire({
            title: '¡ESTAS MAS CERCA DEL AUTO DE TUS SUEÑOS!',
            text: 'El formulario fue enviado correctamente, en breve recibirás un mail con los siguientes pasos.',
            icon: 'success',
            confirmButtonText: '¡Genial!'
        });
    });
});