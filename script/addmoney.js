
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("txtAccountNumber").value;
    const convertedaccountNumber = parseInt(accountNumber);

    // const pinNumber = document.getElementById("txtPinNumber").value;
    // const convertedPin = parseInt(pinNumber);

    // const totalBalance=document.getElementById('total-balance').innerText;
    // const convertedTotalBalance=parseFloat(totalBalance);

    // const amount = document.getElementById("txtAmount").value;
    // const convertedAmount = parseFloat(amount);

    const convertedPin = getInputValueById("txtPinNumber");
    const convertedTotalBalance=getInnerTextById("total-balance");
    const convertedAmount=getInputValueById("txtAmount");

        if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
            if(convertedAmount>0)
            {
              const sum= convertedTotalBalance+convertedAmount;

            //   document.getElementById('total-balance').innerText=sum;
              setInnerTextByIdandValue('total-balance',sum);

              const historyContainer=document.getElementById('transaction-container')
              const p=document.createElement("p");
              p.innerText=`
               added ${sum} from ${convertedAmount} account number.
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