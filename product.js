//selecting side navbar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener('click', function () {
    sidenav.style.right = "-50%"
})


//product-container

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div"); 

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); 

    for (var count = 0; count < productList.length; count++) { 
        var productName = productList[count].querySelector("h1").textContent.toUpperCase(); 

        if (productName.indexOf(enteredValue) < 0) { 
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
    
});
