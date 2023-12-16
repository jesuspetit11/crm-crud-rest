const url = "http://localhost:3000/clientes";

//Cuando se crea un nuevo cliente
export const  nuevoCliente = async (cliente) => {
    //Muestra en consola el cliente que le acabamos de pasar
    // console.log(cliente);
    //Usaremos async await e insertaremos un nuevo cliente en la DB.json

    try {
        await fetch(url, {
            method: "POST",  //Siempre que creemos un nuevo registro usamos el método de POST
            body: JSON.stringify(cliente), //Le pasamos el cliente como string y lo mandamos a la URL como método POST
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        window.location.href = "index.html"; //Una vez que se complete esta acción lo regresamos a index.html
        
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const result = await fetch(url);
        const clientes = await result.json();
        return clientes; //Retornamos el BD
    } catch (error) {
        console.log(error);
    }
}

//Elimina el cliente de la BD
export const eliminarCliente = async (id) =>{
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente
export const obtenerCliente = async id => {
    try {
        const result = await fetch(`${url}/${id}`);
        const cliente = await result.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Actualiza un registro

export const actualizarCliente = async cliente => {
    console.log(cliente);
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: "PUT",
            body: JSON.stringify(cliente),
            header: {
                "Content-Type": "application/json"
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}