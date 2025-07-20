document.getElementById('cash-out-enable').addEventListener('click', function() {
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');

})

document.getElementById('add-money-enable').addEventListener('click', function() {
    document.getElementById('cashOutForm').classList.add('hidden');
    document.getElementById('addMoneyForm').classList.remove('hidden');

})

document.getElementById('add-money-button').addEventListener('click', function(event) {
    const addMoney = document.getElementById('amountAdd').value
    const pin = document.getElementById('pin').value

    if(pin === '123') {
        const prevBal = document.getElementById('balance').innerText;

        const newBal = parseInt(prevBal) + parseInt(addMoney);
        document.getElementById('balance').innerText = newBal;
        // document.getElementById('add-money-button').setAttribute('disabled', true)
    }
    else {
        alert('Wrong Pin!!')
    }
})

// Cashout
document.getElementById('cash-out-button').addEventListener('click', function(event) {
    const outMoney = document.getElementById('amountOut').value
    const pin = document.getElementById('pin2').value

    if(pin === '123') {
        const prevBal = document.getElementById('balance').innerText;
        if(parseInt(prevBal) >= parseInt(outMoney)) {
            const newBal = parseInt(prevBal) - parseInt(outMoney);
            document.getElementById('balance').innerText = newBal;
        }
        else{
            alert('OOPS!! Insufficient Balance!!')
        } 
    
    }
    else {
        alert('Wrong Pin!!')
    }
})