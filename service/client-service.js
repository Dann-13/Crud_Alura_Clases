//este archivo solo haremos la comunicacion con el servidor
const lista_cliente = () => fetch("http://localhost:3000/perfil").then( response => response.json());
const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({nombre,email,id:uuid.v4()})
    })
};

const eliminarCliente = (id) =>{
    console.log('eliminar a => ', id);
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    })
}
export const clientServices = {
    lista_cliente,
    crearCliente,
    eliminarCliente
}



