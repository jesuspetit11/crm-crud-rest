export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector(".bg-red-100");
    if(!alerta){
        const alerta = document.createElement("P");
        alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center");
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong> 
        <br/>
        <span class="block sm:inline">${mensaje}</span>
        `;
        const formulario = document.querySelector("#formulario");

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj) {
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