function setCookie(name, value, ttl) {
    var exdate = new Date();
    exdate.setDate( exdate.getDate() + ttl);
    var value = escape( value ) + ( ( ttl == null ) ? "" : "; expires=" + exdate.toUTCString() );
    document.cookie = name + "=" + value + "; path=/"; 
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
    console.log(currentMode);
    if (currentMode.includes('dark-mode')) {
        setCookie("darkmode", "true", 365);
    } else {
        setCookie("darkmode", "false", 365);
    }
}