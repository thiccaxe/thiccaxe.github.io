//100% tollatyt 1\10 guranted Coopyrte (Ɔ) tjicaxe.bet
//but seriously most of this shit is copy pasted from w3 schools so feel free to Ctrl+C/Ctrl+V (unless ur on mac lyke a loosur then }{+C and }{+V)
//anyhow try and read through this anyway gl hf




//Functions for localStorage
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var overlayOpen = false;
var ntfnOpen = false;
var ntfnInfo = "";
var theme = 'light';


function wipeCookies() {
    var allCookies = document.cookie.split(';');   
    for (var i = 0; i < allCookies.length; i++) 
        document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString(); 
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

function openNav() {
    
    if (overlayOpen == false) {
        if (isMobile) {
            document.getElementById("overlay-container").style.width = "calc(100% - 30px)";
        } else {
        document.getElementById("overlay-container").style.width = "25%";
        }
        overlayOpen = true;
    }

}

function closeNav() {
    if (overlayOpen) {
        document.getElementById("overlay-container").style.width = "0%";
        overlayOpen = false;  
        
    }

}

function openNTFN(info) {
    ntfnInfo = info;
    if (!ntfnOpen) {
        if (isMobile) {
            document.getElementById("ntfn-container").style.width = "calc(100% - 30px)";
        } else {
            document.getElementById("ntfn-container").style.width = "25%";
        }
        ntfnOpen = true;
    }
    if (ntfnInfo == 'tools') {
        let HTMLString = "<a href='javascript:void(0);'><i class='material-icons'>code</i> Dev Tools<p><p></p></p></a>";
        let tools = ['Cookies']
        for (tool in tools) {
            HTMLString += "<a href='javascript:void(0);' onclick='goTo(\"Dev-" + tools[tool] + "\");'><i class='material-icons'>public</i> Cookies</a>";
            console.log(tools[tool]);
        }
        HTMLString += '<div id="close-ntfn-desktop"><a href="javascript:void(0);" onclick="closeNTFN()"><i class="material-icons">clear</i></a></div>';
        
        document.getElementById('ntfn-content').innerHTML = HTMLString;
    } else if (ntfnInfo == 'cookies'){
        let HTMLString = "<a href='javascript:void(0);'><i class='material-icons'>public</i> Cookies</a><p><a href='javascript:void(0);' onclick=\"goTo('Dev--Tools'); wipeCookies();\"><i class='material-icons'>delete</i> Clear</a></p>";
        let cks = Cookies.get();
        let keys = Object.keys(cks);
        for (key in keys){
            console.log(keys[key], cks[keys[key]]);
            HTMLString += "<p>" + keys[key] + ": " + cks[keys[key]];
        }
        HTMLString += '<div id="close-ntfn-desktop"><a href="javascript:void(0);" onclick="goTo(\'Dev--Tools\');"><i class="material-icons">west</i></a></div>';
        document.getElementById('ntfn-content').innerHTML = HTMLString;
    } 
    
}
function closeNTFN() {
    document.getElementById("ntfn-container").style.width = "0%";
    ntfnOpen = false;
}


function toggleTheme() {
    obj = document.getElementById('darkmodetoggle');
    text=" Dark Mode"
    document.body.classList.toggle("dark-mode");
    if (Cookies.get('theme') == 'dark' | Cookies.get('theme') == undefined) {
        obj.innerHTML = '<i class="material-icons">check_box_outline_blank</i>' + text;
        Cookies.set('theme', 'light', {expires: 365});
    } else if (Cookies.get('theme') == 'light'){
        obj.innerHTML = '<i class="material-icons">check_box</i>' + text
        Cookies.set('theme', 'dark', {expires: 365});
    }
}

function setTheme(set) {
    if (set == 'dark' && theme == 'light') {
        document.getElementById('darkmodetoggle').innerHTML = '<i class="material-icons">check_box</i> Dark Mode';
        
        document.body.classList.toggle("dark-mode");
    }
}


document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {
        if ((storedTheme = Cookies.get('theme')) != undefined) {
            if (storedTheme == 'dark') {
                setTheme('dark');
            }
        } else {
            Cookies.set('theme', 'light', {expires: 7});
        }
        if (!isMobile) {
            document.getElementById("close-overlay-mobile").innerHTML = "";
            document.getElementById('close-ntfn-mobile').innerHTML = "";
        } else {
            document.getElementById("close-overlay-desktop").innerHTML = "";
            document.getElementById('close-ntfn-mobile').innerHTML = "";
        }
    }

    // When window loaded  
    if (event.target.readyState === "complete") {
        //mobile ??? O:
        

        
    }
});
$(document).click(function(event) {if ((event.target.tagName == "HTML" | event.target.tagName == "BODY") && (overlayOpen==true && isMobile==false)) {closeNav();}})
 

//random stuff
function goTo(str) {
    str = String(str);
    if (str.charAt(0) == '/') {
        if (str != window.location.pathname) {
            window.location.href = str;
        } else {
            closeNav();
        }
    } else if (str.startsWith('Dev-')) {
        if (str == 'Dev-Cookies') {
            openNTFN('cookies');
        } else if (str == 'Dev--Tools') {
            openNTFN('tools');
        }
    } else {
        if (str == 'Toggle Theme') {
            closeNav(); toggleTheme();
        } else if (str == 'Show Tools') {
            closeNav(); openNTFN('tools');
        } 
    }
}
