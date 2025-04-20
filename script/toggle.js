document.getElementById("cashout").style.display = "none";
// document.getElementById("addmoney").style.display = "block";

document.getElementById("div-add-money").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    console.log("Hello");
});

document.getElementById("div-cash-out").addEventListener("click", function () {
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
    console.log("Hello2");
});