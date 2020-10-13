function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function toggleMode() {
    document.getElementById("darkmodetoggle").innerHTML = document.body.classList.toggle("dark-mode") ? '<i class="material-icons">check_box</i> Dark Mode' : '<i class="material-icons">check_box_outline_blank</i> Dark Mode'
}