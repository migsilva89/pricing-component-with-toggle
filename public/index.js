
let toggle = document.getElementById("toggleB")
// toggle.checked = false

toggle.addEventListener("click", function(){
let prices = document.querySelectorAll("#price")

    switch (toggle.checked){
        case true:
            prices[0].innerHTML = "19.99"
            prices[1].innerHTML = "24.99"
            prices[2].innerHTML = "39.99"
            break;
        case false:
            prices[0].innerHTML = "199.99"
            prices[1].innerHTML = "249.99"
            prices[2].innerHTML = "399.99"
            break;
    }
})


