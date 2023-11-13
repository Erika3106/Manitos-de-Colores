window.onload = function () {
    randomUser().catch((err) => {
      console.log(err);
    });
  };
  
  const randomUser = async () => {
    const respuesta = await fetch("https://randomuser.me/api/?results=5");
    const data = await respuesta.json();
    muestraRandomUser(data.results);
  };
  
  muestraRandomUser = (usuario) => {
    var contenido = document.getElementById("clientes");
    usuario.forEach((cliente) => {
      //console.log(cliente);
      contenido.innerHTML = `
        ${contenido.innerHTML}
          <div class="cliente cliente-card">
              <img src="${cliente.picture.large}"
              alt="${cliente.name.first}"
              class="cliente-pic"
              />
              <h3 class="nombre-cliente">${cliente.name.first} ${cliente.name.last}</h3>
             
            </div>
         `;
    });
  };