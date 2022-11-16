const crearNuevaLinea = (nombre, email) => {
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
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido;
    return linea;

}

const table = document.querySelector('[data-table]');
//Abrir http (metodo, url)

//Crud
//Create - POST
// Read - GET
// Update - PUT-PATCH
// Delete - DELETE

//fetch Api
const lista_cliente = () => fetch("http://localhost:3000/perfil").then( response => response.json());

lista_cliente().then((data) => {
    console.log(data);
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=> alert("Ocurrio un Error"));


