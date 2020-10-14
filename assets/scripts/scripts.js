const URLREGEX = /[.:]/g

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
    document.getElementById('devtools').innerHTML+="<p>" + "set cookie: " + name + "=" + value + "; path="+path + "</p>"
    //document.getElementById('devtools').innerHTML=document.cookie
    //alert(document.cookie + "\nset cookie: " + name + "=" + value + "; path="+path)
}

function getCookie(name) {
    var ckname = name+ "=";
    var cookies = decodeURIComponent(document.cookie).split(';');
    console.log('Getting Cookies with name: ' + name);
    var gotCookies = false;
    for (var i =0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(ckname) == 0) {
            console.log("got cookie: " + name + " = " + cookie.substring(ckname.length, cookie.length));
            document.getElementById('devtools').innerHTML+="<p>got cookie: " + name + " = " + cookie.substring(ckname.length, cookie.length) + "</p>";
            return cookie.substring(ckname.length, cookie.length);
            gotCookies = true;
        }
    }
    if (gotCookies==false) {
        console.log("Found no cookies with name: " + name);
        document.getElementById('devtools').innerHTML+="<p>Got no cookies with name: " + name + "</p>";
    }
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
    currentPage = window.location.href.split('://')[1].replaceAll("#", '').replaceAll(URLREGEX, "_").replaceAll('/', '_');
    setCookie("visitedTab_"+currentPage, tabID, 365, window.location.href.replaceAll("#", ''));
}

function selectTabFromCookie() {
    currentPage = window.location.href.split('://')[1].replaceAll("#", '').replaceAll(URLREGEX, "_").replaceAll('/', '_');
    cookie = getCookie("visitedTab_" + currentPage);
    if (cookie != null) {
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

