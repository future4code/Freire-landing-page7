function toggleMenu(){
    var menu = document.getElementById("menu-mobile");

    if(menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = "flex";
    }
    else{
        menu.style.display = "none";
    }
}

