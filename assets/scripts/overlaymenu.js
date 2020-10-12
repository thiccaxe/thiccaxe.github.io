function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function toggleMode() {
    document.body.classList.toggle("dark-mode");
    if (document.getElementById("darkmodetoggle").innerHTML == '<i class="material-icons">check_box_outline_blank</i> Dark Mode') {
    document.getElementById("darkmodetoggle").innerHTML = '<i class="material-icons">check_box</i> Dark Mode';
        }
    else {
        document.getElementById("darkmodetoggle").innerHTML = '<i class="material-icons">check_box_outline_blank</i> Dark Mode'
    }
}