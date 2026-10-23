// Carrito de compras en memoria
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precio) {
    carrito.push({ nombre: nombreProducto, precio: precio });
    
    alert("¡Excelente! Agregaste " + nombreProducto + " ($" + precio + ") al carrito.");
    console.log("Carrito actualizado:", carrito);
}

// Confirmación de carga del script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistema CyberTech inicializado correctamente.");
});