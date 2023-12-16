import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

//Para que no se contamine el ambito global
(function() {
    const formulario = document.querySelector("#formulario"); //Cacheamos el formulario completo

    formulario.addEventListener("submit", validarCliente);

    function validarCliente(e) {   //Dentro de esta función cacheamos los inputs de ese form
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value; 
        const email = document.querySelector("#email").value; 
        const telefono = document.querySelector("#telefono").value; 
        const empresa = document.querySelector("#empresa").value;

        const cliente = {
            nombre,
            email, 
            telefono, 
            empresa
        }

        if(!validar(cliente)){
            //Mostramos mensaje
            mostrarAlerta("Todos los campos son obligatorios");
            return 
        } 

        //Después que valida mueve los datos al obj cliente
        nuevoCliente(cliente);
        nuevoCliente("Nuevo cliente agregado");
        
    }
    function validar(obj) {
        console.log(Object.values(obj).every(input => input !== ""));
        return Object.values(obj).every(input => input !== "");
        //Devuelve false si alguna condición falta
        //Entonces negamos el !validar(cliente), para que si los dos son false muestre el mensaje de "Todos los campos"
        //Si 0bject regresa true, entonces muestra el campo de se pasaron todos los campos
        //Object values regresa todos los values del objeto
        //Añadimos cliente como el objeto que queremos verificar
        //every nos regresa true si todos los elementos cumplen con la condición dada
        //En este caso si en algún value hay un string vacío devolverá false hasta que todos los campos esten con un string
    }
})();