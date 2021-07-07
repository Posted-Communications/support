consoleDisplay();
version();

function consoleDisplay() {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @ (@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#         @    @@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 @      @@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,                       @         @@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@                               @          @@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@                                      @             @@@@@@@@@@");
    console.log("@@@@@@@@@%                                             @               @@@@@@@@@");
    console.log("@@ @@                                                @                  @@@@@@@@");
    console.log("@@@     @@                                          @                   @@@@@@@@");
    console.log("@@@          @@                                   @                      @@@@@@@");
    console.log("@@@@              @@                             @                        @@@@@@");
    console.log("@@@@@                  @@                      @.                         /@@@@@");
    console.log("@@@@@@                      @@                @                            @@@@@");
    console.log("@@@@@@                           @@         &@                              @@@@");
    console.log("@@@@@@@                              @@........    @@@                       @@@");
    console.log("@@@@@@@@                           @ ...........           @@%               @@@");
    console.log("@@@@@@@@@                        @   ...........                  /@@.        @@");
    console.log("@@@@@@@@@                        @   ...........                  /@@.        @@");
    console.log("@@@@@@@@@@                   @                                         &@@@@@@@@");
    console.log("@@@@@@@@@@@                @                                   @@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@              @                            @@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@           @                     *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@       *@               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@    &@        #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@  @#  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
}

function version() {
    console.log("Welcome to Posted v0.1.11!");
    console.log("Share. Read. Follow. Enjoy.")
    console.log("Release Information: Development v0.1.11; released May 26, 2021")
}

//PRIMARY.CSS STYLESHEET MUST BE IMPORTED
function loadStatics(navType) {
    //NAVBAR
    let navbar = document.createElement('nav');
    navbar.setAttribute("id", "navbar");
    document.body.append(navbar);
    document.getElementById("navbar").innerHTML +=
    '<div id="navleft"></div><div id="navcenter"></div><div id="navright"></div>'
    if (navType == 0) {
        
        document.getElementById("navleft").innerHTML +=
        '<a href="/index.html" draggable="false"><img src="/resources/favicon.png" alt="logo" id="navlogo"><div id="header-wrapper"><h1>Posted</h1><h2>Share your life</h2></div></a>'
        document.getElementById("navcenter").innerHTML +=
        '<form method="GET" style="flex-basis:100%;"><div title="currently inoperable" class="searchform"><input name="search" type="text" placeholder="Search Posted" autocorrect="off" autocomplete="off" id="search" aria-label="search"></div></form>'
        document.getElementById("navright").innerHTML +=
        '<a href="/auth/login.html" class="big button">Log in /<wbr> Sign up</a>'
    } else if (navType == 1) {
        document.getElementById("navleft").innerHTML +=
        '<a href="/index.html"><img src="/resources/favicon.png" alt="logo" id="navlogo"><div id="header-wrapper"><h1>Posted</h1><h2>Share your life</h2></div></a>'
    }
    
    //FOOTER
    document.getElementById("maincontent").innerHTML +=
    '<footer><p>Posted is a product of Sirius Development &amp; Posted Communications.</p><p><a onclick="alert(&#39The issue tracker is currently a work in progress.&#92;r&#92;nSorry for the inconvinience!&#39)" target="_blank">Report an issue/make a suggestion</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="/change_log.html">Change Log</a></p></footer>'
}
