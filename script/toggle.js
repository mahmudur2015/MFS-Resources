
document.getElementById('div-add-money').addEventListener('click',function(event){

    document.getElementById('addmoney').style.display="block";
    document.getElementById('cashout').style.display="none";

})

document.getElementById('div-cash-out').addEventListener('click',function(event){
    document.getElementById('cashout').style.display="block";
    document.getElementById('addmoney').style.display="none";
    
})