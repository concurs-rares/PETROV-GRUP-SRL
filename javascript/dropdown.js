function myFunction(x) {
  document.getElementById("myDropdown").classList.toggle("show");
  x.classList.toggle("change");

}


window.onclick = function(x) {
 if (!e.target.matches('.container')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}