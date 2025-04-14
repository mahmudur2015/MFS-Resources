

document.getElementById("btn-login").addEventListener("click",
    function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById("txtAccountNumber").value;
        const convertedaccountNumber = parseInt(accountNumber);
        
        const pinNumber = document.getElementById("txtPinNumber").value;
        const convertedPin = parseInt(pinNumber);

        if (accountNumber.length === 11) {
            if (convertedPin === 1234) {
                window.location.href="./main.html"
            }
            else {
                alert("Pin number not matched")
            }
        }
        else {
            alert("Need valid account number")
        }
    })