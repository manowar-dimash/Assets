/*document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector("#formCompletarPerfil")) {
        let formCompletarPerfil = document.querySelector("#formCompletarPerfil");
        formCompletarPerfil.onsubmit = function(e) {
            e.preventDefault();
            let strFotoPerfil = document.querySelector("#imagen");
            let strNombreCompleto = document.querySelector("#nombre");
            if (strFotoPerfil == "" || strNombreCompleto == "") {
                swal("Atención", "Todos los campos son obligatorios.", "error");
                return false;
            }
            let elementsValid = document.getElementsByClassName("valid");
            for (let i = 0; i < elementsValid.length; i++) {
                if (elementsValid[i].classList.contains('is-invalid')) {
                    swal("Atención", "Por favor verifique los campos en rojo.", "error");
                    return false;
                }
            }

            let request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            let ajaxUrl = base_url + '/CompletarPerfil/setCompletarPerfil';
            let formData = new FormData(formCompletarPerfil);
            request.open("POST", ajaxUrl, true);
            request.send(formData);
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    let objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        //formCompletarPerfil.reset();
                        window.location = base_url + '/home';
                        swal("Usuarios", objData.msg, "success");
                    } else {
                        swal("Error", objData.msg, "error");
                    }
                }

                return false;
            }
        }
    }
}, false);*/