//100% tollatyt 1\10 guranted Coopyrte (Ɔ) tjicaxe.bet
//but seriously most of this shit is copy pasted from w3 schools so feel free to Ctrl+C/Ctrl+V (unless ur on mac lyke a loosur then }{+C and }{+V)
//anyhow try and read through this anyway gl hf



//Functions for localStorage

function setItem(key, val) {
    localStorage.setItem(key, val);
    console.log('set', key, val);
}

function getItem(key) {
    console.log('got', localStorage.getItem(key));
    return localStorage.getItem(key);
    
}

function deleteItem(key) {
    localStorage.removeItem(key);
}


//Functions for tabs
function loadHTML(evt, Name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById('TABCONTENT:' + Name).style.display = "block";
    evt.currentTarget.className += " active"

}

//functions for the slide in overlay
let overlayOpen = false;
function openNav() {
    if (overlayOpen == false) {
        document.getElementById("overlay-container").style.width = "100%";
        overlayOpen = true;
    }

}

function closeNav() {
    if (overlayOpen) {
        document.getElementById("overlay-container").style.width = "0%";
        overlayOpen = false;
    }

}


function toggleTheme(obj = document.getElementById('darkmodetoggle'), text=" Dark Mode") {
    obj.innerHTML = document.body.classList.toggle("dark-mode") ? '<i class="material-icons">check_box</i>' + text: '<i class="material-icons">check_box_outline_blank</i>' + text;
    if (theme = getItem('theme') == 'dark') {
        setItem('theme', 'light');
    } else {
        setItem('theme', 'dark');
    }
}



document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        //mobile ??? O:
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile == false) {
            console.log(document.getElementById("close-overlay-mobile").innerHTML = "");
        } else {
            console.log(document.getElementById("close-overlay-desktop").innerHTML = "");
        }

        if (theme = getItem('theme') != null) {
            if (theme == 'dark') {
                toggleTheme()
            }
        } else {
            setItem('theme', 'light')
        }
    }
});

 

//random stuff
function goTo(str) {
    str = String(str);
    if (str.charAt(0) == '/') {
        if (str != window.location.pathname) {
            window.location.href = str;
        } else {
            closeNav();
        }
    } else {
        if (str == 'Toggle Theme') {
            closeNav(); toggleTheme();
        }
    }
}
