//este archivo solo haremos la comunicacion con el servidor
const lista_cliente = () => fetch("http://localhost:3000/perfil").then( response => response.json());

export const clientServices = {
    lista_cliente
}



