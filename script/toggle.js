document.getElementById("cashout").style.display = "none";
document.getElementById("transection-history").style.display = "none";


document.getElementById("div-add-money").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("transection-history").style.display = "none";
});

document.getElementById("div-cash-out").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("transection-history").style.display = "none";
});


document.getElementById("div-transaction").addEventListener("click", function () {
    document.getElementById("transection-history").style.display = "block";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "none";
});