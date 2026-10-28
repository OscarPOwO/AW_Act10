var campo = document.querySelector("input[name='q']");
var portadas = document.querySelectorAll("#popular .col");
var aviso = document.getElementById("sinResultados");

function filtrar() {
    var texto = campo.value.toLowerCase();
    var contador = 0;

    for (var i = 0; i < portadas.length; i++) {
        var info = portadas[i].dataset.titulo + " " + portadas[i].dataset.generos;

        if (info.toLowerCase().includes(texto)) {
            portadas[i].classList.remove("d-none");
            contador++;
        } else {
            portadas[i].classList.add("d-none");
        }
    }

    aviso.classList.toggle("d-none", contador > 0);
}

var parametros = new URLSearchParams(window.location.search);
campo.value = parametros.get("q") || parametros.get("genero") || "";

campo.addEventListener("input", filtrar);
filtrar();