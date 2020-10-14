//General Use Functions
function delay (URL) {
    setTimeout( function() { window.location = URL }, 200 );
}
//Functions for cookies

function setCookie(name, value, ttl, path="/") {
    var exdate = new Date();
    exdate.setDate( exdate.getDate() + ttl);
    var value = escape( value ) + ( ( ttl == null ) ? "" : "; expires=" + exdate.toUTCString() );
    document.cookie = name + "=" + value + "; path="+path;
    console.log("set cookie: " + name + "=" + value + "; path="+path);
}

function getCookie(name) {
    var name = name+ "=";
    var cookies = decodeURIComponent(document.cookie).split(';');
    for (var i =0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length)
        }
    }
    return "";
}

function setDarkModeCookie() {
    var currentMode = document.body.classList.value;
    if (currentMode.includes('dark-mode')) {
        setCookie("darkmode", "true", 365);
    } else {
        setCookie("darkmode", "false", 365);
    }
}

function setTabCookie(tabID) {
    currentPage = window.location.href.split('://')[1].replace('#', '');
    setCookie("visitedTab:"+currentPage, tabID, 365, currentPage);
}

function selectTabFromCookie() {
    currentPage = window.location.href.split('://')[1].replace('#', '');
    cookie = getCookie("visitedTab:" + currentPage);
    if (cookie != "") {
        document.getElementById("TAB:" + cookie).click();
    }
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

    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active"

    setTabCookie(Name);
}

//functions for the slide in overlay

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function toggleMode() {
    document.getElementById("darkmodetoggle").innerHTML = document.body.classList.toggle("dark-mode") ? '<i class="material-icons">check_box</i> Dark Mode' : '<i class="material-icons">check_box_outline_blank</i> Dark Mode'
}

