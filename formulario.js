document.addEventListener('DOMContentLoaded', function() {
    // Configurar reglas de validación y mensajes de error usando jQuery validation
    $('#formularioProceso').validate({
        rules: {
            nombreProceso: 'required',
            cantidad: 'required',
            horasEspera: 'required',
        },
        messages: {
            nombreProceso: 'Por favor ingrese su nombre',
            cantidad: 'Por favor ingrese la cantidad de kilómetros',
            horasEspera: 'Por favor ingrese la cantidad de horas de espera',
        },
        submitHandler: function(form) {
            // Obtener los valores de los campos del formulario
            var nombre = document.getElementById('nombreProceso').value;
            var cantidad = document.getElementById('cantidad').value = 100;
            var horasEspera = document.getElementById('horasEspera').value = 500;

            // ASIGNAR NUEVOS VALORES A CADA VARIABLE
            var horasEspera = 500;
            var cantidad = 100;

            // Realizar cálculos para la cotización
            var subtotal = cantidad * 100 + horasEspera;
            var impuesto = subtotal * 0.21 ; // Se asume un impuesto del 21%
            var total = subtotal + impuesto;

            // Generar el resumen de la cotización
            var cotizacion = 'Cotización:\n\n' +
                'Nombre: ' + nombre + '\n' +
                'Valor total por kilometraje: $' + cantidad * 100 + '\n' +
                'Valor total por horas de espera: $' + horasEspera + '\n' +
                'Subtotal: $' + subtotal + '\n' +
                'Impuesto (21%): $' + impuesto + '\n' +
                'Total: $' + total;

            // Mostrar la cotización en un cuadro de diálogo
            alert(cotizacion);

            // Continuar con el resto del código de generación del PDF y descarga del archivo, si es necesario
            // ...
            // Crear un nuevo objeto jsPDF
            var pdf = new jsPDF();

            // Agregar el resumen al documento PDF
            pdf.text(cotizacion, 20, 20);

            // Generar el archivo PDF como Blob
            var pdfBlob = pdf.output('blob');

            // Crear un enlace de descarga
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(pdfBlob);
            downloadLink.download = 'Cotizacion.pdf';
            downloadLink.click();

            // Liberar el objeto Blob
            URL.revokeObjectURL(pdfBlob);
        
        }
    });


    // Configurar reglas de validación y mensajes de error usando jQuery validation para el formulario de contacto
});

