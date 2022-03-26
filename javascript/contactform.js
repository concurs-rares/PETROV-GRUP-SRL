var form = document.getElementById('formularcontact');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("formularcontact")),
        }).then(() =>{
            alert("Vă multumim pentru ca ne-aţi contactat !");
            form.reset();
        });
});