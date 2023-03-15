document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getInputFieldValueById('withdraw-amount');
    const withdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = withdrawAmount + withdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const balanceTotal = getTextElementValueById('balance-total');
    const balanceRemain = balanceTotal - withdrawAmount;
    setTextElementValueById('balance-total', balanceRemain);
})