import {validar, mostrarAlerta} from "./funciones.js";
import { obtenerCliente, actualizarCliente } from "./API.js";

(function() {

    //Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const empresaInput = document.querySelector("#empresa");
    const telefonoInput = document.querySelector("#telefono");
    const idInput = document.querySelector("#id");

    document.addEventListener("DOMContentLoaded", async ()=>{
        //Le ponemos async await para esperar a que cargue primero la funcion de obtenerCliente, ya que si no lo hacemos daria error
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get("id"));
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        //Guardaremos los cambios hechos con submit al form
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarCliente );
    });

    function mostrarCliente(cliente) {
        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value, 
            telefono: telefonoInput.value, 
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if(!validar(cliente)){
            //Mostramos mensaje
            mostrarAlerta("Todos los campos son obligatorios");
            return 
        } 

        //Si se pasan todas las validaciones se reescribe el objeto
        actualizarCliente(cliente);
    }
})();