




//toggling section
document.getElementById('addmoney').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById("addmoney").style.backgroundColor = "#0874f20d";
    document.getElementById("addmoney").style.border = "2px solid #0874f2";
    document.getElementById("cashout").style.backgroundColor = "#ffffff";
    document.getElementById("cashout").style.border = "1px solid #0808081a";
    document.getElementById("transfer").style.backgroundColor = "#ffffff";
    document.getElementById("transfer").style.border = "1px solid #0808081a";
    document.getElementById("bonus").style.backgroundColor = "#ffffff";
    document.getElementById("bonus").style.border = "1px solid #0808081a";
    document.getElementById("paybill").style.backgroundColor = "#ffffff";
    document.getElementById("paybill").style.border = "1px solid #0808081a";
    document.getElementById("transactions").style.backgroundColor = "#ffffff";
    document.getElementById("transactions").style.border = "1px solid #0808081a";
   

})

document.getElementById('cashout').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById("addmoney").style.backgroundColor = "#ffffff";
    document.getElementById("addmoney").style.border = "1px solid #0808081a";
    document.getElementById("cashout").style.backgroundColor = "#0874f20d";
    document.getElementById("cashout").style.border = "2px solid #0874f2";
    document.getElementById("transfer").style.backgroundColor = "#ffffff";
    document.getElementById("transfer").style.border = "1px solid #0808081a";
    document.getElementById("bonus").style.backgroundColor = "#ffffff";
    document.getElementById("bonus").style.border = "1px solid #0808081a";
    document.getElementById("paybill").style.backgroundColor = "#ffffff";
    document.getElementById("paybill").style.border = "1px solid #0808081a";
    document.getElementById("transactions").style.backgroundColor = "#ffffff";
    document.getElementById("transactions").style.border = "1px solid #0808081a";
})

document.getElementById('transfer').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'block';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById("addmoney").style.backgroundColor = "#ffffff";
    document.getElementById("addmoney").style.border = "1px solid #0808081a";
    document.getElementById("cashout").style.backgroundColor = "#ffffff";
    document.getElementById("cashout").style.border = "1px solid #0808081a";
    document.getElementById("transfer").style.backgroundColor = "#0874f20d";
    document.getElementById("transfer").style.border = "2px solid #0874f2";
    document.getElementById("bonus").style.backgroundColor = "#ffffff";
    document.getElementById("bonus").style.border = "1px solid #0808081a";
    document.getElementById("paybill").style.backgroundColor = "#ffffff";
    document.getElementById("paybill").style.border = "1px solid #0808081a";
    document.getElementById("transactions").style.backgroundColor = "#ffffff";
    document.getElementById("transactions").style.border = "1px solid #0808081a";
})

document.getElementById('bonus').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'block';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById("addmoney").style.backgroundColor = "#ffffff";
    document.getElementById("addmoney").style.border = "1px solid #0808081a";
    document.getElementById("cashout").style.backgroundColor = "#ffffff";
    document.getElementById("cashout").style.border = "1px solid #0808081a";
    document.getElementById("transfer").style.backgroundColor = "#ffffff";
    document.getElementById("transfer").style.border = "1px solid #0808081a";
    document.getElementById("bonus").style.backgroundColor = "#0874f20d";
    document.getElementById("bonus").style.border = "2px solid #0874f2";
    document.getElementById("paybill").style.backgroundColor = "#ffffff";
    document.getElementById("paybill").style.border = "1px solid #0808081a";
    document.getElementById("transactions").style.backgroundColor = "#ffffff";
    document.getElementById("transactions").style.border = "1px solid #0808081a";
})

document.getElementById('paybill').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'block';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById("addmoney").style.backgroundColor = "#ffffff";
    document.getElementById("addmoney").style.border = "1px solid #0808081a";
    document.getElementById("cashout").style.backgroundColor = "#ffffff";
    document.getElementById("cashout").style.border = "1px solid #0808081a";
    document.getElementById("transfer").style.backgroundColor = "#ffffff";
    document.getElementById("transfer").style.border = "1px solid #0808081a";
    document.getElementById("bonus").style.backgroundColor = "#ffffff";
    document.getElementById("bonus").style.border = "1px solid #0808081a";
    document.getElementById("paybill").style.backgroundColor = "#0874f20d";
    document.getElementById("paybill").style.border = "2px solid #0874f2";
    document.getElementById("transactions").style.backgroundColor = "#ffffff";
    document.getElementById("transactions").style.border = "1px solid #0808081a";
})

document.getElementById('transactions').addEventListener('click', function(){
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'block';

    document.getElementById("addmoney").style.backgroundColor = "#ffffff";
    document.getElementById("addmoney").style.border = "1px solid #0808081a";
    document.getElementById("cashout").style.backgroundColor = "#ffffff";
    document.getElementById("cashout").style.border = "1px solid #0808081a";
    document.getElementById("transfer").style.backgroundColor = "#ffffff";
    document.getElementById("transfer").style.border = "1px solid #0808081a";
    document.getElementById("bonus").style.backgroundColor = "#ffffff";
    document.getElementById("bonus").style.border = "1px solid #0808081a";
    document.getElementById("paybill").style.backgroundColor = "#ffffff";
    document.getElementById("paybill").style.border = "1px solid #0808081a";
    document.getElementById("transactions").style.backgroundColor = "#0874f20d";
    document.getElementById("transactions").style.border = "2px solid #0874f2";
})





//Add money section
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const bank = document.getElementById('bank-name').value;
    const accountNum = document.getElementById('Account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pinNum = document.getElementById('pin-num').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    //Chacking information
    // 👉 ব্যাংক চেক
    const validBanks = ["BRAC Bank",
        "Jamuna Bank",
        "Prime Bank",
        "City Bank",
        "Dutch-Bangla Bank (DBBL)"];
    if (!validBanks.includes(bank)) {
        alert('Select a listed bank');
        return;
    }

    // 👉 ব্যাংক একাউন্ট চেক
    if (accountNum.length !== 11 || isNaN(accountNum)) {
        alert('Enter your 11 digit account number')
        return;
    }

    // 👉 Pin চেক
    const correctPin = "1234"
    if (pinNum !== correctPin) {
        alert('Invalid Pin');
        return;
    }

    const newBalance = availableBalance + amount;
    document.getElementById('available-balance').innerText = newBalance;

})


//Cashout Section 
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const bank = document.getElementById('agent-number').value;
    const amount = parseInt(document.getElementById('withdrow-amount').value,10);
    const pinNum = document.getElementById('pin-num1').value;

    // 👉 ব্যাংক একাউন্ট চেক
    if (bank.length !== 11 || isNaN(bank)){
        alert('Enter your 11 digit account number');
        return;
    }

    // 👉 Pin চেক
    const correctPin = "1234"
    if (pinNum !== correctPin) {
        alert('Invalid Pin');
        return;
    }

    if (availableBalance < amount){
        alert('You do not have enough balance.')
        return;
    }
    else {
        const newBalance = availableBalance - amount;
        document.getElementById('available-balance').innerText = newBalance;
    }

    console.log(bank, amount, pinNum);

})


//Transfer Money Section
document.getElementById('transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const bank = document.getElementById('transfer-account-number').value;
    const amount = parseInt(document.getElementById('transfer-amount').value,10);
    const pinNum = document.getElementById('pin-num2').value;

    // 👉 ব্যাংক একাউন্ট চেক
    if (bank.length !== 11 || isNaN(bank)){
        alert('Enter your 11 digit account number');
        return;
    }

    // 👉 Pin চেক
    const correctPin = "1234"
    if (pinNum !== correctPin) {
        alert('Invalid Pin');
        return;
    }

    if (availableBalance < amount){
        alert('You do not have enough balance.')
        return;
    }
    else {
        const newBalance = availableBalance - amount;
        document.getElementById('available-balance').innerText = newBalance;
    }

    console.log(bank, amount, pinNum);

})

//Get Bonus Section
document.getElementById('get-bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const coupon = document.getElementById('bonus-coupon').value;
    const num1 = 10;
    if (coupon.length !== 11 || isNaN(coupon)){
        alert('Enter Your Right Coupon Number')
    }

    else {
        const newBalance = availableBalance + num1;
        document.getElementById('available-balance').innerText = newBalance;
    }
    
});


//Pay Bill Section
document.getElementById('pay-now-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const bank = document.getElementById('pay-bank').value;
    const accountNum = document.getElementById('pay-ccount-number').value;
    const amount = parseInt(document.getElementById('add-pay-amount').value, 10);
    const pinNum = document.getElementById('pin-num4').value;

    //Chacking information
    // 👉 ব্যাংক চেক
    const validBanks = ["BRAC Bank",
        "Jamuna Bank",
        "Prime Bank",
        "City Bank",
        "Dutch-Bangla Bank (DBBL)"];
    if (!validBanks.includes(bank)) {
        alert('Select a listed bank');
        return;
    }

    // 👉 ব্যাংক একাউন্ট চেক
    if (accountNum.length !== 11 || isNaN(accountNum)) {
        alert('Enter your 11 digit account number')
        return;
    }

    // 👉 Pin চেক
    const correctPin = "1234"
    if (pinNum !== correctPin) {
        alert('Invalid Pin');
        return;
    }

    if (availableBalance < amount){
        alert('You do not have enough balance.')
        return;
    }
    else {
        const newBalance = availableBalance - amount;
        document.getElementById('available-balance').innerText = newBalance;
    }

})





