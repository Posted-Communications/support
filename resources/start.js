//PRIMARY.CSS STYLESHEET MUST BE IMPORTED
function loadStatics(navType) {
    //NAVBAR
    let navbar = document.createElement('nav');
    navbar.setAttribute("id", "navbar");
    document.body.append(navbar);
    document.getElementById("navbar").innerHTML +=
    '<div id="navleft"></div><div id="navright"></div>';

    document.getElementById("navleft").innerHTML +=
    '<a href="/index.html" draggable="false"><img src="/resources/favicon.png" alt="logo" id="navlogo"><div id="header-wrapper"><h1>Posted Support</h1></div></a>'
}
