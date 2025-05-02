
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("txtAccountNumber").value;
    const convertedaccountNumber = parseInt(accountNumber);

    const convertedPin = getInputValueById("txtPinNumber");
    const convertedTotalBalance=getInnerTextById("total-balance");
    const convertedAmount=getInputValueById("txtAmount");

        if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            if(convertedAmount>0)
            {
              const sum= convertedTotalBalance+convertedAmount;
              setInnerTextByIdandValue('total-balance',sum);

              const historyContainer=document.getElementById('transaction-container')
              const p=document.createElement("p");
              p.innerText=`
               added ${convertedAmount} from ${accountNumber} account number.
              `
              historyContainer.appendChild(p);

            }
            else
            {
                alert("please enter valid amount.")
            }
        }
        else {
            alert("Pin number not matched")
        }
    }
    else {
        alert("Need valid account number")
    }

})