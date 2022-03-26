 $(document).ready(function(){
    $(".butondetalii").click(function(){
      $(".wall-al").addClass("activ");
    });
    $(".close-pp").click(function(){
      $(".wall-al").removeClass("activ");
    });
  });  


  $(document).ready(function(){
    $(".active").click(function(){
      $(".wall-al").addClass("activ");
    });
    $(".close-pp").click(function(){
      $(".wall-al").removeClass("activ");
    });
  });  



var form = document.getElementById('formular');
  form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method: "POST",
          body: new FormData(document.getElementById("formular")),
      }).then(() =>{
        $(".wall-al").removeClass("activ");
          form.reset();
        alert("Vă multumim ca a-ţi ales serviciile noastre !");
      });
  });