window.addEventListener("load", function(){

document.getElementById("myForm").style.display = "block";
document.getElementById("closeBtn").addEventListener("click", closeForm, false);

}, false);



function closeForm() {
    document.getElementById("myForm").style.display = "none";
}