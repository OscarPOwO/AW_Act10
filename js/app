const BaseUsuarios=[
    {user:'admin' , pass:'123', rol:'Administrador', url:'inicio.html'},
    {user:'editor' , pass:'123', rol:'Editor', url:'inicio.html'},
    {user:'lector' , pass:'123', rol:'Lector', url:'inicio.html'}
];

//funcion para prevenir reload
function iniciarSesion(e){
    e.preventDefault();

    const InputUser = document.getElementById('inputUser').value.trim();
    const InputPass = document.getElementById('inputPass').value;

    const UsuarioAutenticado = BaseUsuarios.find(
        u=>u.user ===InputUser && u.pass===InputPass
    );

    if(UsuarioAutenticado){
        const Sesion = {user:UsuarioAutenticado.user, rol:UsuarioAutenticado.rol, url:UsuarioAutenticado.url};
        sessionStorage.setItem('sesionActiva', JSON.stringify(Sesion));
        window.location.href=UsuarioAutenticado.url;
    } else{
        alert("Usuario o contraseña incorrectos.");
    }
}

//cerrar sesión
function cerrarSesion() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        sessionStorage.removeItem('sesionActiva');
        window.location.href = 'index.html';
    }
}

//saltar login si ya autenticado
function saltarLoginSiAutenticado() {
    const Sesion = JSON.parse(sessionStorage.getItem('sesionActiva'));
    if (Sesion) {
        alert(`Ya tienes una sesión iniciada como ${Sesion.user} (${Sesion.rol})`);
        window.location.href = Sesion.url;
    }
}

// Verificar acceso
function verificarAcceso(rolRequerido) {
    const Sesion = JSON.parse(sessionStorage.getItem('sesionActiva'));

    if (!Sesion) {
        alert("Debes iniciar sesión primero.");
        window.location.href = "index.html";
    } else if (rolRequerido && Sesion.rol !== rolRequerido) {
        alert(`Acceso denegado. Tu rol de ${Sesion.rol} no tiene permiso para ver esta página.`);
        window.location.href = Sesion.url;
    } else {
        const InfoUsuario = document.getElementById('infoUsuario');
        if (InfoUsuario) {
            InfoUsuario.textContent = `👤 ${Sesion.user} (${Sesion.rol})`;
        }
    }
}
