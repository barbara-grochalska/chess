function setResetButton (){
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
        window.confirm("r u sure?");
        window.location.reload();
    })
}