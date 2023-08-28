function show(){
    var pas = document.getElementById('pass');
    var cpas = document.getElementById('cpass');

    if (pass.type === "password" && cpass.type === "password"){
        pas.type="text";
        cpas.type="text";
    }
    else{
        pas.type="password";
        cpas.type="password";
    }

}
