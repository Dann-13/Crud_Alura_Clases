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

const lista_cliente = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/perfil');
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response); //convertimos la respuesta del http ara obtener un objeto
            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response); //si no hay error nos regresa la respuesta
            }
        }
    })
    return promise;
}
lista_cliente().then((data) => {
    console.log(data);
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error)=> alert("Ocurrio un Error"));

