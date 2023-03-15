document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getInputFieldValueById('deposit-amount');
    const depositTotal = getTextElementValueById('deposit-total');
    const newDepositAmount = depositAmount + depositTotal;
    setTextElementValueById('deposit-total', newDepositAmount);

    const balanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = balanceTotal + depositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})