
document.getElementById('btn-logout').addEventListener('click', function (event) {
        event.preventDefault()
        window.location.href="./index.html"
    });

document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("txtCashOutAccountNumber").value;
    const convertedaccountNumber = parseInt(accountNumber);

    // const pinNumber = document.getElementById("txtCashOutPinNumber").value;
    // const convertedPin = parseInt(pinNumber);

    // const totalBalance = document.getElementById('total-balance').innerText;
    // const convertedTotalBalance = parseFloat(totalBalance);

    // const amount = document.getElementById("txtCashOutAmount").value;
    // const convertedAmount = parseFloat(amount);

    const convertedPin = getInputValueById("txtCashOutPinNumber");
    const convertedTotalBalance=getInnerTextById("total-balance");
    const convertedAmount=getInputValueById("txtCashOutAmount");

    if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            if (convertedTotalBalance > 0) {
                if (convertedAmount > 0) {
                    const sum = convertedTotalBalance - convertedAmount;

                    // document.getElementById('total-balance').innerText = sum;
                    setInnerTextByIdandValue('total-balance',sum);

                    const historyContainer=document.getElementById('transaction-container')
                    const p=document.createElement("p");
                    p.innerText=`
                     Cash out ${convertedAmount} from ${accountNumber} account number.
                    `
                    historyContainer.appendChild(p);
                }
                else {
                    alert("please enter valid amount.")
                }
            }
            else {
                alert("you have no balance to cash out")
            }
        }
        else {
            alert("Pin number not matched")
        }
    }
    else {
        alert("Need valid account number")
    }
    amount.innerText="";
})