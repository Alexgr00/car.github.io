// PRODUCTOS
const productos = [
    // Porsche
    {
        id: "porsche-01",
        titulo: "911",
        imagen: "./shop/p-911.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 109900
    },
    {
        id: "porsche-02",
        titulo: "718",
        imagen: "./shop/p-718.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 88900
    },
    {
        id: "porsche-03",
        titulo: "Cayenne",
        imagen: "./shop/p-cayenne.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 76900
    },
    {
        id: "porsche-04",
        titulo: "Taycan",
        imagen: "./shop/p-taycan.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 82900
    },
    {
        id: "porsche-05",
        titulo: "Panamera",
        imagen: "./shop/p-panamera.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 88900
    },
    {
        id: "porsche-05",
        titulo: "Macan",
        imagen: "./shop/p-macan.jpg",
        categoria: {
            nombre: "Porsche",
            id: "porsche"
        },
        precio: 57900
    },
    // Lamborghini
    {
        id: "lamborghini-01",
        titulo: "Aventador",
        imagen: "./shop/l-gate_aven_01.png",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 502900
    },
    {
        id: "lamborghini-02",
        titulo: "SVJ Roadster",
        imagen: "./shop/l-aventador_svj.png",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 502900
    },
    {
        id: "lamborghini-03",
        titulo: "Huracan",
        imagen: "./shop/l-gate_hura_02.webp",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 209900
    },
    {
        id: "lamborghini-04",
        titulo: "Camiseta 04",
        imagen: "./shop/l-hura_evo_rwd_spy.webp",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 209900
    },
    {
        id: "lamborghini-05",
        titulo: "URUS Gate",
        imagen: "./shop/l-urus_gate_01.webp",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 221900
    },
    {
        id: "lamborghini-06",
        titulo: "URUS Graphite",
        imagen: "./shop/l-urus_graphite_02.webp",
        categoria: {
            nombre: "Lamborghini",
            id: "lamborghini"
        },
        precio: 221900
    },
    // Audi
    {
        id: "audi-01",
        titulo: "E-Tron",
        imagen: "./shop/audi-e-tron.webp",
        categoria: {
            nombre: "Audi",
            id: "audi"
        },
        precio: 65900
    },
    {
        id: "audi-02",
        titulo: "E-Tron S",
        imagen: "./shop/audi-e-tron-s.webp",
        categoria: {
            nombre: "Audi",
            id: "audi"
        },
        precio: 84900
    },
    {
        id: "audi-03",
        titulo: "E-Tron Sportback",
        imagen: "./shop/audi-e-tron-sportback.webp",
        categoria: {
            nombre: "Audi",
            id: "audi"
        },
        precio: 56900
    },
    {
        id: "audi-04",
        titulo: "R8 Spyder",
        imagen: "./shop/audi-r8-spyder.webp",
        categoria: {
            nombre: "Audi",
            id: "audi"
        },
        precio: 209900
    },
    // Mini Cooper
    {
        id: "mini-01",
        titulo: "C",
        imagen: "./shop/mini-c.png",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 31900
    },
    {
        id: "mini-02",
        titulo: "Clubman",
        imagen: "./shop/mini-clubman.jpg",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 29900
    },
    {
        id: "mini-03",
        titulo: "Countryman",
        imagen: "./shop/mini-countryman.png",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 30900
    },
    {
        id: "mini-04",
        titulo: "Electric 3 PE",
        imagen: "./shop/mini-electrico-3-p.png",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 40900
    },
    {
        id: "mini-05",
        titulo: "John",
        imagen: "./shop/mini-john.jpg",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 32900
    },
    {
        id: "mini-06",
        titulo: "Phev",
        imagen: "./shop/mini-phev.png",
        categoria: {
            nombre: "Mini",
            id: "mini"
        },
        precio: 34900
    },
    // Mercedes Benz 
    {
        id: "mercedes-01",
        titulo: "Hatchback",
        imagen: "./shop/m-a-hatchback.webp",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 34000
    },
    {
        id: "mercedes-02",
        titulo: "AMG GT",
        imagen: "./shop/m-amg-gt.webp",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 92900
    },
    {
        id: "mercedes-03",
        titulo: "A Sedan",
        imagen: "./shop/m-a-sedan.webp",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 35000
    },
    {
        id: "mercedes-04",
        titulo: "EQC SUV",
        imagen: "./shop/m-eqc-suv.webp",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 126000
    },
    {
        id: "mercedes-05",
        titulo: "EQE",
        imagen: "./shop/m-eqe.webp",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 70000
    },
    {
        id: "mercedes-06",
        titulo: "Maybach",
        imagen: "./shop/m-maybach.jpeg",
        categoria: {
            nombre: "Mercedes",
            id: "mercedes"
        },
        precio: 200000
    }
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}