

document.getElementById("btn-login").addEventListener("click",
    function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById("txtAccountNumber").value;
        const pinNumber = document.getElementById("txtPinNumber").value;
        console.log(accountNumber);
        console.log(pinNumber);
    })