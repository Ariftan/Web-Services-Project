function switchPage (page)
{
    var url = null;
    switch (page)
    {
        case 'home':
            url = "./pages/home.html";
            break;
        case 'category':
            url = "./pages/category.html";
            break;
        case 'about':
            url = "./pages/about.html";
            break;
        case 'contact':
            url = "./pages/contact.html";
            break;
        default:
            index.html;
    }
    // document.getElementById("content").innerHTML = url;
    var a = window.location.href=url;
    document.getElementById("content").innerHTML = a;
}