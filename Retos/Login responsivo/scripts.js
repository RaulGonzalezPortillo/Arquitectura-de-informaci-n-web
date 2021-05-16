function iniciarSesion()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Se recibieron los siguientes datos:");
    console.log(email);
    console.log(password);
    if(email=="admin@correo.uia.mx" && password=="password")
        alert("Sesión valida");
    else
        alert("Sesión invalida");
}

function onSignIn(googleUser) {
    // Información útil para los scripts del lado del servidor:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // No mandar esto directamente al servidor!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // La token ID que se va a enviar al backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}