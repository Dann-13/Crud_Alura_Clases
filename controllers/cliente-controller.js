import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email,id) => {
    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener('click', () =>{
        const id = btn.id;
        clientServices.eliminarCliente(id).then(respuesta =>{
            console.log(respuesta);
        }).catch(error => {
            alert("Ocurrio un error: ");
        });
    })
    return linea;

}

const table = document.querySelector('[data-table]');


clientServices.lista_cliente().then((data) => {
    console.log(data);
    data.forEach(({nombre,email,id}) => {
        
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=> alert("Ocurrio un Error"));


