function openModal() {

    document.querySelector('#idCarrito').value = "";

    document.querySelector('#titleModal').innerHTML = "Tu Carro";
    document.querySelector("#formCarrito").reset();
    $('#modalFormCarrito').modal('show');
}