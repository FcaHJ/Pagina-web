
/* CARRO DE COMPRAS */
var lista_productos = [];

if (localStorage.getItem("PRODUCTOS-FondCandy")) {
    lista_productos = JSON.parse(localStorage.getItem("PRODUCTOS-FondCandy")) || [];
}

function agregar(id){
    var producto = $("#producto-"+ id);

    var p = {
        id: id,
		img: producto.data("img"),
        nombre: producto.data("nombre"),
        precio: producto.data("precio")
    };
	
    lista_productos.push(p);

	console.log(lista_productos);

    localStorage.setItem("PRODUCTOS", JSON.stringify(lista_productos));

    llenar_carro();
}

function llenar_carro() {
    $("#carro-producto").html("");
    var texto = "";
    var total = 0;

    lista_productos.forEach(producto => {
        texto = texto + `
            <tr>
                <td><img src="${producto.img}" width="50px"></td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
            </tr>
        `;

        total += producto.precio;
    });
    $("#carro-producto").append(texto);
    $("#carro-precio").html(total);
}
