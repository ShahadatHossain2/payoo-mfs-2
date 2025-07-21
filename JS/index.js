function toggle(add_id, rmv_id) {
    document.getElementById(add_id).classList.add('hidden');
    document.getElementById(rmv_id).classList.remove('hidden');
}

document.getElementById('cash-out-enable').addEventListener('click', function () {
    toggle('addMoneyForm', 'cashOutForm')
});

document.getElementById('add-money-enable').addEventListener('click', function () {
    toggle('cashOutForm', 'addMoneyForm')
});


document.getElementById('add-money-button').addEventListener('click', function (event) {
    const addMoney = getInputValue('amountAdd')
    const pin = getInputValue('pin')
    setNewBalance(pin, addMoney, '+')

})

document.getElementById('cash-out-button').addEventListener('click', function (event) {
    const outMoney = getInputValue('amountOut')
    const pin = getInputValue('pin2')
    setNewBalance(pin, outMoney, '-')
})

function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

function setNewBalance(pinx, amount, opr) {
        if (pinx === '123' && opr === '-') {
        const prevBal = document.getElementById('balance').innerText;
        if (parseInt(prevBal) >= parseInt(amount)) {
            const newBal = parseInt(prevBal) - parseInt(amount);
            document.getElementById('balance').innerText = newBal;
        }
        else {
            alert('OOPS!! Insufficient Balance!!')
        }

    }

    else if (pinx === '123' && opr === '+') {
        const prevBal = document.getElementById('balance').innerText;

        const newBal = parseInt(prevBal) + parseInt(amount);
        document.getElementById('balance').innerText = newBal;
    }
    
    else {
        alert('Wrong Pin!!')
    }
}